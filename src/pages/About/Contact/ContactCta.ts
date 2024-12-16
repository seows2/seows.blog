import Contact from './Contact';

class ContactCta {
  contact: Contact;
  bounds: { top: number; left: number; width: number; height: number };
  mouse: {
    x: number;
    y: number;
    xOffsetTarget: number;
    xOffsetCurrent: number;
    yOffsetTarget: number;
    yOffsetCurrent: number;
  };
  cta: HTMLDivElement;
  viewport!: { width: number; height: number; aspectRatio: number };

  constructor() {
    this.contact = new Contact();
    this.bounds = {
      top: 0,
      left: 0,
      width: 0,
      height: 0,
    };
    this.mouse = {
      x: 0,
      y: 0,
      xOffsetTarget: 0,
      xOffsetCurrent: 0,
      yOffsetTarget: 0,
      yOffsetCurrent: 0,
    };
    this.cta = document.querySelector(
      'section.contact .contact--copy .contact--cta a'
    ) as HTMLDivElement;
  }

  calculateMouseOffset() {
    this.mouse.xOffsetTarget =
      (this.mouse.x - this.bounds.left - this.bounds.width / 2) / (this.viewport.width / 2);
    this.mouse.yOffsetTarget =
      (this.mouse.y - this.bounds.top - this.bounds.height / 2) / (this.viewport.height / 2);
  }

  onResize(nextViewport: { width: number; height: number; aspectRatio: number }) {
    this.viewport = nextViewport;
  }

  onMouseMove(e: MouseEvent) {
    this.bounds = this.cta.getBoundingClientRect();
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  lerp(t: number, e: number, s: number) {
    return (1 - s) * t + s * e;
  }

  onUpdate() {
    this.calculateMouseOffset();

    this.mouse.xOffsetCurrent = this.lerp(this.mouse.xOffsetCurrent, this.mouse.xOffsetTarget, 0.1);
    this.mouse.yOffsetCurrent = this.lerp(this.mouse.yOffsetCurrent, this.mouse.yOffsetTarget, 0.1);
    this.cta.style.transform = `translate(${
      100 * this.mouse.xOffsetCurrent
    }%, ${100 * this.mouse.yOffsetCurrent}%)`;
  }
}

export default ContactCta;
