import React from 'react';
import PostItem from './PostItem';

interface Post {
  id: number;
  title: string;
  body: string;
  likes: number;
}

interface PostListProps {
  posts: Post[];
  deleteIds: number[];
  onDelete: (id: number) => void;
}

export default function PropsList({ posts, deleteIds, onDelete }: PostListProps) {
  return (
    <>
      {posts
        .filter((post) => !deleteIds.includes(post.id))
        .map((post) => (
          <PostItem key={post.id} onDelete={onDelete} post={post} />
        ))}
    </>
  );
}
