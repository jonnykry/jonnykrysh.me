'use client';

import Link from 'next/link';
import SocialMediaLinks from './SocialMediaLinks';

export default function Header() {
  return (
    <header className='bg-emerald-200 z-10 fixed shadow-md w-full p-10 top-0 left-0 flex flex-row justify-between text-xl gap-5 py-5'>
      <Link
        className='text-3xl font-staatliches text-black no-underline hover:no-underline'
        href='/'
      >
        Jonny Krysh
      </Link>
      <div className='flex items-center gap-3'>
        <SocialMediaLinks />
      </div>
    </header>
  );
}
