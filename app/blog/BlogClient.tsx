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

// Posts de fallback caso os arquivos não carreguem
const fallbackPosts: Post[] = [
  {
    id: 'pilares-longevidade-saudavel',
    title: 'Os 3 Pilares da Longevidade Saudável: Medicina Regenerativa, Nutrologia e Saúde Mental',
    excerpt: 'Descubra como a medicina regenerativa não intervencionista, a nutrologia baseada em evidências e o cuidado com a saúde mental podem transformar sua jornada rumo à longevidade com vitalidade.',
    date: '2024-06-13',
    category: 'Medicina Regenerativa',
    author: 'Dr. Denerval',
    tags: ['longevidade', 'medicina regenerativa', 'nutrologia', 'saúde mental'],
    readTime: '8 min'
  },
  {
    id: 'autofagia-renovacao-celular',
    title: 'Autofagia: O Segredo da Renovação Celular para uma Vida Mais Longa',
    excerpt: 'Entenda como o processo natural de autofagia pode ser otimizado através de estratégias simples e baseadas em ciência para promover a regeneração celular e retardar o envelhecimento.',
    date: '2024-06-12',
    category: 'Nutrologia',
    author: 'Dr. Denerval',
    tags: ['autofagia', 'regeneração celular', 'anti-aging', 'jejum intermitente'],
    readTime: '6 min'
  },
  {
    id: 'dieta-mediterranea-asiatica',
    title: 'Dieta Mediterrânea e Asiática: A Combinação Perfeita para a Longevidade',
    excerpt: 'Descubra como combinar os benefícios da dieta mediterrânea com a sabedoria milenar da culinária asiática para criar um plano alimentar que promove saúde, vitalidade e longevidade.',
    date: '2024-06-11',
    category: 'Nutrologia',
    author: 'Dr. Denerval',
    tags: ['dieta mediterrânea', 'culinária asiática', 'longevidade', 'nutrição'],
    readTime: '7 min'
  },
  {
    id: 'ansiedade-estresse-moderno',
    title: 'Ansiedade e Estresse Moderno: Estratégias Baseadas em Ciência para o Bem-Estar Mental',
    excerpt: 'Aprenda técnicas comprovadas cientificamente para gerenciar ansiedade, combater o estresse do mundo moderno e cultivar uma mente mais equilibrada e resiliente.',
    date: '2024-06-10',
    category: 'Saúde Mental',
    author: 'Dr. Denerval',
    tags: ['ansiedade', 'estresse', 'bem-estar mental', 'mindfulness'],
    readTime: '9 min'
  }
];

const BlogClientHibrido: React.FC<BlogClientProps> = ({ posts, categories }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Sistema híbrido: usar posts recebidos ou fallback
  const postsToUse = useMemo(() => {
    // Se não há posts ou estão vazios, usar fallback
    if (!posts || posts.length === 0) {
      console.log('🔄 Usando posts de fallback - nenhum post carregado dos arquivos');
      return fallbackPosts;
    }
    
    // Verificar se os posts têm dados válidos
    const validPosts = posts.filter(post => post.title && post.category);
    if (validPosts.length === 0) {
      console.log('🔄 Usando posts de fallback - posts dos arquivos inválidos');
      return fallbackPosts;
    }
    
    console.log('✅ Usando posts dos arquivos .md:', validPosts.length, 'posts');
    return validPosts;
  }, [posts]);

  // Categorias: usar recebidas ou extrair dos posts usados
  const categoriesToUse = useMemo(() => {
    if (!categories || categories.length === 0) {
      const extractedCategories = [...new Set(postsToUse.map(post => post.category))];
      console.log('🔄 Usando categorias extraídas dos posts:', extractedCategories);
      return extractedCategories;
    }
    console.log('✅ Usando categorias recebidas:', categories);
    return categories;
  }, [categories, postsToUse]);

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

  // Função para obter gradiente por categoria
  const getCategoryGradient = (category: string) => {
    const gradients = {
      'Medicina Regenerativa': 'from-green-500 to-emerald-600',
      'Nutrologia': 'from-blue-500 to-cyan-600',
      'Saúde Mental': 'from-purple-500 to-indigo-600',
      'default': 'from-gray-500 to-gray-600'
    };
    return gradients[category as keyof typeof gradients] || gradients.default;
  };

  // Posts filtrados
  const filteredPosts = useMemo(() => {
    return postsToUse.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          (post.description && post.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [postsToUse, searchTerm, selectedCategory]);

  // Preparar categorias para filtro
  const allCategories = ['Todos', ...categoriesToUse];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog Desafio Vitalidade
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Artigos científicos sobre longevidade saudável, medicina regenerativa, nutrologia e saúde mental para transformar sua vida.
            </p>
          </div>
        </div>
      </div>

      {/* Filtros e Busca */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
          {/* Barra de Busca */}
          <div className="relative mb-6">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Filtros de Categoria */}
          <div className="flex flex-wrap gap-2">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Posts */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {/* Header do Card com Gradiente */}
                <div className={`h-32 bg-gradient-to-r ${getCategoryGradient(post.category)} relative`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors duration-200">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt || post.description || 'Descubra insights valiosos sobre longevidade saudável e bem-estar.'}
                  </p>

                  {/* Metadados */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <FaClock className="mr-1" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center">
                        <FaUser className="mr-1" />
                        <span>{post.author || 'Dr. Denerval'}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="mr-1" />
                      <span>{post.readTime || calculateReadTime(post.excerpt || post.description || '')}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          <FaTag className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Link para o artigo */}
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                  >
                    Ler artigo completo
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <FaSearch className="mx-auto text-4xl" />
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">
              Nenhum artigo encontrado
            </h3>
            <p className="text-gray-500">
              Tente ajustar os filtros ou termo de busca.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Transforme sua Saúde e Vitalidade
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Junte-se ao Desafio Vitalidade e descubra como viver com mais energia, saúde e longevidade.
          </p>
          <Link
            href="/inscricao"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Saiba mais sobre o Desafio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogClientHibrido;













