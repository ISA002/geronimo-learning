import * as PIXI from 'pixi.js';
import carImg from 'images/car.jpg';
import backgroundImg from 'images/background.jpg';
import shader from './shader.frag';
import fit from 'math-fit';

export default class Card {
  constructor(container) {
    this.canvasContainer = container;
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.mouse = { x: 1, y: 1 };

    this.app = new PIXI.Application({
      resolution: window.devicePixelRatio || 1,
      width: this.width,
      height: this.height,
      backgroundColor: 0xf1efe5,
    });

    this.canvasContainer.appendChild(this.app.view);

    this.container = new PIXI.Container();

    this.rectangleContainer = new PIXI.Container();

    this.app.stage.addChild(this.container);
    this.app.stage.addChild(this.rectangleContainer);

    this.loader = new PIXI.Loader();

    this.rectangle = new PIXI.Graphics()
      .beginFill(0xffffff)
      .drawRect(0, 0, window.innerWidth, window.innerHeight)
      .endFill();

    this.loader
      .add('car', carImg)
      .add('background', backgroundImg)
      .load(this.setup);

    this.app.stop();

    window.addEventListener('resize', this.resize);

    this.app.ticker.add(() => {
      this.mouseFilter.uniforms.u_time += 0.01;
    });
  }

  destroyListener = () => {
    window.removeEventListener('resize', this.resize);
  };

  resize = () => {
    this.height = window.innerHeight;
    this.width = window.innerWidth;

    const kWidth = this.width * 0.6;
    const kHeight = this.height * 0.7;

    const coverValues = fit.cover(
      { w: this.carTexture.width, h: this.carTexture.height },
      { w: kWidth, h: kHeight }
    );

    this.rectangleContainer.width = kWidth;
    this.rectangleContainer.height = kHeight;

    this.rectangleContainer.x =
      (this.width - this.rectangleContainer.width) / 2;
    this.rectangleContainer.y =
      (this.height - this.rectangleContainer.height) / 2;

    this.rectangleSprite.width = kWidth;
    this.rectangleSprite.height = kHeight;

    this.container.x = (this.width - this.rectangleContainer.width) / 2;
    this.container.y = (this.height - this.rectangleContainer.height) / 2;

    this.container.width = coverValues.width;
    this.container.height = coverValues.height;
  };

  pointerMove = event => {
    this.mouse.x =
      ((event.data.global.x - this.container.width / 2) / window.innerWidth) *
      1.5;
    this.mouse.y =
      (-event.data.global.y + this.container.height / 2) / window.innerHeight;
  };

  setup = (_, res) => {
    this.carTexture = new PIXI.Texture.from(res.car.url);
    this.carPicture = new PIXI.Sprite.from(this.carTexture);

    this.recTexture = this.app.renderer.generateTexture(
      this.rectangle,
      PIXI.SCALE_MODES.NEAREST,
      1,
      this.rectangle
    );
    this.rectangleSprite = new PIXI.Sprite.from(this.recTexture);

    this.container.addChild(this.carPicture);

    this.rectangleContainer.addChild(this.rectangleSprite);

    this.mouseFilter = new PIXI.Filter(null, shader, {
      u_time: 0,
      u_image: res.car.texture,
      u_imagehover: res.background.texture,
      u_res: {
        x: this.container.width,
        y: this.container.height,
      },
      u_mouse: this.mouse,
    });

    this.carPicture.filters = [this.mouseFilter];

    this.container.mask = this.rectangleContainer;

    this.app.stage.interactive = true;
    this.rectangleContainer.interactive = true;

    this.app.stage.on('mousemove', this.pointerMove);

    this.resize();
    this.resize();

    this.app.start();
  };
}
