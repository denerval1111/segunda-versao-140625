// app/pilares/gerenciamento-peso/page.tsx
import React from 'react';
import ActionButton from '@/components/ActionButton';

export default function GerenciamentoPesoPage() {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '2rem 1rem' 
    }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&auto=format&fit=crop )',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '4rem 2rem',
        borderRadius: '8px',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          Gerenciamento de Peso
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          maxWidth: '800px', 
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Estratégias para emagrecer sem sofrimento, integrando nutrição, atividade física e abordagens comportamentais.
        </p>
      </div>

      {/* Conteúdo Principal */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        <div>
          <h2 style={{ 
            fontSize: '1.75rem', 
            color: '#2E8B57', 
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Abordagem Multidimensional
          </h2>
          <p style={{ 
            lineHeight: '1.6', 
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Nosso programa de gerenciamento de peso vai além das dietas tradicionais, integrando nutrição personalizada, atividade física adequada e técnicas comportamentais. Entendemos que o peso saudável é resultado de um equilíbrio entre diversos fatores biológicos e psicológicos.
          </p>
          <p style={{ 
            lineHeight: '1.6', 
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Desenvolvemos estratégias que se adaptam ao seu estilo de vida, preferências alimentares e condição física atual, tornando o processo sustentável e livre de sofrimento.
          </p>
        </div>
        
        <div>
          <h2 style={{ 
            fontSize: '1.75rem', 
            color: '#2E8B57', 
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Resultados Sustentáveis
          </h2>
          <p style={{ 
            lineHeight: '1.6', 
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Nosso foco está em criar mudanças duradouras, não em soluções rápidas e temporárias. Trabalhamos para otimizar sua composição corporal, melhorando a proporção entre massa magra e gordura, em vez de simplesmente reduzir o número na balança.
          </p>
          <p style={{ 
            lineHeight: '1.6', 
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Através de monitoramento regular e ajustes personalizados, garantimos que você continue progredindo em direção aos seus objetivos de forma saudável e sustentável.
          </p>
        </div>
      </div>

      {/* Benefícios */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        borderRadius: '8px',
        marginBottom: '3rem'
      }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          color: '#343A40', 
          marginBottom: '1.5rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Benefícios do Nosso Programa
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem' 
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            borderTop: '4px solid #2E8B57'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              color: '#2E8B57', 
              marginBottom: '0.75rem',
              fontWeight: '600'
            }}>
              Perda de Gordura Saudável
            </h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Estratégias para reduzir gordura corporal preservando massa muscular e saúde metabólica.
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            borderTop: '4px solid #2E8B57'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              color: '#2E8B57', 
              marginBottom: '0.75rem',
              fontWeight: '600'
            }}>
              Relação Saudável com Comida
            </h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Desenvolvimento de hábitos alimentares equilibrados e uma mentalidade positiva em relação à alimentação.
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            borderTop: '4px solid #2E8B57'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              color: '#2E8B57', 
              marginBottom: '0.75rem',
              fontWeight: '600'
            }}>
              Energia e Disposição
            </h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Aumento dos níveis de energia e disposição através de estratégias que otimizam seu metabolismo e composição corporal.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          color: '#343A40', 
          marginBottom: '1rem',
          fontWeight: '600'
        }}>
          Pronto para transformar seu corpo de forma saudável?
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#555',
          maxWidth: '700px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Junte-se ao Desafio Vitalidade e tenha acesso a estratégias personalizadas para gerenciamento de peso baseadas nas mais recentes pesquisas científicas.
        </p>
        <ActionButton 
          href="/inscricao" 
          text="Participe do Desafio Vitalidade" 
          primary={true}
        />
      </div>
    </div>
  );
}

