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

  return <PostClient post={post} relatedPosts={relatedPosts} />;
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}











