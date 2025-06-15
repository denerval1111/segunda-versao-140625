import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

// Importações da nova estrutura CSS
import '../styles/globals.css';
import '../styles/base/typography.css';
import '../styles/base/utilities.css';
import '../styles/components/cards.css';
import '../styles/components/buttons.css';
import '../styles/components/images.css';
import '../styles/layout/responsive.css';
import '../styles/animations/transitions.css';
import '../styles/animations/keyframes.css';

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




