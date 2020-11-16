/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */

import gsap from 'gsap';

export default class Curtain {
  constructor(amount, context, text) {
    this.amount = amount;
    this.ctx = context;
    this.text = text;
    this.cols = [];
    this.widthCanvas = 0;
    this.heightCanvas = 0;
    this.textWidth = 700;
    this.complete = false;

    for (let i = 0; i < this.amount; i++) {
      this.cols.push({
        x: 0,
        y: 0,
        width: 0,
        height: null,
      });
    }
  }

  show() {
    this.cols.forEach((item, index) => {
      gsap.to(item, {
        duration: 1.1,
        delay: index * 0.1,
        height: 0,
        ease: 'power1',
      });
    });
  }

  render(size) {
    const rectWidth = size.widthCanvas / this.amount + 1;

    this.ctx.clearRect(0, 0, size.widthCanvas, size.heightCanvas);

    this.ctx.save();
    this.ctx.fillStyle = '#191919';

    this.cols.forEach((item, index) => {
      if (item.height === null) {
        item.height = size.heightCanvas;
      }
      this.ctx.fillRect(index * rectWidth, 0, rectWidth + 1, item.height);
    });

    this.ctx.restore();

    this.ctx.save();
    this.ctx.font = '200px Robotobold';
    this.ctx.globalCompositeOperation = 'xor';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(
      this.text,
      size.widthCanvas / 2 - this.textWidth / 2,
      size.heightCanvas / 2,
      this.textWidth
    );
    this.ctx.restore();

    if (this.cols[this.amount - 1].height >= 0 && !this.complete) {
      if (this.cols[this.amount - 1].height === 0) {
        this.complete = true;
      }

      window.requestAnimationFrame(() => {
        this.render(size);
      });
    }
  }
}
