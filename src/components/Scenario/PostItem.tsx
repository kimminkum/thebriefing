import React from 'react';

interface PostItemProps {
  post: { title: string; id: number; body: string };
  onDelete: (id: number) => void;
}

export default function PostItme({ post, onDelete }: PostItemProps) {
  return (
    <>
      <h4>{post.title} </h4>
      <p>{post.title}</p>
      <button onClick={() => onDelete(post.id)}></button>
    </>
  );
}
