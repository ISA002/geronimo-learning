import * as PIXI from 'pixi.js';
import carImg from 'images/car.jpg';
import backgroundImg from 'images/background.jpg';
import displacementFilterImg from 'images/displacement_map_repeat.jpg';
import shader from './shader.glsl';

export default class Card {
  constructor(container) {
    this.container = container;
    this.height = 600;
    this.width = 800;
    this.mouse = { x: 1, y: 1 };

    this.app = new PIXI.Application();
    container.appendChild(this.app.view);

    this.carPicture = PIXI.Sprite.from(carImg);
    this.carPicture.width = this.app.screen.width;
    this.carPicture.height = this.app.screen.height;
    this.app.stage.addChild(this.carPicture);

    this.displacementSprite = PIXI.Sprite.from(displacementFilterImg);
    this.displacementSprite.texture.baseTexture.wrapMode =
      PIXI.WRAP_MODES.REPEAT;
    this.app.stage.addChild(this.displacementSprite);

    this.app.stop();

    this.app.loader.add('shader', shader).load(this.setup);

    this.mouseFilter = null;
    this.waterRippleFilter = null;

    this.app.ticker.add(() => {
      this.mouseFilter.uniforms.u_time += 0.01;
      this.displacementSprite.x += 1;
    });
  }

  pointerMove = event => {
    this.mouse.x =
      ((event.data.global.x - this.width / 2) / window.innerWidth) * 1.5;
    this.mouse.y = (event.data.global.y - this.height / 2) / window.innerHeight;
  };

  setup = (_, res) => {
    this.mouseFilter = new PIXI.Filter(null, res.shader.data, {
      u_time: 0,
      u_image: PIXI.Texture.from(carImg),
      u_imagehover: PIXI.Texture.from(backgroundImg),
      u_res: {
        x: this.width,
        y: this.height,
      },
      u_mouse: this.mouse,
    });

    this.waterRippleFilter = new PIXI.filters.DisplacementFilter(
      this.displacementSprite
    );
    this.waterRippleFilter.padding = 10;
    this.waterRippleFilter.scale.x = 30;
    this.waterRippleFilter.scale.y = 60;

    this.carPicture.filters = [this.mouseFilter, this.waterRippleFilter];

    this.app.stage.interactive = true;

    this.app.stage.on('mousemove', this.pointerMove);

    this.app.start();
  };
}
