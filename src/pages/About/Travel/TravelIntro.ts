import Scene from '@/core/GsapD/Scene';
import Travel from './Travel';

class TravelIntro {
  travel: Travel;
  progress: {
    xPosition: number;
    yPosition: number;
    fontSize: number;
    xOffset: number;
  };
  viewport: { width: number; height: number; aspectRatio: number };
  introText: HTMLDivElement;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  text: TextMetrics;
  imageDimensions: {
    aspectRatio: number;
    height: number;
    width: number;
    scaledHeight: number;
    scaledWidth: number;
    xOffset: number;
    yOffset: number;
  };
  time: number;
  then: number;
  now: number;
  timeScale: number;
  initialRender: boolean;
  image: HTMLImageElement;
  imageReady: boolean;
  orientation: MediaQueryList;
  scene: Scene;
  lastChar!: TextMetrics;

  constructor() {
    this.travel = new Travel();
    this.scene = this.travel.scene;
    this.time = 0;
    this.then = 0;
    this.now = 0;
    this.timeScale = 0.003;
    this.progress = {
      xPosition: 0,
      yPosition: 0,
      fontSize: 4,
      xOffset: 0,
    };
    this.viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
      aspectRatio: window.innerWidth / window.innerHeight,
    };
    this.introText = document.getElementById('travel-intro') as HTMLDivElement;
    this.canvas = document.getElementById('adventures-mask') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.ctx.font = '600 96px AppleSDGothicNeo';
    this.text = this.ctx.measureText('adventures');
    this.imageDimensions = {
      aspectRatio: 1.8,
      height: 800,
      width: 1440,
      scaledHeight: 0,
      scaledWidth: 0,
      xOffset: 0,
      yOffset: 0,
    };

    this.image = new Image();
    this.imageReady = false;
    this.image.onload = () => {
      this.imageReady = true;
      this.imageDimensions.height = this.image.height;
      this.imageDimensions.width = this.image.width;
      this.imageDimensions.aspectRatio = this.image.width / this.image.height;
      this.setImageDimensions();
    };
    this.orientation = window.matchMedia('(orientation: portrait)');
    this.initialRender = false;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.imageReady) {
      this.ctx.globalCompositeOperation = 'destination-atop';
      this.ctx.drawImage(
        this.image,
        this.imageDimensions.xOffset,
        this.imageDimensions.yOffset,
        this.imageDimensions.scaledWidth,
        this.imageDimensions.scaledHeight,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
    }
    this.ctx.fillStyle = 'rgb(255, 255, 255)';
    this.ctx.font = `600 ${this.progress.fontSize}vw AppleSDGothicNeo`;
    this.text = this.ctx.measureText('adventures');
    this.lastChar = this.ctx.measureText('s');
    this.ctx.fillText(
      'adventures',
      this.progress.xPosition -
        this.text.width / 2 -
        (this.text.width / 2 - this.lastChar.width / 2) * this.progress.xOffset,
      this.progress.yPosition + (this.lastChar.actualBoundingBoxAscent / 2) * this.progress.xOffset
    );
  }

  setImageDimensions() {
    if (this.viewport.aspectRatio < this.imageDimensions.aspectRatio) {
      this.imageDimensions.scaledHeight = this.imageDimensions.aspectRatio;
      this.imageDimensions.scaledWidth = this.imageDimensions.height * this.viewport.aspectRatio;
      this.imageDimensions.xOffset =
        this.imageDimensions.width / 2 - this.imageDimensions.scaledWidth / 2;
      this.imageDimensions.yOffset = 0;
    } else {
      this.imageDimensions.scaledHeight = this.imageDimensions.width / this.viewport.aspectRatio;
      this.imageDimensions.scaledWidth = this.imageDimensions.width;
      this.imageDimensions.xOffset = 0;
      this.imageDimensions.yOffset =
        this.imageDimensions.height / 2 - this.imageDimensions.scaledHeight / 2;
    }
  }

  onResize(nextViewport: { width: number; height: number; aspectRatio: number }) {
    this.viewport = nextViewport;
    this.canvas.width = this.viewport.width;
    this.canvas.height = this.viewport.height;
    this.setImageDimensions();
    this.progress = {
      xPosition: this.canvas.width,
      yPosition: this.canvas.height,
      fontSize: 4,
      xOffset: 0,
    };
    this.scene = this.travel.scene;
    this.scene.fromTo(
      this.progress,
      {
        xPosition: [this.canvas.width, this.canvas.width / 2],
        fontSize: [8, 16],
      },
      {
        duration: 1,
      },
      // @ts-ignore
      0
    );
    this.scene.fromTo(
      this.introText,
      {
        translateX: [-50, -50],
        translateY: [-50, -400],
        opacity: [1, 0],
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
        xOffset: [0, 1],
        yPosition: [this.canvas.height, this.canvas.height / 2],
        fontSize: [16, 32],
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
        fontSize: [32, 512],
      },
      {
        duration: 1,
      },
      // @ts-ignore
      2
    );
    this.initialRender = false;
  }

  onUpdate(n: number) {
    this.now = n * this.timeScale;
    this.time += this.now - this.then;
    this.then = this.now;

    if (this.initialRender) {
      this.draw();
    } else {
      this.initialRender = true;
      this.scene.setProgressImmediately(0.25);
    }
  }
}

export default TravelIntro;
