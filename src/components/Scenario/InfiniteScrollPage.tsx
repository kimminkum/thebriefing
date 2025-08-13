// src/components/Scenario/InfiniteScrollPage.tsx
import React, { useMemo, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  useInfiniteQuery,
  type InfiniteData,
  type QueryFunctionContext,
} from '@tanstack/react-query';
import {
  Container,
  Title,
  Controls,
  Select,
  List,
  ListItem,
  Cell,
  Header,
  Input,
} from '../../styles/StyledApiTable';
import ObserverTrigger from './observerTrigger';

// ===== Domain Types =====
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  likes?: number;
}

interface PageData {
  posts: Post[];
  nextPage: number;
  isLast: boolean;
}

// ===== QueryFn (v5 시그니처) =====
// QueryFunctionContext<TQueryKey, TPageParam> 사용
const fetchPosts = async ({
  pageParam = 1,
  signal,
}: QueryFunctionContext<['posts-infinite'], number>): Promise<PageData> => {
  const res: AxiosResponse<Post[]> = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`,
    { signal },
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

  // 제네릭 5개를 명시하여 data.pages의 page 타입을 PageData로 고정
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery<
    PageData, // TQueryFnData (각 페이지에 대한 반환 타입)
    Error, // TError
    InfiniteData<PageData, number>, // TData (hook이 최종 반환하는 타입) - 생략 가능하지만 명시하면 TS가 더 안정적
    ['posts-infinite'], // TQueryKey
    number // TPageParam
  >({
    queryKey: ['posts-infinite'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage) => (lastPage.isLast ? undefined : lastPage.nextPage),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 5,
  });

  // pages -> posts 평탄화 (deps 경고 방지용으로 메모이즈)
  const allPosts: Post[] = useMemo(() => data?.pages.flatMap((page) => page.posts) ?? [], [data]);

  // 검색 + 정렬
  const filteredAndSorted = useMemo(() => {
    const q = search.trim().toLowerCase();

    const filtered = q
      ? allPosts.filter(
          (p) => p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q),
        )
      : allPosts;

    const sorted = [...filtered].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sort === 'asc' ? aVal - bVal : bVal - aVal;
      }
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sort === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
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
        </Header>

        {filteredAndSorted.map((post) => (
          <ListItem key={post.id}>
            <Cell width="40px" style={{ textAlign: 'center' }}>
              {post.id}
            </Cell>
            <Cell grow ellipsis>
              {post.title}
            </Cell>
          </ListItem>
        ))}

        {isFetchingNextPage &&
          Array.from({ length: 3 }).map((_, i) => (
            <ListItem key={`skeleton-${i}`}>
              <Cell width="40px" style={{ background: '#eee', height: '1rem' }} />
              <Cell grow style={{ background: '#eee', height: '1rem' }} />
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
