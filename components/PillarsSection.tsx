"use client";

import React from 'react';
import Link from 'next/link';

export default function PillarsSection() {
  const pillars = [
    {
      title: "Medicina Regenerativa",
      description: "Abordagens não intervencionistas para estimular a regeneração celular, focando em autofagia, telômeros e células-tronco.",
      link: "/pilares/medicina-regenerativa",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop"
    },
    {
      title: "Nutrologia",
      description: "Protocolos nutricionais baseados nas culinárias mediterrânea e asiática, otimizando seu metabolismo com suplementação personalizada.",
      link: "/pilares/nutrologia",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop"
    },
    {
      title: "Saúde Mental",
      description: "Técnicas de motivação e enfrentamento da ansiedade, procrastinação e sintomas depressivos relacionados ao estresse moderno.",
      link: "/pilares/saude-mental",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop"
    },
    {
      title: "Gerenciamento de Peso",
      description: "Estratégias para emagrecer sem sofrimento, integrando nutrição, atividade física e abordagens comportamentais.",
      link: "/pilares/gerenciamento-peso",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section style={{
      padding: '5rem 0',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#343A40'
          }}>
            Os Quatro Pilares do Desafio Vitalidade
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#6C757D',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Nossa abordagem multidisciplinar integra quatro áreas essenciais para uma transformação completa da sua saúde.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr ))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              style={{
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Conteúdo de texto - PRIMEIRO */}
              <div style={{
                padding: '1.5rem',
                order: '1'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  color: '#2E8B57'
                }}>
                  {pillar.title}
                </h3>
                <p style={{
                  color: '#6C757D',
                  marginBottom: '1rem',
                  lineHeight: '1.6'
                }}>
                  {pillar.description}
                </p>
                <Link 
                  href={pillar.link} 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: '#2E8B57',
                    fontWeight: '500',
                    marginBottom: '1rem',
                    textDecoration: 'none'
                  }}
                >
                  Saiba mais
                  <svg 
                    width="16" 
                    height="16" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{marginLeft: '0.25rem'}}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              
              {/* Imagem - SEGUNDO */}
              <div style={{
                height: '200px',
                position: 'relative',
                order: '2'
              }}>
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  loading="lazy"
                />
              </div>
            </div>
           ))}
        </div>
        
        {/* Links dos pilares */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: '#343A40'
          }}>
            Pilares do Desafio Vitalidade
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem'
          }}>
            {pillars.map((pillar, index) => (
              <Link 
                key={index} 
                href={pillar.link} 
                style={{
                  color: '#2E8B57',
                  fontWeight: '500',
                  fontSize: '1.125rem',
                  textDecoration: 'none'
                }}
              >
                {pillar.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}









