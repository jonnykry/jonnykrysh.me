import { Metadata } from 'next';
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
    <html lang='en' className='h-screen m-0 bg-emerald-100'>
      <head>
        <link rel='manifest' href='/site.webmanifest' />
        <meta
          name='google-site-verification'
          content='Z6gkGqIhfSVq8CAIaWuPPk9bygmylU3OucrKiORZlfs'
        />
      </head>
      <body className='h-screen m-0'>
        <main id='root' className='h-screen'>
          {children}
        </main>
      </body>
    </html>
  );
}
