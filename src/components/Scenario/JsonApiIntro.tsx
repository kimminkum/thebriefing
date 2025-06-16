import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SkeletonTable } from "./SkeletonTable";

import {
  Container,
  Title,
  Controls,
  Input,
  Select,
  List,
  ListItem,
  Cell,
  Header
} from "../../styles/StyledApiTable";

interface Post {
  id: number;
  title: string;
  userId: number;
  username: string;
}

// API 호출 로직
const fetchPosts = async (): Promise<Post[]> => {
  const [postsRes, usersRes] = await Promise.all([
    axios.get("https://jsonplaceholder.typicode.com/posts"),
    axios.get("https://jsonplaceholder.typicode.com/users")
  ]);

  const userMap: Record<number, string> = {};
  usersRes.data.forEach((u: any) => {
    userMap[u.id] = u.username;
  });

  // 최초 100개만, 사용자명 매핑
  return postsRes.data.slice(0, 100).map((post: Post) => ({
    ...post,
    username: userMap[post.userId]
  }));
};

export default function JsonApiIntro() {
  // React Query
  const {
    data: posts = [],
    isLoading,
    isError,
    error
  } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,
    retry: 1
  });

  // 필터·정렬 상태
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // 필터링 + 정렬 적용된 배열
  const displayed = useMemo(() => {
    let arr = posts;

    // 1) 제목 검색 필터
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      arr = arr.filter((p) => p.title.toLowerCase().includes(q));
    }

    // 2) ID 기준 정렬
    arr = [...arr].sort((a, b) =>
      sortOrder === "asc" ? a.id - b.id : b.id - a.id
    );

    return arr;
  }, [posts, search, sortOrder]);

  // 로딩·에러 처리
  if (isLoading) {
    return (
      <Container onClick={(e) => e.stopPropagation()}>
        {/* 로딩 중에는 SkeletonTable 보여주기 */}
        <Title className="font-20">게시글 목록 로딩 중</Title>
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

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <Title className="font-20">📡 게시글 목록</Title>

      {/* 1) 검색 + 정렬 컨트롤 */}
      <Controls>
        <label className="font-16">
          제목 검색:
          <Input
            type="text"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            placeholder="키워드 입력"
          />
        </label>
        <label className="font-16">
          ID 정렬:
          <Select
            value={sortOrder}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSortOrder(e.target.value as "asc" | "desc")
            }
          >
            <option value="asc">오름차순</option>
            <option value="desc">내림차순</option>
          </Select>
        </label>
      </Controls>

      {/* 2) 리스트 렌더링 */}
      <List>
        <Header>
          <Cell width="60px">ID</Cell>
          <Cell grow ellipsis>
            제목
          </Cell>
          <Cell width="100px">작성자</Cell>
        </Header>

        {displayed.map((post) => (
          <ListItem key={post.id}>
            <Cell width="60px">{post.id}</Cell>
            <Cell grow ellipsis>
              {post.title}
            </Cell>
            <Cell width="100px" isAuthor ellipsis>
              {post.username}
            </Cell>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
