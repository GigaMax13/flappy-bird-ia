export default class Canvas {
  #canvas;
  #context;

  constructor(element, width, height) {
    this.#canvas = element;
    this.#canvas.width = width;
    this.#canvas.height = height;
    this.#context = this.#canvas.getContext('2d');
  }

  get context() {
    return this.#context;
  }
}
