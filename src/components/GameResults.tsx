import React from 'react';
import { Trophy, ArrowRight } from 'lucide-react';

interface GameResultsProps {
  score: number;
  totalRounds: number;
  onRestart: () => void;
}

const GameResults: React.FC<GameResultsProps> = ({ 
  score, 
  totalRounds,
  onRestart
}) => {
  const percentage = Math.round((score / totalRounds) * 100);
  
  let message = "";
  let messageClass = "";
  
  if (percentage === 100) {
    message = "Perfect! You're an animal habitat expert!";
    messageClass = "text-emerald-600";
  } else if (percentage >= 80) {
    message = "Great job! You know your animal habitats well!";
    messageClass = "text-emerald-600";
  } else if (percentage >= 60) {
    message = "Good effort! You're learning about animal habitats!";
    messageClass = "text-amber-600";
  } else {
    message = "Keep learning about animal habitats and try again!";
    messageClass = "text-orange-600";
  }
  
  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-xl shadow-md">
      <div className="text-center mb-6">
        <div className="inline-block p-4 bg-amber-100 rounded-full mb-4">
          <Trophy className="w-12 h-12 text-amber-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
        <p className={`text-xl font-medium ${messageClass}`}>{message}</p>
      </div>
      
      <div className="flex justify-center mb-8">
        <div className="relative w-48 h-48">
          <div className="w-full h-full rounded-full bg-gray-200 absolute"></div>
          <div 
            className="w-full h-full rounded-full absolute"
            style={{ 
              background: `conic-gradient(#10B981 ${percentage}%, transparent ${percentage}%)` 
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-4xl font-bold text-gray-800">{percentage}%</span>
            <span className="text-gray-600 text-lg">{score}/{totalRounds}</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <p className="text-gray-600 mb-6 text-center">
          You correctly identified {score} out of {totalRounds} land animals.
        </p>
        
        <button 
          onClick={onRestart}
          className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          Play Again
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default GameResults;