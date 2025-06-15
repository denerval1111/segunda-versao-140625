'use client';

import React from 'react';
import Link from 'next/link';

// Cores por categoria
const categoryColors = {
  'Medicina Regenerativa': '#10b981',
  'Nutrologia': '#f59e0b', 
  'Saúde Mental': '#3b82f6',
  'Gerenciamento de Peso': '#8b5cf6'
};

// Gradientes por categoria
const categoryGradients = {
  'Medicina Regenerativa': 'linear-gradient(rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8))',
  'Nutrologia': 'linear-gradient(rgba(245, 158, 11, 0.8), rgba(217, 119, 6, 0.8))',
  'Saúde Mental': 'linear-gradient(rgba(59, 130, 246, 0.8), rgba(37, 99, 235, 0.8))',
  'Gerenciamento de Peso': 'linear-gradient(rgba(139, 92, 246, 0.8), rgba(124, 58, 237, 0.8))'
};

interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  tags?: string[];
  contentHtml: string;
}

interface PostClientProps {
  post: Post;
  relatedPosts: Post[];
}

export default function PostClient({ post, relatedPosts }: PostClientProps) {
  const categoryColor = categoryColors[post.category] || '#6b7280';
  const categoryGradient = categoryGradients[post.category] || 'linear-gradient(rgba(107, 114, 128, 0.8), rgba(75, 85, 99, 0.8))';

  return (
    <article style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Breadcrumb */}
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/blog" style={{
          color: '#6b7280',
          textDecoration: 'none',
          fontSize: '0.9rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'color 0.3s ease'
        }} className="breadcrumb-link">
          ← Voltar ao Blog
        </Link>
      </nav>

      {/* Hero Section */}
      <div style={{
        backgroundImage: `${categoryGradient}, url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&auto=format&fit=crop)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '4rem 2rem',
        borderRadius: '12px',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        {/* Categoria */}
        <div style={{
          display: 'inline-block',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.9rem',
          fontWeight: '500',
          marginBottom: '1rem',
          backdropFilter: 'blur(10px)'
        }}>
          {post.category}
        </div>

        {/* Título */}
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 'bold',
          marginBottom: '1rem',
          lineHeight: '1.2'
        }}>
          {post.title}
        </h1>

        {/* Descrição */}
        <p style={{
          fontSize: '1.25rem',
          maxWidth: '800px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6',
          opacity: 0.95
        }}>
          {post.description}
        </p>

        {/* Metadados */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          fontSize: '0.9rem',
          opacity: 0.9
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            📅 {new Date(post.date).toLocaleDateString('pt-BR')}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            👨‍⚕️ {post.author}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            ⏱️ {post.readTime}
          </div>
        </div>
      </div>

      {/* Conteúdo do Post */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '3rem',
        marginBottom: '4rem'
      }}>
        {/* Conteúdo Principal */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '3rem',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          border: '1px solid #f3f4f6'
        }}>
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {post.tags.map((tag, index) => (
                  <span key={index} style={{
                    backgroundColor: `${categoryColor}15`,
                    color: categoryColor,
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Conteúdo Markdown */}
          <div 
            style={{
              lineHeight: '1.8',
              color: '#374151',
              fontSize: '1.1rem'
            }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </div>

      {/* Posts Relacionados */}
      {relatedPosts.length > 0 && (
        <section style={{
          backgroundColor: '#f9fafb',
          padding: '3rem 2rem',
          borderRadius: '12px',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Artigos Relacionados
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} style={{
                textDecoration: 'none',
                color: 'inherit'
              }}>
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease',
                  border: '1px solid #e5e7eb'
                }} className="hover-card">
                  {/* Placeholder da imagem com gradiente da categoria */}
                  <div style={{
                    height: '200px',
                    background: categoryGradients[relatedPost.category] || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}>
                    {relatedPost.category}
                  </div>

                  <div style={{ padding: '1.5rem' }}>
                    {/* Categoria */}
                    <div style={{
                      color: categoryColors[relatedPost.category] || '#6b7280',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.5rem'
                    }}>
                      {relatedPost.category}
                    </div>

                    {/* Título */}
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: '#1f2937',
                      marginBottom: '0.75rem',
                      lineHeight: '1.4'
                    }}>
                      {relatedPost.title}
                    </h3>

                    {/* Descrição */}
                    <p style={{
                      color: '#6b7280',
                      fontSize: '0.9rem',
                      lineHeight: '1.5',
                      marginBottom: '1rem'
                    }}>
                      {relatedPost.description}
                    </p>

                    {/* Metadados */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.8rem',
                      color: '#9ca3af'
                    }}>
                      <span>{new Date(relatedPost.date).toLocaleDateString('pt-BR')}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Call to Action */}
      <div style={{
        backgroundColor: 'white',
        padding: '3rem 2rem',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e5e7eb'
      }}>
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: '600',
          color: '#1f2937',
          marginBottom: '1rem'
        }}>
          Gostou do conteúdo?
        </h2>
        <p style={{
          color: '#6b7280',
          fontSize: '1.1rem',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto'
        }}>
          Transforme sua saúde com nosso programa científico de 30 dias. Acesse protocolos personalizados baseados nos 4 pilares da longevidade.
        </p>
        <Link href="/inscricao" style={{
          display: 'inline-block',
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '1.1rem',
          transition: 'all 0.3s ease'
        }} className="cta-button">
          Participe do Desafio Vitalidade →
        </Link>
      </div>

      <style jsx>{`
        .breadcrumb-link:hover {
          color: ${categoryColor} !important;
        }

        .hover-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1) !important;
        }

        .cta-button:hover {
          background-color: #1d4ed8 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(37, 99, 235, 0.3);
        }

        .prose h2 {
          color: ${categoryColor};
          font-size: 1.5rem;
          font-weight: 600;
          margin: 2rem 0 1rem 0;
        }

        .prose h3 {
          color: #374151;
          font-size: 1.25rem;
          font-weight: 600;
          margin: 1.5rem 0 0.75rem 0;
        }

        .prose p {
          margin-bottom: 1.5rem;
        }

        .prose ul, .prose ol {
          margin: 1.5rem 0;
          padding-left: 2rem;
        }

        .prose li {
          margin-bottom: 0.5rem;
        }

        .prose blockquote {
          border-left: 4px solid ${categoryColor};
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #6b7280;
        }

        @media (max-width: 768px) {
          .prose {
            font-size: 1rem;
          }
        }
      `}</style>
    </article>
  );
}



