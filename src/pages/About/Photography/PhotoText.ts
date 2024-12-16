import Scene from '@/core/GsapD/Scene';
import Photography from './Photography';

class PhotoText {
  photography: Photography;
  scene!: Scene;
  textElement: HTMLDivElement;

  constructor() {
    this.photography = new Photography();
    this.textElement = document.querySelector('section.photography span') as HTMLDivElement;
  }

  onResize() {
    this.textElement.style.transform = 'translateY(100%)';
    this.scene = this.photography.scene;
    this.scene.fromTo(
      this.textElement,
      {
        translateY: [100, -100],
      },
      {
        duration: 2.4,
        ease: 'linear',
      },
      0
    );
  }
}

export default PhotoText;
