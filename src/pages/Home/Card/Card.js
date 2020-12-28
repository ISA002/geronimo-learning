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

    this.app.stage.addChild(this.container);

    this.loader = new PIXI.Loader();

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

    this.container.position.set(coverValues.left, coverValues.top);
    this.container.scale.set(coverValues.scale, coverValues.scale);
  };

  pointerMove = event => {
    this.mouse.x =
      ((event.data.global.x - this.container.width / 2) / window.innerWidth) *
      1.5;
    this.mouse.y =
      (-event.data.global.y + this.container.height / 2) / window.innerHeight;
  };

  setup = (_, res) => {
    this.height = window.innerHeight;
    this.width = window.innerWidth;

    const kWidth = this.width * 0.6;
    const kHeight = this.height * 0.7;

    this.carTexture = new PIXI.Texture.from(res.car.url);
    this.carPicture = new PIXI.Sprite.from(this.carTexture);

    this.mask = new PIXI.Sprite.from(PIXI.Texture.WHITE);
    this.mask.width = kWidth;
    this.mask.height = kHeight;
    this.carPicture.mask = this.mask;

    this.carPicture.anchor.set(0.5);

    this.carPicture.position.set(
      this.carTexture.width / 2,
      this.carTexture.height / 2
    );

    const coverValues = fit.cover(
      { w: this.carTexture.width, h: this.carTexture.height },
      { w: kWidth, h: kHeight }
    );

    this.container.position.set(coverValues.left, coverValues.top);
    this.container.scale.set(coverValues.scale, coverValues.scale);

    this.container.addChild(this.carPicture);

    this.mouseFilter = new PIXI.Filter(null, shader, {
      u_time: 0,
      u_image: res.car.texture,
      u_imagehover: res.background.texture,
      u_res: {
        x: this.width * 0.6,
        y: this.height * 0.7,
      },
      u_mouse: this.mouse,
    });

    this.carPicture.filters = [this.mouseFilter];

    this.app.stage.interactive = true;

    this.app.stage.on('mousemove', this.pointerMove);

    this.app.start();
  };
}
