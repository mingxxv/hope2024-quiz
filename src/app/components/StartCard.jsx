import React from 'react';
import Image from 'next/image';

export const StartCard = ({ onStart }) => {
  return (
    <div className="relative mx-auto w-full max-w-[430px] aspect-[430/932]">
      {/* Background Image Layer */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <Image
          src="/images/start.jpg"
          alt="Start screen background"
          fill
          className="pointer-events-none select-none"
          priority
          objectFit='cover'
        />
      </div>

       {/* Title Content */}
       <div 
       className="text-center space-y-8 mb-12"
       style={{
        position: 'absolute',
        top: '40%',
        left: 0,
        right: 0,
        zIndex: 9999,
        padding: '1.5rem'
      }}>
          <h1 className="text-[#8B0000] text-4xl sm:text-4xl leading-relaxed"
            style={{ fontFamily: 'var(--font-fafo)' }}>
            FIND YOUR GINGERBREAD PERSONALITY
          </h1>
          <p className="text-xl sm:text-3xl text-[#8B0000]"
            style={{ fontFamily: 'var(--font-fafo)' }}>
            ESCAPE THE BAKER'S OVEN TO FIND OUT
          </p>
        </div>

      {/* Button Container */}
      <div 
        style={{
          position: 'absolute',
          top: '70%',
          left: 0,
          right: 0,
          zIndex: 9999,
          padding: '1.5rem'
        }}
      >
        
        {/* Start Button */}
        <button
          onClick={onStart}
          style={{
            position: 'relative',
            zIndex: 9999
          }}
          className="option-button w-[80%] mx-auto text-center text-2xl font-bold hover:bg-[#1B4332]/80 transition-colors block"
        >
          <span className="block px-8 py-6">START</span>
        </button>
      </div>
    </div>
  );
};