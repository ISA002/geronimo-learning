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
    this.mouse = { x: 1, y: 1 };

    this.app = new PIXI.Application();
    container.appendChild(this.app.view);

    this.geometry = new PIXI.Geometry()
      .addAttribute(
        'aVertexPosition',
        [-100, -100, 100, -100, 100, 100, -100, 100],
        2
      )
      .addAttribute('uv', [0, 0, 1, 0, 1, 1, 0, 1], 2)
      .addIndex([0, 1, 2, 0, 2, 3]);

    this.shader = PIXI.Shader.from(vertexShader, fragmentShader, {
      u_time: 0,
      u_image: PIXI.Texture.from(carImg),
      u_imagehover: PIXI.Texture.from(backgroundImg),
      u_res: {
        x: this.width,
        y: this.height,
      },
      u_mouse: this.mouse,
    });

    this.quad = new PIXI.Mesh(this.geometry, this.shader);

    this.app.loader.load(this.setup);

    this.app.ticker.add(() => {
      this.quad.shader.uniforms.u_time += 0.01;
    });
  }

  pointerMove = event => {
    this.mouse.x =
      ((event.data.global.x - this.width / 2) / window.innerWidth) * 1.5;
    this.mouse.y =
      (-event.data.global.y + this.height / 2) / window.innerHeight;
  };

  setup = () => {
    this.quad.position.set(this.width / 2, this.height / 2);

    this.quad.width = this.app.screen.width;
    this.quad.height = this.app.screen.height;

    this.app.stage.addChild(this.quad);

    this.app.stage.interactive = true;

    this.app.stage.on('mousemove', this.pointerMove);
  };
}
