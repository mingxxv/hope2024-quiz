'use client'
import React from 'react';
import { RotateCcw } from 'lucide-react';
import Image from 'next/image';

export const ResultCard = ({ result, onReset }) => {
  return (
    <div className="relative mx-auto w-full max-w-[430px] aspect-[430/932]">
      {/* Background Image Layer */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <Image
          src={`/images/types/${result}.jpg`}
          alt={`${result} personality type`}
          fill
          className="pointer-events-none select-none"
          objectFit='contain'
          priority
        />
      </div>

      {/* Try Again Button */}
      <div 
        style={{
          position: 'absolute',
          top: '5%',
          left: 0,
          right: 0,
          zIndex: 9999,
          padding: '1.5rem'
        }}
      >
        <button
          onClick={onReset}
          className="option-button"
        >
          <span className="flex items-center justify-center gap-3">
            <RotateCcw size={24} />
            <span>Try Again</span>
          </span>
        </button>
      </div>

      {/* Typeform Link Button */}
      <div 
        style={{
          position: 'absolute',
          top: '83%',
          left: 0,
          right: 0,
          zIndex: 9999,
          padding: '1.5rem'
        }}
      >
        <button
          onClick={() => window.open('https://hopeglobal.typeform.com/IgniteUnwrapped', '_blank')}
          className="option-button"
        >
          <span className="flex items-center justify-center gap-3">
            Register
          </span>
        </button>
      </div>
    </div>
  );
};