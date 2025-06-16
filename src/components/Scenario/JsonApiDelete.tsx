// src/components/Scenario/JsonApiDelete.tsx

import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Button from "../Button";
import {
  Container,
  Title,
  List,
  ListItem,
  Cell,
  Header,
  ActionButton
} from "../../styles/StyledApiTable";

interface Post {
  id: number;
  title: string;
  userId: number;
  username?: string;
}

// 1) posts + 사용자명 매핑 함수
const fetchPosts = async (): Promise<Post[]> => {
  const [postsRes, usersRes] = await Promise.all([
    axios.get("https://jsonplaceholder.typicode.com/posts"),
    axios.get("https://jsonplaceholder.typicode.com/users")
  ]);

  const userMap: Record<number, string> = {};
  usersRes.data.forEach((u: any) => {
    userMap[u.id] = u.username;
  });

  return postsRes.data.slice(0, 10).map((post: Post) => ({
    ...post,
    username: userMap[post.userId]
  }));
};

export default function JsonApiDelete() {
  const queryClient = useQueryClient();

  // 2) 목록 조회
  const {
    data: posts,
    isLoading,
    isError,
    error
  } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // 5분 캐시
    retry: 1 // 실패 시 1회 재시도
  });

  // 3) 삭제 뮤테이션
  const deleteMutation = useMutation({
    mutationFn: (id: number) =>
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`),
    onSuccess: () => {
      // 삭제 후 캐시 무효화 → 다시 fetch
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    }
  });

  const { status: deleteStatus } = deleteMutation;

  // 4) 로딩 및 에러 처리
  if (isLoading) {
    return (
      <Container onClick={(e) => e.stopPropagation()}>
        <p className="font-16">⏳ 로딩 중…</p>
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

  // 5) 성공 시 리스트 + 삭제 버튼
  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <Title className="font-20">🗑 게시글 삭제</Title>
      <List>
        <Header>
          <Cell width="40px">ID</Cell>
          <Cell grow ellipsis>
            제목
          </Cell>
          <Cell width="80px">작성자</Cell>
          <Cell width="80px">삭제</Cell>
        </Header>

        {posts?.map((post) => (
          <ListItem key={post.id}>
            <Cell width="40px">{post.id}</Cell>
            <Cell grow ellipsis>
              {post.title}
            </Cell>
            <Cell width="80px" isAuthor ellipsis>
              {post.username}
            </Cell>
            <Cell width="80px">
              <Button
                onClick={() => deleteMutation.mutate(post.id)}
                $variant="primary"
                disabled={deleteStatus === "pending"}
              >
                {deleteStatus === "pending" ? "삭제 중…" : "삭제"}
              </Button>
            </Cell>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
