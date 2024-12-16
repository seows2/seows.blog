import AnimationCore from '@/core/AnimationCore';
import GsapD from '@/core/GsapD';
import Scene from '@/core/GsapD/Scene';
import AnimationText from './AnimationText';
import MotionPath from './MotionPath';

export const AnimationINIT: {
  didInit: Animation | null;
} = {
  didInit: null,
};
class Animation extends AnimationCore {
  scene!: Scene;
  progress!: number;

  constructor() {
    if ((super('section.animation'), AnimationINIT.didInit)) {
      return AnimationINIT.didInit;
    }
    AnimationINIT.didInit = this;

    this.scene = new GsapD.Scene();
    this.progress = 0;
    this.addAnimation(new MotionPath());
    this.addAnimation(new AnimationText());
  }

  initializeTextFocus() {
    const ratio = Number(this.viewport?.height) / 100;
    this.DOM.querySelectorAll('[data-focus]').forEach((e) => {
      const $element = e as HTMLElement;
      const focus = Number($element.dataset.focus as string) * ratio + this.DOM.offsetTop;
      $element.dataset.focusOffset = `${focus}`;
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
        this.scene.setProgressImmediately(this.progress);
      }
    }
    this.animations.forEach((a) => a.onScroll && a.onScroll(metric));
  }

  onResize(nextViewport: { width: number; height: number; aspectRatio: number }) {
    this.viewport = nextViewport;
    super.onResize(nextViewport);
    this.exitThreshold = -nextViewport.height;
    this.initializeTextFocus();
  }

  onUpdate(n: number) {
    if (this.isActive) {
      this.scene.setProgressImmediately(this.progress);
      this.animations.forEach((a) => {
        a.onUpdate?.(n);
      });
    }
  }
}

export default Animation;
