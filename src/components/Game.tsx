import React, { useState, useEffect } from 'react';
import { generateAnimalSets } from '../data/animals';
import { GameState, AnimalSet } from '../types';
import AnimalGrid from './AnimalGrid';
import GameControls from './GameControls';
import GameResults from './GameResults';
import IntroScreen from './IntroScreen';

const TOTAL_ROUNDS = 5;

const Game: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentRound: 1,
    totalRounds: TOTAL_ROUNDS,
    score: 0,
    currentSet: null,
    gameStatus: 'intro',
    selectedAnimalId: null,
    sets: [],
  });

  // Initialize game
  useEffect(() => {
    const sets = generateAnimalSets(TOTAL_ROUNDS);
    setGameState(prev => ({
      ...prev,
      sets,
      currentSet: sets[0],
    }));
  }, []);

  const handleSelectAnimal = (id: string) => {
    if (gameState.gameStatus !== 'playing') return;
    
    setGameState(prev => ({
      ...prev,
      selectedAnimalId: id,
    }));
  };

  const handleNext = () => {
    const { gameStatus, currentRound, totalRounds, selectedAnimalId, sets } = gameState;
    
    if (gameStatus === 'intro') {
      // Start the game
      setGameState(prev => ({
        ...prev,
        gameStatus: 'playing',
      }));
      return;
    }
    
    if (gameStatus === 'playing') {
      // Check answer
      const isCorrect = selectedAnimalId && 
        gameState.currentSet?.animals.find(a => a.id === selectedAnimalId)?.habitat === 'land';
      
      setGameState(prev => ({
        ...prev,
        score: isCorrect ? prev.score + 1 : prev.score,
        gameStatus: 'feedback',
      }));
      return;
    }
    
    if (gameStatus === 'feedback') {
      if (currentRound < totalRounds) {
        // Move to next round
        const nextRound = currentRound + 1;
        setGameState(prev => ({
          ...prev,
          currentRound: nextRound,
          currentSet: sets[nextRound - 1],
          selectedAnimalId: null,
          gameStatus: 'playing',
        }));
      } else {
        // Game completed
        setGameState(prev => ({
          ...prev,
          gameStatus: 'completed',
        }));
      }
      return;
    }
  };

  const handleRestart = () => {
    // Reset game
    const newSets = generateAnimalSets(TOTAL_ROUNDS);
    setGameState({
      currentRound: 1,
      totalRounds: TOTAL_ROUNDS,
      score: 0,
      currentSet: newSets[0],
      gameStatus: 'playing',
      selectedAnimalId: null,
      sets: newSets,
    });
  };

  if (gameState.gameStatus === 'intro') {
    return <IntroScreen onStart={handleNext} />;
  }

  if (gameState.gameStatus === 'completed') {
    return (
      <GameResults 
        score={gameState.score} 
        totalRounds={gameState.totalRounds}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {gameState.currentSet && (
        <>
          <AnimalGrid
            animals={gameState.currentSet.animals}
            selectedAnimalId={gameState.selectedAnimalId}
            onSelectAnimal={handleSelectAnimal}
            showResult={gameState.gameStatus === 'feedback'}
            disabled={gameState.gameStatus !== 'playing'}
          />
          <GameControls
            gameStatus={gameState.gameStatus}
            currentRound={gameState.currentRound}
            totalRounds={gameState.totalRounds}
            score={gameState.score}
            onNext={handleNext}
            onRestart={handleRestart}
            selectedAnimalId={gameState.selectedAnimalId}
          />
        </>
      )}
    </div>
  );
};

export default Game;