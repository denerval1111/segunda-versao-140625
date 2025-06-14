// components/Footer.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import SocialIcons from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      backgroundColor: '#343A40',
      color: 'white',
      padding: '3rem 0 2rem',
      marginTop: '2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {/* Coluna 1: Logo e Descrição */}
        <div>
          <h3 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: 'white'
          }}>
            Desafio Vitalidade
          </h3>
          <p style={{ 
            color: '#CCC', 
            marginBottom: '1.5rem',
            lineHeight: '1.6'
          }}>
            Transforme sua saúde e bem-estar com nosso programa de 30 dias cientificamente desenvolvido.
          </p>
          <SocialIcons />
        </div>
        
        {/* Coluna 2: Links Principais */}
        <div>
          <h4 style={{ 
            fontSize: '1.2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: 'white'
          }}>
            Navegação
          </h4>
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            <Link href="/" style={{ color: '#CCC', textDecoration: 'none', transition: 'color 0.2s' }}>Início</Link>
            <Link href="/sobre/programa" style={{ color: '#CCC', textDecoration: 'none', transition: 'color 0.2s' }}>O Programa</Link>
            <Link href="/depoimentos" style={{ color: '#CCC', textDecoration: 'none', transition: 'color 0.2s' }}>Depoimentos</Link>
            <Link href="/blog" style={{ color: '#CCC', textDecoration: 'none', transition: 'color 0.2s' }}>Blog</Link>
            <Link href="/contato" style={{ color: '#CCC', textDecoration: 'none', transition: 'color 0.2s' }}>Contato</Link>
          </nav>
        </div>
        
        {/* Coluna 3: Pilares */}
        <div>
          <h4 style={{ 
            fontSize: '1.2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: 'white'
          }}>
            Pilares do Programa
          </h4>
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            <Link href="/pilares/medicina-regenerativa" style={{ color: '#CCC', textDecoration: 'none', transition: 'color 0.2s' }}>Medicina Regenerativa</Link>
            <Link href="/pilares/nutrologia" style={{ color: '#CCC', textDecoration: 'none', transition: 'color 0.2s' }}>Nutrologia</Link>
            <Link href="/pilares/saude-mental" style={{ color: '#CCC', textDecoration: 'none', transition: 'color 0.2s' }}>Saúde Mental</Link>
            <Link href="/pilares/gerenciamento-de-peso" style={{ color: '#CCC', textDecoration: 'none', transition: 'color 0.2s' }}>Gerenciamento de Peso</Link>
          </nav>
        </div>
        
        {/* Coluna 4: Contato */}
        <div>
          <h4 style={{ 
            fontSize: '1.2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: 'white'
          }}>
            Contato
          </h4>
          <p style={{ color: '#CCC', marginBottom: '0.5rem' }}>
            <strong>Email:</strong> contato@desafiovitalidade.com.br
          </p>
          <p style={{ color: '#CCC', marginBottom: '0.5rem' }}>
            <strong>Telefone:</strong> (11) 99999-9999
          </p>
          <p style={{ color: '#CCC' }}>
            <strong>Endereço:</strong> São Paulo, SP
          </p>
        </div>
      </div>
      
      {/* Linha de Copyright */}
      <div style={{
        borderTop: '1px solid #555',
        marginTop: '2rem',
        paddingTop: '1.5rem',
        textAlign: 'center'
      }}>
        <p style={{ color: '#AAA', fontSize: '0.9rem' }}>
          © {currentYear} Desafio Vitalidade. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}



