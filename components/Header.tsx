// components/Header.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPilaresOpen, setIsPilaresOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePilares = () => {
    setIsPilaresOpen(!isPilaresOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsPilaresOpen(false);
  };

  return (
    <header style={{
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid #e5e7eb'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px'
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#2563eb',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center'
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #2563eb, #10b981)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Desafio Vitalidade
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }} className="desktop-menu">
          <Link href="/" style={{
            color: '#374151',
            textDecoration: 'none',
            fontWeight: '500',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            transition: 'all 0.3s ease'
          }} className="nav-link">
            Início
          </Link>

          <Link href="/sobre/programa" style={{
            color: '#374151',
            textDecoration: 'none',
            fontWeight: '500',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            transition: 'all 0.3s ease'
          }} className="nav-link">
            O Programa
          </Link>

          {/* Dropdown Pilares */}
          <div style={{
            position: 'relative'
          }} 
          onMouseEnter={() => setIsPilaresOpen(true)}
          onMouseLeave={() => setIsPilaresOpen(false)}>
            <button style={{
              color: '#374151',
              background: 'none',
              border: 'none',
              fontWeight: '500',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '1rem',
              transition: 'all 0.3s ease'
            }} className="nav-link">
              Pilares
              <span style={{
                transform: isPilaresOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}>▼</span>
            </button>

            {/* Dropdown Menu */}
            <div style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              backgroundColor: '#ffffff',
              boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
              borderRadius: '8px',
              padding: '0.5rem 0',
              minWidth: '220px',
              opacity: isPilaresOpen ? 1 : 0,
              visibility: isPilaresOpen ? 'visible' : 'hidden',
              transform: isPilaresOpen ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'all 0.3s ease',
              border: '1px solid #e5e7eb'
            }}>
              <Link href="/pilares/medicina-regenerativa" style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                color: '#374151',
                textDecoration: 'none',
                transition: 'background-color 0.2s ease',
                gap: '0.75rem'
              }} className="dropdown-link">
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981'
                }}></span>
                Medicina Regenerativa
              </Link>

              <Link href="/pilares/nutrologia" style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                color: '#374151',
                textDecoration: 'none',
                transition: 'background-color 0.2s ease',
                gap: '0.75rem'
              }} className="dropdown-link">
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#f59e0b'
                }}></span>
                Nutrologia
              </Link>

              <Link href="/pilares/saude-mental" style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                color: '#374151',
                textDecoration: 'none',
                transition: 'background-color 0.2s ease',
                gap: '0.75rem'
              }} className="dropdown-link">
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#3b82f6'
                }}></span>
                Saúde Mental
              </Link>

              <a href="/pilares/gerenciamento-de-peso" style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                color: '#374151',
                textDecoration: 'none',
                transition: 'background-color 0.2s ease',
                gap: '0.75rem'
              }} className="dropdown-link">
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#8b5cf6'
                }}></span>
                Gerenciamento de Peso
              </a>
            </div>
          </div>

          <Link href="/depoimentos" style={{
            color: '#374151',
            textDecoration: 'none',
            fontWeight: '500',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            transition: 'all 0.3s ease'
          }} className="nav-link">
            Depoimentos
          </Link>

          <Link href="/blog" style={{
            color: '#374151',
            textDecoration: 'none',
            fontWeight: '500',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            transition: 'all 0.3s ease'
          }} className="nav-link">
            Blog
          </Link>

          <Link href="/inscricao" style={{
            backgroundColor: '#2563eb',
            color: 'white',
            textDecoration: 'none',
            fontWeight: '600',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }} className="cta-button">
            Inscreva-se
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '4px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-menu-button"
        >
          <span style={{
            width: '25px',
            height: '3px',
            backgroundColor: '#374151',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
          }}></span>
          <span style={{
            width: '25px',
            height: '3px',
            backgroundColor: '#374151',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            opacity: isMenuOpen ? 0 : 1
          }}></span>
          <span style={{
            width: '25px',
            height: '3px',
            backgroundColor: '#374151',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
          }}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div style={{
        display: isMenuOpen ? 'block' : 'none',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e5e7eb',
        padding: '1rem'
      }} className="mobile-menu">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          <Link href="/" onClick={closeMobileMenu} style={{
            color: '#374151',
            textDecoration: 'none',
            padding: '0.75rem 1rem',
            borderRadius: '6px',
            transition: 'background-color 0.2s ease'
          }} className="mobile-nav-link">
            Início
          </Link>

          <Link href="/sobre/programa" onClick={closeMobileMenu} style={{
            color: '#374151',
            textDecoration: 'none',
            padding: '0.75rem 1rem',
            borderRadius: '6px',
            transition: 'background-color 0.2s ease'
          }} className="mobile-nav-link">
            O Programa
          </Link>

          {/* Mobile Pilares */}
          <div>
            <button onClick={togglePilares} style={{
              width: '100%',
              textAlign: 'left',
              color: '#374151',
              background: 'none',
              border: 'none',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '1rem'
            }} className="mobile-nav-link">
              Pilares
              <span style={{
                transform: isPilaresOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}>▼</span>
            </button>

            {isPilaresOpen && (
              <div style={{
                paddingLeft: '1rem',
                marginTop: '0.5rem'
              }}>
                <Link href="/pilares/medicina-regenerativa" onClick={closeMobileMenu} style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#374151',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  transition: 'background-color 0.2s ease',
                  gap: '0.75rem'
                }} className="mobile-nav-link">
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981'
                  }}></span>
                  Medicina Regenerativa
                </Link>

                <Link href="/pilares/nutrologia" onClick={closeMobileMenu} style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#374151',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  transition: 'background-color 0.2s ease',
                  gap: '0.75rem'
                }} className="mobile-nav-link">
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#f59e0b'
                  }}></span>
                  Nutrologia
                </Link>

                <Link href="/pilares/saude-mental" onClick={closeMobileMenu} style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#374151',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  transition: 'background-color 0.2s ease',
                  gap: '0.75rem'
                }} className="mobile-nav-link">
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#3b82f6'
                  }}></span>
                  Saúde Mental
                </Link>

                <a href="/pilares/gerenciamento-de-peso" onClick={closeMobileMenu} style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#374151',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  transition: 'background-color 0.2s ease',
                  gap: '0.75rem'
                }} className="mobile-nav-link">
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#8b5cf6'
                  }}></span>
                  Gerenciamento de Peso
                </a>
              </div>
            )}
          </div>

          <Link href="/depoimentos" onClick={closeMobileMenu} style={{
            color: '#374151',
            textDecoration: 'none',
            padding: '0.75rem 1rem',
            borderRadius: '6px',
            transition: 'background-color 0.2s ease'
          }} className="mobile-nav-link">
            Depoimentos
          </Link>

          <Link href="/blog" onClick={closeMobileMenu} style={{
            color: '#374151',
            textDecoration: 'none',
            padding: '0.75rem 1rem',
            borderRadius: '6px',
            transition: 'background-color 0.2s ease'
          }} className="mobile-nav-link">
            Blog
          </Link>

          <Link href="/inscricao" onClick={closeMobileMenu} style={{
            backgroundColor: '#2563eb',
            color: 'white',
            textDecoration: 'none',
            fontWeight: '600',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            textAlign: 'center',
            marginTop: '1rem',
            display: 'block'
          }}>
            Inscreva-se
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-button {
            display: flex !important;
          }
        }

        .nav-link:hover {
          background-color: #f3f4f6 !important;
          color: #2563eb !important;
        }

        .dropdown-link:hover {
          background-color: #f3f4f6 !important;
        }

        .mobile-nav-link:hover {
          background-color: #f3f4f6 !important;
        }

        .cta-button:hover {
          background-color: #1d4ed8 !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }
      `}</style>
    </header>
  );
}




