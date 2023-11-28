'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import AnimationControls from './AnimationControls';

const NAME = 'jonny krysh';
const SPACE = ' ';

type AnimationSubset = {
  autoplay: boolean;
  duration: number;
  direction: string;
};

const delayFx = (idx: number, ms: number) => {
  return idx * ms;
};

const buildAnimations = (baseAnimation: AnimationSubset) => {
  return [
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
};

const AnimatedHeader = (): JSX.Element => {
  const animation = useRef<anime.AnimeInstance | null>(null);
  const [isRunning, setIsRunning] = useState(true);
  const [shouldReset, setShouldReset] = useState(false);
  const [endless, setEndless] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [animationIdx, setAnimationIdx] = useState(0);

  useEffect(() => {
    const baseAnimation = {
      autoplay: true,
      duration: 2000,
      direction: 'alternate',
    };

    const animations: anime.AnimeParams[] = buildAnimations(baseAnimation);

    if (!animation.current) {
      const cfg = animations[animationIdx % animations.length];
      setAnimationIdx(animationIdx + 1);
      const animeInstance = anime({
        ...baseAnimation,
        ...cfg,
        targets: '#wavy-text',
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

  const nameElements: JSX.Element[] = useMemo(
    () =>
      NAME.split('').map((letter: string, idx: number) => {
        if (letter === SPACE) {
          return (
            <span
              key={`space-${idx}`}
              className='cursor-default px-2 md:px-3 inline-block text-7xl md:text-9xl xl:text-[9rem]'
            ></span>
          );
        }

        const key = `${letter}-${idx}`;
        return (
          <span
            key={key}
            id='wavy-text'
            className='font-staatliches inline-block cursor-default text-7xl md:text-9xl xl:text-[9rem]'
          >
            {letter}
          </span>
        );
      }),
    []
  );

  const onPause = () => {
    if (animation.current) {
      if (animation.current?.paused) {
        animation.current.play();
        setIsPaused(false);
      } else {
        animation.current.pause();
        setIsPaused(true);
      }
    }
  };

  return (
    <div>
      <div id='wavy'>{nameElements}</div>
      <AnimationControls
        isRepeating={endless}
        isPaused={isPaused}
        isRunning={isRunning}
        handlePauseClick={() => onPause()}
        handlePlayClick={() => setShouldReset(true)}
        handleRepeatClick={() => setEndless(true)}
        handleStopClick={() => setEndless(false)}
      />
    </div>
  );
};

export default AnimatedHeader;
