import AnimationCore from '@/core/AnimationCore';
import Scene from '@/core/GsapD/Scene';
import GsapD from '@/core/GsapD';
import TravelIntro from './TravelIntro';
import TravelOveray from './TravelOveray';

export const TravelINIT: {
  didInit: Travel | null;
} = {
  didInit: null,
};

class Travel extends AnimationCore {
  scene!: Scene;
  progress!: number;

  constructor() {
    if ((super('section.travel'), TravelINIT.didInit)) {
      return TravelINIT.didInit;
    }
    TravelINIT.didInit = this;
    this.attachScene();
    this.addAnimation(new TravelIntro());
    this.addAnimation(new TravelOveray());
    this.progress = 0;
    this.enable();
  }

  initializeTextFocus() {
    const t = Number(this.viewport?.height) / 100;
    this.DOM.querySelectorAll('[data-focus]').forEach((e) => {
      const $element = e as HTMLElement;
      const s = Number($element.dataset.focus) * t + this.DOM.offsetTop;
      $element.dataset.focusOffset = `${s}`;
    });
  }

  onScroll(metric: { x: number; y: number }) {
    super.onScroll(metric);
    if (this.isActive) {
      const e = this.metrics.scrollY + this.enterThreshold;
      const s = this.metrics.scrollY + this.metrics.height + this.exitThreshold;
      const i = metric.y - e;
      this.progress = i / (s - e);
    } else {
      if (metric.y <= this.metrics.scrollY + this.enterThreshold) {
        this.progress = 0;
      } else {
        this.progress = 1;
      }
      this.scene.setProgressImmediately(this.progress);
    }
  }

  attachScene() {
    this.scene = new GsapD.Scene();
  }

  onUpdate(n: number) {
    if (this.isActive) {
      this.scene.setProgressImmediately(this.progress);
      this.animations.forEach((e) => {
        e.onUpdate?.(n);
      });
    }
  }

  onResize(nextViewport: { width: number; height: number; aspectRatio: number }) {
    this.viewport = nextViewport;
    this.attachScene();
    super.onResize(nextViewport);
    this.enterThreshold = -nextViewport.height / 4;
    this.exitThreshold = -nextViewport.height;
    this.initializeTextFocus();
  }
}

export default Travel;
