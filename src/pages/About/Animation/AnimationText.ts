import GsapD from '@/core/GsapD/GsapD';
import Scene from '@/core/GsapD/Scene';
import Animation from './Animation';

class AnimationText {
  animation: Animation;
  textWrapper: HTMLDivElement;
  textElements: NodeListOf<HTMLDivElement>;
  textOverlays: NodeListOf<HTMLDivElement>;
  textFlourishShort: NodeListOf<HTMLDivElement>;
  textFlourishLong: HTMLDivElement;
  overlayProgress: { translateX: number }[];
  played: boolean;
  scene: Scene;
  textAnimation: Scene;

  constructor() {
    this.animation = new Animation();
    this.scene = this.animation.scene;
    this.textAnimation = new GsapD.Scene();
    this.textWrapper = document.querySelector('section.animation .wrapper') as HTMLDivElement;
    this.textElements = document.querySelectorAll('section.animation .wrapper .word-wrap .text');
    this.textOverlays = document.querySelectorAll('section.animation .wrapper .word-wrap .overlay');
    this.textFlourishShort = document.querySelectorAll(
      'section.animation .wrapper .flourish-wrap svg .short'
    );
    this.textFlourishLong = document.querySelector(
      'section.animation .wrapper .flourish-wrap svg .long'
    ) as HTMLDivElement;
    this.overlayProgress = [
      {
        translateX: -101,
      },
      {
        translateX: -101,
      },
      {
        translateX: -101,
      },
      {
        translateX: -101,
      },
      {
        translateX: -101,
      },
    ];
    this.played = false;
  }

  onResize() {
    this.textAnimation.fromTo(
      this.overlayProgress,
      {
        translateX: [-101, 101],
      },
      {
        duration: 1,
        stagger: 0.2,
        ease: 'easeInOutExpo',
        onUpdate: () => {
          this.textOverlays.forEach((t, e) => {
            t.style.transform = `translateX(${this.overlayProgress[e].translateX}%)`;
          });
        },
      },
      // @ts-ignore
      0
    );
    this.textAnimation.to(
      this.textElements,
      {
        opacity: 1,
      },
      {
        delay: 0.5,
        duration: 0.5,
        stagger: 0.2,
        ease: 'easeOutExpo',
      },
      // @ts-ignore
      0
    );
    this.textAnimation.to(
      this.textFlourishShort,
      {
        'stroke-dashoffset': 31,
      },
      {
        duration: 0.5,
        ease: 'easeInOutQuint',
      },
      // @ts-ignore
      1.5
    );
    this.textAnimation.to(
      this.textFlourishLong,
      {
        'stroke-dashoffset': 42,
      },
      {
        duration: 0.5,
        ease: 'easeInOutQuint',
      },
      // @ts-ignore
      1.5
    );
    this.scene.fromTo(
      this.textWrapper,
      {
        opacity: [0, 1],
      },
      {
        duration: 0.1,
        ease: 'easeInOutExpo',
        onComplete: () => {
          if (!this.played) {
            this.textAnimation.play();
            this.played = true;
          }
        },
      },
      // @ts-ignore
      0
    );
    this.scene.fromTo(
      this.textWrapper,
      {
        opacity: [1, 0],
      },
      {
        duration: 0.25,
        ease: 'easeInOutExpo',
      },
      // @ts-ignore
      0.75
    );
  }
}

export default AnimationText;
