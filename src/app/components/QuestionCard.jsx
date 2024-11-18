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
          alt={`Loading, please wait...`}
          fill
          priority
          objectFit='cover'
        />
      </div>

      {/* Buttons Layer */}
      <div 
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          zIndex: 9999,
          padding: '1.5rem',
          ...(isTransitionScene 
            ? { 
                top: '85%', 
                transform: 'translateY(-50%)',
                display: 'flex',
                justifyContent: 'center'
              } 
            : { 
                top: '70%' 
              }
          )
        }}
      >
        <div className={`${isTransitionScene ? 'w-full flex justify-center' : 'space-y-4'}`}>
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option.score)}
              style={{
                position: 'relative',
                zIndex: 9999
              }}
              className={`option-button p-5 text-xl transition-colors
                ${isTransitionScene 
                  ? 'w-[80%] p-8 text-center text-2xl font-bold justify-center' 
                  : 'w-full text-left flex items-center justify-between'}`}
            >
              <span className={`${isTransitionScene ? 'text-2xl' : 'text-base sm:text-lg'}`}>
                {option.text}
              </span>
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