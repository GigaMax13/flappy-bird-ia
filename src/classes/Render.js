export default class Render {
  #context;
  #buffer;

  constructor(context) {
    this.#context = context;
    this.#buffer = {};
  }

  clear = (x, y, w, h) => {
    this.#context.clearRect(x, y, w, h);
  };

  write = ({
    text,
    x,
    y,
    fontWeight = 'normal',
    fontFamily = 'Verdana',
    fontSize = 16,
    baseLine = 'alphabetic',
    color = '#000',
  }) => {
    this.#context.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    this.#context.textBaseline = baseLine;

    this.#context.fillStyle = color;
    this.#context.fillText(text, x, y + fontSize);
    // Math.ceil(this.#context.measureText(text).width)
  };

  drawImageBuffer = (name, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) => {
    try{
      if(!this.#buffer[name]) {
        throw new Error(`The image buffer ${name} does not exist!`);
      }

      this.#context.drawImage(this.#buffer[name], sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }catch(e){
      throw new Error(e);
    }
  };

  createImageBuffer = config => (render) => {
    try{
      if(!config || !Object.keys(config).length) {
        throw new Error('The parameter `config` must be a valid object! i.e. { [key]: value }');
      }
      if(!config.name || config.name.constructor !== String) {
        throw new Error('The parameter `config` must have a `name` property! i.e. { name: "..." }');
      }
      if(!config.width || config.width.constructor !== Number) {
        throw new Error('The parameter `config` must have a `width` property! i.e. { width: 100 }');
      }
      if(!config.height || config.height.constructor !== Number) {
        throw new Error('The parameter `config` must have a `height` property! i.e. { height: 100 }');
      }
      if(!render || render.constructor !== Function) {
        throw new Error('The parameter `render` must be a valid function! i.e. () => { ... }');
      }

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      canvas.width = config.width;
      canvas.height = config.height;

      render.call(context);

      const image = new Image();
      image.width = config.width;
      image.height = config.height;
      image.src = context.toDataURL("image/png");

      this.#buffer[config.name] = image;
    }catch(e){
      throw new Error(e);
    }
  };

  deleteImageBuffer = (name) => {
    try{
      if(!this.#buffer[name]) {
        throw new Error(`The image buffer ${name} does not exist!`);
      }

      this.#buffer[name] = null;
      delete this.#buffer[name];
    }catch(e){
      throw new Error(e);
    }
  };
}
