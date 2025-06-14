// app/pilares/saude-mental/page.tsx
import React from 'react';
import ActionButton from '@/components/ActionButton';

export default function SaudeMentalPage() {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '2rem 1rem' 
    }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&auto=format&fit=crop )',
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
          Saúde Mental
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          maxWidth: '800px', 
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Técnicas de motivação e enfrentamento da ansiedade, procrastinação e sintomas depressivos relacionados ao estresse moderno.
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
            Abordagem Integrada
          </h2>
          <p style={{ 
            lineHeight: '1.6', 
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Nossa abordagem para saúde mental integra técnicas baseadas em evidências da psicologia positiva, terapia cognitivo-comportamental e práticas de mindfulness. Desenvolvemos estratégias personalizadas para ajudar você a gerenciar o estresse e construir resiliência emocional.
          </p>
          <p style={{ 
            lineHeight: '1.6', 
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Reconhecemos que a saúde mental está intrinsecamente ligada à saúde física, e nossos protocolos abordam essa conexão mente-corpo de forma holística e científica.
          </p>
        </div>
        
        <div>
          <h2 style={{ 
            fontSize: '1.75rem', 
            color: '#2E8B57', 
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Ferramentas Práticas
          </h2>
          <p style={{ 
            lineHeight: '1.6', 
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Fornecemos ferramentas práticas e aplicáveis que você pode incorporar em sua rotina diária para melhorar sua saúde mental. Desde técnicas de respiração e meditação guiada até estratégias de produtividade e gerenciamento de tempo.
          </p>
          <p style={{ 
            lineHeight: '1.6', 
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Nosso objetivo é capacitá-lo com habilidades que continuarão beneficiando sua saúde mental muito além dos 30 dias do programa.
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
          Benefícios para Sua Saúde Mental
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
              Redução do Estresse
            </h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Técnicas comprovadas para diminuir os níveis de cortisol e promover uma sensação de calma e equilíbrio.
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
              Melhora do Foco
            </h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Estratégias para aumentar a concentração e reduzir a procrastinação, melhorando sua produtividade diária.
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
              Resiliência Emocional
            </h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Desenvolvimento de habilidades para lidar melhor com desafios e adversidades, fortalecendo sua saúde mental a longo prazo.
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
          Pronto para transformar sua saúde mental?
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#555',
          maxWidth: '700px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Junte-se ao Desafio Vitalidade e tenha acesso a técnicas e estratégias personalizadas para melhorar sua saúde mental e qualidade de vida.
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

