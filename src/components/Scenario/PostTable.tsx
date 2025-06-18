// src/components/Scenario/PostTable.tsx
import React, { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Button from "../Button";
import {
  Container,
  Title,
  Controls,
  Input,
  List,
  ListItem,
  Cell,
  Header,
  Select
} from "../../styles/StyledApiTable";
import { SkeletonTable } from "./SkeletonTable";
import { useDebounce } from "../../hooks/useDebounce";
import { useDebouncedCallback } from "../../hooks/useDebouncedCallback";

interface Post {
  id: number;
  title: string;
  userId: number;
  username?: string;
}
export type Mode = "intro" | "delete";

interface Props {
  mode: Mode;
}

export default function PostTable({ mode }: Props) {
  const queryClient = useQueryClient();
  const ROWS_TO_SHOW = 10;
  const [sortKey, setSortKey] = useState<"id" | "title">("id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // 1) 공통: 포스트+유저명 페칭
  const fetchPosts = async (): Promise<Post[]> => {
    // JSONPlaceholder 에는 limit 파라미터가 있으니 여기선 50개만 요청
    const [postsRes, usersRes] = await Promise.all([
      axios.get("https://jsonplaceholder.typicode.com/posts?_limit=50"),
      axios.get("https://jsonplaceholder.typicode.com/users")
    ]);
    const userMap: Record<number, string> = {};
    usersRes.data.forEach((u: any) => (userMap[u.id] = u.username));
    return (postsRes.data as Post[]).map((p) => ({
      ...p,
      username: userMap[p.userId]
    }));
  };

  const {
    data: posts = [],
    isLoading,
    isError
  } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,
    retry: 1
  });

  // Intro 모드: 검색어 디바운스
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const displayed = useMemo(() => {
    if (mode === "intro" && debouncedSearch.trim()) {
      const q = debouncedSearch.trim().toLowerCase();
      return posts.filter((p) => p.title.toLowerCase().includes(q));
    }
    return posts;
  }, [mode, posts, debouncedSearch]);

  // Delete 모드: 낙관적 업데이트 뮤테이션
  const deleteMutation = useMutation({
    mutationFn: (id: number) =>
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`),

    onMutate: async (id: number) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });
      const previous = queryClient.getQueryData<Post[]>(["posts"]);
      queryClient.setQueryData<Post[]>(
        ["posts"],
        (old) => old?.filter((p) => p.id !== id) ?? []
      );
      return { previous };
    },

    onError: (_err, _id, context: any) => {
      if (context?.previous) {
        queryClient.setQueryData(["posts"], context.previous);
      }
    }
  });

  // isLoading 대신 isLoading flag를 사용해야 status 비교 오류가 없습니다.
  const isDeleting = deleteMutation.status === "pending";
  const debouncedDelete = useDebouncedCallback(
    (id: number) => deleteMutation.mutate(id),
    300
  );

  const sorted = useMemo(() => {
    return [...displayed].sort((a, b) => {
      let res: number;
      if (sortKey === "id") {
        res = a.id - b.id;
      } else {
        // title 비교
        res = a.title.localeCompare(b.title);
      }
      return sortOrder === "asc" ? res : -res;
    });
  }, [displayed, sortKey, sortOrder]);

  const visiblePosts = sorted.slice(0, ROWS_TO_SHOW);

  // 로딩/에러 처리
  if (isLoading) {
    return (
      <Container onClick={(e) => e.stopPropagation()}>
        <Title className="font-20">
          {mode === "intro" ? "게시글 목록 로딩 중" : "게시글 삭제 로딩 중"}
        </Title>
        <SkeletonTable rows={5} />
      </Container>
    );
  }
  if (isError) {
    return (
      <Container onClick={(e) => e.stopPropagation()}>
        <p className="font-16" style={{ color: "#d9534f" }}>
          ❌ 데이터를 불러오지 못했습니다.
        </p>
      </Container>
    );
  }

  // 실제 렌더링
  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <Title className="font-20">
        {mode === "intro" ? "📋 게시글 목록 (검색 가능)" : "🗑 게시글 삭제"}
      </Title>

      {mode === "intro" && (
        <Controls>
          <Input
            placeholder="제목으로 검색..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Select
            value={`${sortKey}_${sortOrder}`}
            onChange={(e) => {
              const [key, order] = (e.target.value as string).split("_");
              setSortKey(key as "id" | "title");
              setSortOrder(order as "asc" | "desc");
            }}
          >
            <option value="id_asc">ID ↑</option>
            <option value="id_desc">ID ↓</option>
            <option value="title_asc">제목 ↑</option>
            <option value="title_desc">제목 ↓</option>
          </Select>
        </Controls>
      )}

      <List>
        <Header>
          <Cell width="40px">ID</Cell>
          <Cell grow ellipsis>
            제목
          </Cell>
          <Cell width="100px">{mode === "intro" ? "작성자" : "삭제"}</Cell>
        </Header>

        {visiblePosts.map((post) => (
          <ListItem key={post.id}>
            <Cell width="40px" style={{ textAlign: "center" }}>
              {post.id}
            </Cell>
            <Cell grow ellipsis>
              {post.title}
            </Cell>

            {mode === "intro" ? (
              <Cell width="100px" isAuthor ellipsis>
                {post.username}
              </Cell>
            ) : (
              <Cell width="100px">
                <Button
                  onClick={() => debouncedDelete(post.id)}
                  $variant="primary"
                  disabled={isDeleting}
                >
                  {isDeleting ? "삭제 중…" : "삭제"}
                </Button>
              </Cell>
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
