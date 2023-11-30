'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SocialMediaLinks() {
  const linkClasses = 'no-underline text-black';
  return (
    <>
      <Link
        className={linkClasses}
        href='mailto:jonnykry93@gmail.com'
        target='_blank'
      >
        <Image
          className='h-5 w-5 text-black'
          src='/mail.svg'
          height={50}
          width={50}
          alt={'MailTo icon'}
        />
      </Link>
      <Link
        className={linkClasses}
        href='https://www.linkedin.com/in/jonnykry/'
        target='_blank'
      >
        <Image
          className='h-5 w-5'
          src='/linkedin.svg'
          height={50}
          width={50}
          alt={'LinkedIn icon'}
        />
      </Link>
      <Link
        className={linkClasses}
        href='https://github.com/jonnykry'
        target='_blank'
      >
        <Image
          className='h-5 w-5'
          src='/github.svg'
          height={50}
          width={50}
          alt={'GitHub icon'}
        />
      </Link>
    </>
  );
}
