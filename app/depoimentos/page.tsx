import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

export default function DepoimentosPage() {
  return (
    <main className="pt-16 pb-20">
      <section className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-6">Depoimentos</h1>
          <p className="text-xl text-gray-700">
            Conheça as histórias de transformação de quem já participou do Desafio Vitalidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Depoimento 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-verde-vitalidade opacity-50 mb-4">
              <FaQuoteLeft className="w-8 h-8" /> {/* Tamanho controlado */}
            </div>
            <p className="mb-6 italic">
              "O Desafio Vitalidade transformou completamente minha relação com a saúde. Em apenas 30 dias, perdi 5kg e ganhei muito mais disposição e energia para o dia a dia."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h3 className="font-bold">Maria Silva</h3>
                <p className="text-sm text-gray-600">52 anos, São Paulo</p>
              </div>
            </div>
          </div>
          
          {/* Depoimento 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-verde-vitalidade opacity-50 mb-4">
              <FaQuoteLeft className="w-8 h-8" /> {/* Tamanho controlado */}
            </div>
            <p className="mb-6 italic">
              "Depois dos 45 anos, comecei a sentir uma queda na minha energia. O programa me ajudou a recuperar minha vitalidade e ainda melhorou significativamente meus exames de sangue."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h3 className="font-bold">Carlos Mendes</h3>
                <p className="text-sm text-gray-600">48 anos, Rio de Janeiro</p>
              </div>
            </div>
          </div>
          
          {/* Depoimento 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-verde-vitalidade opacity-50 mb-4">
              <FaQuoteLeft className="w-8 h-8" /> {/* Tamanho controlado */}
            </div>
            <p className="mb-6 italic">
              "As técnicas de gerenciamento de estresse e os exercícios de respiração mudaram minha vida. Durmo melhor e acordo mais disposta. Recomendo a todos!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h3 className="font-bold">Ana Oliveira</h3>
                <p className="text-sm text-gray-600">56 anos, Belo Horizonte</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
