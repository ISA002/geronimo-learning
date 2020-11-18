/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
import gsap from 'gsap';

export default class Curtain {
  constructor(amount, canvas, text) {
    this.amount = amount;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.text = text;
    this.canvas.width = this.widthCanvas = window.innerWidth;
    this.canvas.height = this.heightCanvas = window.innerHeight;
    this.cols = [];
    this.textWidth = Math.ceil(this.widthCanvas / 1.8);
    this.textSize = Math.ceil(this.widthCanvas / 6.4);
    this.complete = false;
    this.columnWidth = Math.ceil(this.widthCanvas / this.amount);
    window.addEventListener('resize', this.resize);

    this.timeline1 = gsap.timeline({
      onComplete: this.stopAnimation,
    });

    for (let i = 0; i < this.amount; i++) {
      this.cols.push({
        width: this.columnWidth,
        height: this.heightCanvas,
      });
    }

    this.timeline1.restart();

    this.render();
  }

  stopAnimation = () => {
    this.timeline1.pause();
    this.complete = true;
  };

  destroy = () => {
    window.removeEventListener('resize', this.resize);
  };

  show = () => {
    this.timeline1.resume();
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
  };

  resize = () => {
    this.canvas.width = this.widthCanvas = window.innerWidth;
    this.canvas.height = this.heightCanvas = window.innerHeight;
    this.textWidth = Math.ceil(this.widthCanvas / 1.8);
    this.textSize = Math.ceil(this.widthCanvas / 6.4);
    this.columnWidth = Math.ceil(this.widthCanvas / this.amount);
    this.render();
  };

  render = () => {
    this.ctx.clearRect(0, 0, this.widthCanvas, this.heightCanvas);

    this.ctx.save();
    this.ctx.fillStyle = '#191919';

    this.cols.forEach((item, index) => {
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

    if (!this.complete) {
      window.requestAnimationFrame(this.render);
    }
  };
}
