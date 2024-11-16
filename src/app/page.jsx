'use client';

import React, { useState } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { QuestionCard } from './components/QuestionCard';
import { ResultCard } from './components/ResultCard';
import { StartCard } from './components/StartCard';
import { questions } from './data/questions';
import { calculateResult } from './utils/mbtiScoring';

export default function QuizApp() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswer = (score) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (!started) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <StartCard onStart={handleStart} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-[430px]">
        {!showResult && (
          <ProgressBar 
            current={currentQuestion} 
            total={questions.length} 
          />
        )}
        
        {showResult ? (
          <ResultCard 
            result={calculateResult(answers)} 
            onReset={resetQuiz} 
          />
        ) : (
          <QuestionCard
            key={currentQuestion}
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
          />
        )}
      </div>
    </div>
  );
}