import GsapD from '@/core/GsapD';
import Scene from '@/core/GsapD/Scene';

class WorkItem {
  viewport: { width: number; height: number; aspectRatio: number };
  DOMS: NodeListOf<HTMLDivElement>;
  cards: Array<{
    DOM: HTMLDivElement;
    scrollY: number;
    height: number;
    progress: number;
    offsetMultiplier: number;
    scene?: Scene;
  }>;

  constructor() {
    this.viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
      aspectRatio: window.innerWidth / window.innerHeight,
    };
    this.DOMS = document.querySelectorAll('.work--item');
    this.cards = [];
  }

  createCardObjects() {
    this.cards = [];
    this.DOMS.forEach((DOM, idx) => {
      this.cards.push({
        DOM,
        scrollY: DOM.offsetTop,
        height: DOM.clientHeight,
        progress: 0,
        offsetMultiplier: idx === 2 || idx === 5 ? 4 : 1,
      });
    });
  }

  createScenes() {
    this.cards.forEach((card) => {
      const scene = new GsapD.Scene();
      scene.fromTo(
        card.DOM,
        {
          translateY: [25 * card.offsetMultiplier, 0],
        },
        {
          duration: 1,
          ease: 'easeInOutSine',
        },
        0
      );
      card.scene = scene;
    });
  }

  onScroll(metric: { x: number; y: number }) {
    this.cards.forEach((card) => {
      if (metric.y >= card.scrollY - this.viewport.height) {
        const min = (metric.y - (card.scrollY - this.viewport.height)) / card.height;
        card.progress = Math.min(min, 1);
      } else {
        card.progress = 0;
      }
      card.scene?.setProgressImmediately(card.progress);
    });
  }

  onResize(nextViewport: { width: number; height: number; aspectRatio: number }) {
    this.viewport = nextViewport;
    this.createCardObjects();
    this.createScenes();
  }
}

export default WorkItem;
