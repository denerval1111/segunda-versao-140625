import { getSortedPostsData, getAllCategories } from '../../lib/posts';
import BlogClient from './BlogClient';

export const metadata = {
  title: 'Blog | Desafio Vitalidade',
  description: 'Artigos sobre longevidade saudável, medicina regenerativa, nutrologia e saúde mental. Descubra os segredos da vitalidade e do envelhecimento saudável.',
  keywords: 'longevidade, saúde, medicina regenerativa, nutrologia, saúde mental, envelhecimento saudável, vitalidade',
  openGraph: {
    title: 'Blog Desafio Vitalidade',
    description: 'Artigos científicos sobre longevidade saudável e bem-estar.',
    type: 'website',
  },
};

export default function BlogPage() {
  const allPostsData = getSortedPostsData();
  const allCategories = getAllCategories();

  return (
    <BlogClient 
      posts={allPostsData as any} 
      categories={allCategories as any} 
    />
  );
}




