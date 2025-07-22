// src/components/Scenario/InfiniteScrollPage.tsx
import React from 'react';
import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInfiniteScrollStore } from '../../stores/useInfi';
import {
  Container,
  Title,
  Controls,
  Select,
  List,
  ListItem,
  Cell,
  Header,
  ActionButton,
} from '../../styles/StyledApiTable';
import ObserverTrigger from './observerTrigger';

const fetchPosts = async ({ pageParam = 1 }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`,
  );
  return {
    posts: res.data,
    nextPage: pageParam + 1,
    isLast: res.data.length < 10,
  };
};

export default function InfiniteScrollPage() {
  const { deletePost, resetDeleted, sortOrder, toggleSortOrder } = useInfiniteScrollStore();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ['posts-infinite'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage) => (lastPage.isLast ? undefined : lastPage.nextPage),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 5,
  });

  const allPosts = data?.pages.flatMap((page) => page.posts) || [];

  const sortedPosts = [...allPosts].sort((a, b) =>
    sortOrder === 'asc' ? a.id - b.id : b.id - a.id,
  );

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <Title>📄 무한스크롤 게시글 목록</Title>

      <Controls>
        <ActionButton onClick={resetDeleted} style={{ marginBottom: 0 }}>
          삭제 초기화
        </ActionButton>
        <Select
          value={sortOrder}
          onChange={(e) => {
            if (e.target.value !== sortOrder) toggleSortOrder();
          }}
        >
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </Select>
      </Controls>

      <List>
        <Header>
          <Cell width="40px">ID</Cell>
          <Cell grow ellipsis>
            제목
          </Cell>
          <Cell width="100px">삭제</Cell>
        </Header>

        {sortedPosts.map((post) => (
          <ListItem key={post.id}>
            <Cell width="40px" style={{ textAlign: 'center' }}>
              {post.id}
            </Cell>
            <Cell grow ellipsis>
              {post.title}
            </Cell>
            <Cell width="100px">
              <ActionButton onClick={() => deletePost(post.id)}>삭제</ActionButton>
            </Cell>
          </ListItem>
        ))}

        {isFetchingNextPage &&
          Array.from({ length: 3 }).map((_, i) => (
            <ListItem key={`skeleton-${i}`}>
              <Cell width="40px" style={{ background: '#eee', height: '1rem' }} />
              <Cell grow style={{ background: '#eee', height: '1rem' }} />
              <Cell width="100px" style={{ background: '#eee', height: '1rem' }} />
            </ListItem>
          ))}
      </List>

      <ObserverTrigger onIntersect={fetchNextPage} enabled={!!hasNextPage} />

      {!hasNextPage && (
        <p style={{ textAlign: 'center', marginTop: '1rem', color: '#999' }}>
          더 이상 데이터가 없습니다.
        </p>
      )}

      {status === 'error' && (
        <p style={{ color: '#d9534f', marginTop: '1rem' }}>❌ 데이터를 불러오지 못했습니다.</p>
      )}
    </Container>
  );
}
