import React, { useEffect, useState } from "react";
import axios from "axios";
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
          <Cell grow ellipsis>
            게시글 제목
          </Cell>
          <Cell width="50px">작성자</Cell>
        </Header>

        {posts.slice(0, 10).map((post) => (
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

export default JsonApiIntro;
