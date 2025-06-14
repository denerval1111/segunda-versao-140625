import React from 'react';

export default function EquipePage() {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da página */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cinza-escuro mb-4">Nossa Equipe</h1>
          <p className="text-xl text-cinza-medio max-w-3xl mx-auto">
            Conheça os especialistas multidisciplinares por trás do Desafio Vitalidade.
          </p>
        </div>
        
        {/* Introdução */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-verde-vitalidade mb-6">Uma Equipe Multidisciplinar</h2>
            <p className="text-cinza-medio mb-4">
              O Desafio Vitalidade reúne especialistas de diversas áreas da saúde para oferecer uma abordagem verdadeiramente integrada para longevidade e bem-estar.
            </p>
            <p className="text-cinza-medio">
              Nossa equipe é composta por médicos, nutricionistas, psicólogos, educadores físicos e pesquisadores, todos dedicados a trazer as mais recentes descobertas científicas para sua jornada de transformação.
            </p>
          </div>
        </div>
        
        {/* Membros da equipe */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cinza-escuro text-center mb-12">Especialistas Principais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Membro 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-cinza-claro">
                {/* Placeholder para foto */}
                <div className="w-full h-full flex items-center justify-center bg-verde-vitalidade/10">
                  <span className="text-verde-vitalidade text-6xl font-light">DR</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cinza-escuro">Dr. Ricardo Silva</h3>
                <p className="text-verde-vitalidade font-medium mb-3">Medicina Regenerativa</p>
                <p className="text-cinza-medio mb-4">
                  Especialista em medicina regenerativa não intervencionista, com foco em otimização metabólica e longevidade celular.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-cinza-medio hover:text-verde-vitalidade">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="text-cinza-medio hover:text-verde-vitalidade">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="text-cinza-medio hover:text-verde-vitalidade">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Membro 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-cinza-claro">
                {/* Placeholder para foto */}
                <div className="w-full h-full flex items-center justify-center bg-verde-vitalidade/10">
                  <span className="text-verde-vitalidade text-6xl font-light">CA</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cinza-escuro">Dra. Carla Almeida</h3>
                <p className="text-verde-vitalidade font-medium mb-3">Nutrologia</p>
                <p className="text-cinza-medio mb-4">
                  Especialista em nutrição funcional e nutrologia, com foco em dietas mediterrânea e asiática adaptadas à realidade brasileira.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-cinza-medio hover:text-verde-vitalidade">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="text-cinza-medio hover:text-verde-vitalidade">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="text-cinza-medio hover:text-verde-vitalidade">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Membro 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-cinza-claro">
                {/* Placeholder para foto */}
                <div className="w-full h-full flex items-center justify-center bg-verde-vitalidade/10">
                  <span className="text-verde-vitalidade text-6xl font-light">MS</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cinza-escuro">Dr. Marcos Santos</h3>
                <p className="text-verde-vitalidade font-medium mb-3">Saúde Mental</p>
                <p className="text-cinza-medio mb-4">
                  Psiquiatra especializado em técnicas de gerenciamento de estresse, ansiedade e desenvolvimento de hábitos saudáveis.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-cinza-medio hover:text-verde-vitalidade">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="text-cinza-medio hover:text-verde-vitalidade">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="text-cinza-medio hover:text-verde-vitalidade">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Equipe de suporte */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cinza-escuro text-center mb-8">Equipe de Suporte</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Membro 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-16 h-16 rounded-full bg-verde-vitalidade/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-verde-vitalidade text-xl font-bold">JC</span>
              </div>
              <h3 className="text-lg font-semibold text-cinza-escuro text-center">Julia Costa</h3>
              <p className="text-verde-vitalidade font-medium text-center mb-2">Nutricionista</p>
            </div>
            
            {/* Membro 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-16 h-16 rounded-full bg-verde-vitalidade/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-verde-vitalidade text-xl font-bold">PL</span>
              </div>
              <h3 className="text-lg font-semibold text-cinza-escuro text-center">Pedro Lima</h3>
              <p className="text-verde-vitalidade font-medium text-center mb-2">Educador Físico</p>
            </div>
            
            {/* Membro 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-16 h-16 rounded-full bg-verde-vitalidade/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-verde-vitalidade text-xl font-bold">AM</span>
              </div>
              <h3 className="text-lg font-semibold text-cinza-escuro text-center">Ana Martins</h3>
              <p className="text-verde-vitalidade font-medium text-center mb-2">Psicóloga</p>
            </div>
            
            {/* Membro 4 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-16 h-16 rounded-full bg-verde-vitalidade/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-verde-vitalidade text-xl font-bold">RF</span>
              </div>
              <h3 className="text-lg font-semibold text-cinza-escuro text-center">Rafael Ferreira</h3>
              <p className="text-verde-vitalidade font-medium text-center mb-2">Pesquisador</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-cinza-claro rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-cinza-escuro mb-4">Conheça Nossa Equipe Pessoalmente</h2>
          <p className="text-lg text-cinza-medio mb-6 max-w-2xl mx-auto">
            Inscreva-se no Desafio Vitalidade e tenha acesso a consultas e orientações com nossa equipe de especialistas.
          </p>
          <a 
            href="/inscricao" 
            className="inline-block bg-verde-vitalidade text-white py-3 px-8 rounded-md font-medium hover:bg-verde-vitalidade/90 transition-colors"
          >
            Inscreva-se Agora
          </a>
        </div>
      </div>
    </div>
  );
}
