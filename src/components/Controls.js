import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';

const Controls = () => {
  const { catchCount, resetGame } = useContext(GameContext);

  return (
    <div className="game-controls">
      <p>Caught: {catchCount}</p>
      <button className='btn-restart' onClick={() => {
        resetGame();
      }}>Restart</button>
    </div>
  );
};

export default Controls;