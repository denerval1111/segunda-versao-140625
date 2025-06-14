import { getSortedPostsData, getAllCategories } from '@/lib/posts';
import BlogClient from './BlogClient';

export const metadata = {
  title: 'Blog | Desafio Vitalidade',
  description: 'Artigos, dicas e informações baseadas em ciência para transformar sua saúde e bem-estar. Descubra insights sobre medicina regenerativa, nutrologia e saúde mental.',
  keywords: 'blog, saúde, bem-estar, medicina regenerativa, nutrologia, longevidade, vitalidade',
};

export default async function BlogPage() {
  const allPostsData = getSortedPostsData();
  const allCategories = getAllCategories();
  
  return (
    <BlogClient 
      posts={allPostsData} 
      categories={allCategories} 
    />
  );
}


