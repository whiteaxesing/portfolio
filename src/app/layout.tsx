// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import Navigation from '@/components/Navigation';
import ConditionalFooter from '@/components/ConditionalFooter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Francisco González - Full-Stack Software Engineer',
    template: '%s | Francisco González',
  },
  description:
    'Full-Stack Software Engineer specializing in backend, microservices, and modern technologies. Personal portfolio and blog.',
  keywords: [
    'Full-Stack',
    'Backend',
    'Software Engineer',
    'React',
    'Next.js',
    'Java',
    'Rust',
    'Spring Boot',
    'Costa Rica',
  ],
  authors: [{ name: 'Francisco González' }],
  creator: 'Francisco González',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://franciscogonzalez.tech',
    siteName: 'Francisco González - Portfolio',
    title: 'Francisco González - Full-Stack Software Engineer',
    description:
      'Full-Stack Software Engineer specializing in backend, microservices, and modern technologies.',
    images: [
      {
        url: 'https://franciscogonzalez.tech/images/profile.png',
        width: 1200,
        height: 630,
        alt: 'Francisco González - Full-Stack Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Francisco González - Full-Stack Software Engineer',
    description:
      'Full-Stack Software Engineer specializing in backend, microservices, and modern technologies.',
    creator: '@franzma8',
    images: ['https://franciscogonzalez.tech/images/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ciUDnyE37v6BpevB2CeP5-di2nbSqyyzQ6qbBS0MpUw',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <main style={{ minHeight: '100vh' }}>{children}</main>
          <ConditionalFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
