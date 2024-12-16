import GsapD from '@/core/GsapD';
import Scene from '@/core/GsapD/Scene';
import Interactive from './Interactive';

class InteractiveGame {
  interactive: Interactive;
  time: number;
  then: number;
  now: number;
  timeScale: number;
  viewport: { width: number; height: number; aspectRatio: number };
  bounds: { left: number; top: number };
  mouse: { x: number; y: number; xOffset: number; yOffset: number };
  clicking: boolean;
  progress: { triggerFlash: number; impact: number };
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  balloonIndexStart: number;
  scaleFactor: number;
  scene: Scene;
  balloons: {
    id: number;
    isPopped: boolean;
    scale: number;
    opacity: number;
    x: number;
    y: number;
    velocity: number;
  }[];

  constructor() {
    this.interactive = new Interactive();
    this.time = 0;
    this.then = 0;
    this.now = 0;
    this.timeScale = 0.003;
    this.viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
      aspectRatio: window.innerWidth / window.innerHeight,
    };
    this.bounds = {
      left: 0,
      top: 0,
    };
    this.mouse = {
      x: this.viewport.width / 2,
      y: this.viewport.height / 2,
      xOffset: 0,
      yOffset: 0,
    };
    this.clicking = false;
    this.progress = {
      triggerFlash: 0,
      impact: 0,
    };
    this.canvas = document.getElementById('interactive-game') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.balloonIndexStart = 0;
    this.balloons = [];
    this.scene = this.interactive.scene;
    this.scaleFactor = 0;
  }

  reset() {
    this.progress = {
      triggerFlash: 0,
      impact: 0,
    };
    this.balloonIndexStart = 0;
    this.balloons = [];
    this.scaleFactor = Math.ceil(this.viewport.width / 600);
    for (let i = 0; i < 8; i++) {
      this.createBalloon();
    }
    this.scene = this.interactive.scene;
    this.scene.fromTo(
      this.canvas,
      {
        opacity: [1, 0],
      },
      {
        duration: 1,
      },
      // @ts-ignore
      1.5
    );
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const balloon of this.balloons) {
      balloon.y -=
        (this.now - this.then) *
        (this.viewport.height / (24 * this.scaleFactor)) *
        balloon.velocity *
        this.scaleFactor;
      if (balloon.y < -130 * this.scaleFactor) {
        balloon.x = Math.random() * (this.viewport.width - 75 * this.scaleFactor);
        balloon.y = this.viewport.height;
      } else {
        this.drawBalloon(balloon);
        this.drawReticle(this.mouse.xOffset, this.mouse.yOffset);
      }
    }
  }

  drawBalloon(balloon: {
    id: number;
    isPopped: boolean;
    scale: number;
    opacity: number;
    x: number;
    y: number;
    velocity: number;
  }) {
    this.ctx.scale(balloon.scale, balloon.scale);
    this.ctx.translate(
      balloon.x / balloon.scale - 5 * balloon.scale,
      balloon.y / balloon.scale - 5 * balloon.scale
    );

    const circle = new Path2D(
      'm40 88 3 5H31l3-5h6ZM36.534 1c23 0 35.564 16.992 35.467 37C71.895 59.52 54 88 36.995 88 19.991 88 .995 59.524 1 38 1.005 16.476 15.534 1 36.534 1Z'
    );
    const line = new Path2D(
      'M48.955 11.223C58.169 16.089 63.054 25.922 63 36.92M37.313 93C33 106 45 109 44 120c-.706 7.766-9 10-13 5'
    );
    if (
      this.ctx.isPointInPath(circle, this.mouse.xOffset, this.mouse.yOffset) &&
      !balloon.isPopped
    ) {
      this.ctx.strokeStyle = `rgba(104, 189, 231, ${balloon.opacity})`;
      this.ctx.fillStyle = `rgba(0, 0, 0, ${balloon.opacity})`;

      if (this.clicking) {
        GsapD.fromTo(
          this.progress,
          {
            impact: [1, 0],
          },
          {
            duration: 0.125,
            ease: 'linear',
          }
        );
        GsapD.to(
          balloon,
          {
            opacity: 0,
            scale: 1.5 * this.scaleFactor,
          },
          {
            duration: 0.25,
            ease: 'easeOutExpo',
            onComplete: () => {
              balloon.x = Math.random() * (this.viewport.width - 75 * this.scaleFactor);
              balloon.y = this.viewport.height;
              balloon.isPopped = false;
              balloon.opacity = 1;
              balloon.scale = this.scaleFactor;
            },
          }
        );
        balloon.isPopped = true;
      }
    } else {
      this.ctx.strokeStyle = `rgba(214, 103, 97, ${balloon.opacity})`;
      this.ctx.fillStyle = `rgba(0, 0, 0, ${balloon.opacity})`;
    }
    this.ctx.fill(circle);
    this.ctx.stroke(circle);
    this.ctx.stroke(line);
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  createBalloon() {
    const randomX = Math.random() * (this.viewport.width - 75 * this.scaleFactor);
    const randomY = Math.random() * this.viewport.height;

    const velocity = Math.random() * 3 + 1;

    this.balloons.push({
      id: this.balloonIndexStart,
      isPopped: false,
      scale: this.scaleFactor,
      opacity: 1,
      x: randomX,
      y: randomY,
      velocity,
    });
    this.balloonIndexStart = this.balloonIndexStart + 1;
  }

  drawReticle(xOffset: number, yOffset: number) {
    this.reticleLines(xOffset, yOffset);
    this.reticleCircle(xOffset, yOffset);
    this.reticleChevrons(xOffset, yOffset);
  }

  reticleLines(xOffset: number, yOffset: number) {
    this.ctx.strokeStyle = '#D66761';
    this.ctx.lineWidth = 2;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.beginPath();
    // 왼쪽 라인
    this.ctx.moveTo(0, yOffset);
    this.ctx.lineTo(xOffset - 60, yOffset);

    // 오른쪽 라인
    this.ctx.moveTo(xOffset + 60, yOffset);
    this.ctx.lineTo(this.canvas.width, yOffset);

    // 위쪽 라인
    this.ctx.moveTo(xOffset, 0);
    this.ctx.lineTo(xOffset, yOffset - 60);

    // 아래쪽 라인
    this.ctx.moveTo(xOffset, yOffset + 60);
    this.ctx.lineTo(xOffset, this.canvas.height);

    this.ctx.closePath();
    this.ctx.stroke();

    // Flash 발생 시 나오는 stoke
    this.ctx.strokeStyle = '#FFFFFF';
    this.ctx.beginPath();

    // 왼쪽
    this.ctx.moveTo(0 + (xOffset - 60) * (1 - this.progress.triggerFlash), yOffset);
    this.ctx.lineTo(xOffset - 60, yOffset);

    // 오른쪽
    this.ctx.moveTo(xOffset + 60, yOffset);
    this.ctx.lineTo(
      (xOffset + 60) * (1 - this.progress.triggerFlash) +
        this.canvas.width * this.progress.triggerFlash,
      yOffset
    );

    // 위
    this.ctx.moveTo(xOffset, 0 + (yOffset - 60) * (1 - this.progress.triggerFlash));
    this.ctx.lineTo(xOffset, yOffset - 60);

    // 아래
    this.ctx.moveTo(xOffset, yOffset + 60);
    this.ctx.lineTo(
      xOffset,
      (yOffset + 60) * (1 - this.progress.triggerFlash) +
        this.canvas.height * this.progress.triggerFlash
    );

    this.ctx.closePath();
    this.ctx.stroke();
  }
  reticleCircle(xOffset: number, yOffset: number) {
    this.ctx.strokeStyle = '#D66761';
    this.ctx.beginPath();
    this.ctx.arc(xOffset, yOffset, 36, 0, 2 * Math.PI, true);
    this.ctx.closePath();
    this.ctx.stroke();

    this.ctx.strokeStyle = `rgba(255, 255, 255, ${this.progress.triggerFlash}`;
    this.ctx.beginPath();
    this.ctx.arc(xOffset, yOffset, 36, 0, 2 * Math.PI, true);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  reticleChevrons(xOffset: number, yOffset: number) {
    this.ctx.strokeStyle = '#FBE7E6';
    this.ctx.beginPath();
    this.ctx.moveTo(xOffset - 10, yOffset - 18 - 6 * this.progress.triggerFlash);
    this.ctx.lineTo(xOffset, yOffset - 8 - 6 * this.progress.triggerFlash);
    this.ctx.lineTo(xOffset + 10, yOffset - 18 - 6 * this.progress.triggerFlash);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(xOffset - 18 - 6 * this.progress.triggerFlash, yOffset - 10);
    this.ctx.lineTo(xOffset - 8 - 6 * this.progress.triggerFlash, yOffset);
    this.ctx.lineTo(xOffset - 18 - 6 * this.progress.triggerFlash, yOffset + 10);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(xOffset - 10, yOffset + 18 + 6 * this.progress.triggerFlash);
    this.ctx.lineTo(xOffset, yOffset + 8 + 6 * this.progress.triggerFlash);
    this.ctx.lineTo(xOffset + 10, yOffset + 18 + 6 * this.progress.triggerFlash);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(xOffset + 18 + 6 * this.progress.triggerFlash, yOffset - 10);
    this.ctx.lineTo(xOffset + 8 + 6 * this.progress.triggerFlash, yOffset);
    this.ctx.lineTo(xOffset + 18 + 6 * this.progress.triggerFlash, yOffset + 10);
    this.ctx.stroke();
  }

  calculateMouseOffset() {
    this.mouse.xOffset = this.mouse.x - this.bounds.left;
    this.mouse.yOffset = this.mouse.y - this.bounds.top;
  }
  onResize(nextViewport: { width: number; height: number; aspectRatio: number }) {
    this.viewport = nextViewport;
    this.canvas.width = this.viewport.width;
    this.canvas.height = this.viewport.height;
    this.reset();
  }

  onMouseDown(event: MouseEvent) {
    this.bounds = this.canvas.getBoundingClientRect();
    GsapD.fromTo(
      this.progress,
      {
        triggerFlash: [1, 0],
      },
      {
        duration: 1,
        ease: 'easeOutExpo',
      }
    );

    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
    this.clicking = true;
  }
  onMouseUp() {
    setTimeout(() => (this.clicking = false), 100);
  }
  onMouseMove(event: MouseEvent) {
    this.bounds = this.canvas.getBoundingClientRect();
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  }
  onUpdate(n: number) {
    this.now = n * this.timeScale;
    this.time += this.now - this.then;
    this.calculateMouseOffset();
    this.draw();
    this.then = this.now;
  }
}

export default InteractiveGame;
