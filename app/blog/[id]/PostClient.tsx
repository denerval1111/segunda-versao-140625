"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  FaCalendarAlt, 
  FaUser, 
  FaClock, 
  FaArrowLeft, 
  FaShare, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin,
  FaWhatsapp,
  FaBookmark,
  FaBookOpen,
  FaArrowRight
} from 'react-icons/fa';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  contentHtml: string;
  date: string;
  author: string;
  category: string;
  image?: string;
  readTime?: string;
  tags?: string[];
}

interface PostClientProps {
  post: Post;
  relatedPosts: Post[];
}

export default function PostClient({ post, relatedPosts }: PostClientProps) {
  const router = useRouter();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Calcular progresso de leitura
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `${post.title} - ${post.excerpt}`;

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`
    };
    
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 z-50 transition-all duration-300"
        style={{ width: `${readingProgress}%` }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 mb-8 text-white/80 hover:text-white transition-colors"
          >
            <FaArrowLeft />
            Voltar ao blog
          </button>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <FaUser className="text-emerald-300" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-emerald-300" />
              <span>{formatDate(post.date)}</span>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-2">
                <FaClock className="text-emerald-300" />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Actions */}
        <div className="flex flex-wrap justify-between items-center mb-8 p-4 bg-white rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isBookmarked 
                  ? 'bg-emerald-100 text-emerald-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <FaBookmark />
              {isBookmarked ? 'Salvo' : 'Salvar'}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-600 mr-2">Compartilhar:</span>
            <button
              onClick={() => handleShare('facebook')}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              title="Compartilhar no Facebook"
            >
              <FaFacebook />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="p-2 text-sky-500 hover:bg-sky-50 rounded-lg transition-colors"
              title="Compartilhar no Twitter"
            >
              <FaTwitter />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="p-2 text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
              title="Compartilhar no LinkedIn"
            >
              <FaLinkedin />
            </button>
            <button
              onClick={() => handleShare('whatsapp')}
              className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              title="Compartilhar no WhatsApp"
            >
              <FaWhatsapp />
            </button>
          </div>
        </div>

        {/* Article Content */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Featured Image */}
          {post.image && (
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-8 md:p-12">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-800 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50 prose-blockquote:p-4 prose-blockquote:rounded-lg"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <FaBookOpen className="text-emerald-600 text-xl" />
              <h2 className="text-2xl font-bold text-gray-800">Artigos Relacionados</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative h-40 bg-gradient-to-br from-emerald-400 to-teal-500">
                      {relatedPost.image ? (
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-white text-3xl opacity-50">📄</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{formatDate(relatedPost.date)}</span>
                        <div className="flex items-center gap-1 text-emerald-600 group-hover:gap-2 transition-all">
                          <span>Ler mais</span>
                          <FaArrowRight className="text-xs" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="mt-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Gostou do conteúdo?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Transforme sua vida com o programa completo do Desafio Vitalidade
          </p>
          <Link 
            href="/inscricao"
            className="inline-block bg-white text-emerald-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            Participar do Desafio
          </Link>
        </section>
      </div>

      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .prose h2 {
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .prose h3 {
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
          font-weight: 600;
        }
        
        .prose p {
          margin-bottom: 1rem;
          line-height: 1.75;
        }
        
        .prose ul, .prose ol {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }
        
        .prose li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}

