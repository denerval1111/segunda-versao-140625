import React from 'react';


export default function BlogPage() {
  return (
    <>
     
      <main className="min-h-screen py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cinza-escuro">
              Blog Desafio Vitalidade
            </h1>
            <p className="text-xl text-cinza-medio max-w-3xl mx-auto">
              Artigos, dicas e informações sobre longevidade saudável e bem-estar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Artigos serão adicionados posteriormente */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">Título do Artigo</h2>
                <p className="text-cinza-medio mb-4">Breve descrição do artigo que será adicionado posteriormente.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-cinza-claro">Data da publicação</span>
                  <a href="#" className="text-verde-vitalidade font-medium">Ler mais</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">Título do Artigo</h2>
                <p className="text-cinza-medio mb-4">Breve descrição do artigo que será adicionado posteriormente.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-cinza-claro">Data da publicação</span>
                  <a href="#" className="text-verde-vitalidade font-medium">Ler mais</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">Título do Artigo</h2>
                <p className="text-cinza-medio mb-4">Breve descrição do artigo que será adicionado posteriormente.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-cinza-claro">Data da publicação</span>
                  <a href="#" className="text-verde-vitalidade font-medium">Ler mais</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-verde-vitalidade text-white px-6 py-3 rounded-md font-medium hover:bg-verde-vitalidade-dark transition-colors">
              Carregar mais artigos
            </button>
          </div>
        </div>
      </main>
     
    </>
  );
}
