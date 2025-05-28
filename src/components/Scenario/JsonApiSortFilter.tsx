// components/Api/JsonApiSortFilter.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

interface Post {
  id: number;
  title: string;
  userId: number;
  username?: string;
  viewCount?: number;
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

const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Select = styled.select`
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const Button = styled.button`
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #f9f9f9;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px 12px;
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
  padding-right: 8px; /* ✅ 공통적으로 오른쪽 여백 추가 */
`;

const Header = styled(ListItem)`
  font-weight: bold;
  background: #f9f9f9;
`;

const JsonApiSortFilter: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filterUser, setFilterUser] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"title" | "views">("title");
  const [asc, setAsc] = useState(true);

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
        username: usersMap[p.userId],
        viewCount: Math.floor(Math.random() * 1000)
      }));

      setPosts(enriched);
    };

    fetchData();
  }, []);

  const sortedPosts = [...posts]
    .filter((p) => !filterUser || p.username === filterUser)
    .sort((a, b) => {
      const key = sortBy === "title" ? "title" : "viewCount";
      if (!a[key] || !b[key]) return 0;
      return asc ? (a[key]! > b[key]! ? 1 : -1) : a[key]! < b[key]! ? 1 : -1;
    });

  const uniqueUsers = Array.from(new Set(posts.map((p) => p.username)));

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <h3>📊 게시판 정렬 및 필터 기능</h3>
      <p>
        해당 표는 클릭시에 진행되지 않습니다. 아래의 텍스트 창을 클릭해주세요.
      </p>
      <Controls>
        <Select onChange={(e) => setFilterUser(e.target.value || null)}>
          <option value="">전체 사용자</option>
          {uniqueUsers.map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </Select>
        <Button
          onClick={() => {
            setSortBy("title");
            setAsc(!asc);
          }}
        >
          제목 정렬 {sortBy === "title" && (asc ? "▲" : "▼")}
        </Button>
        <Button
          onClick={() => {
            setSortBy("views");
            setAsc(!asc);
          }}
        >
          조회수 정렬 {sortBy === "views" && (asc ? "▲" : "▼")}
        </Button>
      </Controls>

      <List>
        <Header>
          <Cell width="40px">ID</Cell>
          <Cell width="60%">게시글 제목</Cell>
          <Cell width="20%">작성자</Cell>
          <Cell width="50px">조회수</Cell>
        </Header>
        {sortedPosts.slice(0, 20).map((post) => (
          <ListItem key={post.id}>
            <Cell width="40px">{post.id}</Cell>
            <Cell width="60%">{post.title}</Cell>
            <Cell width="20%">{post.username}</Cell>
            <Cell width="50px">{post.viewCount}</Cell>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default JsonApiSortFilter;
