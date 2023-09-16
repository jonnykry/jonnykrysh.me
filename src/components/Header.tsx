import { ReactElement, useEffect, useRef, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './Header.css';

const NAME = 'jonny krysh';
const SPACE = ' ';

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState<anime.AnimeInstance | null>(null);
  const [shouldReset, setShouldReset] = useState(false);
  const [animationIdx, setAnimationIdx] = useState(0);

  const delayFx = (idx: number, ms: number) => {
    return idx * ms;
  };

  useEffect(() => {
    const baseAnimation = {
      autoplay: true,
      duration: 2000,
      direction: 'alternate',
    };

    const animations: anime.AnimeParams[] = [
      {
        // falling
        ...baseAnimation,
        keyframes: [
          { translateY: 0, color: '#1d1d1d' },
          { translateY: -30, color: '#00c18e' },
          {
            translateY: anime.stagger(35, {
              from: 'center',
              axis: 'y',
            }),
            rotateZ: anime.stagger([-30, 30], {
              from: 'center',
              axis: 'y',
            }),
            color: '#1d1d1d',
          },
        ],
        easing: 'easeInOutSine',
        delay: (_el: HTMLElement, i: number) => delayFx(i, 50),
      },
      {
        // spin
        ...baseAnimation,
        keyframes: [
          { rotateZ: 0, color: '#1d1d1d' },
          { rotateZ: -360, color: '#0BD6D9' },
          { rotateZ: 0, color: '#1d1d1d' },
        ],
        easing: 'easeInOutSine',
        delay: (_el: HTMLElement, i: number) => delayFx(i, 200),
      },
      {
        // spin reverse
        ...baseAnimation,
        keyframes: [
          { rotateZ: 0, color: '#1d1d1d' },
          { rotateZ: 360, color: '#0BD968' },
          { rotateZ: 0, color: '#1d1d1d' },
        ],
        easing: 'easeOutSine',
        delay: (_el: HTMLElement, i: number) => delayFx(i, 200),
      },
    ];

    if (!animation) {
      const cfg = animations[animationIdx % animations.length];
      setAnimationIdx(animationIdx + 1);
      const animeInstance = anime({
        ...baseAnimation,
        ...cfg,
        targets: headerRef?.current?.children || [],
      });

      animeInstance.finished.then(() => {
        // Clean up previous animations each time, enabling rerun button
        anime.remove(headerRef.current ? headerRef.current.children : []);
        setAnimation(null);
      });

      setAnimation(animeInstance);
      setShouldReset(false);
    }
  }, [shouldReset, headerRef.current]);

  const nameElements: ReactElement[] = NAME.split('').map(
    (letter: string, idx: number) => {
      if (letter === SPACE) {
        return <span key={`space-${idx}`} className='space'></span>;
      }

      const key = `${letter}-${idx}`;
      return (
        <span key={key} className='wavy-text'>
          {letter}
        </span>
      );
    }
  );

  const onReset = () => {
    setShouldReset(true);
  };

  return (
    <div className='header-container'>
      <div className='header wavy' ref={headerRef}>
        {nameElements}
      </div>
      <button
        className='control'
        style={{ visibility: animation ? 'hidden' : 'visible' }}
        onClick={onReset}
      >
        Go Again!
      </button>
    </div>
  );
};

export default Header;
