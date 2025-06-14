// app/pilares/medicina-regenerativa/page.tsx
import React from 'react';
import ActionButton from '@/components/ActionButton';

export default function MedicinaRegenerativaPage() {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '2rem 1rem' 
    }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1920&auto=format&fit=crop )',
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
          Medicina Regenerativa
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          maxWidth: '800px', 
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Abordagens não intervencionistas para estimular a regeneração celular, focando em autofagia, telômeros e células-tronco.
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
            Regeneração Celular Natural
          </h2>
          <p style={{ 
            lineHeight: '1.6', 
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Nossa abordagem de medicina regenerativa foca em ativar os mecanismos naturais de reparo e regeneração do seu próprio corpo. Utilizamos protocolos não invasivos baseados nas mais recentes pesquisas científicas sobre longevidade celular.
          </p>
          <p style={{ 
            lineHeight: '1.6', 
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Através de intervenções específicas no estilo de vida, nutrição e suplementação, estimulamos processos como autofagia, manutenção de telômeros e ativação de células-tronco endógenas.
          </p>
        </div>
        
        <div>
          <h2 style={{ 
            fontSize: '1.75rem', 
            color: '#2E8B57', 
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Protocolos Baseados em Evidências
          </h2>
          <p style={{ 
            lineHeight: '1.6', 
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Todos os nossos protocolos são fundamentados em pesquisas científicas recentes publicadas em revistas de alto impacto. Integramos conhecimentos de biologia celular, epigenética e medicina do estilo de vida para criar intervenções eficazes e seguras.
          </p>
          <p style={{ 
            lineHeight: '1.6', 
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Nossa equipe multidisciplinar está constantemente atualizando nossos protocolos com base nas mais recentes descobertas científicas no campo da longevidade e medicina regenerativa.
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
          Benefícios da Medicina Regenerativa
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
              Aumento da Vitalidade
            </h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Melhora nos níveis de energia e disposição através da otimização da função mitocondrial e celular.
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
              Desaceleração do Envelhecimento
            </h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Protocolos que atuam nos principais marcadores biológicos do envelhecimento, como comprimento dos telômeros e senescência celular.
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
              Recuperação Otimizada
            </h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Melhora na capacidade de recuperação do corpo após exercícios, estresse ou pequenas lesões.
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
          Pronto para ativar seu potencial regenerativo?
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#555',
          maxWidth: '700px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Junte-se ao Desafio Vitalidade e tenha acesso a protocolos de medicina regenerativa personalizados baseados nas mais recentes pesquisas científicas.
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


