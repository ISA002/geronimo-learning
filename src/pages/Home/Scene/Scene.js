import * as PIXI from 'pixi.js';
import shader from './shader.frag';
import fit from 'math-fit';
import gsap from 'gsap';

window.PIXI = PIXI;
export default class Scene {
  constructor(container, images) {
    this.canvasContainer = container;

    this.app = new PIXI.Application({
      backgroundColor: 0xf1efe5,
      resizeTo: window,
    });

    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.mouse = { x: 0, y: 0 };
    this.backgroundPictureSize = { x: 0, y: 0 };
    this.cardWidth = null;
    this.cardHeight = null;
    this.currentIndex = 0;
    this.imagesArray = images;
    this.circleRadius = { r: 0.5 };

    this.root = new PIXI.Container();
    this.app.stage.addChild(this.root);

    this.canvasContainer.appendChild(this.app.view);

    this.loader = new PIXI.Loader();

    window.addEventListener('resize', this.resize);

    this.tl = gsap
      .timeline()
      .to(this.circleRadius, {
        r: 10,
        duration: 1,
        ease: [0.05, 0.1, 0.12, 0.15, 0.2, 0.4, 0.5, 1],
      })
      .add(() => {
        this.currentIndex = (this.currentIndex + 1) % this.imagesArray.length;
        this.resize();
      })
      .to(this.circleRadius, { r: 0, duration: 0 })
      .to(this.circleRadius, { r: 0.5, duration: 2 })
      .pause();

    this.preload();
  }

  destroyListener = () => {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.app.stage.removeAllListeners();
  };

  nextPicture = () => {
    this.tl.restart();
    this.tl.resume();
  };

  resize = () => {
    this.height = window.innerHeight;
    this.width = window.innerWidth;

    this.carTexture = new PIXI.Texture.from(
      this.imagesArray[this.currentIndex]
    );
    this.carPicture.texture = this.carTexture;

    this.backgroundTexture = new PIXI.Texture.from(
      this.imagesArray[(this.currentIndex + 1) % this.imagesArray.length]
    );
    this.backgroundPictureSize.x = this.backgroundTexture.orig.width;
    this.backgroundPictureSize.y = this.backgroundTexture.orig.height;

    this.mouseFilter.uniforms.u_imagehover = this.backgroundTexture;
    this.mouseFilter.uniforms.u_backgroundSize = this.backgroundPictureSize;

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

  preload = () => {
    this.imagesArray.forEach(item => {
      this.loader.add(item, item);
    });

    this.loader.load().onComplete.add(() => {
      this.setup();
      this.render();
    });
  };

  setup = () => {
    this.root.width = this.cardWidth;
    this.root.height = this.cardHeight;

    this.carTexture = new PIXI.Texture.from(
      this.imagesArray[this.currentIndex]
    );

    this.backgroundTexture = new PIXI.Texture.from(
      this.imagesArray[this.currentIndex + 1]
    );
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
      u_imagehover: this.backgroundTexture,
      u_res: {
        x: this.width,
        y: this.height,
      },
      u_mouse: this.mouse,
      u_backgroundSize: this.backgroundPictureSize,
    });

    this.resize();

    this.carContainer.filters = [this.mouseFilter];

    this.app.stage.interactive = true;
    this.carPicture.interactive = true;
    this.mask.interactive = true;

    this.app.stage.on('mousemove', this.pointerMove);
    this.app.stage.on('mousedown', this.nextPicture);
  };

  render = () => {
    this.app.ticker.add(() => {
      this.mouseFilter.uniforms.u_time += 0.01;
      this.mouseFilter.uniforms.u_circleRadius = this.circleRadius.r;
    });
  };
}
