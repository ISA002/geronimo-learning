import * as PIXI from 'pixi.js';
import carImg from 'images/car.jpg';
import backgroundImg from 'images/background.jpg';
import fragmentShader from './fragmentShader';
import vertexShader from './vertexShader';

export default class Card {
  constructor(container) {
    this.container = container;
    this.height = 600;
    this.width = 800;
    this.radius = 150;
    this.blurSize = 32;

    this.app = new PIXI.Application();
    container.appendChild(this.app.view);

    // this.app.loader.add('background', backgroundImg);
    this.app.loader.add('car', carImg);

    this.geometry = new PIXI.Geometry()
      .addAttribute(
        'aVertexPosition',
        [-100, -100, 100, -100, 100, 100, -100, 100],
        2
      )
      .addAttribute('uv', [0, 0, 1, 0, 1, 1, 0, 1], 2);
    // .addIndex([0, 1, 2, 0, 2, 3]);

    this.shader = PIXI.Shader.from(vertexShader, fragmentShader, {
      u_time: 0,
      u_image: PIXI.Texture.from(carImg),
      u_imagehover: PIXI.Texture.from(backgroundImg),
    });

    this.quad = new PIXI.Mesh(this.geometry, this.shader);

    this.app.loader.load(this.setup);

    this.app.ticker.add(() => {
      this.quad.shader.uniforms.u_time += 0.01;
    });
  }

  setup = (_, resources) => {
    const car = new PIXI.Sprite(resources.car.texture);
    // const background = new PIXI.Sprite(resources.background.texture);

    car.width = this.app.screen.width;
    car.height = this.app.screen.height;

    // background.width = this.app.screen.width;
    // background.height = this.app.screen.height;

    this.app.stage.addChild(car);
    // this.app.stage.addChild(background);

    // this.app.stage.addChild(this.quad);

    // this.quad.position.set(400, 300);
    // const circle = new PIXI.Graphics()
    //   .beginFill(0xff0000)
    //   .drawCircle(
    //     this.radius + this.blurSize,
    //     this.radius + this.blurSize,
    //     this.radius
    //   )
    //   .endFill();

    // circle.filters = [new PIXI.filters.BlurFilter(this.blurSize)];

    // const bounds = new PIXI.Rectangle(
    //   0,
    //   0,
    //   (this.radius + this.blurSize) * 2,
    //   (this.radius + this.blurSize) * 2
    // );

    // const texture = this.app.renderer.generateTexture(
    //   circle,
    //   PIXI.SCALE_MODES.NEAREST,
    //   1,
    //   bounds
    // );

    // const focus = new PIXI.Sprite(texture);

    // this.app.stage.addChild(focus);

    // background.mask = focus;

    this.app.stage.interactive = true;

    const pointerMove = event => {
      this.quad.position.x = event.data.global.x - this.quad.width / 2;
      this.quad.position.y = event.data.global.y - this.quad.height / 2;
    };

    this.app.stage.on('mousemove', pointerMove);
  };
}
