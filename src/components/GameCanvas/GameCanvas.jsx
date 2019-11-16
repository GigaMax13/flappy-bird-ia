import React, { useEffect } from 'react';
import { Game } from 'html5-engine';
import 'html5-engine/build/index';
import { Canvas } from './GameCanvas.styles';

import ground from '../../assets/images/ground.png';

const GameCanvas = () => {
  let canvasElement, game;

  useEffect(() => {
    if (!game && canvasElement) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      game = Game(canvasElement, 480, 640);
    }
  }, [canvasElement]);

  useEffect(() => {
    (async () => {
      await game.addSprite({
        name: 'ground',
        width: 37,
        height: 128,
        source: ground,
      });

      game.addEntity({
        name: 'ground',
        width: 504,
        height: 80,
        x: 0,
        y: 560,
        visible: true,
      }, (ctx) => {
        for(let i = 0; i < 21; i++) {
          const {
            image,
            width,
            height,
          } = game.getSprite('ground');
          ctx.drawImage(image, 0, 0, width, height, i * 24, 0, 24, 80);
        }

        // var gap = 32, line = 0, row, col;
        // context.fillStyle = 'rgba(255,255,255,1)';
        //
        // for(row = 0; row < 20; row++){
        //   for(col = 0; col < 10; col++){
        //     context.fillRect((col * 2 + line) * gap, row * gap, gap, gap);
        //   }
        //
        //   line = (line === 0) ? 1 : 0;
        // }
        //
        // context.fillStyle = 'rgba(0,0,0,1)';
        //
        // line = 1;
        //
        // for(row = 0; row < 20; row++){
        //   for(col = 0; col < 10; col++){
        //     context.fillRect((col * 2 + line) * gap, row * gap, gap, gap);
        //   }
        //
        //   line = (line === 0) ? 1 : 0;
        // }
      });

      game.update((dt) => {
        const speed = 0.17;

        game.moveEntity('ground')(({ x }) => {
          if (x <= -20) {
            return { x: 0 };
          } else {
            return { x: Math.floor(x - speed * dt) };
          }
        });
      });

      game.start();
    })();
  }, [game]);

  return (
    <Canvas ref={ref => (canvasElement = ref)} />
  );
};

export default GameCanvas;
