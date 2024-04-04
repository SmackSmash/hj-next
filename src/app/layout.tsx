import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HarrisonJack Photography',
  description:
    'HarrisonJack is Chris Harrison & Iain Jack - two professional photographers who divide their time between France & the UK. '
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='min-h-screen flex flex-row bg-black'>
          <nav className='bg-slate-50 dark:bg-slate-50 p-4'>
            <Link href='/contact'>Contact</Link>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
