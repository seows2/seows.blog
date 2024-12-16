import Scene from '@/core/GsapD/Scene';
import Pixel from './Pixel';

class PixelText {
  pixelPerfect: Pixel;
  textElement: HTMLDivElement;
  scene: Scene;

  constructor() {
    this.pixelPerfect = new Pixel();
    this.textElement = document.querySelector('section.pixel-perfect p') as HTMLDivElement;
    this.scene = this.pixelPerfect.scene;
  }

  onResize(_: { width: number; height: number; aspectRatio: number }) {
    this.textElement.style.opacity = '0';
    this.textElement.style.transform = 'translateY(100%)';
    this.scene = this.pixelPerfect.scene;

    this.scene.fromTo(
      this.textElement,
      {
        translateY: [100, -100],
      },
      {
        duration: 2,
        ease: 'linear',
      },
      // @ts-ignore
      1
    );
    this.scene.fromTo(
      this.textElement,
      {
        opacity: [0, 1],
      },
      {
        duration: 1,
        ease: 'easeInOutExpo',
      },
      // @ts-ignore
      1
    );
    this.scene.to(
      this.textElement,
      {
        opacity: 0,
      },
      {
        duration: 1,
        ease: 'easeInOutExpo',
      },
      // @ts-ignore
      2
    );
  }
}

export default PixelText;
