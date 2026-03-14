
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ourtab.online'),
  title: 'OurTab: The Ultimate Meal System & Expenses Tracking for Bachelor Houses',
  description: 'The ultimate Meal System and Expenses Tracking app for your Bachelor House. Elevate your household management with OurTab. Experience seamless collaboration and financial clarity.',
  keywords: ['OurTab', 'Meal System', 'Bachelor House', 'Expenses Tracking', 'Household Management', 'Split Bills'],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'OurTab: Meal System & Expenses Tracking',
    description: 'The ultimate Meal System and Expenses Tracking app for your Bachelor House.',
    url: 'https://ourtab.online',
    siteName: 'OurTab',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'OurTab Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OurTab | Meal System & Expenses Tracking',
    description: 'The ultimate Meal System and Expenses Tracking app for your Bachelor House.',
    images: ['/images/icon.png'],
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
    google: 'googledaadf2a24d55c358',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-emerald-500/30 selection:text-emerald-200">
        <div className="fixed inset-0 -z-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]" />
        {children}
      </body>
    </html>
  );
}
