import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Coconut Cowboy | Western-Inspired Clothing',
  description: 'Bold, modern clothing inspired by Western culture.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}