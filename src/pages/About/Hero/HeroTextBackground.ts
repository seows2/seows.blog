import GsapSD from '@/core/GsapSD';
import Renderer from '@/core/GsapSD/Renderer';
import Volume from '@/core/GsapSD/Volume';
import Orthographic from '@/core/GsapSD/Orthographic';
import Mesh from '@/core/GsapSD/Mesh';
import Scene from '@/core/GsapD/Scene';
import GsapD from '@/core/GsapD/GsapD';

class HeroTextBackground {
  canvas: HTMLCanvasElement;
  heroElement: HTMLDivElement;
  textElement: HTMLDivElement;
  renderer: Renderer;
  volume: Volume;
  camera: Orthographic;
  planeMesh: Mesh;
  speed: { current: number; target: number; ease: number };
  scene: Scene;
  time: number;
  then: number;
  now: number;
  timeScale: number;

  constructor() {
    this.scene = new GsapD.Scene();
    this.time = 0;
    this.then = 0;
    this.now = 0;
    this.timeScale = 5e-4;
    this.canvas = document.getElementById('hero-text-background') as HTMLCanvasElement;
    this.heroElement = document.querySelector('section.hero') as HTMLDivElement;
    this.textElement = document.getElementById('hero-heading-key-line') as HTMLDivElement;
    this.renderer = new GsapSD.Renderer(this.canvas);
    this.volume = new GsapSD.Volume();
    this.camera = new GsapSD.Orthographic(-1, 1, -1, 1, -1, 1);
    const program = new GsapSD.Program(
      this.renderer.gl,
      '#ifdef GL_FRAGMENT_PRECISION_HIGH\n\tprecision highp float;\n#else\n\tprecision mediump float;\n#define GLSLIFY 1\n#endif\n\nattribute vec4 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aUV;\n\nuniform mat4 uViewProjectionMatrix;\nuniform mat4 uNormalMatrix;\nuniform mat4 uLocalMatrix;\nuniform float uTime;\n\nvarying vec3 vNormal;\nvarying vec2 vUV;\nvarying vec3 vPos;\n\nvec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }\nvec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }\n\nfloat snoise(vec3 v) { \n\tconst vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n\tconst vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n\tvec3 i  = floor(v + dot(v, C.yyy) );\n\tvec3 x0 =   v - i + dot(i, C.xxx) ;\n\n\tvec3 g = step(x0.yzx, x0.xyz);\n\tvec3 l = 1.0 - g;\n\tvec3 i1 = min( g.xyz, l.zxy );\n\tvec3 i2 = max( g.xyz, l.zxy );\n\n\tvec3 x1 = x0 - i1 + 1.0 * C.xxx;\n\tvec3 x2 = x0 - i2 + 2.0 * C.xxx;\n\tvec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n\ti = mod(i, 289.0 ); \n\tvec4 p = permute( permute( permute( \n\t\ti.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n\t\t+ i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n\t\t+ i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n\tfloat n_ = 1.0/7.0;\n\tvec3  ns = n_ * D.wyz - D.xzx;\n\n\tvec4 j = p - 49.0 * floor(p * ns.z *ns.z);\n\n\tvec4 x_ = floor(j * ns.z);\n\tvec4 y_ = floor(j - 7.0 * x_ );\n\n\tvec4 x = x_ *ns.x + ns.yyyy;\n\tvec4 y = y_ *ns.x + ns.yyyy;\n\tvec4 h = 1.0 - abs(x) - abs(y);\n\n\tvec4 b0 = vec4( x.xy, y.xy );\n\tvec4 b1 = vec4( x.zw, y.zw );\n\n\tvec4 s0 = floor(b0)*2.0 + 1.0;\n\tvec4 s1 = floor(b1)*2.0 + 1.0;\n\tvec4 sh = -step(h, vec4(0.0));\n\n\tvec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n\tvec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n\tvec3 p0 = vec3(a0.xy,h.x);\n\tvec3 p1 = vec3(a0.zw,h.y);\n\tvec3 p2 = vec3(a1.xy,h.z);\n\tvec3 p3 = vec3(a1.zw,h.w);\n\n\tvec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n\tp0 *= norm.x;\n\tp1 *= norm.y;\n\tp2 *= norm.z;\n\tp3 *= norm.w;\n\n\tvec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n\tm = m * m;\n\treturn 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );\n}\n\nfloat map(float value, float min1, float max1, float min2, float max2) {\n\treturn min2 + (value - min1) * (max2 - min2) / (max1 - min1);\n}\n\nvoid main() {\n\tvec4 position = uViewProjectionMatrix * uLocalMatrix * aPosition;\n\tposition.z = map(snoise(vec3((position.xy / 2.0), (uTime / 2.0))), -0.8660254038, 0.8660254038, 0.0, 1.0);\n\tgl_Position = position;\n\tvNormal = aNormal + 0.5;\n\tvUV = aUV;\n\tvPos = position.xyz;\n}',
      '#ifdef GL_FRAGMENT_PRECISION_HIGH\n\tprecision highp float;\n#else\n\tprecision mediump float;\n#define GLSLIFY 1\n#endif\n\nuniform float uTime;\n\nvarying vec3 vNormal;\nvarying vec2 vUV;\nvarying vec3 vPos;\n\nvoid main() {\n\tvec4 a = vec4(0.83, 0.40, 0.38, 1.0);\n\tvec4 b = vec4(0.96, 0.75, 0.69, 1.0);\n\tvec4 c = vec4(0.40, 0.74, 0.90, 1.0);\n\tvec4 d = vec4(0.55, 0.88, 0.98, 1.0);\n\tvec4 e = vec4(0.41, 0.83, 0.56, 1.0);\n\tvec4 f = vec4(0.46, 0.92, 0.70, 1.0);\n\n\tfloat step = 1.0 / 4.0;\n\n\tvec4 color = a;\n\tcolor = mix(color, c, smoothstep(step * 1.0, step * 2.0, vPos.z));\n\tcolor = mix(color, e, smoothstep(step * 2.0, step * 3.0, vPos.z));\n\tcolor = mix(color, vec4(1.0), smoothstep(step * 3.0, step * 4.0, vPos.z));\n\n\tgl_FragColor = color;\n}'
    );
    const plane = new GsapSD.Plane(2, 2, 16, 1);
    this.planeMesh = new GsapSD.Mesh(plane, program);
    this.planeMesh.setPosition(0, 0, 0);
    this.planeMesh.setUniform('uTime', 0, '1f');
    this.volume.add(this.planeMesh);
    this.speed = {
      current: 1,
      target: 1,
      ease: 0.05,
    };
    this.splitTitle();
  }

  splitTitle() {
    const t = document.querySelector('h1') as HTMLDivElement;
    const e = [...t.childNodes];
    for (; t.firstChild; ) {
      t.removeChild(t.firstChild);
    }

    for (let s = 0; s < e.length; s++) {
      let i = e[s];
      if (i.nodeType === Node.TEXT_NODE) {
        const e = i.textContent?.split(' ') ?? '';
        for (let s = 0; s < e.length; s++)
          if ('' !== e[0] || 0 !== s) {
            i = document.createElement('span');
            //@ts-ignore
            i.setAttribute('role', 'text');
            if ('' === e[0]) {
              const t = document.createTextNode(' ' + e[s]);
              i.appendChild(t);
            } else {
              let t = document.createTextNode(e[s]);
              s !== e.length - 1 && (t = document.createTextNode(e[s] + ' ')), i.appendChild(t);
            }
            t.appendChild(i);
          }
      }
      t.appendChild(i);
    }
  }

  onResize() {
    const heroElement = this.heroElement.getBoundingClientRect();
    const textElement = this.textElement.getBoundingClientRect();
    const parentNode = this.canvas.parentNode as HTMLElement;
    parentNode.style.width = textElement.width + 10 + 'px';
    parentNode.style.height = textElement.height + 'px';
    parentNode.style.top = textElement.top - heroElement.top + 'px';
    parentNode.style.left = textElement.left + 'px';

    this.renderer.resize();
  }

  appear() {
    const target = document.querySelectorAll('h1 span');
    this.scene.from(
      target,
      {
        opacity: 0,
        translateY: 50,
      },
      {
        duration: 1,
        ease: 'easeOutExpo',
        stagger: 0.1,
        onStart: () => {
          const h1 = document.querySelector('h1') as HTMLElement;
          if (!h1) return;
          h1.style.opacity = '1';
        },
      },
      0
    );
    this.scene.from(
      this.canvas,
      {
        opacity: 0,
      },
      {
        duration: 2,
        ease: 'easeOutQuint',
        onUpdate: () => {
          this.onResize();
        },
      },
      0.5
    );
    this.scene.play();
  }

  lerp(t: number, e: number, s: number) {
    return (1 - s) * t + s * e;
  }

  onPreloaded() {
    this.appear();
  }

  onUpdate(t: number) {
    this.speed.current < 1.000001 && (this.speed.current = 1);
    this.speed.current = this.lerp(this.speed.current, this.speed.target, this.speed.ease);
    this.now = t * this.timeScale;
    this.time += (this.now - this.then) * this.speed.current;
    this.then = this.now;
    this.renderer.gl.clearColor(0, 0, 0, 0);
    this.renderer.render(this.volume, this.camera);
    // @ts-ignore
    this.planeMesh.uniforms.uTime.value = this.time;
  }
}

export default HeroTextBackground;
