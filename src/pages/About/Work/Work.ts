import AnimationCore from '@/core/AnimationCore';
import Scene from '@/core/GsapD/Scene';
import WorkItem from './WorkItem';

export const WorkINIT: {
  didInit: Work | null;
} = {
  didInit: null,
};

class Work extends AnimationCore {
  scene!: Scene;
  progress!: number;

  constructor() {
    if ((super('section.work'), WorkINIT.didInit)) {
      return WorkINIT.didInit;
    }
    WorkINIT.didInit = this;
    this.addAnimation(new WorkItem());
    this.persistentAnimation = true;
  }

  onScroll(metric: { x: number; y: number }) {
    super.onScroll(metric);
  }

  onUpdate(n: number) {
    if (this.isActive) {
      this.animations.forEach((e) => {
        e.onUpdate?.(n);
      });
    }
  }

  onResize(nextViewport: { width: number; height: number; aspectRatio: number }) {
    super.onResize(nextViewport);
    this.enterThreshold = -nextViewport.height;
  }
}

export default Work;
