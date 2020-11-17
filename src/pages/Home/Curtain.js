/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
import gsap from 'gsap';

export default class Curtain {
  constructor(amount, canvas, text) {
    this.amount = amount;
    this.ctx = canvas.getContext('2d');
    this.text = text;
    canvas.width = this.widthCanvas = window.innerWidth;
    canvas.height = this.heightCanvas = window.innerHeight;
    this.cols = [];
    this.textWidth = Math.ceil(this.widthCanvas / 1.8);
    this.textSize = Math.ceil(this.widthCanvas / 6.4);
    this.complete = false;
    this.columnWidth = Math.ceil(this.widthCanvas / this.amount);
    window.addEventListener('resize', () => this.resize());

    this.timeline1 = gsap.timeline({
      onComplete: () => this.stopAnimation(),
      onUpdate: () => this.render(),
    });

    for (let i = 0; i < this.amount; i++) {
      this.cols.push({
        width: this.columnWidth,
        height: null,
      });
    }
  }

  stopAnimation() {
    this.complete = true;
  }

  destroy() {
    window.removeEventListener('resize', () => this.resize());
  }

  show() {
    this.cols.forEach(item => {
      this.timeline1.to(
        item,
        {
          duration: 1.1,
          height: 0,
          ease: 'power1',
        },
        '-=1'
      );
    });
  }

  resize() {
    this.widthCanvas = window.innerWidth;
    this.heightCanvas = window.innerHeight;
    this.textWidth = Math.ceil(this.widthCanvas / 1.8);
    this.textSize = Math.ceil(this.widthCanvas / 6.4);
    this.render();
  }

  render() {
    console.log('render');
    this.ctx.clearRect(0, 0, this.widthCanvas, this.heightCanvas);

    this.ctx.save();
    this.ctx.fillStyle = '#191919';

    this.cols.forEach((item, index) => {
      if (item.height === null) {
        item.height = this.heightCanvas;
      }
      this.ctx.fillRect(
        index * this.columnWidth,
        0,
        this.columnWidth,
        item.height
      );
    });

    this.ctx.restore();

    this.ctx.save();
    this.ctx.font = `${this.textSize}px 'Robotobold'`;
    this.ctx.globalCompositeOperation = 'xor';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(
      this.text,
      this.widthCanvas / 2 - this.textWidth / 2,
      this.heightCanvas / 2,
      this.textWidth
    );
    this.ctx.restore();
  }
}
