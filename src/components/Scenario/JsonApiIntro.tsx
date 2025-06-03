import React, { useState, useMemo } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Button from "../Button";

import {
  Container,
  Title,
  List,
  ListItem,
  Cell,
  Header
} from "../../styles/StyledApiTable";

interface Post {
  id: number;
  title: string;
  userId: number;
  username?: string;
}

// ✅ API 호출 함수는 순수하게 유지
const fetchPosts = async (): Promise<Post[]> => {
  const [postsRes, usersRes] = await Promise.all([
    axios.get("https://jsonplaceholder.typicode.com/posts"),
    axios.get("https://jsonplaceholder.typicode.com/users")
  ]);

  const userMap: Record<number, string> = {};
  usersRes.data.forEach((u: any) => {
    userMap[u.id] = u.username;
  });

  return postsRes.data.map((post: Post) => ({
    ...post,
    username: userMap[post.userId]
  }));
};

const JsonApiQueryExtended: React.FC = () => {
  const [filterUserId, setFilterUserId] = useState<number | null>(null);
  const [isSorted, setIsSorted] = useState(false);

  const { data, isLoading, error } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5
  });

  // ✅ 필터 + 정렬 + slice(0,10)를 메모이제이션
  const filteredData = useMemo(() => {
    if (!data) return [];
    let temp = [...data];
    if (filterUserId) {
      temp = temp.filter((post) => post.userId === filterUserId);
    }
    if (isSorted) {
      temp.sort((a, b) => a.title.localeCompare(b.title));
    }
    return temp.slice(0, 10);
  }, [data, filterUserId, isSorted]);

  const uniqueUserIds = useMemo(() => {
    return Array.from(new Set(data?.map((p) => p.userId) || []));
  }, [data]);

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <Title>📡 React Query + 정렬/필터 예시</Title>
      <p className="font-16" style={{ margin: "1rem 0" }}>
        React Query로 데이터를 가져오고, useMemo로 필터/정렬된 리스트를
        출력합니다.
      </p>
      <p
        className="font-16"
        style={{
          color: "#d9534f",
          marginBottom: "1rem"
        }}
      >
        ⚠️ 이 영역은 데이터 시연용이며, 외부 클릭 제한이 있습니다. <br />
        아래 텍스트창을 클릭하세요.
      </p>

      <div style={{ marginBottom: "1rem" }}>
        <span>작성자 ID 필터: </span>
        <select
          onChange={(e) =>
            setFilterUserId(e.target.value ? Number(e.target.value) : null)
          }
          value={filterUserId ?? ""}
        >
          <option value="">전체</option>
          {uniqueUserIds.map((uid) => (
            <option key={uid} value={uid}>
              User {uid}
            </option>
          ))}
        </select>
      </div>

      <Button onClick={() => setIsSorted((prev) => !prev)} $variant="primary">
        제목순 정렬 {isSorted ? "해제" : "적용"}
      </Button>

      {isLoading && <p>⏳ 로딩 중...</p>}
      {error && <p>❌ 데이터를 불러오지 못했습니다.</p>}

      <List>
        <Header>
          <Cell width="40px">ID</Cell>
          <Cell grow ellipsis>
            제목
          </Cell>
          <Cell width="60px">작성자</Cell>
        </Header>

        {filteredData.map((post) => (
          <ListItem key={post.id}>
            <Cell width="40px">{post.id}</Cell>
            <Cell grow ellipsis>
              {post.title}
            </Cell>
            <Cell width="60px" isAuthor ellipsis>
              {post.username}
            </Cell>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default JsonApiQueryExtended;
