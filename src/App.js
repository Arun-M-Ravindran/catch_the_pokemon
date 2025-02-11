import React from 'react';
import Header from './components/Header';
import DisplayPokemon from './components/DisplayPokemon';
import CatchedPokemonBox from './components/CatchedPokemonBox';
import Controls from './components/Controls';
import Win from './components/Win';
import { GameProvider } from './context/GameContext';
import './App.css';

function App() {
  return (
    <GameProvider>
      <div className="App">
        <Header />
        <DisplayPokemon />
        <Win />
        <CatchedPokemonBox />
        <Controls />
      </div>
    </GameProvider>
  );
}

export default App;