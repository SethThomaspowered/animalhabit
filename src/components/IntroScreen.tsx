import React from 'react';
import { Paw, Compass, Brain, HelpCircle } from 'lucide-react';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Animal Habitat Quiz!</h2>
        <p className="text-gray-600">Test your knowledge of animal habitats in this fun and educational game.</p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
          How to Play
        </h3>
        <ul className="space-y-3">
          <li className="flex">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
              <span className="font-bold text-amber-600">1</span>
            </div>
            <p className="text-gray-700">In each round, you'll see a set of four different animals.</p>
          </li>
          <li className="flex">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
              <span className="font-bold text-amber-600">2</span>
            </div>
            <p className="text-gray-700">Your task is to identify which animal primarily lives on land.</p>
          </li>
          <li className="flex">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
              <span className="font-bold text-amber-600">3</span>
            </div>
            <p className="text-gray-700">Select your answer and see if you're correct!</p>
          </li>
          <li className="flex">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
              <span className="font-bold text-amber-600">4</span>
            </div>
            <p className="text-gray-700">Learn fascinating facts about each animal after you make your choice.</p>
          </li>
        </ul>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-blue-50 rounded-lg text-center">
          <Paw className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <h4 className="font-medium text-gray-800 mb-1">Land, Water, Air</h4>
          <p className="text-sm text-gray-600">Animals from different habitats in each round</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg text-center">
          <Brain className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <h4 className="font-medium text-gray-800 mb-1">Educational</h4>
          <p className="text-sm text-gray-600">Learn about animals and their habitats</p>
        </div>
        <div className="p-4 bg-amber-50 rounded-lg text-center">
          <Compass className="w-8 h-8 text-amber-600 mx-auto mb-2" />
          <h4 className="font-medium text-gray-800 mb-1">Explore Nature</h4>
          <p className="text-sm text-gray-600">Discover the diversity of animal life</p>
        </div>
      </div>
      
      <div className="text-center">
        <button 
          onClick={onStart}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;