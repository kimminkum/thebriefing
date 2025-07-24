import React from 'react';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface Post {
  id: number;
  title: string;
  body: string;
  likes: number;
}

const deletePostFromServer = async (id: number) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(`Post ${id} 삭제 완료`);
  } catch (error) {
    console.error(`삭제 실패:`, error);
  }
};

interface PostItemProps {
  post: Post;
  onDelete: (id: number) => void;
}

export default function PostItem({ post, onDelete }: PostItemProps) {
  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationFn: async (updatedPost: Post) => {
      await axios.patch(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, {
        likes: updatedPost.likes,
      });
    },
    onMutate: async (updatedPost) => {
      await queryClient.cancelQueries({ queryKey: ['posts'] });

      const previousData = queryClient.getQueryData<any>(['posts']);

      queryClient.setQueryData(['posts'], (oldData: any) => {
        if (!oldData) return oldData;

        return {
          ...oldData,
          pages: oldData.pages.map((page: any) => ({
            ...page,
            posts: page.posts.map((p: Post) =>
              p.id === updatedPost.id ? { ...p, likes: updatedPost.likes } : p,
            ),
          })),
        };
      });

      return { previousData };
    },

    onError: (_err, _vars, context: any) => {
      if (context?.previousData) {
        queryClient.setQueryData(['posts'], context.previousData);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const handleDelete = () => {
    onDelete(post.id); // UI 삭제
    deletePostFromServer(post.id); // 서버 요청 (성공 여부 관계없음)
  };

  const handleLike = () => {
    likeMutation.mutate({ ...post, likes: post.likes + 1 });
  };

  return (
    <>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <button onClick={handleLike}>❤️ {post.likes}</button>
      <button onClick={handleDelete}>삭제</button>
    </>
  );
}
