import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSortStore } from '../../stores/useSort';
import axios from 'axios';

export default function Sort() {
  const { filterling, sortOrder, deletedPostIds, setFilter, toggleSortOrder, deletePost } =
    useSortStore();

  const fetchPost = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');

    return res.data;
  };

  const {
    data: posts = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPost,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  const filteredPost = posts
    .filter((post: any) => post.title.toLowerCase().includes(filterling.trim().toLowerCase()))
    .filter((post: any) => !deletedPostIds.includes(post.id));

  const sortedPosts = [...filteredPost].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <h2>사용자 목록 필터링</h2>

      <input
        value={filterling}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="제목 검색"
      />

      <button onClick={toggleSortOrder}>
        정렬 {sortOrder === 'asc' ? '🔼 오름차순' : '🔽 내림차순'}
      </button>

      {isLoading && <p>loding...</p>}
      {isError && <p>Error... {(error as Error).message}</p>}

      {sortedPosts && sortedPosts.length > 0 ? (
        <ul>
          {sortedPosts.map((post: any) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
              <button onClick={() => deletePost(post.id)}>삭제</button>
            </li>
          ))}
        </ul>
      ) : (
        !isLoading && <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}
