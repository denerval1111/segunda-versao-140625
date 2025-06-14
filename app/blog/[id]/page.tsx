import { notFound } from 'next/navigation';
import { getPostData, getSortedPostsData } from '../../../lib/posts';
import PostClient from './PostClient';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Post({ params }: PageProps) {
  const { id } = await params;
  
  let post;
  try {
    post = await getPostData(id);
  } catch (error) {
    notFound();
  }

  const allPosts = getSortedPostsData();
  
  // Correção: Verificação segura de propriedades com type assertion
  const relatedPosts = allPosts
    .filter((p: any) => {
      return p.id !== id && 
             p.category && 
             (post as any).category && 
             p.category === (post as any).category;
    })
    .slice(0, 3);

  return <PostClient post={post} relatedPosts={relatedPosts} />;
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  
  try {
    const post = await getPostData(id);
    return {
      title: `${(post as any).title || 'Post'} | Blog Desafio Vitalidade`,
      description: (post as any).excerpt || (post as any).title || 'Artigo do blog Desafio Vitalidade',
      openGraph: {
        title: (post as any).title || 'Post',
        description: (post as any).excerpt || (post as any).title || 'Artigo do blog',
        type: 'article',
      },
    };
  } catch (error) {
    return {
      title: 'Post não encontrado | Blog Desafio Vitalidade',
      description: 'O post solicitado não foi encontrado.',
    };
  }
}





