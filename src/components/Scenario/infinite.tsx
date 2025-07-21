import React from 'react';
import axios from 'axios';
import PostList from './PostList';
import ObserverTrigger from './observerTrigger';
import { useInfiniteQuery } from '@tanstack/react-query';

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
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ['posts-infinite'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage) => (lastPage.isLast ? undefined : lastPage.nextPage),
    initialPageParam: 1, // ✅ 이 부분 추가
    staleTime: 1000 * 60 * 5,
  });

  const allPosts = data?.pages.flatMap((page) => page.posts) || [];

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto' }}>
      <h2>무한스크롤 게시글</h2>

      {status === 'error' && <p>에러 발생</p>}

      <PostList posts={allPosts} deleteIds={deletedIds} onDelete={deletePost} />

      <ObserverTrigger onIntersect={fetchNextPage} enabled={!!hasNextPage} />

      {isFetchingNextPage && <p>다음 페이지 불러오는 중...</p>}
      {!hasNextPage && <p>더 이상 데이터가 없습니다.</p>}
    </div>
  );
}
