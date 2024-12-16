import Scene from '@/core/GsapD/Scene';
import Photography from './Photography';

class PhotoCollage {
  photography: Photography;
  viewport!: { width: number; height: number; aspectRatio: number };
  scene!: Scene;
  collage: HTMLDivElement;

  constructor() {
    this.photography = new Photography();
    this.collage = document.querySelector(
      'section.photography .photography--collage'
    ) as HTMLDivElement;
  }

  onResize(nextViewport: { width: number; height: number; aspectRatio: number }) {
    this.viewport = nextViewport;
    this.scene = this.photography.scene;
    this.scene.addClass(
      this.collage,
      {
        class: 'enter',
      },
      {
        toggle: true,
      },
      // @ts-ignore
      0.75
    );
  }
}

export default PhotoCollage;
