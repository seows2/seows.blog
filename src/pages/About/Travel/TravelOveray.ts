import Scene from '@/core/GsapD/Scene';
import Travel from './Travel';

class TravelOveray {
  travel: Travel;
  overlay: HTMLDivElement;
  scene!: Scene;

  constructor() {
    this.travel = new Travel();
    this.overlay = document.querySelector('section.travel .travel--overlay') as HTMLDivElement;
  }

  onResize() {
    this.scene = this.travel.scene;
    this.scene.fromTo(
      this.overlay,
      {
        opacity: [0, 1],
      },
      {
        duration: 1,
      },
      // @ts-ignore
      2
    );
  }
}

export default TravelOveray;
