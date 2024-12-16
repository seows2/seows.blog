import GsapD from '@/core/GsapD';
import Scene from '@/core/GsapD/Scene';
import Contact from './Contact';

class ContactText {
  contact: Contact;
  viewport!: { width: number; height: number; aspectRatio: number };
  progress: { value: number };
  textWrapper: HTMLDivElement;
  text: HTMLDivElement;
  played: boolean;
  scene!: Scene;
  textAnimation!: Scene;
  splitText!: NodeListOf<HTMLDivElement>;

  constructor() {
    this.contact = new Contact();
    this.progress = {
      value: 0,
    };
    this.textWrapper = document.querySelector('section.contact .contact--copy') as HTMLDivElement;
    this.text = document.querySelector('section.contact .contact--copy p') as HTMLDivElement;

    this.played = false;
    this.splitTitle();
  }

  splitTitle() {
    const title = this.text;
    const childTitles = [...title.childNodes];

    for (; title.firstChild; ) {
      title.removeChild(title.firstChild);
    }

    for (let ct of childTitles) {
      if (ct.nodeType === Node.TEXT_NODE) {
        const splited = ct.textContent?.split(' ') ?? '';

        for (let s = 0; s < splited.length; s++) {
          if (splited[0] !== '' || s !== 0) {
            ct = document.createElement('span');
            // @ts-ignore
            ct.setAttribute('role', 'text');
            if (splited[0] === '') {
              const textNode = document.createTextNode(' ' + splited[s]);
              ct.appendChild(textNode);
            } else {
              let textNode = document.createTextNode(splited[s]);
              if (s !== splited.length - 1) {
                textNode = document.createTextNode(splited[s] + ' ');
              }
              ct.appendChild(textNode);
            }
            title.appendChild(ct);
          }
        }
      }
      title.appendChild(ct);
    }
    this.splitText = document.querySelectorAll(
      'section.contact .contact--copy p span, section.contact .contact--copy .contact--cta'
    );
  }

  onResize() {
    this.scene = this.contact.scene;
    this.played = false;
    this.textAnimation = new GsapD.Scene();

    this.textAnimation.fromTo(
      this.splitText,
      {
        opacity: [0, 1],
        translateY: [50, 0],
      },
      {
        duration: 1,
        ease: 'easeOutExpo',
        stagger: 0.1,
      },
      0
    );
    this.scene.fromTo(
      this.progress,
      {
        value: [0, 1],
      },
      {
        duration: 3,
      },
      0
    );
    this.scene.fromTo(
      this.textWrapper,
      {
        opacity: [0, 1],
      },
      {
        duration: 0.5,
        ease: 'easeInOutExpe',
        onComplete: () => {
          if (!this.played) {
            this.textAnimation.play();
            this.played = true;
          }
        },
      },
      0
    );
  }

  lerp(t: number, e: number, s: number) {
    return (1 - s) * t + s * e;
  }
}

export default ContactText;
