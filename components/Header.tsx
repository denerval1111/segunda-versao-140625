"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  
  useEffect(() => {
    // Verificar se já existe um header com este ID
    const existingHeaders = document.querySelectorAll('header');
    
    // Se este for o primeiro header encontrado, renderizar
    if (existingHeaders.length <= 1) {
      setShouldRender(true);
    } else {
      // Se já existirem múltiplos headers, verificar se este é o primeiro
      const thisHeader = document.getElementById('desafio-vitalidade-header');
      if (thisHeader === existingHeaders[0]) {
        setShouldRender(true);
      } else {
        console.warn("Header duplicado detectado e ocultado");
        setShouldRender(false);
      }
    }
  }, []);
  
  // Se não deve renderizar, retornar null
  if (!shouldRender) {
    return null;
  }
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header id="desafio-vitalidade-header" className="fixed w-full bg-white shadow-md z-50">
      {/* Resto do código do Header permanece igual */}
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-verde-vitalidade">Desafio Vitalidade</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-8">
            <Link href="/" className="text-cinza-escuro hover:text-verde-vitalidade font-medium transition-colors">
              Início
            </Link>
            <div className="relative group">
              <button className="flex items-center text-cinza-escuro hover:text-verde-vitalidade font-medium transition-colors">
                Sobre
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link href="/sobre/programa" className="block px-4 py-2 text-sm text-cinza-escuro hover:bg-cinza-claro hover:text-verde-vitalidade">
                  O Programa
                </Link>
                <Link href="/sobre/equipe" className="block px-4 py-2 text-sm text-cinza-escuro hover:bg-cinza-claro hover:text-verde-vitalidade">
                  Nossa Equipe
                </Link>
                <Link href="/depoimentos" className="block px-4 py-2 text-sm text-cinza-escuro hover:bg-cinza-claro hover:text-verde-vitalidade">
                  Depoimentos
                </Link>
              </div>
            </div>
            {/* Resto do código do menu permanece igual */}
            {/* ... */}
          </nav>
          
          {/* Resto do código do Header permanece igual */}
          {/* ... */}
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-40" onClick={closeMobileMenu}></div>
       )}
      
      {/* Resto do código do menu mobile permanece igual */}
      {/* ... */}
    </header>
  );
}
