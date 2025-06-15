// app/pilares/gerenciamento-peso/page.tsx
import React from 'react';

export default function GerenciamentoPesoPage() {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1rem'
    }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.8), rgba(124, 58, 237, 0.8)), url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&auto=format&fit=crop)',
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
          Estratégias científicas para controle de peso saudável, focando em composição corporal, metabolismo e sustentabilidade a longo prazo.
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
            color: '#8b5cf6',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Abordagem Científica do Peso
          </h2>
          <p style={{
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Nosso programa de gerenciamento de peso vai além das dietas tradicionais. Focamos na composição corporal, saúde metabólica e sustentabilidade a longo prazo, utilizando estratégias baseadas em evidências científicas.
          </p>
          <p style={{
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Através de análises personalizadas, desenvolvemos protocolos que respeitam sua individualidade biológica, preferências alimentares e estilo de vida, garantindo resultados duradouros.
          </p>
        </div>

        <div>
          <h2 style={{
            fontSize: '1.75rem',
            color: '#8b5cf6',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Metabolismo e Composição Corporal
          </h2>
          <p style={{
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Priorizamos a otimização da composição corporal - aumentando massa muscular magra e reduzindo gordura visceral - em vez de focar apenas no número da balança. Isso resulta em melhor saúde metabólica e aparência física.
          </p>
          <p style={{
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '1.5rem'
          }}>
            Utilizamos estratégias de flexibilidade metabólica, timing nutricional e exercícios específicos para maximizar a queima de gordura e preservação muscular.
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
          Benefícios do Gerenciamento de Peso Científico
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
            borderTop: '4px solid #8b5cf6'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#8b5cf6',
              marginBottom: '0.75rem',
              fontWeight: '600'
            }}>
              Perda de Peso Sustentável
            </h3>
            <p style={{
              color: '#555',
              lineHeight: '1.5'
            }}>
              Estratégias que promovem perda de peso gradual e duradoura, evitando o efeito sanfona e preservando o metabolismo.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            borderTop: '4px solid #8b5cf6'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#8b5cf6',
              marginBottom: '0.75rem',
              fontWeight: '600'
            }}>
              Melhora da Composição Corporal
            </h3>
            <p style={{
              color: '#555',
              lineHeight: '1.5'
            }}>
              Aumento da massa muscular magra e redução da gordura corporal, especialmente a gordura visceral prejudicial à saúde.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            borderTop: '4px solid #8b5cf6'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#8b5cf6',
              marginBottom: '0.75rem',
              fontWeight: '600'
            }}>
              Saúde Metabólica Otimizada
            </h3>
            <p style={{
              color: '#555',
              lineHeight: '1.5'
            }}>
              Melhora na sensibilidade à insulina, perfil lipídico e marcadores inflamatórios, promovendo saúde cardiovascular.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            borderTop: '4px solid #8b5cf6'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#8b5cf6',
              marginBottom: '0.75rem',
              fontWeight: '600'
            }}>
              Energia e Vitalidade
            </h3>
            <p style={{
              color: '#555',
              lineHeight: '1.5'
            }}>
              Aumento significativo nos níveis de energia, disposição e qualidade do sono através da otimização do peso corporal.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            borderTop: '4px solid #8b5cf6'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#8b5cf6',
              marginBottom: '0.75rem',
              fontWeight: '600'
            }}>
              Autoestima e Confiança
            </h3>
            <p style={{
              color: '#555',
              lineHeight: '1.5'
            }}>
              Melhora significativa na autoestima, confiança e bem-estar psicológico através de resultados visíveis e sustentáveis.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            borderTop: '4px solid #8b5cf6'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#8b5cf6',
              marginBottom: '0.75rem',
              fontWeight: '600'
            }}>
              Longevidade Saudável
            </h3>
            <p style={{
              color: '#555',
              lineHeight: '1.5'
            }}>
              Redução de riscos de doenças crônicas e promoção de envelhecimento saudável através do controle de peso adequado.
            </p>
          </div>
        </div>
      </div>

      {/* Metodologia */}
      <div style={{
        marginBottom: '3rem'
      }}>
        <h2 style={{
          fontSize: '1.75rem',
          color: '#343A40',
          marginBottom: '1.5rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Nossa Metodologia Científica
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            padding: '1.5rem',
            border: '1px solid #e9ecef',
            borderRadius: '8px'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#8b5cf6',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              1. Avaliação Personalizada
            </h3>
            <p style={{
              color: '#555',
              lineHeight: '1.6'
            }}>
              Análise completa da composição corporal, metabolismo basal, histórico médico e preferências individuais para criar um plano personalizado.
            </p>
          </div>

          <div style={{
            padding: '1.5rem',
            border: '1px solid #e9ecef',
            borderRadius: '8px'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#8b5cf6',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              2. Estratégia Nutricional
            </h3>
            <p style={{
              color: '#555',
              lineHeight: '1.6'
            }}>
              Protocolos nutricionais baseados em evidências, incluindo timing de refeições, macronutrientes otimizados e suplementação estratégica.
            </p>
          </div>

          <div style={{
            padding: '1.5rem',
            border: '1px solid #e9ecef',
            borderRadius: '8px'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#8b5cf6',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              3. Exercício Inteligente
            </h3>
            <p style={{
              color: '#555',
              lineHeight: '1.6'
            }}>
              Combinação estratégica de exercícios de resistência e cardiovasculares para maximizar a queima de gordura e preservação muscular.
            </p>
          </div>

          <div style={{
            padding: '1.5rem',
            border: '1px solid #e9ecef',
            borderRadius: '8px'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#8b5cf6',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              4. Monitoramento Contínuo
            </h3>
            <p style={{
              color: '#555',
              lineHeight: '1.6'
            }}>
              Acompanhamento regular dos resultados com ajustes baseados em dados objetivos e feedback individual para otimização contínua.
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
          Pronto para transformar sua composição corporal?
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#555',
          maxWidth: '700px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Junte-se ao Desafio Vitalidade e tenha acesso a estratégias científicas de gerenciamento de peso que promovem resultados duradouros e saúde metabólica otimizada.
        </p>
        <a 
          href="/inscricao"
          style={{
            display: 'inline-block',
            backgroundColor: '#8b5cf6',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'background-color 0.3s ease'
          }}
        >
          Participe do Desafio Vitalidade
        </a>
      </div>
    </div>
  );
}





