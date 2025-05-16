import React from 'react';
import { Animal } from '../types';
import AnimalCard from './AnimalCard';

interface AnimalGridProps {
  animals: Animal[];
  selectedAnimalId: string | null;
  onSelectAnimal: (id: string) => void;
  showResult: boolean;
  disabled: boolean;
}

const AnimalGrid: React.FC<AnimalGridProps> = ({ 
  animals, 
  selectedAnimalId, 
  onSelectAnimal, 
  showResult,
  disabled
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {animals.map((animal) => (
        <AnimalCard
          key={animal.id}
          animal={animal}
          isSelected={animal.id === selectedAnimalId}
          isCorrect={showResult ? animal.habitat === 'land' : null}
          onClick={() => onSelectAnimal(animal.id)}
          showResult={showResult}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default AnimalGrid;