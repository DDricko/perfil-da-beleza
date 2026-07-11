import { Metadata } from 'next';
import SectionTitle from '@/components/shared/SectionTitle';
import PostList from '@/components/blog/PostList';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Perfil da Beleza',
  description: 'Dicas de beleza e estética da Clínica Perfil da Beleza.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        title="Blog"
        subtitle="Dicas de beleza e estética."
        centered={false}
      />
      <PostList posts={posts} />
    </main>
  );
}
