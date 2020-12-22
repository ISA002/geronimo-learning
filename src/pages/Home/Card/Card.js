import * as PIXI from 'pixi.js';
import carImg from 'images/car.jpg';
import backgroundImg from 'images/background.jpg';
import shader from './shader.frag';
import waterTexture from 'images/displacement_map_repeat.jpg';

export default class Card {
  constructor(container) {
    this.canvasContainer = container;
    this.height = window.innerHeight * 0.7;
    this.width = window.innerWidth * 0.6;
    this.mouse = { x: 1, y: 1 };

    console.log('size', window.innerWidth * 0.6, window.innerHeight * 0.7);

    this.app = new PIXI.Application({
      resolution: window.devicePixelRatio || 1,
      width: this.width,
      height: this.height,
    });

    this.canvasContainer.appendChild(this.app.view);

    this.container = new PIXI.Container();
    this.container.width = this.width;
    this.container.height = this.height;

    this.app.stage.addChild(this.container);

    this.loader = new PIXI.Loader();

    this.loader
      .add('car', carImg)
      .add('background', backgroundImg)
      .add('waterTexture', waterTexture)
      .load(this.setup);

    this.app.stop();

    window.addEventListener('resize', this.resize);

    this.app.ticker.add(() => {
      this.mouseFilter.uniforms.u_time += 0.01;
    });
  }

  pointerMove = event => {
    this.mouse.x =
      ((event.data.global.x - this.width / 2) / window.innerWidth) * 1.5;
    this.mouse.y =
      (-event.data.global.y + this.height / 2) / window.innerHeight;
  };

  destroyListener = () => {
    window.removeEventListener('resize', this.resize);
  };

  resize = () => {
    this.height = window.innerHeight * 0.7;
    this.width = window.innerWidth * 0.6;
    this.app.renderer.resize(this.width, this.height);

    const containerRatio = this.container.width / this.container.height;
    const appRatio = this.app.stage.width / this.app.stage.height;

    console.log(this.width, this.container.width);

    if (appRatio > containerRatio) {
      console.log('bigger');
      this.container.height =
        this.container.height / (this.container.width / this.container.width);
      this.container.width = this.container.width;
      this.container.position.x = 0;
      this.container.position.y =
        (this.container.height - this.container.height) / 2;
    } else {
      console.log('smaller');
      this.container.width =
        this.container.width / (this.container.height / this.container.height);
      this.container.height = this.container.height;
      this.container.position.y = 0;
      this.container.position.x =
        (this.container.width - this.container.width) / 2;
    }

    this.carPicture.width = this.container.width;
    this.carPicture.height = this.container.height;

    console.log(this.width, this.container.width);
  };

  setup = (_, res) => {
    this.carPicture = PIXI.Sprite.from(res.car.texture);
    this.container.addChild(this.carPicture);

    this.mouseFilter = new PIXI.Filter(null, shader, {
      u_time: 0,
      u_image: res.car.texture,
      u_imagehover: res.background.texture,
      u_res: {
        x: this.width,
        y: this.height,
      },
      u_mouse: this.mouse,
    });

    this.carPicture.filters = [this.mouseFilter];

    this.app.stage.interactive = true;

    this.app.stage.on('mousemove', this.pointerMove);

    this.app.start();
  };
}
