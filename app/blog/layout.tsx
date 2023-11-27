'use client';

import Link from 'next/link';
import SocialMediaLinks from '../components/SocialMediaLinks';

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col h-full bg-emerald-50'>
      <header className='bg-emerald-200 z-10 fixed shadow-md w-full p-10 top-0 left-0 flex flex-row justify-between text-xl gap-5 py-5'>
        <Link
          className='text-3xl font-staatliches text-black no-underline'
          href='/'
        >
          Jonny Krysh
        </Link>
        <div className='flex items-center gap-3'>
          <SocialMediaLinks />
        </div>
      </header>
      <div className='mt-20 h-full flex flex-col self-center max-w-3xl'>
        {children}
      </div>
      <footer className='bg-emerald-200 font-staatliches w-full flex flex-row gap-3 justify-center text-xl py-5 items-center border-t border-gray-400'>
        <Link className='no-underline text-black' href='/'>
          Jonny Krysh &#xa9; 2023
        </Link>
        <div className='cursor-default'>&middot;</div>
        <SocialMediaLinks />
      </footer>
    </div>
  );
}
