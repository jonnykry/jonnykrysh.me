'use client';

import './Home.css';
import image from '../assets/jonny.png';
import Header from './Header';

type Link = {
  url: string;
  title: string;
};

const Home = (): JSX.Element => {
  const links: Link[] = [
    { url: 'mailto:jonnykry93@gmail.com', title: 'E-mail' },
    { url: '/resume.pdf', title: 'Resume' },
    { url: 'https://www.linkedin.com/in/jonnykry/', title: 'LinkedIn' },
    { url: 'https://github.com/jonnykry', title: 'GitHub' },
  ];

  const linkElements: JSX.Element[] = links.map((link: Link) => {
    const key = `${link.url}-${link.title}`;

    return (
      <div key={key} className='link-container'>
        <a href={link.url} target='_blank'>
          {link.title}
        </a>
      </div>
    );
  });

  return (
    <>
      <section className='hero-container'>
        <Header />
        <div className='img-container'>
          <img src={image.src} alt='A portrait of Jonny Krysh' />
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
    </>
  );
};

export default Home;
