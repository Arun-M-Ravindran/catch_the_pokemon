import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { motion } from 'framer-motion';

const DisplayPokemon = () => {
  const { pokemon, catchCount, isRestartRequired, setIsRestartRequired, catchPokemon } = useContext(GameContext);

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  const handleCatch = () => {
    if (catchCount < 5) {
      catchPokemon();
    } else setIsRestartRequired(true)
  };

  const pokemonVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.2 } }
  };


  return (
    <>
      {isRestartRequired ? (
        <p><span className='c-orange-red'>You have already won the game; please restart</span></p>
      ) : (
        <motion.div
          className="pokemon-display"
          variants={pokemonVariants}
          initial="initial"
          animate="animate"
          whileTap={{ scale: 1.2 }}
          exit="exit"
          onClick={handleCatch}
        >
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </motion.div>
      )}
    </>
  );
};

export default DisplayPokemon;