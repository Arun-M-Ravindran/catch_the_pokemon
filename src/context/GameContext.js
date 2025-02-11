import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState(null);
  const [caughtPokemon, setCaughtPokemon] = useState([]);
  const [catchCount, setCatchCount] = useState(0);
  const [isWinner, setIsWinner] = useState(false);
  const [isRestartRequired, setIsRestartRequired] = useState(false);

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  /**
   * Function to fetch random pokemon
   */
  const fetchRandomPokemon = async () => {
    try {
      const randomNumber = Math.floor(Math.random() * 898) + 1;
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
      setPokemon(response.data);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
  };

  const catchPokemon = () => {
    setCaughtPokemon(prevCaught => [...prevCaught, pokemon]);
    setCatchCount(prevCount => prevCount + 1);
    fetchRandomPokemon();
  };

  const resetGame = () => {
    setCaughtPokemon([]);
    setCatchCount(0);
    setIsWinner(false);
    setIsRestartRequired(false);
    fetchRandomPokemon();
  };

  useEffect(() => {
    if (catchCount >= 5) {
      setIsWinner(true);
    }
  }, [catchCount, caughtPokemon]);

  const value = {
    pokemon,
    caughtPokemon,
    catchCount,
    isWinner,
    isRestartRequired,
    catchPokemon,
    resetGame,
    setIsRestartRequired
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};