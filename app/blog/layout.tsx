'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // TODO: sticky footer hack for blog page
  let additionalClasses = '';
  if (pathname === '/blog') {
    additionalClasses = ' absolute bottom-0';
  }

  return (
    <div className='h-full relative'>
      <header className='bg-emerald-100 shadow-md w-full z-10 p-10 top-0 left-0 flex flex-row text-xl gap-5 py-5'>
        <Link
          className='text-3xl font-staatliches text-black no-underline'
          href='/'
        >
          Jonny Krysh
        </Link>
      </header>
      <article className='h-min-full relative flex flex-col max-w-3xl mx-auto px-10 rounded-lg'>
        {children}
      </article>
      <footer
        className={
          'font-staatliches h-20 w-full flex flex-row justify-center text-xl py-5' +
          additionalClasses
        }
      >
        Jonny Krysh &#xa9; 2023
      </footer>
    </div>
  );
}
