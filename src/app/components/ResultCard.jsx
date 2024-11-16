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
          objectFit='contain'
        />
      </div>
      <div className="bg-white rounded-b-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Your Result</h2>
        <p className="text-center text-lg mb-6">
          Based on your answers, you are:
          <span className="block mt-2 text-xl font-bold text-blue-600">
            {result}
          </span>
        </p>
        <button
          onClick={onReset}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2"
        >
          <RotateCcw size={20} />
          Try Again
        </button>
      </div>
    </div>
  );
};