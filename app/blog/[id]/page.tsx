import { notFound } from 'next/navigation';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import PostClient from './PostClient';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  
  if (!postData) {
    return {
      title: 'Post não encontrado | Desafio Vitalidade',
    };
  }

  return {
    title: `${postData.title} | Desafio Vitalidade`,
    description: postData.excerpt || 'Artigo do blog Desafio Vitalidade',
    keywords: postData.tags ? postData.tags.join(', ') : '',
    openGraph: {
      title: postData.title,
      description: postData.excerpt || 'Artigo do blog Desafio Vitalidade',
      type: 'article',
      publishedTime: postData.date,
      authors: [postData.author],
      tags: postData.tags,
    },
  };
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  
  if (!postData) {
    notFound();
  }

  // Obter posts relacionados (mesma categoria)
  const allPosts = getSortedPostsData();
  const relatedPosts = allPosts
    .filter(post => post.category === postData.category && post.id !== postData.id)
    .slice(0, 3);

  return (
    <PostClient 
      post={postData} 
      relatedPosts={relatedPosts}
    />
  );
}

