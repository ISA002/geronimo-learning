import * as PIXI from 'pixi.js';
import carImg from 'images/car.jpg';
import backgroundImg from 'images/background.jpg';
import shader from './shader.frag';
import fit from 'math-fit';

window.PIXI = PIXI;
export default class Scene {
  constructor(container) {
    this.canvasContainer = container;

    this.app = new PIXI.Application({
      backgroundColor: 0xf1efe5,
    });

    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.mouse = { x: 1, y: 1 };

    this.root = new PIXI.Container();
    this.app.stage.addChild(this.root);

    this.canvasContainer.appendChild(this.app.view);

    this.loader = new PIXI.Loader();

    this.loader
      .add('car', carImg)
      .add('background', backgroundImg)
      .load(this.setup);

    window.addEventListener('resize', this.resize);
  }

  destroyListener = () => {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  };

  resize = () => {
    this.height = window.innerHeight;
    this.width = window.innerWidth;

    const kWidth = this.width * 0.6;
    const kHeight = this.height * 0.7;

    this.root.width = kWidth;
    this.root.height = kHeight;

    this.mask.width = kWidth;
    this.mask.height = kHeight;

    this.carPicture.anchor.set(0.5);

    this.carPicture.position.set(
      this.carTexture.orig.width / 2,
      this.carTexture.orig.height / 2
    );

    const child = {
      w: this.carTexture.orig.width,
      h: this.carTexture.orig.height,
    };

    const parent = { w: kWidth, h: kHeight };

    const coverValues = fit.cover(child, parent);

    this.carContainer.position.set(coverValues.left, coverValues.top);
    this.carContainer.scale.set(coverValues.scale, coverValues.scale);
  };

  pointerMove = event => {
    this.mouse.x =
      ((event.data.global.x - this.carContainer.width / 2) /
        window.innerWidth) *
      1.5;
    this.mouse.y =
      (-event.data.global.y + this.carContainer.height / 2) /
      window.innerHeight;
  };

  setup = (_, res) => {
    const kWidth = this.width * 0.6;
    const kHeight = this.height * 0.7;

    this.root.width = kWidth;
    this.root.height = kHeight;

    this.carTexture = PIXI.Texture.from(res.car.url);
    this.carPicture = new PIXI.Sprite.from(this.carTexture);
    this.carContainer = new PIXI.Container();

    this.mask = new PIXI.Sprite.from(PIXI.Texture.WHITE);
    this.mask.width = kWidth;
    this.mask.height = kHeight;
    this.carPicture.mask = this.mask;

    this.carPicture.anchor.set(0.5);

    this.carPicture.position.set(
      this.carTexture.orig.width / 2,
      this.carTexture.orig.height / 2
    );

    const child = {
      w: this.carTexture.orig.width,
      h: this.carTexture.orig.height,
    };

    const parent = { w: kWidth, h: kHeight };

    const coverValues = fit.cover(child, parent);

    this.carContainer.position.set(coverValues.left, coverValues.top);
    this.carContainer.scale.set(coverValues.scale, coverValues.scale);

    this.carContainer.addChild(this.carPicture);

    this.root.addChild(this.carContainer);
    this.root.addChild(this.mask);

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

    // this.carContainer.filters = [this.mouseFilter];

    this.app.stage.interactive = true;

    this.root.on('mousemove', this.pointerMove);

    this.app.ticker.add(() => {
      this.mouseFilter.uniforms.u_time += 0.01;
    });
  };
}
