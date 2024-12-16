import Scene from '@/core/GsapD/Scene';
import Interactive from './Interactive';

class InteractiveText {
  interactive: Interactive;
  textElement: HTMLSpanElement;
  scene: Scene;

  constructor() {
    this.interactive = new Interactive();
    this.textElement = document.querySelector('section.interactive span') as HTMLSpanElement;
    this.scene = this.interactive.scene;
  }

  onResize() {
    this.textElement.style.opacity = '0';
    this.textElement.style.transform = 'scale(0.5)';
    this.scene = this.interactive.scene;
    this.scene.fromTo(
      this.textElement,
      {
        scale: [0.5, 1.5],
      },
      {
        duration: 2,
        ease: 'linear',
      },
      // @ts-ignore
      0
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
      0
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
      1
    );
  }
}

export default InteractiveText;
