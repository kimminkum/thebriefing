import React from 'react';
import { useSearchStore } from '../../stores/useSearchStore';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Qa() {
  const { search, setSearch } = useSearchStore();

  const fetchComments = async (postId: string) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

    return res.data;
  };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['comments', search],
    queryFn: () => fetchComments(search),
    enabled: false,
  });

  const handleSubmit = () => {
    if (!search.trim()) return;
    refetch();
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>
        검색
      </button>

      <div style={{ marginTop: '1rem' }}>
        {isLoading && <p>Loding...</p>}
        {isError && <p>에러 발생: {(error as Error).message}</p>}
        {data && data.length > 0 ? (
          <ul>
            {data.map((item: { id: number; name: string; email: string; body: string }) => (
              <li key={item.id}>
                <strong>{item.name}</strong> ({item.email}): {item.body}
              </li>
            ))}
          </ul>
        ) : (
          data && <p>Nothing...</p>
        )}
      </div>
    </div>
  );
}
