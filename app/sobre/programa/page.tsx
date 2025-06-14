"use client";

import React from 'react';
import ActionButton from '@/components/ActionButton';

export default function SobreProgramaPage() {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '2rem 1rem' 
    }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=1920&auto=format&fit=crop)',
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
          Desafio Vitalidade: Transforme sua Saúde em 30 Dias
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          maxWidth: '800px', 
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Um programa multidisciplinar baseado em ciência que já transformou a vida de milhares de pessoas. Chegou sua vez.
        </p>
      </div>

      {/* Introdução com Gatilho de Escassez e Urgência */}
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        marginBottom: '3rem'
      }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          color: '#343A40', 
          marginBottom: '1.5rem',
          fontWeight: '600',
          textAlign: 'center'
        }}>
          Uma Oportunidade Única para Transformar sua Saúde
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#555',
          lineHeight: '1.6',
          marginBottom: '1.5rem'
        }}>
          O Desafio Vitalidade não é apenas mais um programa de saúde. É uma <strong>jornada transformadora de 30 dias</strong> cuidadosamente estruturada por especialistas, que integra os mais recentes avanços científicos em medicina regenerativa, nutrologia, saúde mental e gerenciamento de peso.
        </p>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#555',
          lineHeight: '1.6',
          marginBottom: '1.5rem'
        }}>
          Com turmas limitadas a apenas <strong>20 participantes</strong>, garantimos atenção personalizada e resultados excepcionais. Nossa próxima turma está com vagas se esgotando rapidamente, e centenas de pessoas já experimentaram uma transformação profunda em sua saúde e qualidade de vida.
        </p>
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '1.5rem',
          borderRadius: '8px',
          borderLeft: '4px solid #2E8B57',
          marginTop: '2rem'
        }}>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#343A40',
            fontStyle: 'italic'
          }}>
            "Após 30 dias no Desafio Vitalidade, não apenas perdi 7kg, mas minha energia diária aumentou drasticamente e meus exames de sangue melhoraram significativamente. Foi uma transformação completa que vai muito além da estética." — Maria C., 52 anos
          </p>
        </div>
      </div>

      {/* Os 4 Pilares - Integração com Gatilho de Autoridade */}
      <div style={{
        marginBottom: '3rem'
      }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          color: '#343A40', 
          marginBottom: '1.5rem',
          fontWeight: '600',
          textAlign: 'center'
        }}>
          Os Quatro Pilares Científicos do Desafio Vitalidade
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#555',
          lineHeight: '1.6',
          marginBottom: '2rem',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 2rem auto'
        }}>
          Desenvolvido por uma equipe multidisciplinar de médicos e especialistas, nosso programa integra quatro áreas essenciais para uma transformação completa da sua saúde.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {/* Pilar 1 */}
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
              1. Medicina Regenerativa
            </h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Protocolos não invasivos baseados em pesquisas de ponta que estimulam seus mecanismos naturais de regeneração celular, promovendo autofagia, preservação de telômeros e ativação de células-tronco endógenas.
            </p>
            <p style={{ 
              color: '#555', 
              lineHeight: '1.5',
              marginTop: '0.75rem',
              fontWeight: '500'
            }}>
              <em>Resultado: Rejuvenescimento celular e aumento da vitalidade.</em>
            </p>
          </div>
          
          {/* Pilar 2 */}
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
              2. Nutrologia Personalizada
            </h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Planos alimentares baseados nas culinárias mediterrânea e asiática, cientificamente comprovadas por promoverem longevidade, adaptados ao seu metabolismo único e complementados com suplementação estratégica.
            </p>
            <p style={{ 
              color: '#555', 
              lineHeight: '1.5',
              marginTop: '0.75rem',
              fontWeight: '500'
            }}>
              <em>Resultado: Otimização metabólica e nutrição celular ideal.</em>
            </p>
          </div>
          
          {/* Pilar 3 */}
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
              3. Saúde Mental Integrada
            </h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Técnicas avançadas de psicologia positiva, mindfulness e neurociência que fortalecem sua resiliência emocional, melhoram seu foco e reduzem significativamente os níveis de estresse e ansiedade.
            </p>
            <p style={{ 
              color: '#555', 
              lineHeight: '1.5',
              marginTop: '0.75rem',
              fontWeight: '500'
            }}>
              <em>Resultado: Equilíbrio emocional e clareza mental.</em>
            </p>
          </div>
          
          {/* Pilar 4 */}
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
              4. Gerenciamento de Peso Científico
            </h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Estratégias multidimensionais que vão além das dietas convencionais, otimizando sua composição corporal através de protocolos que preservam massa muscular e melhoram sua relação com a alimentação.
            </p>
            <p style={{ 
              color: '#555', 
              lineHeight: '1.5',
              marginTop: '0.75rem',
              fontWeight: '500'
            }}>
              <em>Resultado: Composição corporal saudável e sustentável.</em>
            </p>
          </div>
        </div>
      </div>

      {/* Como Funciona - Gatilho de Curiosidade */}
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
          fontWeight: '600',
          textAlign: 'center'
        }}>
          Como Transformamos sua Saúde em Apenas 30 Dias?
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Etapa 1 */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#2E8B57',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.25rem',
              marginRight: '1rem',
              flexShrink: 0
            }}>
              1
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.25rem', 
                color: '#343A40', 
                marginBottom: '0.75rem',
                fontWeight: '600'
              }}>
                Avaliação Personalizada
              </h3>
              <p style={{ color: '#555', lineHeight: '1.5' }}>
                Iniciamos com uma análise completa do seu estado atual de saúde, histórico médico, hábitos diários e objetivos específicos. Esta avaliação detalhada nos permite criar um programa verdadeiramente personalizado para você.
              </p>
            </div>
          </div>
          
          {/* Etapa 2 */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#2E8B57',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.25rem',
              marginRight: '1rem',
              flexShrink: 0
            }}>
              2
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.25rem', 
                color: '#343A40', 
                marginBottom: '0.75rem',
                fontWeight: '600'
              }}>
                Imersão Transformadora
              </h3>
              <p style={{ color: '#555', lineHeight: '1.5' }}>
                Durante 30 dias, você seguirá um programa estruturado que integra os quatro pilares, com orientações diárias, materiais educativos exclusivos e suporte contínuo da nossa equipe de especialistas e da comunidade de participantes.
              </p>
            </div>
          </div>
          
          {/* Etapa 3 */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#2E8B57',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.25rem',
              marginRight: '1rem',
              flexShrink: 0
            }}>
              3
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.25rem', 
                color: '#343A40', 
                marginBottom: '0.75rem',
                fontWeight: '600'
              }}>
                Consolidação e Continuidade
              </h3>
              <p style={{ color: '#555', lineHeight: '1.5' }}>
                Ao final dos 30 dias, você receberá um plano de manutenção personalizado para consolidar e expandir os resultados alcançados, garantindo que as transformações sejam duradouras e continuem evoluindo ao longo do tempo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* O Que Está Incluído - Gatilho de Valor */}
      <div style={{
        marginBottom: '3rem'
      }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          color: '#343A40', 
          marginBottom: '1.5rem',
          fontWeight: '600',
          textAlign: 'center'
        }}>
          Tudo o Que Você Recebe no Desafio Vitalidade
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {/* Item 1 */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            display: 'flex',
            alignItems: 'flex-start'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(46, 139, 87, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '1rem',
              flexShrink: 0
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E8B57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                color: '#343A40', 
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>
                Plano Nutricional Personalizado
              </h3>
              <p style={{ color: '#555', lineHeight: '1.5', fontSize: '0.95rem' }}>
                Desenvolvido especificamente para seu metabolismo, objetivos e preferências alimentares, baseado nas dietas mais eficazes para longevidade.
              </p>
            </div>
          </div>
          
          {/* Item 2 */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            display: 'flex',
            alignItems: 'flex-start'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(46, 139, 87, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '1rem',
              flexShrink: 0
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E8B57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                color: '#343A40', 
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>
                Protocolos de Atividade Física
              </h3>
              <p style={{ color: '#555', lineHeight: '1.5', fontSize: '0.95rem' }}>
                Exercícios cientificamente otimizados para maximizar resultados com o mínimo de tempo, adaptados ao seu nível de condicionamento atual.
              </p>
            </div>
          </div>
          
          {/* Item 3 */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            display: 'flex',
            alignItems: 'flex-start'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(46, 139, 87, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '1rem',
              flexShrink: 0
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E8B57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                color: '#343A40', 
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>
                Técnicas de Saúde Mental
              </h3>
              <p style={{ color: '#555', lineHeight: '1.5', fontSize: '0.95rem' }}>
                Práticas diárias de mindfulness, gerenciamento de estresse e otimização do sono baseadas nas mais recentes pesquisas em neurociência.
              </p>
            </div>
          </div>
          
          {/* Item 4 */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            display: 'flex',
            alignItems: 'flex-start'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(46, 139, 87, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '1rem',
              flexShrink: 0
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E8B57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                color: '#343A40', 
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>
                Comunidade Exclusiva
              </h3>
              <p style={{ color: '#555', lineHeight: '1.5', fontSize: '0.95rem' }}>
                Acesso a um grupo seleto de participantes com objetivos semelhantes, proporcionando suporte mútuo, motivação e compartilhamento de experiências.
              </p>
            </div>
          </div>
          
          {/* Item 5 */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            display: 'flex',
            alignItems: 'flex-start'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(46, 139, 87, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '1rem',
              flexShrink: 0
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E8B57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                color: '#343A40', 
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>
                Suporte Profissional
              </h3>
              <p style={{ color: '#555', lineHeight: '1.5', fontSize: '0.95rem' }}>
                Acompanhamento de nossa equipe multidisciplinar para esclarecer dúvidas, superar obstáculos e ajustar seu programa conforme necessário.
              </p>
            </div>
          </div>
          
          {/* Item 6 */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            display: 'flex',
            alignItems: 'flex-start'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(46, 139, 87, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '1rem',
              flexShrink: 0
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E8B57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                color: '#343A40', 
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>
                Material Educativo Exclusivo
              </h3>
              <p style={{ color: '#555', lineHeight: '1.5', fontSize: '0.95rem' }}>
                Biblioteca digital com vídeos, e-books e guias práticos sobre todos os aspectos do programa, baseados nas mais recentes pesquisas científicas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Resultados Comprovados - Gatilho de Prova Social */}
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
          fontWeight: '600',
          textAlign: 'center'
        }}>
          Resultados Comprovados por Centenas de Participantes
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Depoimento 1 */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              fontSize: '3rem',
              color: 'rgba(46, 139, 87, 0.1)',
              fontFamily: 'Georgia, serif'
            }}>
              "
            </div>
            <p style={{ 
              color: '#555', 
              lineHeight: '1.6',
              fontStyle: 'italic',
              marginBottom: '1rem',
              position: 'relative',
              zIndex: '1'
            }}>
              Aos 58 anos, eu já havia aceitado que baixa energia e dores crônicas eram "normais para minha idade". Após o Desafio Vitalidade, recuperei uma vitalidade que não sentia há décadas. Meus exames melhoraram significativamente e meu médico ficou impressionado com os resultados.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#2E8B57',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                marginRight: '1rem'
              }}>
                RC
              </div>
              <div>
                <p style={{ 
                  fontWeight: '600',
                  color: '#343A40',
                  marginBottom: '0.25rem'
                }}>
                  Roberto C.
                </p>
                <p style={{ 
                  fontSize: '0.875rem',
                  color: '#6c757d'
                }}>
                  Empresário, 58 anos
                </p>
              </div>
            </div>
          </div>
          
          {/* Depoimento 2 */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              fontSize: '3rem',
              color: 'rgba(46, 139, 87, 0.1)',
              fontFamily: 'Georgia, serif'
            }}>
              "
            </div>
            <p style={{ 
              color: '#555', 
              lineHeight: '1.6',
              fontStyle: 'italic',
              marginBottom: '1rem',
              position: 'relative',
              zIndex: '1'
            }}>
              Como médica, sou naturalmente cética com programas de saúde, mas o Desafio Vitalidade me surpreendeu pela base científica sólida. Perdi 5kg sem passar fome, minha ansiedade diminuiu drasticamente e minha qualidade de sono melhorou como nunca antes.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#2E8B57',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                marginRight: '1rem'
              }}>
                AS
              </div>
              <div>
                <p style={{ 
                  fontWeight: '600',
                  color: '#343A40',
                  marginBottom: '0.25rem'
                }}>
                  Dra. Ana S.
                </p>
                <p style={{ 
                  fontSize: '0.875rem',
                  color: '#6c757d'
                }}>
                  Cardiologista, 45 anos
                </p>
              </div>
            </div>
          </div>
          
          {/* Depoimento 3 */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              fontSize: '3rem',
              color: 'rgba(46, 139, 87, 0.1)',
              fontFamily: 'Georgia, serif'
            }}>
              "
            </div>
            <p style={{ 
              color: '#555', 
              lineHeight: '1.6',
              fontStyle: 'italic',
              marginBottom: '1rem',
              position: 'relative',
              zIndex: '1'
            }}>
              Tentei inúmeras dietas e programas de exercícios antes, mas sempre voltava aos hábitos antigos. O Desafio Vitalidade foi diferente porque abordou minha saúde de forma completa. Não apenas transformei meu corpo, mas também minha mente e minha relação com a comida.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#2E8B57',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                marginRight: '1rem'
              }}>
                PM
              </div>
              <div>
                <p style={{ 
                  fontWeight: '600',
                  color: '#343A40',
                  marginBottom: '0.25rem'
                }}>
                  Paulo M.
                </p>
                <p style={{ 
                  fontSize: '0.875rem',
                  color: '#6c757d'
                }}>
                  Professor, 37 anos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ - Gatilho de Objeção Antecipada */}
      <div style={{
        marginBottom: '3rem'
      }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          color: '#343A40', 
          marginBottom: '1.5rem',
          fontWeight: '600',
          textAlign: 'center'
        }}>
          Perguntas Frequentes
        </h2>
        
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          marginBottom: '1rem'
        }}>
          <h3 style={{ 
            fontSize: '1.1rem', 
            color: '#343A40', 
            marginBottom: '0.75rem',
            fontWeight: '600'
          }}>
            Preciso ter experiência prévia com dietas ou exercícios?
          </h3>
          <p style={{ color: '#555', lineHeight: '1.5' }}>
            Não. O Desafio Vitalidade foi desenvolvido para ser acessível a pessoas de todos os níveis de experiência. Nosso programa é completamente personalizado e adaptado ao seu ponto de partida atual, independentemente de sua experiência prévia.
          </p>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          marginBottom: '1rem'
        }}>
          <h3 style={{ 
            fontSize: '1.1rem', 
            color: '#343A40', 
            marginBottom: '0.75rem',
            fontWeight: '600'
          }}>
            Quanto tempo preciso dedicar diariamente ao programa?
          </h3>
          <p style={{ color: '#555', lineHeight: '1.5' }}>
            O programa foi desenvolvido para pessoas ocupadas e requer em média 30-60 minutos por dia, que podem ser divididos em pequenos blocos ao longo do dia. Nosso foco está na eficiência e na integração das práticas à sua rotina atual.
          </p>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          marginBottom: '1rem'
        }}>
          <h3 style={{ 
            fontSize: '1.1rem', 
            color: '#343A40', 
            marginBottom: '0.75rem',
            fontWeight: '600'
          }}>
            O programa é adequado para pessoas com condições de saúde específicas?
          </h3>
          <p style={{ color: '#555', lineHeight: '1.5' }}>
            Sim. Nossa abordagem personalizada leva em consideração suas condições de saúde específicas. No entanto, sempre recomendamos consultar seu médico antes de iniciar qualquer programa de saúde, especialmente se você tem condições médicas pré-existentes.
          </p>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ 
            fontSize: '1.1rem', 
            color: '#343A40', 
            marginBottom: '0.75rem',
            fontWeight: '600'
          }}>
            Os resultados são duradouros após os 30 dias?
          </h3>
          <p style={{ color: '#555', lineHeight: '1.5' }}>
            Absolutamente. O Desafio Vitalidade não é uma solução temporária, mas uma transformação completa nos seus hábitos e na sua relação com saúde. Ao final dos 30 dias, você receberá um plano de manutenção personalizado para garantir que os resultados sejam sustentáveis a longo prazo.
          </p>
        </div>
      </div>

      {/* CTA Final - Gatilho de Escassez e Urgência */}
      <div style={{
        backgroundColor: '#2E8B57',
        padding: '3rem 2rem',
        borderRadius: '8px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          Transforme Sua Saúde Agora
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          maxWidth: '800px', 
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          As vagas para nossa próxima turma são limitadas a apenas 20 participantes e estão se esgotando rapidamente. Não perca a oportunidade de transformar sua saúde e qualidade de vida nos próximos 30 dias.
        </p>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: '1rem',
          borderRadius: '8px',
          maxWidth: '600px',
          margin: '0 auto 2rem auto'
        }}>
          <p style={{ 
            fontSize: '1.1rem',
            fontWeight: '500'
          }}>
            "O maior investimento que você pode fazer é na sua própria saúde. Não espere até que seja tarde demais para priorizar o seu bem-estar."
          </p>
        </div>
        <ActionButton 
          href="/inscricao" 
          text="Inscreva-se no Desafio Vitalidade" 
          primary={true}
        />
        <p style={{ 
          fontSize: '0.9rem', 
          marginTop: '1rem',
          opacity: '0.8'
        }}>
          Vagas limitadas. Garantia de satisfação ou seu dinheiro de volta.
        </p>
      </div>
    </div>
  );
}




