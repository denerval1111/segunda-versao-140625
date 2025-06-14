// app/pilares/nutrologia/page.tsx
import React from 'react';
import ActionButton from '@/components/ActionButton';

export default function NutrologiaPage() {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '2rem 1rem' 
    }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1920&auto=format&fit=crop )',
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
          Nutrologia
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          maxWidth: '800px', 
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Protocolos nutricionais baseados nas culinárias mediterrânea e asiática, otimizando seu metabolismo com suplementação personalizada.
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
            Abordagem Nutricional Personalizada
          </h2>
          <p style={{ 
            lineHeight: '1.6', 
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Nossa abordagem nutricional é baseada em evidências científicas e adaptada às necessidades individuais de cada participante. Combinamos os princípios das dietas mediterrânea e asiática, conhecidas por seus benefícios para a longevidade e saúde cardiovascular.
          </p>
          <p style={{ 
            lineHeight: '1.6', 
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Através de avaliações detalhadas, criamos planos alimentares que respeitam suas preferências pessoais enquanto otimizam seu metabolismo e promovem a saúde celular.
          </p>
        </div>
        
        <div>
          <h2 style={{ 
            fontSize: '1.75rem', 
            color: '#2E8B57', 
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Suplementação Estratégica
          </h2>
          <p style={{ 
            lineHeight: '1.6', 
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Complementamos sua alimentação com suplementos cuidadosamente selecionados para preencher lacunas nutricionais e potencializar resultados. Nossa abordagem de suplementação é baseada em pesquisas recentes sobre longevidade e otimização metabólica.
          </p>
          <p style={{ 
            lineHeight: '1.6', 
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Cada recomendação é personalizada com base em sua bioquímica individual, histórico médico e objetivos de saúde específicos.
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
          Benefícios da Nossa Abordagem Nutricional
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
              Otimização Metabólica
            </h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Planos alimentares que melhoram seu metabolismo e aumentam seus níveis de energia diários.
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
              Redução da Inflamação
            </h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Alimentos e suplementos selecionados para combater processos inflamatórios crônicos no organismo.
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
              Saúde Digestiva
            </h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Estratégias para melhorar a microbiota intestinal e otimizar a absorção de nutrientes.
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
          Pronto para transformar sua saúde através da nutrição?
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#555',
          maxWidth: '700px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Junte-se ao Desafio Vitalidade e tenha acesso a protocolos nutricionais personalizados baseados nas mais recentes pesquisas científicas.
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


