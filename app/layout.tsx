import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://jonnykrysh.me'),
  title: 'Jonny Krysh - personal website',
  description:
    'Personal website for Jonny Krysh, including resume, social links, and more.',
  openGraph: {
    title: 'Jonny Krysh - personal website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='m-0 p-0 w-full h-full'>
      <head>
        <link rel='manifest' href='/site.webmanifest' />
        <meta
          name='google-site-verification'
          content='Z6gkGqIhfSVq8CAIaWuPPk9bygmylU3OucrKiORZlfs'
        />
      </head>
      <body className='m-0 p-0 w-full h-full flex flex-col flex-1'>
        <main id='root' className='flex-auto'>
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
