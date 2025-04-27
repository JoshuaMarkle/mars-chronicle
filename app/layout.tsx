import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Source_Serif_4 } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
});

export const metadata: Metadata = {
  title: 'The Mars Chronicle | Rethinking Mars Exploration',
  description: 'Exploring the future of Mars exploration through the lens of AI progress',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${sourceSerif.variable} font-serif`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen overflow-hidden bg-paper text-black">
            <div className="relative z-10">
              <Header />
              <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
