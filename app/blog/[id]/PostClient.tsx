'use client';

import React from 'react';
import Link from 'next/link';

// Definir tipos específicos para categorias
type CategoryType = 'Medicina Regenerativa' | 'Nutrologia' | 'Saúde Mental' | 'Gerenciamento de Peso';

// Interface compatível com os dados reais do sistema
interface Post {
  id: string;
  slug?: string;
  title: any;
  excerpt?: any;
  date: any;
  author: any;
  category: any;
  image?: any;
  readTime: any;
  tags?: any;
  contentHtml?: string; // Opcional para compatibilidade
}

interface PostClientProps {
  post: Post;
  relatedPosts: Post[];
}

// Cores por categoria com tipagem específica
const categoryColors: Record<CategoryType, string> = {
  'Medicina Regenerativa': '#10b981',
  'Nutrologia': '#f59e0b', 
  'Saúde Mental': '#3b82f6',
  'Gerenciamento de Peso': '#8b5cf6'
};

// Gradientes por categoria com tipagem específica
const categoryGradients: Record<CategoryType, string> = {
  'Medicina Regenerativa': 'linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8))',
  'Nutrologia': 'linear-gradient(135deg, rgba(245, 158, 11, 0.8), rgba(217, 119, 6, 0.8))',
  'Saúde Mental': 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(37, 99, 235, 0.8))',
  'Gerenciamento de Peso': 'linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(124, 58, 237, 0.8))'
};

export default function PostClient({ post, relatedPosts }: PostClientProps) {
  // Função helper para obter cor da categoria
  const getCategoryColor = (category: string): string => {
    return categoryColors[category as CategoryType] || '#6b7280';
  };

  // Função helper para obter gradiente da categoria
  const getCategoryGradient = (category: string): string => {
    return categoryGradients[category as CategoryType] || 'linear-gradient(rgba(107, 114, 128, 0.8), rgba(75, 85, 99, 0.8))';
  };

  // Função para formatar data
  const formatDate = (date: any): string => {
    if (!date) return '';
    try {
      return new Date(date).toLocaleDateString('pt-BR');
    } catch {
      return String(date);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <div style={{
        background: getCategoryGradient(post.category),
        color: 'white',
        padding: '4rem 2rem',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: '2rem' }}>
            <Link href="/blog" style={{
              color: 'rgba(255, 255, 255, 0.8)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              ← Voltar ao blog
            </Link>
          </nav>

          {/* Categoria */}
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '1.5rem'
          }}>
            {post.category || 'Artigo'}
          </div>

          {/* Título */}
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 'bold',
            lineHeight: '1.2',
            marginBottom: '1.5rem',
            maxWidth: '900px'
          }}>
            {post.title || 'Título do Artigo'}
          </h1>

          {/* Metadados */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>📅</span>
              <span>{formatDate(post.date)}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>👨‍⚕️</span>
              <span>{post.author || 'Dr. Denerval'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>⏱️</span>
              <span>{post.readTime || '5 min de leitura'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window?.innerWidth > 768 ? '1fr 300px' : '1fr', 
          gap: '3rem' 
        }}>
          {/* Artigo */}
          <article style={{
            backgroundColor: 'white',
            padding: '3rem',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e5e7eb'
          }}>
            {/* Tags */}
            {post.tags && Array.isArray(post.tags) && post.tags.length > 0 && (
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '2rem'
              }}>
                {post.tags.map((tag: any, index: number) => (
                  <span key={index} style={{
                    backgroundColor: `${getCategoryColor(post.category)}15`,
                    color: getCategoryColor(post.category),
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}>
                    #{String(tag)}
                  </span>
                ))}
              </div>
            )}

            {/* Conteúdo do Post */}
            <div style={{
              lineHeight: '1.8',
              fontSize: '1.1rem',
              color: '#374151'
            }}>
              {post.contentHtml ? (
                <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
              ) : (
                <div>
                  {post.excerpt && (
                    <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: '#6b7280' }}>
                      {post.excerpt}
                    </p>
                  )}
                  <p>
                    Este é um artigo sobre {post.category?.toLowerCase() || 'saúde e longevidade'}. 
                    O conteúdo completo será carregado em breve.
                  </p>
                </div>
              )}
            </div>

            {/* Call to Action */}
            <div style={{
              marginTop: '3rem',
              padding: '2rem',
              backgroundColor: '#f9fafb',
              borderRadius: '12px',
              textAlign: 'center',
              border: `2px solid ${getCategoryColor(post.category)}20`
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '1rem'
              }}>
                Transforme sua saúde hoje mesmo!
              </h3>
              <p style={{
                color: '#6b7280',
                marginBottom: '1.5rem',
                fontSize: '1rem'
              }}>
                Descubra como o Desafio Vitalidade pode revolucionar sua longevidade e qualidade de vida.
              </p>
              <Link href="/inscricao" style={{
                display: 'inline-block',
                backgroundColor: getCategoryColor(post.category),
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.3s ease'
              }}>
                Inscreva-se no Desafio Vitalidade →
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside>
            {/* Posts Relacionados */}
            {relatedPosts && relatedPosts.length > 0 && (
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '1.5rem'
                }}>
                  Artigos Relacionados
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} style={{
                      textDecoration: 'none',
                      color: 'inherit'
                    }}>
                      <article style={{
                        padding: '1rem',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        transition: 'all 0.3s ease'
                      }} className="related-post">
                        <div style={{
                          display: 'inline-block',
                          backgroundColor: `${getCategoryColor(relatedPost.category)}15`,
                          color: getCategoryColor(relatedPost.category),
                          padding: '0.25rem 0.5rem',
                          borderRadius: '6px',
                          fontSize: '0.7rem',
                          fontWeight: '600',
                          marginBottom: '0.5rem'
                        }}>
                          {relatedPost.category || 'Artigo'}
                        </div>
                        <h4 style={{
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          color: '#1f2937',
                          lineHeight: '1.4',
                          marginBottom: '0.5rem'
                        }}>
                          {relatedPost.title || 'Título do Artigo'}
                        </h4>
                        <div style={{
                          fontSize: '0.8rem',
                          color: '#6b7280',
                          display: 'flex',
                          gap: '1rem'
                        }}>
                          <span>{formatDate(relatedPost.date)}</span>
                          <span>{relatedPost.readTime || '5 min'}</span>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>

      <style jsx>{`
        .related-post:hover {
          background-color: #f9fafb;
          border-color: ${getCategoryColor(post.category)};
        }
        
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}






