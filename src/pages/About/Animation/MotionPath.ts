import Scene from '@/core/GsapD/Scene';
import Animation from './Animation';

class MotionPath {
  animation: Animation;
  time: number;
  then: number;
  now: number;
  timeScale: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  viewport: { width: number; height: number; aspectRatio: number } = {
    width: 0,
    height: 0,
    aspectRatio: 0,
  };
  iterations!: {
    opacity: number;
    distance: number;
    count: number;
    radius: number;
    top: number;
    left: number;
    objects: { left: number; fillOpacity: number }[];
  };

  progress: { scale: number } = { scale: 1 };
  clearProgress: { value: number } = { value: 0 };
  scene: Scene;

  constructor() {
    this.animation = new Animation();
    this.scene = this.animation.scene;
    this.time = 0;
    this.then = 0;
    this.now = 0;
    this.timeScale = 0.003;
    this.canvas = document.getElementById('motion-path') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.scale(this.progress.scale, this.progress.scale);
    this.ctx.fillStyle = 'rgb(0, 0, 0)';
    this.ctx.fill();
    this.ctx.lineWidth = 0.0025 * this.viewport.width;
    this.ctx.strokeStyle = 'rgba(29, 101, 135, 1)';
    const t = this.canvas.width / this.progress.scale / 2;

    for (let e = 0; e < this.iterations.count; e++) {
      if (this.iterations.objects[e]) {
        this.ctx.fillStyle = `rgba(29, 101, 135, ${this.iterations.objects[e].fillOpacity})`;
        const s = this.iterations.objects[e].left / this.progress.scale;
        this.ctx.beginPath();
        const x = s + (this.progress.scale - 1) * (s - t);
        const y = this.canvas.height / this.progress.scale / 2;
        const radius = this.iterations.radius;
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.fill();
      }
    }
    this.ctx.strokeStyle = 'rgba(29, 101, 135, 1)';
    this.ctx.fillStyle = `rgba(29, 101, 135, ${(this.iterations.distance - 1) / 2})`;

    const s = (this.iterations.left * this.iterations.distance) / this.progress.scale;

    this.ctx.beginPath();
    const x = s + (this.progress.scale - 1) * (s - t);
    const y = this.canvas.height / this.progress.scale / 2;
    const radius = this.iterations.radius;
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();

    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = `rgba(0, 0, 0, ${this.iterations.opacity})`;
    this.ctx.fill();

    if (this.clearProgress.value > 0) {
      this.ctx.clearRect(
        this.canvas.width / 2 - this.clearProgress.value * (this.canvas.width / 2),
        this.canvas.height / 2 - this.clearProgress.value * (this.canvas.height / 2),
        this.clearProgress.value * this.canvas.width,
        this.clearProgress.value * this.canvas.height
      );

      if (this.clearProgress.value !== 1) {
        this.ctx.beginPath();
        this.ctx.rect(
          this.canvas.width / 2 - this.clearProgress.value * (this.canvas.width / 2),
          this.canvas.height / 2 - this.clearProgress.value * (this.canvas.height / 2),
          this.clearProgress.value * this.canvas.width,
          this.clearProgress.value * this.canvas.height
        );
        this.ctx.closePath();
        this.ctx.strokeStyle = 'rgb(214, 103, 97)';
        this.ctx.stroke();
      }
    }
  }

  onResize(nextViewport: { width: number; height: number; aspectRatio: number }) {
    this.viewport = nextViewport;
    this.canvas.width = this.viewport.width;
    this.canvas.height = this.viewport.height;
    this.iterations = {
      opacity: 0,
      distance: 1,
      count: 0,
      radius: this.canvas.width / 6,
      top: this.canvas.height / 2,
      left: this.canvas.width / 4,
      objects: [],
    };
    this.progress = {
      scale: 1,
    };
    this.clearProgress = {
      value: 0,
    };

    for (let t = 0; t < 20; t++) {
      const e = t / 20,
        s = 1 - Math.pow(2, -10 * e),
        i = this.canvas.width / 4,
        o = 3 * i;
      this.iterations.objects.push({
        left: i + (o - i) * s,
        fillOpacity: s / 4,
      });
    }
    this.scene = this.animation.scene;
    this.scene.fromTo(
      this.iterations,
      {
        count: [0, 20],
      },
      {
        duration: 1,
        ease: 'linear',
      },
      // @ts-ignore
      0
    );
    this.scene.fromTo(
      this.iterations,
      {
        distance: [1, 3],
      },
      {
        duration: 1,
        ease: 'easeOutExpo',
      },
      // @ts-ignore
      0
    );
    this.scene.fromTo(
      this.iterations,
      {
        opacity: [0, 1],
      },
      {
        duration: 1,
      },
      // @ts-ignore
      1
    );
    this.scene.fromTo(
      this.clearProgress,
      {
        value: [0, 1],
      },
      {
        duration: 1,
      },
      // @ts-ignore
      1
    );
    this.scene.fromTo(
      this.progress,
      {
        scale: [1, 1.5],
      },
      {
        duration: 2,
      },
      // @ts-ignore
      0
    );
  }

  onUpdate(n: number) {
    this.now = n * this.timeScale;
    this.time += this.now - this.then;
    this.then = this.now;
    this.draw();
  }
}

export default MotionPath;
