import React from 'react';
import { useFilterStore } from '../../stores/useFilter';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Filter() {
  const { filter, setFilter, selectedUserId, setSelectedUserId } = useFilterStore();

  const fetchUsers = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    return res.data;
  };

  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5,
  });

  const filteredUsers = users?.filter((user: any) =>
    user.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const handleSelect = (id: number) => {
    setSelectedUserId(id === selectedUserId ? null : id);
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto' }} onClick={(e) => e.stopPropagation()}>
      <h2>사용자 목록 필터링</h2>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="이름으로 검색"
        style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
      />

      {isLoading && <p>로딩 중...</p>}
      {isError && <p style={{ color: 'red' }}>에러 발생: {(error as Error).message}</p>}

      {filteredUsers && filteredUsers.length > 0 ? (
        <ul>
          {filteredUsers.map((user: any) => (
            <li
              key={user.id}
              style={{
                padding: '0.5rem',
                border: '1px solid #ddd',
                marginBottom: '0.5rem',
                backgroundColor: user.id === selectedUserId ? '#f0f0f0' : 'white',
                cursor: 'pointer',
              }}
              onClick={() => handleSelect(user.id)}
            >
              <strong>{user.name}</strong> ({user.email}) – {user.company.name}
            </li>
          ))}
        </ul>
      ) : (
        !isLoading && <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}
