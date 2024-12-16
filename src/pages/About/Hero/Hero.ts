import AnimationCore from '@/core/AnimationCore';
import HeroIndicator from './HeroIndicator';
import HeroTextBackground from './HeroTextBackground';

class Hero extends AnimationCore {
  constructor() {
    super('section.hero');
    this.isActive = true;
    this.enterThreshold = -80;
    this.persistentAnimation = true;
    this.addAnimation(new HeroTextBackground());
    this.addAnimation(new HeroIndicator());
  }

  onScroll(metric: { x: number; y: number }) {
    if (
      metric.y >= this.metrics.scrollY + this.enterThreshold &&
      metric.y < this.metrics.scrollY + this.metrics.height + this.exitThreshold
    ) {
      this.onEnter();
    } else {
      this.onExit();
    }
    this.animations.forEach((a) => a.onScroll && a.onScroll(metric));
  }
}

export default Hero;
