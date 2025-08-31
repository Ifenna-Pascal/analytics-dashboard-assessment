import { fontPoppins, fontRobotoMono } from '@/lib/fonts';
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib';

export const metadata: Metadata = {
  title: 'Kaggle.',
  description: 'Kaggle Electric Vehicles Dataset Analysis',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-title" content="Mallgrid" />
      <body
        className={cn(
          'min-h-screen bg-background font-poppins antialiased',
          fontPoppins.variable,
          fontRobotoMono.variable
        )}
      >
        <main className="flex-1 md:px-8">{children}</main>
      </body>
    </html>
  );
}
