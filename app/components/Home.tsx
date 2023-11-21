'use client';

import './Home.css';
import image from '../assets/jonny.webp';
import Header from './Header';
import Image from 'next/image';

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
      <div key={key} className='link-container'>
        <a href={link.url} target={link.target || ''}>
          {link.title}
        </a>
      </div>
    );
  });

  return (
    <section className='hero-container'>
      <Header />
      <div className='img-container'>
        <Image
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
        <div className='haiku'>
          Keen eye for pixels
          <br />
          Passion for frontend web tech
          <br />
          Searching for next role
        </div>
        <div className='links-container'>{linkElements}</div>
      </div>
    </section>
  );
};

export default Home;
