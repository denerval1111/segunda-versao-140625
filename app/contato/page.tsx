import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export default function ContatoPage() {
  return (
    <main className="pt-16 pb-20">
      <section className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-6">Entre em Contato</h1>
          <p className="text-xl text-gray-700">
            Estamos aqui para responder suas dúvidas e ajudá-lo a iniciar sua jornada de transformação.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
            
            <div className="flex items-start mb-6">
              <FaMapMarkerAlt className="text-verde-vitalidade mr-4 w-5 h-5 mt-1" /> {/* Tamanho controlado */}
              <div>
                <h3 className="text-lg font-semibold mb-1">Endereço</h3>
                <p>Av. Paulista, 1000 - Bela Vista, São Paulo - SP</p>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <FaPhone className="text-verde-vitalidade mr-4 w-5 h-5 mt-1" /> {/* Tamanho controlado */}
              <div>
                <h3 className="text-lg font-semibold mb-1">Telefone</h3>
                <p>(11) 9999-9999</p>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <FaEnvelope className="text-verde-vitalidade mr-4 w-5 h-5 mt-1" /> {/* Tamanho controlado */}
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p>contato@desafiovitalidade.com.br</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaClock className="text-verde-vitalidade mr-4 w-5 h-5 mt-1" /> {/* Tamanho controlado */}
              <div>
                <h3 className="text-lg font-semibold mb-1">Horário de Atendimento</h3>
                <p>Segunda a Sexta: 9h às 18h</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde-vitalidade"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde-vitalidade"
                  placeholder="Seu email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde-vitalidade"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
