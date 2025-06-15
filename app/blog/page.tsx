// app/blog/page.tsx
import { getSortedPostsData } from '@/lib/posts';
import BlogClient from './BlogClient';

export default async function BlogPage() {
  const allPostsData = await getSortedPostsData();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section do Blog */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            Blog Desafio Vitalidade
          </h1>
          <p style={{
            fontSize: '1.25rem',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: 0.95
          }}>
            Transforme sua saúde com conteúdo científico sobre os 4 pilares da longevidade
          </p>
        </div>
      </div>

      {/* Conteúdo do Blog */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 1rem'
      }}>
        <BlogClient posts={allPostsData as any} />
      </div>
    </div>
  );
}








