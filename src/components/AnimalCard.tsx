import React from 'react';
import { Animal } from '../types';

interface AnimalCardProps {
  animal: Animal;
  isSelected: boolean;
  isCorrect: boolean | null;
  onClick: () => void;
  showResult: boolean;
  disabled: boolean;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ 
  animal, 
  isSelected, 
  isCorrect, 
  onClick, 
  showResult,
  disabled
}) => {
  let cardClasses = "relative overflow-hidden rounded-xl transition-all duration-300 transform cursor-pointer";
  let borderClasses = "border-4";
  
  // Styling based on selection state
  if (isSelected) {
    cardClasses += " scale-[1.02] shadow-lg";
    
    if (showResult) {
      if (isCorrect) {
        borderClasses += " border-emerald-500";
      } else {
        borderClasses += " border-red-500";
      }
    } else {
      borderClasses += " border-blue-500";
    }
  } else {
    if (showResult && animal.habitat === 'land') {
      borderClasses += " border-emerald-500";
    } else {
      borderClasses += " border-transparent hover:border-blue-300";
    }
  }
  
  return (
    <div 
      className={`${cardClasses} ${borderClasses}`}
      onClick={() => !disabled && onClick()}
    >
      <div className="relative h-[220px] overflow-hidden">
        <img 
          src={animal.image} 
          alt={animal.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      
      <div className="p-4 bg-white">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{animal.name}</h3>
        
        {showResult && (
          <div className="text-sm text-gray-600">
            <p className="font-medium text-gray-700">
              Habitat: <span className="font-bold">{animal.habitat.charAt(0).toUpperCase() + animal.habitat.slice(1)}</span>
            </p>
            <p className="mt-2">{animal.description}</p>
          </div>
        )}
      </div>
      
      {isSelected && showResult && (
        <div className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center ${isCorrect ? 'bg-emerald-500' : 'bg-red-500'}`}>
          {isCorrect ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      )}
    </div>
  );
};

export default AnimalCard;