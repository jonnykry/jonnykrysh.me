import { Metadata } from 'next';

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
    <html lang='en'>
      <head>
        <link rel='manifest' href='/site.webmanifest' />
        <meta
          name='google-site-verification'
          content='Z6gkGqIhfSVq8CAIaWuPPk9bygmylU3OucrKiORZlfs'
        />{' '}
        {/* TODO: Next.js Metadata replacement for this? */}
      </head>
      <body>
        <div id='root'>{children}</div>
      </body>
    </html>
  );
}
