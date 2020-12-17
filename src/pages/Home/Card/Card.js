import * as PIXI from 'pixi.js';
import carImg from 'images/car.jpg';
import backgroundImg from 'images/background.jpg';
import displacementFilterImg from 'images/displacement_map_repeat.jpg';
import shader from './shader.frag';

export default class Card {
  constructor(container) {
    this.container = container;
    this.height = 600;
    this.width = 800;
    this.mouse = { x: 1, y: 1 };

    this.app = new PIXI.Application({
      resolution: window.devicePixelRatio || 1,
    });
    container.appendChild(this.app.view);

    this.loader = new PIXI.Loader();

    this.loader
      .add('car', carImg)
      .add('background', backgroundImg)
      .add('displacementFilter', displacementFilterImg)
      .load(this.setup);

    this.carPicture = PIXI.Sprite.from(carImg);
    this.carPicture.width = this.app.screen.width;
    this.carPicture.height = this.app.screen.height;
    this.app.stage.addChild(this.carPicture);

    this.displacementSprite = PIXI.Sprite.from(displacementFilterImg);
    this.displacementSprite.texture.baseTexture.wrapMode =
      PIXI.WRAP_MODES.REPEAT;
    this.app.stage.addChild(this.displacementSprite);

    this.app.stop();

    this.app.ticker.add(() => {
      this.mouseFilter.uniforms.u_time += 0.005;
      this.displacementSprite.x += 1;
    });
  }

  pointerMove = event => {
    this.mouse.x =
      ((event.data.global.x - this.width / 2) / window.innerWidth) * 1.5;
    this.mouse.y = (event.data.global.y - this.height / 2) / window.innerHeight;
  };

  setup = (_, res) => {
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
