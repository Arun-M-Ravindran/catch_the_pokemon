import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';

const Win = () => {
  const { isWinner } = useContext(GameContext);

  if (!isWinner) {
    return null;
  }

  return (
    <div className="win">
      <h3>You Win!  You caught 5 Pokémon!</h3>
    </div>
  );
};

export default Win;