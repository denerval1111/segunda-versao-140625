import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [showLoadingIndicator, setShowLoadingIndicator] = useState(false);

  // Verificar preferência do usuário por movimento reduzido
  useEffect(() => {
    // Verificar preferência de redução de movimento
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setAnimationsEnabled(false);
    }
    
    // Verificar se há uma preferência salva no localStorage
    try {
      const savedPreference = localStorage.getItem('animationsEnabled');
      if (savedPreference !== null) {
        setAnimationsEnabled(savedPreference === 'true');
      }
    } catch (error) {
      // Ignorar erros de localStorage (pode ocorrer em navegação privada)
      console.log('Erro ao acessar localStorage:', error);
    }
  }, []);

  // Salvar preferência quando mudar
  useEffect(() => {
    try {
      localStorage.setItem('animationsEnabled', animationsEnabled.toString());
    } catch (error) {
      // Ignorar erros de localStorage
    }
  }, [animationsEnabled]);

  useEffect(() => {
    // Se as animações estiverem desativadas, apenas atualizar o conteúdo
    if (!animationsEnabled) {
      setDisplayChildren(children);
      return;
    }

    // Lidar com mudanças de rota
    const handleRouteChangeStart = () => {
      setIsTransitioning(true);
      
      // Mostrar indicador de carregamento após um pequeno delay
      // para evitar flash em navegações rápidas
      const loadingTimer = setTimeout(() => {
        setShowLoadingIndicator(true);
      }, 300);
      
      return () => clearTimeout(loadingTimer);
    };

    const handleRouteChangeComplete = () => {
      // Esconder indicador de carregamento
      setShowLoadingIndicator(false);
      
      // Fade out completo antes de mudar o conteúdo
      setTimeout(() => {
        setDisplayChildren(children);
        
        // Pequeno delay para garantir que o DOM foi atualizado antes do fade in
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 450); // Metade do tempo da transição para começar a mostrar o novo conteúdo
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeComplete); // Também lidar com erros

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, [router, children, animationsEnabled]);

  // Atualizar o conteúdo quando as crianças mudarem sem transição de rota
  useEffect(() => {
    if (!isTransitioning) {
      setDisplayChildren(children);
    }
  }, [children, isTransitioning]);

  return (
    <>
      <div 
        className={`page-transition ${isTransitioning ? 'transitioning' : ''}`}
        aria-live="polite"
      >
        {displayChildren}
      </div>
      
      {/* Indicador de carregamento */}
      <div className={`loading-indicator ${showLoadingIndicator ? 'visible' : ''}`} 
           aria-hidden={!showLoadingIndicator}>
        <div className="loading-pulse"></div>
      </div>
      
      {/* Botão global para ativar/desativar animações */}
      <button
        onClick={() => setAnimationsEnabled(!animationsEnabled)}
        className="fixed bottom-4 right-4 bg-white/80 text-gray-700 px-3 py-1 rounded-full text-xs shadow-md hover:bg-white z-50 accessibility-button"
        aria-label={animationsEnabled ? "Desativar animações" : "Ativar animações"}
      >
        {animationsEnabled ? "Desativar animações" : "Ativar animações"}
      </button>
    </>
  );
};

export default PageTransition;



