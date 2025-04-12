import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next";
import './globals.css';
import './fonts.css'; // Import local font fallbacks

// Attempt to load Google fonts with fallback options
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
  fallback: ['Consolas', 'monospace'],
});

export const metadata: Metadata = {
  title: 'Data & AI Engineering Portfolio',
  description: 'A futuristic portfolio showcasing data engineering and AI expertise',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="bg-primary text-text min-h-screen">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
} 