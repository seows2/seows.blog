import AnimationCore from '@/core/AnimationCore';
import Animation, { AnimationINIT } from './Animation/Animation';
import Hero from './Hero/Hero';
import Pixel, { PixelINIT } from './Pixel/Pixel';
import Interactive, { InteractiveINIT } from './Interactive/Interactive';
import Photography, { PhotographINIT } from './Photography/Photography';
import Travel, { TravelINIT } from './Travel/Travel';
import Contact, { ContactINIT } from './Contact/Contact';
import Work, { WorkINIT } from './Work/Work';

class AboutAnimation {
  sections: AnimationCore[] = [];
  viewportTracker: HTMLDivElement = document.createElement('div');
  resizeTimer: any;
  viewport: { width: number; height: number; aspectRatio: number };
  ticking: boolean;
  persistentAnimation: boolean;
  scrollMetrics: { x: number; y: number };
  needScrollUpdate: boolean | undefined;
  frame: number | undefined;
  pressed: boolean;
  lazyLoadItems: {
    section: HTMLElement;
    scrollTarget: number;
    lazyTarget: HTMLElement | null;
    lazyData: HTMLElement | null;
    loaded: boolean;
  }[] = [];

  constructor() {
    this._initializeLazyLoad();
    this.lazyLoad = this.lazyLoad.bind(this);
    this._createViewportTracker();
    this.onScroll = this.onScroll.bind(this);
    this.debounceResize = this.debounceResize.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);

    this.sections.push(new Hero());
    this.sections.push(new Animation());
    this.sections.push(new Pixel());
    this.sections.push(new Interactive());
    this.sections.push(new Photography());
    this.sections.push(new Travel());
    this.sections.push(new Contact());
    this.sections.push(new Work());

    this.addEventListener();

    this.ticking = false;
    this.persistentAnimation = false;
    this.viewport = {
      width: 0,
      height: 0,
      aspectRatio: 0,
    };
    this.pressed = false;
    this.scrollMetrics = {
      x: 0,
      y: 0,
    };

    this.onPreloaded();
    this.onResize();
    this.hasPersistentAnimation();
    this.onUpdate(0);
  }

  _initializeLazyLoad() {
    const sections = document.querySelectorAll('section');
    this.lazyLoadItems = [];
    sections.forEach((section) => {
      this.lazyLoadItems.push({
        section,
        scrollTarget: section.offsetTop - section.offsetHeight,
        lazyTarget: section.querySelector('picture[data-lazy]'),
        lazyData: section.querySelector('noscript'),
        loaded: false,
      });
    });
  }

  lazyLoad() {
    this.lazyLoadItems.forEach((item) => {
      if (
        !item.loaded &&
        (window.scrollY >= item.scrollTarget || window.scrollY >= item.scrollTarget)
      ) {
        if (item.lazyTarget && item.lazyData) {
          const $picture = document.createElement('picture');
          $picture.innerHTML = item.lazyData.textContent as string;
          const firstChild = $picture.firstChild as HTMLElement;
          firstChild.setAttribute('data-lazy', '');
          item.lazyTarget.parentNode?.replaceChild(firstChild, item.lazyTarget);
        }
        item.loaded = true;
      }
    });
  }

  onPreloaded() {
    this.sections.forEach((s) => s.onPreloaded());
  }

  onUpdate(n: number) {
    this.ticking = false;
    if (this.needScrollUpdate) {
      this.sections.forEach((s) => s.onScroll(this.scrollMetrics));
    }
    this.sections.forEach((s) => s.onUpdate(n));
    this.hasPersistentAnimation();
    if (this.persistentAnimation) {
      this.sections.forEach((s) => s.persistentAnimation && s.onUpdate(n));
      this.frame = requestAnimationFrame(this.onUpdate.bind(this));
    } else {
      this.sections.forEach((s) => s.onUpdate(n));
    }
  }
  hasPersistentAnimation() {
    this.persistentAnimation = false;
    this.sections.forEach((s) => {
      if (s.isActive && s.persistentAnimation) {
        this.persistentAnimation = true;
      }
    });
  }

  tick() {
    if (!this.ticking) {
      this.frame = requestAnimationFrame(this.onUpdate.bind(this));
      this.ticking = true;
    }
  }

  onScroll() {
    const metric = {
      x: scrollX,
      y: scrollY,
    };
    this.needScrollUpdate = this.scrollMetrics.x !== metric.x || this.scrollMetrics.y !== metric.y;
    this.scrollMetrics = metric;
    if (!this.persistentAnimation) {
      this.tick();
    }
  }

  debounceResize() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(this.onResize.bind(this), 400);
  }

  onResize() {
    const { width, height } = this.viewportTracker.getBoundingClientRect();
    const nextViewport = {
      width,
      height,
      aspectRatio: width / height,
    };

    if (
      this.viewport.width !== nextViewport.width ||
      this.viewport.height !== nextViewport.height
    ) {
      this.sections.forEach((s) => s.onResize(nextViewport));
    }
  }

  onMouseDown(t: any) {
    this.pressed = true;
    this.sections.forEach((e) => {
      e.onMouseDown(t);
    });
  }
  onMouseUp(t: any) {
    this.pressed = false;
    this.sections.forEach((e) => {
      e.onMouseUp(t);
    });
  }

  onMouseMove(event: MouseEvent) {
    this.sections.forEach((e) => {
      // @ts-ignore
      e.onMouseMove?.(event);
    });
  }

  addEventListener() {
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('scroll', this.lazyLoad);
    window.addEventListener('resize', this.debounceResize);
    window.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('touchstart', this.onMouseDown);
    window.addEventListener('touchend', this.onMouseUp);
  }

  removeEventListeners() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('scroll', this.lazyLoad);
    window.removeEventListener('resize', this.debounceResize);
    window.removeEventListener('mousedown', this.onMouseDown);
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('touchstart', this.onMouseDown);
    window.removeEventListener('touchend', this.onMouseUp);
  }

  clear() {
    this.removeEventListeners();
    document.body.removeChild(this.viewportTracker);
    AnimationINIT.didInit = null;
    PixelINIT.didInit = null;
    InteractiveINIT.didInit = null;
    PhotographINIT.didInit = null;
    TravelINIT.didInit = null;
    ContactINIT.didInit = null;
    WorkINIT.didInit = null;
  }

  _createViewportTracker() {
    this.viewportTracker.id = 'viewport-tracker';
    this.viewportTracker.style.height = '100vh';
    this.viewportTracker.style.opacity = '0';
    this.viewportTracker.style.pointerEvents = 'none';
    this.viewportTracker.style.position = 'fixed';
    this.viewportTracker.style.top = '0';
    this.viewportTracker.style.left = '0';
    this.viewportTracker.style.width = '100vw';
    this.viewportTracker.style.visibility = 'hidden';
    this.viewportTracker.style.zIndex = '-1';
    document.body.appendChild(this.viewportTracker);
  }
}

export default AboutAnimation;
