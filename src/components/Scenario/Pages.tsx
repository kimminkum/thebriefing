import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useListStore } from '../../stores/useList';
import axios from 'axios';

export default function Pages() {
  const { pages, nextPage, prevPage } = useListStore();

  const fetchPage = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${pages}&_limit=10`,
    );

    return res.data;
  };

  const {
    data: page = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['page', pages],
    queryFn: fetchPage,
    staleTime: 1000 * 60 * 5, // optional
  });

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <h2>사용자 목록 필터링</h2>

      {isLoading && <p>loding...</p>}
      {isError && <p>Error... {(error as Error).message}</p>}

      {page && page.length > 0 ? (
        <ul>
          {page.map((post: any) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        !isLoading && <p>검색 결과가 없습니다.</p>
      )}
      <div style={{ marginTop: '1rem' }}>
        <button onClick={prevPage} disabled={pages === 1}>
          ⬅ 이전
        </button>
        <button onClick={nextPage} style={{ marginLeft: '1rem' }}>
          다음 ➡
        </button>
      </div>
    </div>
  );
}
