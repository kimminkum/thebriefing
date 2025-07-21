import React from 'react';
import axios from 'axios';
import PostList from './PostList';
import ObserverTrigger from './observerTrigger';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInfiniteScrollStore } from '../../stores/useInfi';

interface InfiniteScrollState {
  deletedIds: number[];
  deletePost: (id: number) => void;
}

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

export default function InfiniteScrollPage({ deletedIds, deletePost }: InfiniteScrollState) {
  const { resetDeleted, sortOrder, toggleSortOrder } = useInfiniteScrollStore();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ['posts-infinite'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage) => (lastPage.isLast ? undefined : lastPage.nextPage),
    initialPageParam: 1, // ✅ 이 부분 추가
    staleTime: 1000 * 60 * 5,
  });

  const allPosts = data?.pages.flatMap((page) => page.posts) || [];

  const sortedPosts = [...allPosts].sort((a, b) =>
    sortOrder === 'asc' ? a.id - b.id : b.id - a.id,
  );

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto' }}>
      <h2>무한스크롤 게시글</h2>

      <button onClick={resetDeleted} style={{ marginBottom: '1rem' }}>
        삭제 초기화
      </button>

      <button onClick={toggleSortOrder} style={{ marginBottom: '1rem' }}>
        정렬: {sortOrder === 'asc' ? '오름차순' : '내림차순'}
      </button>

      {status === 'error' && <p>에러 발생</p>}

      <PostList posts={allPosts} deleteIds={deletedIds} onDelete={deletePost} />

      {isFetchingNextPage &&
        Array.from({ length: 3 }).map((_, i) => (
          <div key={i}>
            <div
              style={{
                border: '1px solid #ccc',
                padding: '1rem',
                marginBottom: '1rem',
                borderRadius: 6,
                backgroundColor: '#f3f3f3',
                animation: 'pulse 1.5s infinite',
              }}
            >
              <div
                style={{
                  width: '80%',
                  height: '20px',
                  backgroundColor: '#ddd',
                  marginBottom: '0.5rem',
                }}
              />
              <div style={{ width: '100%', height: '14px', backgroundColor: '#eee' }} />
            </div>
          </div>
        ))}

      <ObserverTrigger onIntersect={fetchNextPage} enabled={!!hasNextPage} />
      {!hasNextPage && <p>더 이상 데이터가 없습니다.</p>}
    </div>
  );
}
