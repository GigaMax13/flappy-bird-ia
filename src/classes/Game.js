import Canvas from './Canvas';
import Render from './Render';

export default class Game {
  #canvas;
  #render;
  #width;
  #height;

  constructor(element, width = window.innerWidth, height = window.innerHeight) {
    this.#canvas = new Canvas(element, width, height);
    this.#render = new Render(this.#canvas.context);

    this.#width = width;
    this.#height = height;

    this.loop();
  }

  loop = () => {
    let lastTime = Date.now();
    let fps;

    const main = () => {
      const now = Date.now();
      // To calculate the pixels/second
      const lastUpdate = (now - lastTime) / 1000;

      fps = 1 / lastUpdate;

      // update(dt);
      // this.#render.draw();

      this.#render.clear(0, 0, this.#width, this.#height);
      this.#render.write({
        text: `FPS: ${fps.toFixed(0)}`,
        x: 10,
        y: 10,
      });

      lastTime = now;

      requestAnimationFrame(main);
    };

    requestAnimationFrame(main);
  };
}
