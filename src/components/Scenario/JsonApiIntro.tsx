// components/Api/JsonApiIntro.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

interface Post {
  id: number;
  title: string;
  userId: number;
  username?: string;
}

const Container = styled.div`
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  font-family: Pretendard, sans-serif;
  border: 1px solid #ddd;

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
    font-size: 0.9rem;
    color: #555;
    line-height: 1;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ListItem = styled.li`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  align-items: center;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px 8px;
  }
`;

const Cell = styled.span<{ width?: string }>`
  flex: 1;
  max-width: ${({ width }) => width || "auto"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Header = styled(ListItem)`
  font-weight: bold;
  background: #f9f9f9;
`;

const JsonApiIntro: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [postsRes, usersRes] = await Promise.all([
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/users")
      ]);

      const usersMap: Record<number, string> = {};
      usersRes.data.forEach((u: any) => {
        usersMap[u.id] = u.username;
      });

      const enriched = postsRes.data.map((p: Post) => ({
        ...p,
        username: usersMap[p.userId]
      }));

      setPosts(enriched);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h3>📌 외부 데이터 출력 예시</h3>
      <p>
        이 데이터는 JSONPlaceholder API에서 가져온 가상의 게시글 목록입니다.
      </p>
      <List>
        <Header>
          <Cell width="40px">ID</Cell>
          <Cell width="75%">게시글 제목</Cell>
          <Cell width="15%">작성자</Cell>
        </Header>
        {posts.slice(0, 10).map((post) => (
          <ListItem key={post.id}>
            <Cell width="40px">{post.id}</Cell>
            <Cell width="75%">{post.title}</Cell>
            <Cell width="15%">{post.username}</Cell>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default JsonApiIntro;
