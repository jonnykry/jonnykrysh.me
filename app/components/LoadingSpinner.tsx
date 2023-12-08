'use client';

import anime from 'animejs';
import { useEffect, useRef } from 'react';

export function LoadingSpinner() {
  const animation = useRef<anime.AnimeInstance | null>(null);
  const config = {
    autoplay: true,
    duration: 1000,
    fill: [
      {
        value: 'rgb(21 128 61)',
        easing: 'easeInOutQuint',
        duration: 500,
      },
      {
        value: 'rgb(0 0 0)',
        easing: 'easeInOutQuint',
        duration: 500,
      },
    ],
    scale: [
      {
        value: 0.5,
        easing: 'easeInOutQuint',
        duration: 500,
      },
      {
        value: 1,
        easing: 'easeInOutQuint',
        duration: 500,
      },
    ],
    delay: anime.stagger(250),
    loop: true,
  };

  useEffect(() => {
    animation.current = anime({
      ...config,
      targets: '#loadingSpinner',
    });
  }, []);

  return (
    <div
      className='flex items-center self-center my-auto gap-2 py-4'
      role='status'
    >
      <div id='loadingSpinner' className='w-3 h-3'>
        <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='50' cy='50' r='50' />
        </svg>
      </div>
      <div id='loadingSpinner' className='w-3 h-3'>
        <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='50' cy='50' r='50' />
        </svg>
      </div>
      <div id='loadingSpinner' className='w-3 h-3'>
        <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='50' cy='50' r='50' />
        </svg>
      </div>
      <span className='italic sr-only text-gray-500'>Loading blog post...</span>
    </div>
  );
}
