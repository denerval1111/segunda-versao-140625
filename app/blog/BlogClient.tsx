'use client';

import React, { useState, useMemo } from 'react';
import { FaSearch, FaCalendar, FaUser, FaClock, FaTag, FaArrowRight } from 'react-icons/fa';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  tags: string[];
}

interface BlogClientProps {
  posts: Post[];
}

const BlogClient: React.FC<BlogClientProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Posts integrados com as 4 categorias dos Pilares
  const fallbackPosts: Post[] = [
    {
      slug: 'ansiedade-estresse-moderno',
      title: 'Ansiedade e Estresse Moderno: Estratégias Científicas para o Bem-Estar Mental',
      excerpt: 'Descubra técnicas baseadas em evidências para gerenciar ansiedade e estresse no mundo moderno, promovendo saúde mental e longevidade.',
      date: '2024-06-13',
      author: 'Dr. Denerval',
      category: 'Saúde Mental',
      image: '/images/blog/ansiedade-estresse.jpg',
      readTime: '6 min de leitura',
      tags: ['ansiedade', 'estresse', 'saúde mental', 'bem-estar', 'mindfulness', 'respiração']
    },
    {
      slug: 'autofagia-renovacao-celular',
      title: 'Autofagia: O Segredo da Renovação Celular para uma Vida Mais Longa',
      excerpt: 'Entenda como o processo natural de autofagia pode ser otimizado através de estratégias simples e baseadas em ciência para promover a regeneração celular e retardar o envelhecimento.',
      date: '2024-06-13',
      author: 'Dr. Denerval',
      category: 'Medicina Regenerativa',
      image: '/images/blog/autofagia-celular.jpg',
      readTime: '6 min de leitura',
      tags: ['autofagia', 'regeneração celular', 'longevidade', 'jejum intermitente', 'anti-aging', 'saúde celular']
    },
    {
      slug: 'dieta-mediterranea-asiatica',
      title: 'Dieta Mediterrânea e Asiática: Fusão Nutricional para Longevidade',
      excerpt: 'Explore como a combinação das tradições culinárias mediterrânea e asiática pode revolucionar sua saúde, oferecendo benefícios únicos para longevidade e vitalidade.',
      date: '2024-06-14',
      author: 'Dr. Denerval',
      category: 'Nutrologia',
      image: '/images/blog/dieta-mediterranea-asiatica.jpg',
      readTime: '8 min de leitura',
      tags: ['dieta mediterrânea', 'culinária asiática', 'longevidade', 'antioxidantes', 'ômega-3', 'anti-inflamatório']
    },
    {
      slug: 'gerenciamento-peso-saudavel',
      title: 'Gerenciamento do Peso Saudável: Estratégias Científicas para Longevidade',
      excerpt: 'Descubra como o controle de peso baseado em evidências científicas pode transformar sua saúde e promover longevidade através de estratégias nutricionais e metabólicas inteligentes.',
      date: '2024-06-15',
      author: 'Dr. Denerval',
      category: 'Gerenciamento de Peso',
      image: '/images/blog/gerenciamento-peso.jpg',
      readTime: '7 min de leitura',
      tags: ['controle de peso', 'metabolismo', 'nutrologia', 'longevidade', 'composição corporal', 'saúde metabólica']
    }
  ];

  // Usar posts recebidos se existirem e tiverem dados válidos, senão usar fallback
  const activePosts = (posts && posts.length > 0) ? posts : fallbackPosts;

  // Extrair categorias únicas - sempre incluir as 4 categorias dos Pilares
  const pilarCategories = ['Medicina Regenerativa', 'Nutrologia', 'Saúde Mental', 'Gerenciamento de Peso'];
  const postCategories = Array.from(new Set(activePosts.map(post => post.category)));
  const allCategories = Array.from(new Set([...pilarCategories, ...postCategories]));
  const categories = ['Todos', ...allCategories];

  // Filtrar posts
  const filteredPosts = useMemo(() => {
    return activePosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [activePosts, searchTerm, selectedCategory]);

  // Função para obter cor da categoria
  const getCategoryColor = (category: string) => {
    const colors = {
      'Medicina Regenerativa': 'linear-gradient(135deg, #10b981, #059669)',
      'Nutrologia': 'linear-gradient(135deg, #f59e0b, #d97706)',
      'Saúde Mental': 'linear-gradient(135deg, #3b82f6, #2563eb)',
      'Gerenciamento de Peso': 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    };
    return colors[category as keyof typeof colors] || 'linear-gradient(135deg, #6b7280, #4b5563)';
  };

  // Função para obter placeholder da imagem
  const getImagePlaceholder = (category: string) => {
    const gradients = {
      'Medicina Regenerativa': 'linear-gradient(135deg, #10b981, #059669)',
      'Nutrologia': 'linear-gradient(135deg, #f59e0b, #d97706)',
      'Saúde Mental': 'linear-gradient(135deg, #3b82f6, #2563eb)',
      'Gerenciamento de Peso': 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    };
    return gradients[category as keyof typeof gradients] || 'linear-gradient(135deg, #6b7280, #4b5563)';
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f0f9ff 100%)',
      padding: '2rem 0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #10b981, #3b82f6)',
          borderRadius: '20px',
          padding: '3rem 2rem',
          marginBottom: '3rem',
          color: 'white',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '800',
            marginBottom: '1rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Blog Desafio Vitalidade
          </h1>
          <p style={{
            fontSize: '1.25rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Transforme sua saúde com conteúdo científico sobre longevidade, medicina regenerativa e bem-estar integral
          </p>
        </div>

        {/* Controles de Busca e Filtro */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '2rem',
          marginBottom: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          border: '1px solid #e5e7eb'
        }}>
          
          {/* Busca */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ position: 'relative' }}>
              <FaSearch style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#6b7280',
                fontSize: '1.1rem'
              }} />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1rem 1rem 1rem 3rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#10b981'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
          </div>

          {/* Filtros de Categoria */}
          <div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#374151'
            }}>
              Filtrar por categoria:
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '25px',
                    border: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    background: selectedCategory === category 
                      ? 'linear-gradient(135deg, #10b981, #059669)'
                      : '#f9fafb',
                    color: selectedCategory === category ? 'white' : '#374151',
                    boxShadow: selectedCategory === category 
                      ? '0 4px 12px rgba(16, 185, 129, 0.3)'
                      : '0 2px 4px rgba(0,0,0,0.05)',
                    transform: selectedCategory === category ? 'translateY(-1px)' : 'none'
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
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
              }}
            >
              
              {/* Imagem Placeholder */}
              <div style={{
                height: '200px',
                background: getImagePlaceholder(post.category),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: '600',
                textAlign: 'center',
                padding: '1rem'
              }}>
                {post.category}
              </div>

              {/* Conteúdo */}
              <div style={{ padding: '1.5rem' }}>
                
                {/* Categoria Badge */}
                <div style={{
                  display: 'inline-block',
                  background: getCategoryColor(post.category),
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {post.category}
                </div>

                {/* Título */}
                <h2 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  marginBottom: '0.75rem',
                  color: '#1f2937',
                  lineHeight: '1.4',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  marginBottom: '1rem',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {post.excerpt}
                </p>

                {/* Metadados */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1rem',
                  fontSize: '0.85rem',
                  color: '#6b7280'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaCalendar />
                    <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaUser />
                    <span>{post.author}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaClock />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        background: '#f3f4f6',
                        color: '#6b7280',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}
                    >
                      <FaTag style={{ fontSize: '0.7rem' }} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link para o artigo */}
                <a
                  href={`/blog/${post.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(4px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Ler artigo completo
                  <FaArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Mensagem quando não há posts */}
        {filteredPosts.length === 0 && (
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '3rem',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
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
            <p style={{ color: '#6b7280' }}>
              Tente ajustar os filtros ou termos de busca para encontrar o conteúdo desejado.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div style={{
          background: 'linear-gradient(135deg, #1f2937, #111827)',
          borderRadius: '20px',
          padding: '3rem 2rem',
          textAlign: 'center',
          color: 'white',
          marginTop: '3rem'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            Pronto para Transformar sua Saúde?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            opacity: 0.9,
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Junte-se ao Desafio Vitalidade e descubra como alcançar longevidade saudável em 30 dias
          </p>
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Participar do Desafio Vitalidade
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogClient;























