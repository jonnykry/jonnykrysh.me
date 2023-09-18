import './Home.css';
import imgUrl from '../assets/jonny.png';
import resumeUrl from '../assets/resume.pdf';
import Header from './Header';
import { useEffect } from 'react';

type Link = {
  url: string;
  title: string;
};

const Home = (): JSX.Element => {
  const links: Link[] = [
    { url: 'mailto:jonnykry93@gmail.com', title: 'E-mail' },
    { url: resumeUrl, title: 'Resume' },
    { url: 'https://www.linkedin.com/in/jonnykry/', title: 'LinkedIn' },
    { url: 'https://github.com/jonnykry', title: 'GitHub' },
  ];

  useEffect(() => {
    const fetchMusic = async () => {
      const response = await fetch('http://localhost:3000');
      const responsejson = await response.json();
      console.log(responsejson);
    };

    fetchMusic();
  }, []);

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
          <img src={imgUrl} alt='A portrait of Jonny Krysh' />
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
