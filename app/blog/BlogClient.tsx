'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  tags?: string[];
}

interface BlogClientProps {
  posts: Post[];
}

// Cores por categoria
const categoryColors = {
  'Medicina Regenerativa': '#10b981',
  'Nutrologia': '#f59e0b', 
  'Saúde Mental': '#3b82f6',
  'Gerenciamento de Peso': '#8b5cf6'
};

// Gradientes por categoria
const categoryGradients = {
  'Medicina Regenerativa': 'linear-gradient(135deg, #10b981, #059669)',
  'Nutrologia': 'linear-gradient(135deg, #f59e0b, #d97706)',
  'Saúde Mental': 'linear-gradient(135deg, #3b82f6, #2563eb)',
  'Gerenciamento de Peso': 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
};

export default function BlogClient({ posts }: BlogClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Posts fallback caso não carregue dos arquivos
  const fallbackPosts: Post[] = [
    {
      id: 'gerenciamento-peso-saudavel',
      title: 'Gerenciamento do Peso Saudável: Estratégias Científicas para Longevidade',
      description: 'Descubra como o controle de peso baseado em evidências científicas pode transformar sua saúde e promover longevidade.',
      date: '2024-06-14',
      category: 'Gerenciamento de Peso',
      author: 'Dr. Denerval',
      readTime: '7 min de leitura',
      tags: ['controle de peso', 'metabolismo', 'nutrologia']
    },
    {
      id: 'dieta-mediterranea-asiatica',
      title: 'Dieta Mediterrânea e Asiática: Fusão Nutricional para Longevidade',
      description: 'Explore como a combinação das tradições culinárias mediterrânea e asiática pode revolucionar sua saúde.',
      date: '2024-06-13',
      category: 'Nutrologia',
      author: 'Dr. Denerval',
      readTime: '8 min de leitura',
      tags: ['dieta mediterrânea', 'culinária asiática', 'longevidade']
    },
    {
      id: 'autofagia-renovacao-celular',
      title: 'Autofagia: O Segredo da Renovação Celular para uma Vida Mais Longa',
      description: 'Entenda como o processo natural de autofagia pode ser otimizado através de estratégias simples e baseadas em evidências.',
      date: '2024-06-12',
      category: 'Medicina Regenerativa',
      author: 'Dr. Denerval',
      readTime: '6 min de leitura',
      tags: ['autofagia', 'renovação celular', 'medicina regenerativa']
    },
    {
      id: 'ansiedade-estresse-longevidade',
      title: 'Ansiedade e Estresse: Como Impactam a Longevidade e Estratégias de Controle',
      description: 'Descubra a relação entre saúde mental e longevidade, e aprenda técnicas científicas para gerenciar ansiedade e estresse.',
      date: '2024-06-11',
      category: 'Saúde Mental',
      author: 'Dr. Denerval',
      readTime: '9 min de leitura',
      tags: ['ansiedade', 'estresse', 'saúde mental', 'longevidade']
    }
  ];

  // Usar posts recebidos ou fallback
  const activePosts = posts && posts.length > 0 ? posts : fallbackPosts;

  // Extrair categorias únicas
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(activePosts.map(post => post.category)));
    return ['Todos', ...uniqueCategories];
  }, [activePosts]);

  // Filtrar posts
  const filteredPosts = useMemo(() => {
    return activePosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [activePosts, searchTerm, selectedCategory]);

  return (
    <div>
      {/* Filtros */}
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '12px',
        marginBottom: '3rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e5e7eb'
      }}>
        {/* Busca */}
        <div style={{ marginBottom: '2rem' }}>
          <input
            type="text"
            placeholder="Buscar artigos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1.5rem',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '1rem',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#3b82f6'}
            onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = '#e5e7eb'}
          />
        </div>

        {/* Filtros de Categoria */}
        <div>
          <p style={{
            fontSize: '1rem',
            fontWeight: '600',
            color: '#374151',
            marginBottom: '1rem'
          }}>
            Filtrar por categoria:
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backgroundColor: selectedCategory === category ? '#3b82f6' : '#f3f4f6',
                  color: selectedCategory === category ? 'white' : '#374151'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    (e.target as HTMLButtonElement).style.backgroundColor = '#e5e7eb';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    (e.target as HTMLButtonElement).style.backgroundColor = '#f3f4f6';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid de Posts */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem'
      }}>
        {filteredPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <article style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease',
              border: '1px solid #e5e7eb',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }} className="post-card">
              {/* Imagem/Placeholder com gradiente da categoria */}
              <div style={{
                height: '200px',
                background: categoryGradients[post.category] || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
                padding: '1rem'
              }}>
                {post.category}
              </div>

              {/* Conteúdo */}
              <div style={{
                padding: '2rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Categoria */}
                <div style={{
                  display: 'inline-block',
                  backgroundColor: `${categoryColors[post.category] || '#6b7280'}15`,
                  color: categoryColors[post.category] || '#6b7280',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '1rem',
                  alignSelf: 'flex-start'
                }}>
                  {post.category}
                </div>

                {/* Título */}
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '1rem',
                  lineHeight: '1.4',
                  flex: 1
                }}>
                  {post.title}
                </h2>

                {/* Descrição */}
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  fontSize: '1rem'
                }}>
                  {post.description}
                </p>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} style={{
                        backgroundColor: '#f3f4f6',
                        color: '#6b7280',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Metadados */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.875rem',
                  color: '#9ca3af',
                  marginTop: 'auto'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span>📅 {new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    <span>👨‍⚕️ {post.author}</span>
                  </div>
                  <span>⏱️ {post.readTime}</span>
                </div>

                {/* Botão Ler Mais */}
                <div style={{ marginTop: '1.5rem' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: categoryColors[post.category] || '#3b82f6',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }}>
                    Ler artigo completo →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Mensagem quando não há posts */}
      {filteredPosts.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#374151',
            marginBottom: '1rem'
          }}>
            Nenhum artigo encontrado
          </h3>
          <p style={{
            color: '#6b7280',
            fontSize: '1rem'
          }}>
            Tente ajustar os filtros ou termo de busca para encontrar o conteúdo desejado.
          </p>
        </div>
      )}

      <style jsx>{`
        .post-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1) !important;
        }
      `}</style>
    </div>
  );
}































