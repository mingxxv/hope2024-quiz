import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export const QuestionCard = ({ question, onAnswer }) => {
  const isTransitionScene = question.options.length === 1 && question.options[0].text === "Next";

  return (
    <div className="relative mx-auto w-full max-w-[430px] aspect-[430/932]">
      {/* Background Image Layer */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <Image
          src={`/images/s${question.id}.png`}
          alt={`Question ${question.id} background`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Buttons Layer */}
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
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option.score)}
              style={{
                position: 'relative',
                zIndex: 9999
              }}
              className={`option-button w-full p-5 text-left flex items-center justify-between group transition-colors text-xl
                ${isTransitionScene ? 'justify-center' : ''}`}
            >
              <span className="text-base sm:text-lg">{option.text}</span>
              {!isTransitionScene && (
                <ChevronRight 
                  className="text-white"
                  size={20} 
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};