"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { FaTag, FaCalendar, FaClock, FaUser } from 'react-icons/fa';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: string;
}

interface BlogClientProps {
  posts: Post[];
  categories: string[];
}

export default function BlogClient({ posts = [], categories = [] }: BlogClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Função para calcular tempo de leitura
  const calculateReadingTime = (content: string): string => {
    if (!content) return '5 min';
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min`;
  };

  // Função para formatar data
  const formatDate = (dateString: string): string => {
    if (!dateString) return 'Data não disponível';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return 'Data inválida';
    }
  };

  // Filtrar posts
  const filteredPosts = useMemo(() => {
    if (!Array.isArray(posts)) return [];
    
    return posts.filter((post: any) => {
      const matchesSearch = !searchTerm || 
        (post.title && post.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'Todos' || 
        (post.category && post.category === selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  // Se não há posts, mostrar posts de exemplo
  const displayPosts = filteredPosts.length > 0 ? filteredPosts : [
    {
      id: 'pilares-longevidade-saudavel',
      title: 'Os 3 Pilares da Longevidade Saudável',
      excerpt: 'Descubra como a medicina regenerativa, nutrologia e saúde mental trabalham juntas para promover um envelhecimento saudável e com vitalidade.',
      date: '2024-12-14',
      author: 'Dr. Denerval',
      category: 'Medicina Regenerativa',
      tags: ['longevidade', 'medicina regenerativa', 'nutrologia'],
      readingTime: '8 min'
    },
    {
      id: 'autofagia-renovacao-celular',
      title: 'Autofagia: O Segredo da Renovação Celular',
      excerpt: 'Entenda como o processo de autofagia pode ser estimulado naturalmente para promover a renovação celular e combater o envelhecimento.',
      date: '2024-12-13',
      author: 'Dr. Denerval',
      category: 'Medicina Regenerativa',
      tags: ['autofagia', 'renovação celular', 'anti-aging'],
      readingTime: '6 min'
    },
    {
      id: 'dieta-mediterranea-asiatica',
      title: 'Dieta Mediterrânea e Asiática: Segredos da Longevidade',
      excerpt: 'Explore os benefícios das culinárias mediterrânea e asiática para a saúde e longevidade, baseados em evidências científicas.',
      date: '2024-12-12',
      author: 'Dr. Denerval',
      category: 'Nutrologia',
      tags: ['dieta mediterrânea', 'culinária asiática', 'nutrição'],
      readingTime: '7 min'
    },
    {
      id: 'ansiedade-estresse-moderno',
      title: 'Ansiedade e Estresse na Vida Moderna',
      excerpt: 'Estratégias baseadas em evidências para gerenciar a ansiedade e o estresse do mundo moderno, promovendo bem-estar mental.',
      date: '2024-12-11',
      author: 'Dr. Denerval',
      category: 'Saúde Mental',
      tags: ['ansiedade', 'estresse', 'saúde mental'],
      readingTime: '5 min'
    }
  ];

  const displayCategories = categories.length > 0 ? ['Todos', ...categories] : [
    'Todos', 'Medicina Regenerativa', 'Nutrologia', 'Saúde Mental'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
      {/* Header do Blog */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog Desafio Vitalidade
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Artigos científicos sobre longevidade saudável, medicina regenerativa, 
              nutrologia e saúde mental para transformar sua vida.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Barra de Busca e Filtros */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Barra de Busca */}
            <div className="w-full lg:w-1/2">
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-lg"
              />
            </div>

            {/* Filtros de Categoria */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
              {displayCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-green-500 hover:text-green-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post: any) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Placeholder para imagem */}
              <div className="h-48 bg-gradient-to-br from-green-400 via-blue-500 to-teal-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-90 text-gray-800">
                    <FaTag className="mr-1" />
                    {post.category || 'Artigo'}
                  </span>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                  {post.title || 'Título do Artigo'}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt || 'Descrição do artigo não disponível.'}
                </p>

                {/* Metadados */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <FaCalendar className="mr-1" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center">
                      <FaClock className="mr-1" />
                      {post.readingTime || calculateReadingTime(post.excerpt || '')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center text-sm text-gray-500">
                    <FaUser className="mr-1" />
                    {post.author || 'Dr. Denerval'}
                  </span>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Ler artigo completo
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mensagem quando não há posts */}
        {filteredPosts.length === 0 && posts.length > 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum artigo encontrado para os filtros selecionados.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Transforme sua vida com o Desafio Vitalidade
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Junte-se a milhares de pessoas que já descobriram os segredos da longevidade saudável
            </p>
            <Link 
              href="/contato"
              className="inline-flex items-center px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Saiba mais sobre o Desafio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}





