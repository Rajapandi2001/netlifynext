"use client";
import React, { useState } from 'react';
// import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';

const MAX_VISIBILITY = 2;

const Carousel = ({ children }) => {
  const [active, setActive] = useState(1);
  const count = React.Children.count(children);

  return (
    <div className="relative w-full max-w-[70%] h-[45vw] max-h-[532px] perspective-[200px] sm:perspective-[300px] md:perspective-[400px] lg:perspective-[500px]">
      {active > 0 && (
        <button
          className="absolute bottom-0 transform -translate-y-1/6 -translate-x-full text-black text-3xl sm:text-4xl lg:text-5xl z-10 focus:outline-none"
          onClick={() => setActive((i) => i - 1)}
        >
          <img
            src="img/—Pngtree—vector back icon_4267356.png"
            alt="arrow"
            className='w-[30px] sm:w-[40px] md:w-[45px] lg:w-[50px] xl:w-[64px] 2xl:w-[72px]'
          />
        </button>
      )}
      {React.Children.map(children, (child, i) => {
        const zIndex = active === i ? 10 : 'auto';

        return (
          <div
            className="absolute w-full h-full transition-all duration-300 ease-out"
            style={{
              transform: `
                rotateY(${(active - i) * 50}deg)
                scaleY(${1 - Math.abs(active - i) * 0.4})
                translateZ(${-Math.abs(active - i) * 35}vw)
                translateX(${Math.sign(active - i) * -1}vw)`,
              filter: `blur(${Math.abs(active - i) * 1}px)`,
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
              pointerEvents: active === i ? 'auto' : 'none',
              zIndex,
            }}
          >
            {child}
          </div>
        );
      })}
      {active < count - 1 && (
        <button
          className="absolute bottom-0 right-0 transform translate-x-full text-black text-3xl sm:text-4xl lg:text-5xl z-10 focus:outline-none"
          onClick={() => setActive((i) => i + 1)}
        >
          <img
            src="img/—Pngtree—vector forward icon_4184777.png"
            alt="arrow"
            className='w-[30px] sm:w-[40px] md:w-[45px] lg:w-[50px] xl:w-[64px] 2xl:w-[72px]'
          />
        </button>

      )}
    </div>
  );
};

export default Carousel;
