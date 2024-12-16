import AnimationCore from '@/core/AnimationCore';
import GsapD from '@/core/GsapD';
import Scene from '@/core/GsapD/Scene';
import PixelGrid from './PixelGrid';
import PixelText from './PixelText';

export const PixelINIT: {
  didInit: Pixel | null;
} = {
  didInit: null,
};

class Pixel extends AnimationCore {
  scene!: Scene;
  progress!: number;

  constructor() {
    if ((super('section.pixel-perfect'), PixelINIT.didInit)) {
      return PixelINIT.didInit;
    }
    PixelINIT.didInit = this;
    this.attachScene();
    this.progress = 0;
    this.addAnimation(new PixelGrid());
    this.addAnimation(new PixelText());
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
        e.onUpdate && e.onUpdate(n);
      });
    }
  }

  onResize(nextViewport: { width: number; height: number; aspectRatio: number }) {
    this.viewport = nextViewport;
    this.attachScene();
    super.onResize(nextViewport);
    this.enterThreshold = this.exitThreshold = -nextViewport.height;
    this.initializeTextFocus();
  }
}

export default Pixel;
