"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { FaSearch, FaClock, FaUser, FaTag } from 'react-icons/fa';

// Interface para tipagem dos posts
interface Post {
  id: string;
  title: string;
  excerpt?: string;
  description?: string;
  date: string;
  category: string;
  author?: string;
  tags?: string[];
  readTime?: string;
}

interface BlogClientProps {
  posts: Post[];
  categories: string[];
}

const BlogClient: React.FC<BlogClientProps> = ({ posts, categories }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Função para calcular tempo de leitura
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min`;
  };

  // Função para formatar data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Função para obter cores por categoria
  const getCategoryColors = (category: string) => {
    const colors = {
      'Medicina Regenerativa': { bg: '#10b981', text: '#ffffff' },
      'Nutrologia': { bg: '#3b82f6', text: '#ffffff' },
      'Saúde Mental': { bg: '#8b5cf6', text: '#ffffff' },
      'default': { bg: '#6b7280', text: '#ffffff' }
    };
    return colors[category as keyof typeof colors] || colors.default;
  };

  // Posts filtrados
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          (post.description && post.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  // Preparar categorias para filtro
  const allCategories = ['Todos', ...categories];

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <div style={{ 
        backgroundColor: '#ffffff', 
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '32px 16px',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: '#111827', 
            marginBottom: '16px',
            margin: '0 0 16px 0'
          }}>
            Blog Desafio Vitalidade
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#6b7280', 
            maxWidth: '768px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Artigos científicos sobre longevidade saudável, medicina regenerativa, nutrologia e saúde mental para transformar sua vida.
          </p>
        </div>
      </div>

      {/* Filtros e Busca */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
        <div style={{ 
          backgroundColor: '#ffffff', 
          borderRadius: '12px', 
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb',
          padding: '24px',
          marginBottom: '32px'
        }}>
          {/* Barra de Busca */}
          <div style={{ position: 'relative', marginBottom: '24px' }}>
            <div style={{ 
              position: 'absolute', 
              left: '16px', 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: '#9ca3af'
            }}>
              <FaSearch />
            </div>
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                paddingLeft: '48px',
                paddingRight: '16px',
                paddingTop: '12px',
                paddingBottom: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                transition: 'all 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#10b981';
                e.target.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#d1d5db';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          {/* Filtros de Categoria */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  backgroundColor: selectedCategory === category ? '#10b981' : '#f3f4f6',
                  color: selectedCategory === category ? '#ffffff' : '#374151',
                  boxShadow: selectedCategory === category ? '0 2px 4px rgba(16, 185, 129, 0.2)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.backgroundColor = '#e5e7eb';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Posts */}
        {filteredPosts.length > 0 ? (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '32px' 
          }}>
            {filteredPosts.map((post) => {
              const categoryColors = getCategoryColors(post.category);
              return (
                <article
                  key={post.id}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e5e7eb',
                    overflow: 'hidden',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Header do Card com Gradiente */}
                  <div style={{ 
                    height: '120px', 
                    background: `linear-gradient(135deg, ${categoryColors.bg} 0%, ${categoryColors.bg}dd 100%)`,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '16px'
                  }}>
                    <span style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      color: '#374151',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      {post.category}
                    </span>
                  </div>

                  {/* Conteúdo do Card */}
                  <div style={{ padding: '24px' }}>
                    <h2 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 'bold', 
                      color: '#111827', 
                      marginBottom: '12px',
                      lineHeight: '1.4',
                      margin: '0 0 12px 0'
                    }}>
                      {post.title}
                    </h2>
                    
                    <p style={{ 
                      color: '#6b7280', 
                      marginBottom: '16px',
                      lineHeight: '1.6',
                      margin: '0 0 16px 0'
                    }}>
                      {post.excerpt || post.description || 'Descubra insights valiosos sobre longevidade saudável e bem-estar.'}
                    </p>

                    {/* Metadados */}
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      fontSize: '14px', 
                      color: '#6b7280', 
                      marginBottom: '16px',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <FaClock />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <FaUser />
                          <span>{post.author || 'Dr. Denerval'}</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <FaClock />
                        <span>{post.readTime || calculateReadTime(post.excerpt || post.description || '')}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '8px', 
                        marginBottom: '16px' 
                      }}>
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '4px 8px',
                              backgroundColor: '#f3f4f6',
                              color: '#6b7280',
                              fontSize: '12px',
                              borderRadius: '20px'
                            }}
                          >
                            <FaTag style={{ fontSize: '10px' }} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Link para o artigo */}
                    <Link
                      href={`/blog/${post.id}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        color: '#10b981',
                        fontWeight: '500',
                        textDecoration: 'none',
                        transition: 'color 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#059669';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#10b981';
                      }}
                    >
                      Ler artigo completo
                      <svg 
                        style={{ 
                          marginLeft: '8px', 
                          width: '16px', 
                          height: '16px',
                          transition: 'transform 0.2s'
                        }} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <div style={{ color: '#9ca3af', marginBottom: '16px' }}>
              <FaSearch style={{ fontSize: '48px', margin: '0 auto' }} />
            </div>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500', 
              color: '#6b7280', 
              marginBottom: '8px',
              margin: '0 0 8px 0'
            }}>
              Nenhum artigo encontrado
            </h3>
            <p style={{ color: '#6b7280', margin: '0' }}>
              Tente ajustar os filtros ou termo de busca.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div style={{ 
          marginTop: '64px', 
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          borderRadius: '12px', 
          padding: '32px', 
          textAlign: 'center', 
          color: '#ffffff' 
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '16px',
            margin: '0 0 16px 0'
          }}>
            Transforme sua Saúde e Vitalidade
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            marginBottom: '24px', 
            opacity: 0.9,
            margin: '0 0 24px 0'
          }}>
            Junte-se ao Desafio Vitalidade e descubra como viver com mais energia, saúde e longevidade.
          </p>
          <Link
            href="/inscricao"
            style={{
              display: 'inline-block',
              backgroundColor: '#ffffff',
              color: '#10b981',
              padding: '12px 32px',
              borderRadius: '8px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f9fafb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
            }}
          >
            Saiba mais sobre o Desafio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogClient;

















