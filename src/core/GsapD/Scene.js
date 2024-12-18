import Eases from './Eases';
import Actor from './Actor';

export default class Scene {
  constructor() {
    this.timeScale = 1000;
    this.duration = 0;
    this.startTime = 0;
    this.currentTime = 0;
    this.progress = 0;

    this.started = false;
    this.paused = false;
    this.rewinding = false;
    this.currentAnimationFrame = null;
    this.previousActionDuration = 0;

    this.actions = [];
  }

  play() {
    this.rewinding = false;

    if (!this.started) {
      if (this.onStartCallback) {
        this.onStartCallback();
      }
      this.started = true;
    }

    if (this.paused) {
      this.startTime = performance.now() - this.duration * this.progress;
    } else {
      this.startTime = performance.now();
    }
    this.paused = false;

    const update = (currentTime) => {
      const elapsedTime = currentTime - this.startTime;
      this.progress = Math.min(elapsedTime / this.duration, 1);

      this._animate();

      if (this.progress < 1) {
        this.currentAnimationFrame = requestAnimationFrame(update);
      }
    };

    this.currentAnimationFrame = requestAnimationFrame(update);
  }

  pause() {
    this.paused = true;
    cancelAnimationFrame(this.currentAnimationFrame);
  }

  rewind() {
    this.rewinding = true;

    if (this.paused) {
      this.startTime = performance.now() - this.duration * (1 - this.progress);
    } else {
      this.startTime = performance.now();
    }
    this.paused = false;

    const update = (currentTime) => {
      const elapsedTime = this.duration - (currentTime - this.startTime);
      this.progress = Math.min(elapsedTime / this.duration, 1);

      this._animate();

      if (this.progress > 0) {
        this.currentAnimationFrame = requestAnimationFrame(update);
      }
    };

    this.currentAnimationFrame = requestAnimationFrame(update);
  }

  setProgress(progress) {
    this.progress = progress;

    if (!this.started && this.progress > 0) {
      if (this.onStartCallback) {
        this.onStartCallback();
      }
      this.started = true;
    }

    const update = (currentTime) => {
      const elapsedTime = this.duration * this.progress;
      this._animate();
    };

    this.currentAnimationFrame = requestAnimationFrame(update);
  }

  setProgressImmediately(progress) {
    this.progress = progress;

    if (!this.started && this.progress > 0) {
      if (this.onStartCallback) {
        this.onStartCallback();
      }
      this.started = true;
    }

    this._animate();
  }

  _animate() {
    this.currentTime = this.duration * this.progress;

    this.actions.forEach((action, index) => {
      action.progress = (this.currentTime - action.timings.start) / action.timings.totalDuration;

      if (action.started && !action.completed) {
        if (action.options.onUpdate) {
          action.options.onUpdate();
        }
        action.moments.forEach((moment, index) => {
          const staggerTime = Math.max(
            this.currentTime - action.timings.start - action.timings.stagger * index,
            0
          );
          const staggerProgress = Math.min(staggerTime / action.timings.duration, 1);
          const latest = action.timings.easing(staggerProgress);
          moment.update(latest);
          if (action.options.toggle && staggerProgress !== 1) {
            moment.update(0);
          }
        });
      }

      if (action.progress > 0) {
        if (!action.started) {
          if (action.options.onStart) {
            action.options.onStart();
          }
          if (action.timings.start !== 0 && action.direction !== 'from') {
            action.moments.forEach((moment) => {
              moment.setProperties();
            });
          }
        }
        action.started = true;
      } else {
        if (action.started && (action.direction === 'from' || action.direction === 'fromTo')) {
          if (action.direction === 'from') {
            if (action.timings.start !== 0) {
              action.moments.forEach((moment) => {
                moment.update(1);
              });
            } else {
              action.moments.forEach((moment) => {
                moment.update(0);
              });
            }
          } else {
            action.moments.forEach((moment) => {
              moment.update(0);
            });
          }
        } else if (
          !action.started &&
          !action.initialized &&
          (action.direction === 'from' || action.direction === 'fromTo')
        ) {
          action.moments.forEach((moment) => {
            moment.update(0);
          });
          action.initialized = true;
        }
        if (action.options.toggle) {
          action.moments.forEach((moment) => {
            moment.update(0);
          });
        }
        action.started = false;
      }

      if (action.progress >= 1) {
        if (!action.completed) {
          action.moments.forEach((moment) => {
            moment.update(1);
          });
          if (action.options.onComplete) {
            action.options.onComplete();
          }
        }
        action.completed = true;
      } else {
        action.completed = false;
      }
    });
  }

  to(target, properties, options, offset) {
    let isDOM = false;
    let input = target;
    if (
      target instanceof window.HTMLElement ||
      target instanceof window.NodeList ||
      target instanceof window.SVGPathElement ||
      target instanceof window.SVGElement ||
      target instanceof window.SVGCircleElement
    ) {
      isDOM = true;
      if (target instanceof window.NodeList) {
        input = [...target];
      }
    }
    const targets = this._setTargets(input);
    const timings = this._setTimings(targets, options, offset);

    const moments = [];
    targets.forEach((target) => {
      moments.push(new Actor(target, properties, 'to', isDOM));
    });

    this._add(moments, timings, options, 'to');
  }

  from(target, properties, options, offset) {
    let isDOM = false;
    let input = target;
    if (
      target instanceof window.HTMLElement ||
      target instanceof window.NodeList ||
      target instanceof window.SVGPathElement ||
      target instanceof window.SVGElement ||
      target instanceof window.SVGCircleElement
    ) {
      isDOM = true;
      if (target instanceof window.NodeList) {
        input = [...target];
      }
    }
    const targets = this._setTargets(input);
    const timings = this._setTimings(targets, options, offset);

    const moments = [];
    targets.forEach((target) => {
      moments.push(new Actor(target, properties, 'from', isDOM));
    });

    this._add(moments, timings, options, 'from');
  }

  fromTo(target, properties, options, offset) {
    let isDOM = false;
    let input = target;
    if (
      target instanceof window.HTMLElement ||
      target instanceof window.NodeList ||
      target instanceof window.SVGPathElement ||
      target instanceof window.SVGElement ||
      target instanceof window.SVGCircleElement
    ) {
      isDOM = true;
      if (target instanceof window.NodeList) {
        input = [...target];
      }
    }
    const targets = this._setTargets(input);
    const timings = this._setTimings(targets, options, offset);

    const moments = [];
    targets.forEach((target) => {
      moments.push(new Actor(target, properties, 'fromTo', isDOM));
    });

    this._add(moments, timings, options, 'fromTo');
  }

  addClass(target, properties, options, offset = null) {
    let isDOM = false;
    let input = target;
    if (target instanceof window.HTMLElement || target instanceof window.NodeList) {
      isDOM = true;
      if (target instanceof window.NodeList) {
        input = [...target];
      }
    }
    const targets = this._setTargets(input);
    const timings = this._setTimings(targets, options, offset);

    const moments = [];
    targets.forEach((target) => {
      moments.push(new Actor(target, properties, 'addClass', isDOM));
    });

    this._add(moments, timings, options, 'addClass');
  }

  removeClass(target, properties, options, offset = null) {
    let isDOM = false;
    let input = target;
    if (target instanceof window.HTMLElement || target instanceof window.NodeList) {
      isDOM = true;
      if (target instanceof window.NodeList) {
        input = [...target];
      }
    }
    const targets = this._setTargets(input);
    const timings = this._setTimings(targets, options, offset);

    const moments = [];
    targets.forEach((target) => {
      moments.push(new Actor(target, properties, 'removeClass', isDOM));
    });

    this._add(moments, timings, options, 'removeClass');
  }

  onStart(callback) {
    this.onStartCallback = callback;
  }

  _add(moments, timings, options, direction) {
    this.actions.push({
      moments,
      timings,
      options,
      direction,
      progress: 0,
      initialized: false,
      started: false,
      completed: false,
    });
    this.setProgress(0);
  }

  _setTargets(target) {
    let targets = null;
    if (Array.isArray(target)) {
      targets = target;
    } else {
      targets = [target];
    }

    return targets;
  }

  _setTimings(targets, options, offset = null) {
    const timings = {};

    const timeScaledDuration = options.duration ? options.duration * this.timeScale : 1;

    let actionOffset = 0;
    if (offset !== null) {
      actionOffset = offset * this.timeScale;
    } else {
      actionOffset = this.duration;
    }

    timings.stagger = options.stagger ? options.stagger * this.timeScale : 0;

    const delay = options.delay ? options.delay * this.timeScale + actionOffset : actionOffset;
    const duration = timeScaledDuration + (targets.length - 1) * timings.stagger;

    timings.start = delay;
    timings.end = delay + duration;
    timings.duration = timeScaledDuration;
    timings.totalDuration = duration;
    timings.easing = Eases.get(options.ease);

    this.previousActionDuration = timings.end;
    this.duration = Math.max(this.previousActionDuration, this.duration);

    return timings;
  }
}
