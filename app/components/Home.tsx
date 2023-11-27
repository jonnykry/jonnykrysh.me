'use client';

import './Home.css';
import image from '../assets/jonny.webp';
import AnimatedHeader from './AnimatedHeader';
import Image from 'next/image';
import Link from 'next/link';

type Link = {
  url: string;
  title: string;
  target?: string;
};

const Home = (): JSX.Element => {
  const links: Link[] = [
    { url: '/blog', title: 'Blog' },
    { url: 'mailto:jonnykry93@gmail.com', title: 'E-mail', target: '_blank' },
    { url: '/resume.pdf', title: 'Resume', target: '_blank' },
    {
      url: 'https://www.linkedin.com/in/jonnykry/',
      title: 'LinkedIn',
      target: '_blank',
    },
    { url: 'https://github.com/jonnykry', title: 'GitHub', target: '_blank' },
  ];

  const linkElements: JSX.Element[] = links.map((link: Link) => {
    const key = `${link.url}-${link.title}`;

    return (
      <Link key={key} href={link.url} target={link.target || ''}>
        {link.title}
      </Link>
    );
  });

  return (
    <section className='bg-emerald-100 items-center flex flex-col justify-center text-center h-screen font-roboto'>
      <AnimatedHeader />
      <div
        className='w-32
      \ h-32 border-1 my-5 rounded-full block'
      >
        <Image
          className='w-32 h-32 border-1 border-2 object-cover border-gray-950 aspect-auto rounded-full'
          src={image.src}
          alt='A portrait of Jonny Krysh'
          width={200}
          height={200}
          unoptimized
        />
      </div>
      <div className='hero'>
        <div>
          Software engineer with over 6-years of professional experience
        </div>
        <div className='italic text-sm'>
          Keen eye for pixels
          <br />
          Passion for frontend web tech
          <br />
          Searching for next role
        </div>
        <div className='flex justify-center flex-wrap gap-5'>
          {linkElements}
        </div>
      </div>
    </section>
  );
};

export default Home;
