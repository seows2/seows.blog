import AnimationCore from '@/core/AnimationCore';
import GsapD from '@/core/GsapD';
import Scene from '@/core/GsapD/Scene';
import Background from './Background';
import PhotoCollage from './PhotoCollage';
import PhotoText from './PhotoText';

export const PhotographINIT: {
  didInit: Photography | null;
} = {
  didInit: null,
};

class Photography extends AnimationCore {
  scene!: Scene;
  progress!: number;

  constructor() {
    if ((super('section.photography'), PhotographINIT.didInit)) {
      return PhotographINIT.didInit;
    }
    PhotographINIT.didInit = this;
    this.attachScene();
    this.addAnimation(new Background());
    this.addAnimation(new PhotoCollage());
    this.addAnimation(new PhotoText());
    this.progress = 0;
  }

  initializeTextFocus() {
    const t = Number(this.viewport?.height) / 100;
    this.DOM.querySelectorAll('[data-focus]').forEach((e) => {
      const $element = e as HTMLElement;
      const s = Number($element.dataset.focus) * t + this.DOM.offsetTop;
      $element.dataset.focusOffset = `${s}`;
    });
  }

  attachScene() {
    this.scene = new GsapD.Scene();
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

  onUpdate(n: number) {
    if (this.isActive) {
      this.scene.setProgressImmediately(this.progress);
      this.animations.forEach((a) => a.onUpdate && a.onUpdate(n));
    }
  }

  onResize(nextViewport: { width: number; height: number; aspectRatio: number }) {
    this.viewport = nextViewport;
    this.attachScene();
    super.onResize(nextViewport);
    this.enterThreshold = -nextViewport.height;
    this.exitThreshold = nextViewport.height / 2;
    this.initializeTextFocus();
  }
}

export default Photography;
