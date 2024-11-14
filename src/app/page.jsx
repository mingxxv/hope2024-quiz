'use client';

import React, { useState } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { QuestionCard } from './components/QuestionCard';
import { ResultCard } from './components/ResultCard';
import { questions } from './data/questions';
import { calculateResult } from './utils/mbtiScoring';

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

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
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full flex flex-col items-center gap-6">
        <div className="w-[600px]">
          <ProgressBar 
            current={currentQuestion} 
            total={questions.length} 
          />
        </div>
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