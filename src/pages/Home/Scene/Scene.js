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
    this.cardWidth = null;
    this.cardHeight = null;

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
    this.app.stage.removeAllListeners();
  };

  resize = () => {
    this.height = window.innerHeight;
    this.width = window.innerWidth;

    this.mouseFilter.uniforms.u_res = {
      x: this.width,
      y: this.height,
    };

    this.cardWidth = this.width * 0.6;
    this.cardHeight = this.height * 0.7;

    this.carPicture.anchor.set(0.5);

    this.carPicture.position.set(
      this.carTexture.orig.width / 2,
      this.carTexture.orig.height / 2
    );

    const child = {
      w: this.carTexture.orig.width,
      h: this.carTexture.orig.height,
    };

    const parent = { w: this.cardWidth, h: this.cardHeight };

    const coverValues = fit.cover(child, parent);

    this.carContainer.position.set(coverValues.left, coverValues.top);
    this.carContainer.scale.set(coverValues.scale, coverValues.scale);

    this.mask.width = this.cardWidth;
    this.mask.height = this.cardHeight;

    this.root.width = this.cardWidth;
    this.root.height = this.cardHeight;
  };

  pointerMove = event => {
    this.mouse.x = event.data.global.x;
    this.mouse.y = -event.data.global.y;
  };

  setup = (_, res) => {
    this.root.width = this.cardWidth;
    this.root.height = this.cardHeight;

    this.carTexture = PIXI.Texture.from(res.car.url);
    this.carPicture = new PIXI.Sprite.from(this.carTexture);
    this.carContainer = new PIXI.Container();

    this.mask = new PIXI.Sprite.from(PIXI.Texture.WHITE);
    this.mask.width = this.cardWidth;
    this.mask.height = this.cardHeight;
    this.carPicture.mask = this.mask;

    this.carPicture.anchor.set(0.5);

    this.carContainer.addChild(this.carPicture);

    this.root.addChild(this.carContainer);
    this.root.addChild(this.mask);

    this.mouseFilter = new PIXI.Filter(null, shader, {
      u_time: 0,
      u_imagehover: res.background.texture,
      u_res: {
        x: this.width,
        y: this.height,
      },
      u_mouse: this.mouse,
    });

    this.resize();

    this.carContainer.filters = [this.mouseFilter];

    this.app.stage.interactive = true;
    this.mask.interactive = true;

    this.app.stage.on('mousemove', this.pointerMove);

    this.app.renderer.resize(this.width, this.height);

    this.app.ticker.add(() => {
      this.mouseFilter.uniforms.u_time += 0.01;
    });
  };
}
