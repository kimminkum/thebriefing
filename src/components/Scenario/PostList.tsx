import React from 'react';
import PostItme from './PostItem';

interface PostListProps {
  posts: { id: number; title: string; body: string }[];
  deletedIds: number[];
  onDelete: (id: number) => void;
}

export default function PostList({ posts, deletedIds, onDelete }: PostListProps) {
  return (
    <>
      {posts
        .filter((post) => !deletedIds.includes(post.id))
        .map((post) => (
          <PostItme key={post.id} post={post} onDelete={onDelete}></PostItme>
        ))}
    </>
  );
}
