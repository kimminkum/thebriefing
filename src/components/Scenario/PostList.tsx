// import React from 'react';
// import PostItme from './PostItem';

// interface PostListProps {
//   posts: { id: number; title: string; body: string }[];
//   deletedIds: number[];
//   onDelete: (id: number) => void;
// }

// export default function PostList({ posts, deletedIds, onDelete }: PostListProps) {
//   return (
//     <>
//       {posts
//         .filter((post) => !deletedIds.includes(post.id))
//         .map((post) => (
//           <PostItme key={post.id} post={post} onDelete={onDelete}></PostItme>
//         ))}
//     </>
//   );
// }

import React from 'react';
import PostItem from './PostItem';

interface PostListProps {
  posts: { id: number; title: string; body: string }[];
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
