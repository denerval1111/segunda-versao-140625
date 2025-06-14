"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { FaSearch, FaCalendar, FaUser, FaTag, FaClock } from 'react-icons/fa';

export default function BlogClient({ posts = [], categories = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Função para calcular tempo de leitura
  const calculateReadingTime = (content) => {
    if (!content) return '5 min';
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min`;
  };

  // Função para formatar data
  const formatDate = (dateString) => {
    if (!dateString) return 'Data não disponível';
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
    return posts.filter(post => {
      const matchesSearch = !searchTerm || 
        (post.title && post.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'Todos' || 
        (post.category && post.category === selectedCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
      {/* Header do Blog */}
      <div className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blog Desafio Vitalidade
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Artigos científicos sobre longevidade saudável, medicina regenerativa, 
            nutrologia e saúde mental
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Barra de Busca */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Filtros de Categoria */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {['Todos', ...categories].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-green-500 hover:text-green-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Posts */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Placeholder para imagem */}
                <div className="h-48 bg-gradient-to-br from-green-400 via-teal-400 to-blue-400 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <FaTag className="text-3xl mb-2 mx-auto" />
                    <p className="font-semibold">{post.category || 'Artigo'}</p>
                  </div>
                </div>

                <div className="p-6">
                  {/* Categoria */}
                  {post.category && (
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-3">
                      {post.category}
                    </span>
                  )}

                  {/* Título */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {post.title || 'Título não disponível'}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt || 'Descrição não disponível'}
                  </p>

                  {/* Metadados */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    {post.date && (
                      <div className="flex items-center gap-1">
                        <FaCalendar className="text-xs" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                    )}
                    
                    {post.author && (
                      <div className="flex items-center gap-1">
                        <FaUser className="text-xs" />
                        <span>{post.author}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-1">
                      <FaClock className="text-xs" />
                      <span>{calculateReadingTime(post.content)}</span>
                    </div>
                  </div>

                  {/* Link para o post */}
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white font-medium rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300"
                  >
                    Ler artigo completo
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <FaSearch className="text-4xl mx-auto mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Nenhum artigo encontrado
            </h3>
            <p className="text-gray-500">
              Tente ajustar sua busca ou filtros para encontrar o que procura.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Transforme sua vida em 30 dias
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Junte-se ao Desafio Vitalidade e descubra os segredos da longevidade saudável
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            Participar do Desafio
          </button>
        </div>
      </div>
    </div>
  );
}



