class AnimationCore {
  DOM: HTMLElement;
  isActive = false;
  enterThreshold = 0;
  exitThreshold = 0;
  animations: AnimationCore[] = [];
  persistentAnimation = false;
  metrics: {
    scrollX: number;
    scrollY: number;
    width: number | undefined;
    height: number;
  } = {
    scrollX: 0,
    scrollY: 0,
    width: 0,
    height: 0,
  };
  viewport: { width: number; height: number; aspectRatio: number } | undefined;

  constructor(selector: string) {
    this.DOM = document.querySelector(selector) as HTMLElement;
  }

  addAnimation(animation: any) {
    this.animations.push(animation);
  }

  enable() {
    this.isActive = true;
    this.DOM?.classList.add('active');
  }
  disable() {
    this.isActive = false;
    this.DOM?.classList.remove('active');
  }

  onPreloaded() {
    this.animations.forEach((a) => a.onPreloaded && a.onPreloaded());
  }

  onDestroy() {
    this.animations.forEach((a) => a.onDestroy && a.onDestroy());
    this.animations = [];
  }

  onResize(nextViewport: { width: number; height: number; aspectRatio: number }) {
    this.viewport = nextViewport;
    this.animations.forEach((a) => a.onResize && a.onResize(nextViewport));
    this.metrics.scrollX = this.DOM.offsetLeft;
    this.metrics.scrollY = this.DOM.offsetTop;
    this.metrics.width = this.DOM.offsetWidth;
    this.metrics.height = this.DOM.offsetHeight;
  }

  onScroll(metric: { x: number; y: number }) {
    if (
      metric.y >= this.metrics.scrollY + this.enterThreshold &&
      metric.y < this.metrics.scrollY + this.metrics.height + this.exitThreshold
    ) {
      this.isActive || this.onEnter();
    } else {
      this.isActive && this.onExit();
    }
    this.animations.forEach((a) => a.onScroll && a.onScroll(metric));
  }
  onMouseDown(t: any) {
    this.isActive &&
      this.animations.forEach((e) => {
        e.onMouseDown && e.onMouseDown(t);
      });
  }
  onMouseUp(t: any) {
    this.isActive &&
      this.animations.forEach((e) => {
        e.onMouseUp && e.onMouseUp(t);
      });
  }

  onEnter() {
    this.isActive || this.enable();
  }
  onExit() {
    this.isActive && this.disable();
  }
  onUpdate(n: number) {
    this.isActive && this.animations.forEach((a) => a.onUpdate(n));
  }
}

export default AnimationCore;
