import AnimationCore from '@/core/AnimationCore';
import GsapD from '@/core/GsapD';
import Scene from '@/core/GsapD/Scene';
import ContactCta from './ContactCta';
import ContactText from './ContactText';

export const ContactINIT: {
  didInit: Contact | null;
} = {
  didInit: null,
};

class Contact extends AnimationCore {
  scene!: Scene;
  progress!: number;

  constructor() {
    if ((super('section.contact'), ContactINIT.didInit)) {
      return ContactINIT.didInit;
    }
    ContactINIT.didInit = this;

    this.persistentAnimation = true;
    this.attachScene();
    this.progress = 0;

    this.addAnimation(new ContactCta());
    this.addAnimation(new ContactText());
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
    this.initializeTextFocus();
  }

  onEnter() {
    if (!this.isActive) {
      this.enable();
      this.animations.forEach((a) => a.onEnter && a.onEnter());
    }
  }

  onExit() {
    if (this.isActive) {
      this.disable();
      this.animations.forEach((a) => a.onExit && a.onExit());
    }
  }

  onMouseMove(e: MouseEvent) {
    if (this.isActive) {
      // @ts-ignore
      this.animations.forEach((a) => a.onMouseMove && a.onMouseMove(e));
    }
  }
}

export default Contact;
