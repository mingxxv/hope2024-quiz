import React from 'react';
import Image from 'next/image';

export const QuestionCard = ({ question, onAnswer }) => {
  return (
    <div className="relative w-[600px] h-[800px] mx-auto rounded-lg">
      <div className="absolute inset-0">
        <Image
          src={`/images/q${question.id}.jpg`}
          alt={`Question ${question.id} background`}
          width={600}
          height={800}
          className="object-cover rounded-lg"
          priority
        />
      </div>
      <div className="absolute bottom-6 left-6 right-6 space-y-3 z-10">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option.score)}
            className="option-button w-full p-4 text-left flex items-center justify-between group transition-colors text-xl hover:bg-[#1B4332]/80"
          >
            <span>{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};