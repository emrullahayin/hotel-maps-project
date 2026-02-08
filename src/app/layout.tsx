import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Istanbul Boutique Hotels | Map & Explorer',
  description:
    'A premium hotel discovery platform with real-time Google Maps synchronization, built using Next.js 14 and Zustand.',
  keywords: [
    'Istanbul hotels',
    'halal hotels istanbul',
    'boutique hotels',
    'interactive map',
    'family friendly stay',
  ],
  authors: [{ name: 'Emrullah Ayın' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

