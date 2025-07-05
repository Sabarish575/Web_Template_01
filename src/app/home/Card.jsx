"use client";

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function Card({target,desc}) {
  const targetNumber = target;
  const duration = 2000;

  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      let start = 0;
      const increment = Math.ceil(targetNumber / (duration / 10));

      const counter = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          start = targetNumber;
          clearInterval(counter);
        }
        setCount(start);
      }, 10);

      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div
      ref={ref}
      className='w-[200px] h-[200px] flex flex-col justify-center bg-white items-center rounded-2xl shadow-2xl'
    >
      <h1 className='text-5xl font-bold'>
        {count.toLocaleString()}
      </h1>

      <div>
        <h1 className='max-w-xs text-2xl text-center'>{desc}</h1>
      </div>
    </div>
  );
}

export default Card;
