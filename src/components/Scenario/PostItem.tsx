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

interface PostItemProps {
  post: { id: number; title: string; body: string };
  onDelete: (id: number) => void;
}

export default function PostItem({ post, onDelete }: PostItemProps) {
  return (
    <>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <button onClick={() => onDelete(post.id)}>삭제</button>
    </>
  );
}
