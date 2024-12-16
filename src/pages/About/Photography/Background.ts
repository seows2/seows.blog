import Scene from '@/core/GsapD/Scene';
import Photography from './Photography';

class Background {
  photography: Photography;
  progress: { value: number };
  viewport!: { width: number; height: number; aspectRatio: number };
  background: HTMLDivElement;
  scene!: Scene;
  constructor() {
    this.photography = new Photography();
    this.progress = {
      value: 0,
    };
    this.background = document.querySelector(
      'section.photography .photography--background'
    ) as HTMLDivElement;
  }

  onResize(nextViewport: { width: number; height: number; aspectRatio: number }) {
    this.viewport = nextViewport;
    this.scene = this.photography.scene;
    this.scene.fromTo(
      this.background,
      {
        opacity: [0, 1],
      },
      {
        duration: 1,
      },
      0
    );
    this.scene.fromTo(
      this.progress,
      {
        value: 1,
      },
      {
        duration: 3,
      },
      0
    );
  }
}

export default Background;
