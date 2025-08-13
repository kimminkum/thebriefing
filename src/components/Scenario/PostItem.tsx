import React from 'react';
import axios from 'axios';
import { useMutation, useQueryClient, type InfiniteData } from '@tanstack/react-query';

// 공통 Post 타입
export interface Post {
  id: number;
  title: string;
  body: string;
  likes: number;
}

// 무한스크롤 페이지 구조
interface PageData {
  posts: Post[];
  nextPage: number;
  isLast: boolean;
}
type InfinitePosts = InfiniteData<PageData, number>;

const deletePostFromServer = async (id: number) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

interface PostItemProps {
  post: Post;
  onDelete: (id: number) => void;

  /**
   * 이 아이템이 속한 쿼리 캐시 키
   * - 일반 리스트: ['posts'] (배열)
   * - 무한스크롤:  ['posts-infinite'] (InfiniteData)
   */
  cacheKey?: readonly unknown[];

  /** 무한스크롤 캐시인지 여부 (기본 false) */
  isInfinite?: boolean;
}

export default function PostItem({
  post,
  onDelete,
  cacheKey = ['posts'],
  isInfinite = false,
}: PostItemProps) {
  const queryClient = useQueryClient();

  // 좋아요(낙관적) — 일반 배열 / 무한스크롤 둘 다 지원
  const likeMutation = useMutation<
    void,
    Error,
    Post,
    { prevInfinite?: InfinitePosts; prevFlat?: Post[] }
  >({
    mutationFn: async (updatedPost: Post) => {
      await axios.patch(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, {
        likes: updatedPost.likes,
      });
    },

    onMutate: async (updatedPost) => {
      await queryClient.cancelQueries({ queryKey: cacheKey });

      // 이전 데이터 백업
      const prevInfinite = isInfinite
        ? queryClient.getQueryData<InfinitePosts>(cacheKey)
        : undefined;

      const prevFlat = !isInfinite ? queryClient.getQueryData<Post[]>(cacheKey) : undefined;

      // 낙관적 업데이트
      if (isInfinite) {
        queryClient.setQueryData<InfinitePosts>(cacheKey, (old) => {
          if (!old) return old; // ← undefined 그대로 반환 (캐스팅 금지)
          return {
            pageParams: [...old.pageParams],
            pages: old.pages.map((page) => ({
              ...page,
              posts: page.posts.map((p) =>
                p.id === updatedPost.id ? { ...p, likes: updatedPost.likes } : p,
              ),
            })),
          };
        });
      } else {
        queryClient.setQueryData<Post[]>(cacheKey, (old) => {
          if (!old) return old; // undefined면 그대로
          return old.map((p) => (p.id === updatedPost.id ? { ...p, likes: updatedPost.likes } : p));
        });
      }

      return { prevInfinite, prevFlat };
    },

    onError: (_err, _vars, ctx) => {
      // 롤백
      if (isInfinite && ctx?.prevInfinite) {
        queryClient.setQueryData(cacheKey, ctx.prevInfinite);
      }
      if (!isInfinite && ctx?.prevFlat) {
        queryClient.setQueryData(cacheKey, ctx.prevFlat);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: cacheKey });
    },
  });

  const handleDelete = () => {
    onDelete(post.id); // UI 제거
    void deletePostFromServer(post.id); // 서버 요청
  };

  const handleLike = () => {
    likeMutation.mutate({ ...post, likes: (post.likes ?? 0) + 1 });
  };

  return (
    <>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <button onClick={handleLike}>❤️ {post.likes ?? 0}</button>
      <button onClick={handleDelete}>삭제</button>
    </>
  );
}
