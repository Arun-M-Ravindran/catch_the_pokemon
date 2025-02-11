import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { motion } from 'framer-motion';

const CatchedPokemonBox = () => {
  const { caughtPokemon } = useContext(GameContext);

  const caughtPokemonVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.2 } }
  };

  return (
    <div className="caught-pokemon-area">
      <h3>Caught Pokemon</h3>
      <div className="caught-pokemon-list">
        {caughtPokemon.map((pokemon) => (
          <motion.div
            key={pokemon.id}
            className="caught-pokemon-item"
            variants={caughtPokemonVariants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1 }}
            exit="exit"
          >
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CatchedPokemonBox;