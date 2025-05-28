// components/Api/JsonApiDelete.tsx
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
    margin-bottom: 12px;
  }
  p {
    margin-bottom: 10px;
    font-size: 0.9rem;
    line-height: 1;
    color: #555;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ListItem = styled.li`
  display: flex;
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
  padding-right: 8px; /* ✅ 공통적으로 오른쪽 여백 추가 */
`;

const Header = styled(ListItem)`
  font-weight: bold;
  background: #f9f9f9;
`;

const DeleteButton = styled.button`
  flex: none;
  padding: 4px 8px;
  font-size: 0.8rem;
  background: #fff0f0;
  border: 1px solid #d33;
  color: #d33;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #ffe5e5;
  }
`;

const JsonApiDelete: React.FC = () => {
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

      setPosts(enriched.slice(0, 20)); // 적당한 길이 제한
    };

    fetchData();
  }, []);

  const handleDelete = (id: number) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <h3>🗑️ 게시글 삭제 기능</h3>
      <p style={{ fontSize: "0.85rem", color: "#555" }}>
        이 컴포넌트는 데이터를 삭제하면 화면에서도 즉시 사라지는 로컬 상태 관리
        기능을 보여줍니다.
      </p>
      <List>
        <Header>
          <Cell width="40px">ID</Cell>
          <Cell width="60%">게시글 제목</Cell>
          <Cell width="20%">작성자</Cell>
          <Cell width="50px">삭제</Cell>
        </Header>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <Cell width="40px">{post.id}</Cell>
            <Cell width="60%">{post.title}</Cell>
            <Cell width="20%">{post.username}</Cell>
            <Cell width="50px">
              <DeleteButton onClick={() => handleDelete(post.id)}>
                삭제
              </DeleteButton>
            </Cell>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default JsonApiDelete;
