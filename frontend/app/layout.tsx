import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CivitasIQ - Intelligent Smart City Management System',
  description: 'Unified AI-driven command platform for modern cities',
  keywords: 'smart city, urban management, AI, IoT, civic technology',
  authors: [{ name: 'CivitasIQ Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <main className="lg:pl-64">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
