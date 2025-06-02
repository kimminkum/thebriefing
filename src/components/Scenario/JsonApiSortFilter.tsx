// components/Scenario/JsonApiSortFilter.tsx
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { JsonDataContext } from "../../context/JsonDataContext";
import Button from "../Button"; // 공통 버튼

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

const JsonApiSortFilter = () => {
  const { posts, setPosts } = useContext(JsonDataContext);
  const [usersMap, setUsersMap] = useState<Record<number, string>>({});

  useEffect(() => {
    const fetchData = async () => {
      const [postsRes, usersRes] = await Promise.all([
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/users")
      ]);
      const userMap: Record<number, string> = {};
      usersRes.data.forEach((u: any) => (userMap[u.id] = u.username));

      const enrichedPosts: Post[] = postsRes.data
        .slice(0, 10)
        .map((post: Post) => ({
          ...post,
          username: userMap[post.userId]
        }));

      setUsersMap(userMap);
      setPosts(enrichedPosts);
    };

    fetchData();
  }, [setPosts]);

  const sortByTitle = () => {
    const sorted = [...posts].sort((a, b) => a.title.localeCompare(b.title));
    setPosts(sorted);
  };

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <Title>🔀 게시글 제목순 정렬</Title>
      <p
        className="font-16"
        style={{
          color: "#d9534f",
          marginBottom: "1rem",
          textAlign: "center"
        }}
      >
        ⚠️ 이 영역은 데이터 시연을 위한 예제이며, 전체 페이지 전환/클릭이
        제한됩니다.
        <br /> 아래의 텍스트 창을 클릭하여 주세요.
      </p>
      <Button onClick={sortByTitle} $variant="primary">
        제목순 정렬
      </Button>
      <List>
        <Header>
          <Cell width="40px">ID</Cell>
          <Cell grow ellipsis>
            제목
          </Cell>
          <Cell width="50px">작성자</Cell>
        </Header>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <Cell width="40px">{post.id}</Cell>
            <Cell grow ellipsis>
              {post.title}
            </Cell>
            <Cell width="50px" isAuthor>
              {post.username}
            </Cell>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default JsonApiSortFilter;
