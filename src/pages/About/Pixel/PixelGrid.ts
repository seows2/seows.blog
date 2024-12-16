import Scene from '@/core/GsapD/Scene';
import GsapSD from '@/core/GsapSD';
import Renderer from '@/core/GsapSD/Renderer';
import Volume from '@/core/GsapSD/Volume';
import Perspective from '@/core/GsapSD/Perspective';
import Program from '@/core/GsapSD/Program';
import Mesh from '@/core/GsapSD/Mesh';
import Pixel from './Pixel';

class PixelGrid {
  pixelPerfect: Pixel;
  time: number;
  then: number;
  now: number;
  timeScale: number;
  canvas: HTMLCanvasElement;
  renderer: Renderer;
  volume: Volume;
  camera: Perspective;
  viewport: { width: number; height: number; aspectRatio: number };
  gridShader: Program;
  loupeShader: Program;
  gridSize!: number;
  gridMesh!: Mesh;
  progress!: {
    pointSize: number;
    pointOpacity: number;
    rotation: number;
    cameraX: number;
    cameraY: number;
    cameraRotate: number;
    scale: number;
    centerX: number;
    centerY: number;
    gridY: number;
    loupeX: number;
    loupeY: number;
    loupeZ: number;
    totalOpacity: number;
    colorTransition: number;
    endDelay: number;
  };
  loupeMesh!: Mesh;
  scene!: Scene;

  constructor() {
    this.pixelPerfect = new Pixel();
    this.time = 0;
    this.then = 0;
    this.now = 0;
    this.timeScale = 0.003;
    this.canvas = document.getElementById('pixel-grid') as HTMLCanvasElement;
    this.renderer = new GsapSD.Renderer(this.canvas);
    this.renderer.depthTest = false;
    this.volume = new GsapSD.Volume();
    this.camera = new GsapSD.Perspective(70, 1, 100, 1e3);
    this.camera.setPosition(0, 0, 500);
    this.viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
      aspectRatio: window.innerWidth / window.innerHeight,
    };

    this.gridShader = new GsapSD.Program(
      this.renderer.gl,
      '#ifdef GL_FRAGMENT_PRECISION_HIGH\n\tprecision highp float;\n#else\n\tprecision mediump float;\n#define GLSLIFY 1\n#endif\n\n#define PI 3.14159265359\n\nattribute vec4 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aUV;\n\nuniform mat4 uViewProjectionMatrix;\nuniform mat4 uLocalMatrix;\nuniform vec2 uCenterPoint;\nuniform float uPointSize;\nuniform float uIntensity;\n\nvarying vec3 vNormal;\nvarying vec2 vUV;\nvarying vec3 vPos;\nvarying float vIntensity;\n\nvoid main() {\n\tfloat pixelIntensity = uIntensity * (1.0 - length(aUV.xy - uCenterPoint));\n\tfloat zoomedIntensity = (pow(abs(sin(PI * pixelIntensity / 2.0)), 64.0) * 3.0) + 1.0;\n\tvec4 newPos = aPosition;\n\tnewPos.z += zoomedIntensity * 20.0;\n\tvec4 position = uViewProjectionMatrix * uLocalMatrix * newPos;\n\tgl_Position = position;\n\tgl_PointSize = uPointSize * (1.0 / position.z) * zoomedIntensity;\n\tvNormal = aNormal;\n\tvUV = aUV;\n\tvPos = position.xyz;\n\tvIntensity = zoomedIntensity;\n}',
      '#ifdef GL_FRAGMENT_PRECISION_HIGH\n\tprecision highp float;\n#else\n\tprecision mediump float;\n#define GLSLIFY 1\n#endif\n\nuniform float uProgress;\nuniform float uOpacity;\n\nvarying vec3 vNormal;\nvarying vec2 vUV;\nvarying vec3 vPos;\nvarying float vIntensity;\n\nfloat map(float value, float min1, float max1, float min2, float max2) {\n\treturn min2 + (value - min1) * (max2 - min1) / (max1 - min1);\n}\n\nvoid main() {\n\tvec2 center = vec2(0.5);\n\tfloat dist = pow(-distance(vUV, center) + 1.0, uProgress);\n\tfloat distanceFromLeft = distance(gl_PointCoord.x, 0.0);\n\tfloat intensity = ((vIntensity - 1.0) / 3.0);\n\tvec3 triColor = vec3(1.0, 0.0, 0.0);\n\ttriColor = mix(vec3(0.0, 1.0, 0.0), triColor, step(distanceFromLeft, 0.33333));\n\ttriColor = mix(vec3(0.0, 0.0, 1.0), triColor, step(distanceFromLeft, 0.66666));\n\tvec3 color = mix(vec3(dist) * 0.5, triColor, intensity);\n\tgl_FragColor = vec4(color * uOpacity, uOpacity);\n}'
    );
    this.loupeShader = new GsapSD.Program(
      this.renderer.gl,
      '#ifdef GL_FRAGMENT_PRECISION_HIGH\n\tprecision highp float;\n#else\n\tprecision mediump float;\n#define GLSLIFY 1\n#endif\n\nattribute vec4 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aUV;\n\nuniform mat4 uViewProjectionMatrix;\nuniform mat4 uLocalMatrix;\n\nvarying vec3 vNormal;\nvarying vec2 vUV;\nvarying vec3 vPos;\n\nvoid main() {\n\tvec4 position = uViewProjectionMatrix * uLocalMatrix * aPosition;\n\tgl_Position = position;\n\tvNormal = aNormal;\n\tvUV = aUV;\n\tvPos = position.xyz;\n}',
      '#ifdef GL_FRAGMENT_PRECISION_HIGH\n\tprecision highp float;\n#else\n\tprecision mediump float;\n#define GLSLIFY 1\n#endif\n\nuniform float uBaseThickness;\nuniform float uTransition;\n\nvarying vec3 vNormal;\nvarying vec2 vUV;\nvarying vec3 vPos;\n\nvoid main() {\n\tvec4 startColor = vec4(0.419, 0.831, 0.564, 1.0);\n\tvec4 endColor = vec4(0.200, 0.392, 0.517, 1.0);\n\tfloat distance = (0.5 - length(vUV - vec2(0.5))) * 2.0;\n\tfloat thickness = (uBaseThickness * (1.0 - uTransition)) + 0.0125;\n\tfloat width = smoothstep(0.005 + thickness, 0.0 + thickness, distance);\n\twidth = mix(0.0, width, smoothstep(0.0, 0.005, distance));\n\n\tvec4 finalColor = mix(startColor, endColor, uTransition);\n\n\tgl_FragColor = mix(vec4(0.0), finalColor, width);\n\n\t//gl_FragColor = vec4(distance);\n}'
    );
  }

  createGridGeometry(gridSize: number, _cols: number) {
    const positions = [];
    const cols = _cols % 2 !== 0 ? _cols - 1 : _cols;

    const o = 2 * cols;
    const n = 2 * gridSize;
    const r = gridSize / cols;
    const a = n / o;
    for (let e = 0; e <= o; e++)
      for (let o = 0; o <= cols; o++) {
        const i = o * r - gridSize / 2;
        const h = e * a - n / 2;
        positions.push(i, h, 0);
      }

    const gridGeometry = new GsapSD.Geometry(positions);
    const datas = [];
    for (let e = 0; e < positions.length; e += 3) {
      const i = (positions[e] + gridSize / 2) / gridSize;
      const o = (positions[e + 1] + gridSize / 2) / gridSize;
      datas.push(i, o);
    }

    gridGeometry.setAttribute('aUV', new Float32Array(datas), 2);
    return gridGeometry;
  }

  reset() {
    this.progress = {
      pointSize: this.gridSize / 2,
      pointOpacity: 240,
      rotation: 0,
      cameraX: 0,
      cameraY: -window.innerHeight / 2 + 24,
      cameraRotate: 0,
      scale: 0,
      centerX: 0.5,
      centerY: 0.5,
      gridY: 0,
      loupeX: 0,
      loupeY: 0,
      loupeZ: 50,
      totalOpacity: 1,
      colorTransition: 0,
      endDelay: 0,
    };
    this.scene = this.pixelPerfect.scene;

    this.scene.fromTo(
      this.progress,
      {
        pointSize: [this.gridSize / 2, this.gridSize],
      },
      {
        duration: 1,
        ease: 'easeInOutExpo',
      },
      0
    );
    this.scene.fromTo(
      this.progress,
      {
        cameraY: [-window.innerHeight / 2 + 24, 0],
      },
      {
        duration: 1.25,
        ease: 'easeInOutSine',
      },
      0
    );
    this.scene.fromTo(
      this.progress,
      {
        pointOpacity: [240, 0],
      },
      {
        duration: 1.25,
        ease: 'easeInOutExpo',
      },
      0.25
    );
    this.scene.fromTo(
      this.progress,
      {
        scale: [0, 1],
      },
      {
        duration: 0.5,
        ease: 'easeOutExpo',
      },
      0.75
    );
    this.scene.fromTo(
      this.progress,
      {
        gridY: [0, this.gridSize / 2],
      },
      {
        duration: 2.25,
      },
      0.75
    );

    if (this.viewport.height <= this.viewport.width) {
      this.scene.fromTo(
        this.progress,
        {
          centerX: [0.5, 0.75],
          centerY: [0.5, 0.75],
          loupeX: [0, this.gridSize / 4],
          loupeY: [0, this.gridSize / 4],
        },
        {
          duration: 0.5,
          ease: 'easeInOutQuint',
        },
        1
      );
      this.scene.to(
        this.progress,
        {
          centerY: 0.25,
          loupeY: -this.gridSize / 4,
        },
        {
          duration: 0.5,
          ease: 'easeInOutQuint',
        },
        1.5
      );
      this.scene.to(
        this.progress,
        {
          centerX: 0.25,
          centerY: 0.5,
          loupeX: -this.gridSize / 4,
          loupeY: 0,
        },
        {
          duration: 1,
          ease: 'easeInOutQuint',
        },
        2
      );
      this.scene.fromTo(
        this.progress,
        {
          loupeZ: [50, 0],
          pointSize: [this.gridSize, 0],
          totalOpacity: [1, 0],
          colorTransition: [0, 1],
        },
        {
          duration: 1,
          ease: 'easeInOutQuint',
        },
        2
      );
    } else {
      this.scene.fromTo(
        this.progress,
        {
          centerX: [0.5, 0.5 + (this.viewport.width / this.viewport.height) * 0.25],
          centerY: [0.5, 0.75],
          loupeX: [0, (this.gridSize / 4) * (this.viewport.width / this.viewport.height)],
          loupeY: [0, this.gridSize / 4],
        },
        {
          duration: 0.5,
          ease: 'easeInOutQuint',
        },
        1
      );
      this.scene.to(
        this.progress,
        {
          centerY: 0.25,
          loupeY: -this.gridSize / 4,
        },
        {
          duration: 0.5,
          ease: 'easeInOutQuint',
        },
        1.5
      );
      this.scene.to(
        this.progress,
        {
          centerX: 0.5 - (this.viewport.width / this.viewport.height) * 0.25,
          centerY: 0.5,
          loupeX: (-this.gridSize / 4) * (this.viewport.width / this.viewport.height),
          loupeY: 0,
        },
        {
          duration: 1,
          ease: 'easeInOutQuint',
        },
        2
      );
      this.scene.fromTo(
        this.progress,
        {
          loupeZ: [50, 0],
          pointSize: [this.gridSize, 0],
          totalOpacity: [1, 0],
          colorTransition: [0, 1],
        },
        {
          duration: 1,
          ease: 'easeInOutQuint',
        },
        2
      );
    }
    this.scene.fromTo(
      this.progress,
      {
        endDelay: [0, 1],
      },
      {
        duration: 0.5,
      },
      3
    );
  }

  onResize(nextViewport: { width: number; height: number; aspectRatio: number }) {
    this.viewport = nextViewport;
    this.camera.setFieldOfView(2 * Math.atan(nextViewport.height / 2 / 500) * (180 / Math.PI));
    this.camera.setAspectRatio(nextViewport.aspectRatio),
      (this.gridSize = Math.max(nextViewport.width, nextViewport.height));
    const gridGeometry = this.createGridGeometry(
      Math.floor(this.gridSize),
      Math.floor((4 / this.gridSize) * (12 * this.gridSize))
    );

    this.gridMesh = new GsapSD.Mesh(gridGeometry, this.gridShader);
    this.gridMesh.drawMode = 'POINTS';
    this.gridMesh.setUniform('uCenterPoint', [0.5, 0.5], '2f');
    this.gridMesh.setUniform('uPointSize', this.renderer.pixelRatio * (this.gridSize / 2), '1f');
    this.gridMesh.setUniform('uProgress', 240, '1f');
    this.gridMesh.setUniform('uIntensity', 0, '1f');
    this.gridMesh.setUniform('uOpacity', 1, '1f');

    const geometry = new GsapSD.Plane(this.viewport.width / 3, this.viewport.width / 3, 1, 1);
    this.loupeMesh = new GsapSD.Mesh(geometry, this.loupeShader);
    this.loupeMesh.setUniform(
      'uBaseThickness',
      (0.05 / this.viewport.width) * this.viewport.width,
      '1f'
    );
    this.loupeMesh.setUniform('uTransition', 0, '1f');
    this.volume.objects = [];
    this.volume.add(this.gridMesh);
    this.volume.add(this.loupeMesh);
    this.renderer.resize();
    this.reset();
  }

  onUpdate(n: number) {
    this.now = n * this.timeScale;
    this.time += this.now - this.then;
    this.then = this.now;
    this.camera.position.y = this.progress.cameraY;
    // @ts-ignore
    this.gridMesh.uniforms.uCenterPoint.value = [
      this.progress.centerX,
      this.progress.centerY - this.progress.gridY / this.gridSize,
    ];
    // @ts-ignore
    this.gridMesh.uniforms.uProgress.value = this.progress.pointOpacity;
    // @ts-ignore
    this.gridMesh.uniforms.uIntensity.value = this.progress.scale;
    // @ts-ignore
    this.gridMesh.uniforms.uPointSize.value = this.progress.pointSize * this.renderer.pixelRatio;
    // @ts-ignore
    this.gridMesh.uniforms.uOpacity.value = this.progress.totalOpacity;
    this.gridMesh.position.y = this.progress.gridY;
    // @ts-ignore
    this.loupeMesh.uniforms.uTransition.value = this.progress.colorTransition;
    this.loupeMesh.position.x = this.progress.loupeX;
    this.loupeMesh.position.y = this.progress.loupeY;
    this.loupeMesh.position.z = this.progress.loupeZ;
    this.loupeMesh.setScale(this.progress.scale, this.progress.scale, this.progress.scale);
    this.renderer.gl.clearColor(0, 0, 0, 0);
    this.renderer.render(this.volume, this.camera);
  }
}

export default PixelGrid;
