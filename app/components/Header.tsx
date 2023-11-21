'use client';

import { useEffect, useRef, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './Header.css';

const NAME = 'jonny krysh';
const SPACE = ' ';

const Header = (): JSX.Element => {
  const animation = useRef<anime.AnimeInstance | null>(null);
  const [isRunning, setIsRunning] = useState(true);
  const [shouldReset, setShouldReset] = useState(false);
  const [endless, setEndless] = useState(false);
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
        // falling, spinning
        ...baseAnimation,
        translateY: anime.stagger(25, {
          from: 'center',
          axis: 'y',
        }),
        rotateZ: anime.stagger(360, {
          from: 'center',
          axis: 'x',
        }),
        color: '#0BD968',
        delay: anime.stagger(200, { from: 'center' }),
        easing: 'easeInOutQuad',
      },
      {
        // coinflip
        ...baseAnimation,
        rotateY: 180,
        keyframes: [
          { color: '#1d1d1d' },
          { color: '#0bd968' },
          {
            color: '#1d1d1d',
          },
        ],
        direction: 'alternate',
        easing: 'easeInQuad',
      },
      {
        // disorient
        ...baseAnimation,
        rotateX: 180,
        keyframes: [
          { color: '#1d1d1d' },
          { color: '#00c18e' },
          {
            color: '#1d1d1d',
          },
        ],
        direction: 'alternate',
        easing: 'easeInOutQuad',
        delay: anime.stagger(200, { from: 'center' }),
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

    if (!animation.current) {
      const cfg = animations[animationIdx % animations.length];
      setAnimationIdx(animationIdx + 1);
      const animeInstance = anime({
        ...baseAnimation,
        ...cfg,
        targets: '.wavy-text',
      });

      animeInstance.finished.then(() => {
        animation.current = null;
        if (!endless) {
          setIsRunning(false);
        } else {
          setShouldReset(true);
        }
      });

      animation.current = animeInstance;
      setShouldReset(false);
      setIsRunning(true);
    }
  }, [shouldReset, endless]);

  const nameElements: JSX.Element[] = NAME.split('').map(
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
      <header className='wavy'>{nameElements}</header>
      <div className='controls'>
        <>
          <button
            className='control'
            style={{
              visibility: isRunning || endless ? 'hidden' : 'visible',
            }}
            onClick={onReset}
          >
            Go Again!
          </button>
          <button
            className='control'
            style={{
              visibility: isRunning || endless ? 'hidden' : 'visible',
            }}
            onClick={() => setEndless(true)}
          >
            Endless
          </button>
        </>
      </div>
    </div>
  );
};

export default Header;
