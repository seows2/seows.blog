import GsapD from '@/core/GsapD';

export default class HeroIndicator {
  time: number;
  then: number;
  now: number;
  timeScale: number;
  canvas: HTMLCanvasElement;
  canvasSize: number;
  ctx: CanvasRenderingContext2D;
  heading: HTMLCanvasElement;
  iterations = 10;
  visibility: { value: number };

  constructor() {
    this.visibility = {
      value: 0,
    };
    this.time = 0;
    this.then = 0;
    this.now = 0;
    this.timeScale = 0.003;
    this.canvas = document.getElementById('hero-indicator') as HTMLCanvasElement;
    this.heading = document.querySelector('section.hero h1') as HTMLCanvasElement;
    this.canvasSize = this.canvas.width;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  appear() {
    this.time = 0;
    GsapD.to(
      this.visibility,
      {
        value: 1,
      },
      {
        duration: 2,
        ease: 'easeInExpo',
      }
    );
  }

  onPreloaded() {
    this.appear();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.lineWidth = 3;
    this.ctx.lineCap = 'round';
    let width = this.canvasSize - 100;
    let bright = 1;
    for (let s = 0; s < this.iterations; s++) {
      bright = 0.5 * Math.sin(-this.time + Math.PI / 2 + s / 2) + 0.5;
      bright *= this.visibility.value;
      this.ctx.strokeStyle = `rgba(255, 255, 255, ${bright / 2})`;
      const i = this.canvasSize / 2 - width / 2;
      this.ctx.beginPath();
      this.ctx.moveTo(i, 2 + s * (this.canvasSize / 12));
      this.ctx.lineTo(i + width, 2 + s * (this.canvasSize / 12));
      this.ctx.stroke();
      width = width / 2 + width / 8;
    }
  }

  onUpdate(t: number) {
    this.now = t * this.timeScale;
    this.time += this.now - this.then;
    this.then = this.now;
    this.draw();
  }

  onResize() {
    const headingMetric = this.heading.getBoundingClientRect();
    this.canvas.width = headingMetric.width;
    this.canvasSize = this.canvas.width;
    let width = this.canvasSize - 8;
    for (this.iterations = 0; width > 4; ) {
      this.iterations += 1;
      width = width / 2 + width / 8;
    }
    this.canvas.height = this.iterations * (this.canvasSize / 12);
  }
}
