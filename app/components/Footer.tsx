'use client';

import Link from 'next/link';
import SocialMediaLinks from './SocialMediaLinks';

export default function Footer() {
  return (
    <footer className='bg-emerald-200 font-staatliches w-full flex flex-row gap-3 justify-center text-xl py-5 items-center border-t border-gray-400'>
      <Link className='no-underline hover:no-underline text-black' href='/'>
        Jonny Krysh &#xa9; 2023
      </Link>
      <div className='cursor-default'>&middot;</div>
      <SocialMediaLinks />
    </footer>
  );
}
