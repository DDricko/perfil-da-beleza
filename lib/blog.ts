import { Post } from '@/types/post';

export function getAllPosts(): Post[] {
  return [];
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
