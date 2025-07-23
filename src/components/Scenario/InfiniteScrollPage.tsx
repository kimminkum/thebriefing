// src/components/Scenario/InfiniteScrollPage.tsx
import React, { useMemo, useState } from 'react';
import axios from 'axios';
import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
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
  Input,
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
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState<'id' | 'title'>('id');
  const [sort, setSort] = useState<'asc' | 'desc'>('asc');

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ['posts-infinite'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage) => (lastPage.isLast ? undefined : lastPage.nextPage),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 5,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    },
    onMutate: async (deletedId) => {
      // Step 1: 기존 데이터 취소 및 백업
      await queryClient.cancelQueries({ queryKey: ['posts-infinite'] });

      const previousData = queryClient.getQueryData(['posts-infinite']);

      // Step 2: 낙관적 캐시 업데이트
      queryClient.setQueryData(['posts-infinite'], (oldData: any) => {
        return {
          ...oldData,
          pages: oldData.pages.map((page: any) => ({
            ...page,
            posts: page.posts.filter((post: any) => post.id !== deletedId),
          })),
        };
      });

      return { previousData };
    },
    onError: (err, deletedId, context) => {
      // Step 3: 에러 시 롤백
      if (context?.previousData) {
        queryClient.setQueryData(['posts-infinite'], context.previousData);
      }
    },
    onSettled: () => {
      // Step 4: 성공/실패 상관없이 리패치
      queryClient.invalidateQueries({ queryKey: ['posts-infinite'] });
    },
  });

  const allPosts = data?.pages.flatMap((page) => page.posts) || [];

  const filterandSort = useMemo(() => {
    const filtered = allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase()),
    );

    const sorted = filtered.sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sort === 'asc' ? aValue - bValue : bValue - aValue;
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sort === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      }

      return 0;
    });

    return sorted;
  }, [allPosts, search, sortKey, sort]);

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <Title>📄 무한스크롤 게시글 목록</Title>

      <Controls>
        <Input
          placeholder="제목으로 검색"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        />
        <Select
          value={`${sortKey}_${sort}`}
          onChange={(e) => {
            const [key, order] = e.target.value.split('_');
            setSortKey(key as 'id' | 'title');
            setSort(order as 'asc' | 'desc');
          }}
        >
          <option value="id_asc">ID ↑</option>
          <option value="id_desc">ID ↓</option>
          <option value="title_asc">제목 ↑</option>
          <option value="title_desc">제목 ↓</option>
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

        {filterandSort.map((post) => (
          <ListItem key={post.id}>
            <Cell width="40px" style={{ textAlign: 'center' }}>
              {post.id}
            </Cell>
            <Cell grow ellipsis>
              {post.title}
            </Cell>
            <Cell width="100px">
              <ActionButton onClick={() => mutation.mutate(post.id)}>삭제</ActionButton>
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
