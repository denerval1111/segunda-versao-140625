import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

// Importações da estrutura CSS organizada - NOMES CORRETOS VERIFICADOS NO GITHUB
import '../style/globals.css';
import '../style/base/typography.css';
import '../style/base/utilities.css';
import '../style/components/cards.css';
import '../style/components/buttons.css';
import '../style/components/images.css';
import '../style/layout/responsive.css';
import '../style/animations/transitions.css';  // Nome correto: animations/transitions.css
import '../style/animations/keyframes.css';    // Nome correto: animations/keyframes.css

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Desafio Vitalidade',
  description: 'Transforme sua saúde e bem-estar.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

// Trigger para forçar rebuild - Nomes corretos verificados: 15/06/2025 14:12











