import React, { useEffect } from 'react';

import Game from '../../classes/Game';
import { Canvas as CanvasElement } from './GameCanvas.styles';

const GameCanvas = () => {
  let ref, game;

  useEffect(() => {
    if (!game && ref) {
      game = new Game(ref);
    }
  }, [ref, game]);

  return (
    <CanvasElement
      ref={r => (ref = r)}
    />
  );
};

export default GameCanvas;
