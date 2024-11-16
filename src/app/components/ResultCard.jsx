import React from 'react';
import { RotateCcw } from 'lucide-react';
import Image from 'next/image';

export const ResultCard = ({ result, onReset }) => {
  return (
    <div className="w-full max-w-md relative">
      <div className="relative w-full h-64 mb-6 rounded-t-lg overflow-hidden">
        <Image
          src={`/images/types/${result}.jpg`}
          alt={`${result} personality type`}
          fill
          objectFit='contain  '
        />
      </div>
      <div className="bg-white rounded-b-lg shadow-lg p-6">
        <button
          onClick={onReset}
          className="option-button"
        >
          <RotateCcw size={20} />
          Try Again
        </button>
      </div>
    </div>
  );
};