"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { FaTag, FaCalendar, FaClock, FaUser, FaSearch } from 'react-icons/fa';

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

  // Posts de exemplo integrados (sempre disponíveis)
  const defaultPosts = [
    {
      id: 'pilares-longevidade-saudavel',
      title: 'Os 3 Pilares da Longevidade Saudável: Medicina Regenerativa, Nutrologia e Saúde Mental',
      excerpt: 'Descubra como a medicina regenerativa não intervencionista, a nutrologia baseada em evidências e o cuidado com a saúde mental podem transformar sua jornada rumo à longevidade com vitalidade.',
      date: '2024-06-13',
      author: 'Dr. Denerval',
      category: 'Medicina Regenerativa',
      tags: ['longevidade', 'medicina regenerativa', 'nutrologia', 'saúde mental'],
      readingTime: '1 min'
    },
    {
      id: 'autofagia-renovacao-celular',
      title: 'Autofagia: O Segredo da Renovação Celular para uma Vida Mais Longa',
      excerpt: 'Entenda como o processo natural de autofagia pode ser otimizado através de estratégias simples e baseadas em ciência para promover a regeneração celular e retardar o envelhecimento.',
      date: '2024-06-12',
      author: 'Dr. Denerval',
      category: 'Medicina Regenerativa',
      tags: ['autofagia', 'renovação celular', 'anti-aging'],
      readingTime: '1 min'
    },
    {
      id: 'dieta-mediterranea-asiatica',
      title: 'Dieta Mediterrânea e Asiática: A Combinação Perfeita para a Longevidade',
      excerpt: 'Descubra como combinar os benefícios da dieta mediterrânea com a sabedoria milenar da culinária asiática para criar um plano alimentar que promove saúde, vitalidade e longevidade.',
      date: '2024-06-11',
      author: 'Dr. Denerval',
      category: 'Nutrologia',
      tags: ['dieta mediterrânea', 'culinária asiática', 'nutrição'],
      readingTime: '1 min'
    },
    {
      id: 'ansiedade-estresse-moderno',
      title: 'Ansiedade e Estresse Moderno: Estratégias Baseadas em Ciência para o Bem-Estar Mental',
      excerpt: 'Aprenda técnicas comprovadas cientificamente para gerenciar ansiedade, combater o estresse do mundo moderno e cultivar uma mente mais equilibrada e resiliente.',
      date: '2024-06-10',
      author: 'Dr. Denerval',
      category: 'Saúde Mental',
      tags: ['ansiedade', 'estresse', 'saúde mental'],
      readingTime: '1 min'
    }
  ];

  // Usar posts do arquivo ou posts padrão
  const allPosts = posts.length > 0 ? posts : defaultPosts;

  // Categorias disponíveis
  const allCategories = categories.length > 0 
    ? ['Todos', ...categories] 
    : ['Todos', 'Medicina Regenerativa', 'Nutrologia', 'Saúde Mental'];

  // Função para formatar data
  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return 'Data não disponível';
    }
  };

  // Filtrar posts
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post: any) => {
      const matchesSearch = !searchTerm || 
        (post.title && post.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'Todos' || 
        (post.category && post.category === selectedCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [allPosts, searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
      {/* Header do Blog */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Blog Desafio Vitalidade
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Artigos científicos sobre longevidade saudável, medicina regenerativa, nutrologia e saúde mental para transformar sua vida.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Barra de Busca e Filtros */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Barra de Busca */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-100 focus:border-green-500 outline-none text-lg transition-all duration-200 shadow-sm"
              />
            </div>

            {/* Filtros de Categoria */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg shadow-green-200'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-400 hover:text-green-600 hover:shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {filteredPosts.map((post: any) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2"
            >
              {/* Header do Card com Gradiente */}
              <div className="h-56 bg-gradient-to-br from-green-400 via-blue-500 to-teal-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white bg-opacity-95 text-gray-800 shadow-lg">
                    <FaTag className="mr-2" />
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-2xl font-bold text-white leading-tight group-hover:text-yellow-200 transition-colors duration-300">
                    {post.title}
                  </h2>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 line-clamp-3 text-lg leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Metadados */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-6">
                    <span className="flex items-center">
                      <FaCalendar className="mr-2 text-green-500" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center">
                      <FaClock className="mr-2 text-blue-500" />
                      {post.readingTime}
                    </span>
                  </div>
                </div>

                {/* Footer do Card */}
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-sm text-gray-600 font-medium">
                    <FaUser className="mr-2 text-gray-400" />
                    {post.author}
                  </span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-semibold rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Ler artigo completo
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mensagem quando não há posts */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
              <FaSearch className="h-16 w-16 text-gray-300 mx-auto mb-6" />
              <p className="text-gray-500 text-lg font-medium">
                Nenhum artigo encontrado para os filtros selecionados.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Tente ajustar sua busca ou categoria.
              </p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Transforme sua vida com o Desafio Vitalidade
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Junte-se a milhares de pessoas que já descobriram os segredos da longevidade saudável
            </p>
            <Link
              href="/inscricao"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 text-lg font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Saiba mais sobre o Desafio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}









