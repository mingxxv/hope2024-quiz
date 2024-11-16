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
          className="object-cover pointer-events-none select-none"
          priority
        />
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
        {/* Title Content */}
        <div className="text-center space-y-8 mb-12">
          <h1 className="text-4xl font-bold text-[#8B0000] whitespace-pre-line leading-relaxed">
            FIND YOUR GINGERBREAD PERSONALITY
          </h1>
          <p className="text-2xl text-[#8B0000]">
            ESCAPE THE BAKER'S OVEN TO FIND OUT
          </p>
        </div>
        
        {/* Start Button */}
        <button
          onClick={onStart}
          style={{
            position: 'relative',
            zIndex: 9999
          }}
          className="option-button w-[80%] mx-auto p-8 text-center text-2xl font-bold hover:bg-[#1B4332]/80 transition-colors block"
        >
          START
        </button>
      </div>
    </div>
  );
};