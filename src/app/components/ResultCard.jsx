'use client'
import React from 'react';
import { RotateCcw } from 'lucide-react';
import Image from 'next/image';

export const ResultCard = ({ result, onReset }) => {
  return (
    <div className="relative mx-auto w-full max-w-[430px] aspect-[430/932]">
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <Image
          src={`/images/types/${result}.webp`}
          alt={`${result} personality type`}
          fill
          className="pointer-events-none select-none"
          objectFit='contain'
          priority
        />
      </div>

      <div 
        style={{
          position: 'absolute',
          top: '68%',
          left: 0,
          right: 0,
          zIndex: 9999,
          padding: '1.5rem'
        }}
      >
        <button
          onClick={() => window.open('https://hopeglobal.typeform.com/IgniteUnwrapped', '_blank')}
          className="end-button"
        >
          <span className="flex items-center justify-center gap-1">
            Open Envelope
          </span>
        </button>
      </div>

      <div 
        style={{
          position: 'absolute',
          top: '75%',
          left: 0,
          right: 0,
          zIndex: 9999,
          padding: '1.5rem'
        }}
      >
        <button
          onClick={() => window.open('https://www.instagram.com/hope.ignite?igsh=ZnloY24yN2g4eG1n&utm_source=qr', '_blank')}
          className="end-button"
        >
          <span className="flex items-center justify-center gap-1 text-sm">
            Follow us
          </span>
        </button>
      </div>
    </div>
  );
};