import React from 'react';
import Header from './components/Header';
import Game from './components/Game';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Header />
      <main className="container mx-auto px-4">
        <Game />
      </main>
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>Animal Habitat Quiz &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;