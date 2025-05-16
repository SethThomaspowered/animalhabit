import React from 'react';
import { Paw } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-6 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <Paw className="w-8 h-8 text-amber-600 mr-2" />
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Animal Habitat Quiz
          </h1>
        </div>
        <p className="text-center text-gray-600 mt-2 max-w-xl mx-auto">
          Test your knowledge of animal habitats! Can you identify which animal in each set lives on land?
        </p>
      </div>
    </header>
  );
};

export default Header;