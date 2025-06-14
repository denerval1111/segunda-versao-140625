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
    
    // Verificação adicional: se post é null ou undefined, redireciona para 404
    if (!post) {
      notFound();
    }
  } catch (error) {
    notFound();
  }

  const allPosts = getSortedPostsData();
  
  const relatedPosts = allPosts
    .filter((p: any) => {
      return p.id !== id && 
             p.category && 
             (post as any).category && 
             p.category === (post as any).category;
    })
    .slice(0, 3);

  // Correção final: type assertion para ambos os props
  return <PostClient post={post as any} relatedPosts={relatedPosts as any} />;
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post: any) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  
  try {
    const post = await getPostData(id);
    
    if (!post) {
      return {
        title: 'Post não encontrado | Blog Desafio Vitalidade',
        description: 'O post solicitado não foi encontrado.',
      };
    }
    
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









