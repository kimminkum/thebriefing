// import React from 'react';

// interface PostItemProps {
//   post: { title: string; id: number; body: string };
//   onDelete: (id: number) => void;
// }

// export default function PostItme({ post, onDelete }: PostItemProps) {
//   return (
//     <>
//       <h4>{post.title} </h4>
//       <p>{post.title}</p>
//       <button onClick={() => onDelete(post.id)}></button>
//     </>
//   );
// }

import React from 'react';
import axios from 'axios';

const deletePostFromServer = async (id: number) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(`Post ${id} 삭제 완료`);
  } catch (error) {
    console.error(`삭제 실패:`, error);
  }
};

interface PostItemProps {
  post: { id: number; title: string; body: string };
  onDelete: (id: number) => void;
}

export default function PostItem({ post, onDelete }: PostItemProps) {
  const handleDelete = () => {
    onDelete(post.id); // UI 삭제
    deletePostFromServer(post.id); // 서버 요청 (성공 여부 관계없음)
  };

  return (
    <>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <button onClick={handleDelete}>삭제</button>
    </>
  );
}
