import Link from 'next/link';
import { Post } from '@/types/post';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex flex-col gap-2 rounded-xl border border-zinc-100 p-5">
      <time className="text-xs text-zinc-400">{post.publishedAt}</time>
      <h3 className="text-lg font-semibold text-[#2C2C2C]">{post.title}</h3>
      <p className="text-sm text-zinc-500">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-auto text-sm font-medium text-[#7B2D8B] hover:underline"
      >
        Ler mais →
      </Link>
    </article>
  );
}
