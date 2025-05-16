import React from 'react';

interface GameControlsProps {
  gameStatus: 'intro' | 'playing' | 'feedback' | 'completed';
  currentRound: number;
  totalRounds: number;
  score: number;
  onNext: () => void;
  onRestart: () => void;
  selectedAnimalId: string | null;
}

const GameControls: React.FC<GameControlsProps> = ({
  gameStatus,
  currentRound,
  totalRounds,
  score,
  onNext,
  onRestart,
  selectedAnimalId,
}) => {
  let buttonText = '';
  let isDisabled = false;

  if (gameStatus === 'intro') {
    buttonText = 'Start Game';
  } else if (gameStatus === 'playing') {
    buttonText = 'Submit Answer';
    isDisabled = !selectedAnimalId;
  } else if (gameStatus === 'feedback') {
    buttonText = currentRound < totalRounds ? 'Next Round' : 'See Results';
  } else if (gameStatus === 'completed') {
    buttonText = 'Play Again';
  }

  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="flex items-center justify-between w-full max-w-md mb-6">
        <div className="text-center">
          <div className="text-sm font-medium text-gray-500">Round</div>
          <div className="text-2xl font-bold text-gray-800">{currentRound}/{totalRounds}</div>
        </div>
        
        <div className="w-px h-10 bg-gray-300"></div>
        
        <div className="text-center">
          <div className="text-sm font-medium text-gray-500">Score</div>
          <div className="text-2xl font-bold text-gray-800">{score}/{totalRounds}</div>
        </div>
      </div>

      {gameStatus === 'playing' && (
        <div className="text-center mb-4 text-lg font-medium text-gray-700">
          Which animal lives on land?
        </div>
      )}
      
      {gameStatus === 'feedback' && selectedAnimalId && (
        <div className="mb-6 py-3 px-6 rounded-lg bg-gray-100 text-center">
          <p className="text-lg font-medium text-gray-800">
            {selectedAnimalId && score === currentRound ? (
              'Correct! This animal lives on land.'
            ) : (
              'Incorrect. Try to find the land animal next time.'
            )}
          </p>
        </div>
      )}
      
      <button
        onClick={gameStatus === 'completed' ? onRestart : onNext}
        disabled={isDisabled}
        className={`px-8 py-3 rounded-lg text-white font-medium transition-all duration-300 transform
          ${isDisabled 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95'
          }
        `}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default GameControls;