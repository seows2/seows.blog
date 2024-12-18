import Matrix from './Matrix.js';
import Vector from './Vector.js';

export default class Mesh {
  constructor(geometry, shader) {
    this.geometryID = geometry.id;
    this.geometryType = geometry.type;
    this.shader = shader;
    this.position = {
      x: 0,
      y: 0,
      z: 0,
    };
    this.rotation = {
      x: 0,
      y: 0,
      z: 0,
    };
    this.scale = {
      x: 1,
      y: 1,
      z: 1,
    };
    this.attributes = geometry.attributes;
    this.uniforms = {
      uViewProjectionMatrix: {
        name: 'uViewProjectionMatrix',
        value: null,
        type: 'mat4',
      },
      uNormalMatrix: {
        name: 'uNormalMatrix',
        value: null,
        type: 'mat4',
      },
      uLocalMatrix: {
        name: 'uLocalMatrix',
        value: null,
        type: 'mat4',
      },
    };
    this.surfaceNormals = false;
    this.localMatrix = Matrix.identity();
    this._setAttributeData();
    this._setUniformData();
    this._setDrawMode();
    this._setSurfaceNormals();
  }

  _setAttributeData() {
    for (const attribute in this.attributes) {
      this.attributes[attribute].location = this.shader.gl.getAttribLocation(
        this.shader.program,
        this.attributes[attribute].name
      );
      this.attributes[attribute].buffer = this.shader.gl.createBuffer();
      this.shader.gl.bindBuffer(this.shader.gl.ARRAY_BUFFER, this.attributes[attribute].buffer);
      this.shader.gl.bufferData(
        this.shader.gl.ARRAY_BUFFER,
        this.attributes[attribute].data,
        this.shader.gl.STATIC_DRAW
      );
    }
  }

  _setUniformData() {
    for (const uniform in this.uniforms) {
      this.uniforms[uniform].location = this.shader.gl.getUniformLocation(
        this.shader.program,
        this.uniforms[uniform].name
      );
    }
  }

  _setDrawMode() {
    if (this.geometryType) {
      this.drawMode = this.geometryType;
    } else {
      this.drawMode = 'TRIANGLES';
    }
  }

  _setSurfaceNormals() {
    if (this.surfaceNormals) {
      const surfaceNormals = [];
      for (let i = 0; i < this.geometry.attributes.aNormal.data.length; i += 9) {
        const p1 = [
          this.geometry.attributes.aNormal.data[i],
          this.geometry.attributes.aNormal.data[i + 1],
          this.geometry.attributes.aNormal.data[i + 2],
        ];
        const p2 = [
          this.geometry.attributes.aNormal.data[i + 3],
          this.geometry.attributes.aNormal.data[i + 4],
          this.geometry.attributes.aNormal.data[i + 5],
        ];
        const p3 = [
          this.geometry.attributes.aNormal.data[i + 6],
          this.geometry.attributes.aNormal.data[i + 7],
          this.geometry.attributes.aNormal.data[i + 8],
        ];

        const u = Vector.subtract(p2, p1);
        const v = Vector.subtract(p3, p1);

        const x = u[1] * v[2] - u[2] * v[1];
        const y = u[2] * v[0] - u[0] * v[2];
        const z = u[0] * v[1] - u[1] * v[0];

        const normals = Vector.normalize([x, y, z]);

        surfaceNormals.push(normals[0], normals[1], normals[2]);
        surfaceNormals.push(normals[0], normals[1], normals[2]);
        surfaceNormals.push(normals[0], normals[1], normals[2]);
      }
      this.shader.gl.bindBuffer(
        this.shader.gl.ARRAY_BUFFER,
        this.geometry.attributes.aNormal.buffer
      );
      this.shader.gl.bufferData(
        this.shader.gl.ARRAY_BUFFER,
        new Float32Array(surfaceNormals),
        this.shader.gl.STATIC_DRAW
      );
    }
  }

  _recalculateModelMatrix() {
    const identity = Matrix.identity();
    const translation = Matrix.translate(this.position.x, this.position.y, this.position.z);
    const rotationX = Matrix.rotateX(this.rotation.x);
    const rotationY = Matrix.rotateY(this.rotation.y);
    const rotationZ = Matrix.rotateZ(this.rotation.z);
    const scale = Matrix.scale(this.scale.x, this.scale.y, this.scale.z);
    let matrix = Matrix.multiply(identity, translation);
    matrix = Matrix.multiply(matrix, rotationX);
    matrix = Matrix.multiply(matrix, rotationY);
    matrix = Matrix.multiply(matrix, rotationZ);
    matrix = Matrix.multiply(matrix, scale);
    if (this.parentCollection) {
      this.localMatrix = Matrix.multiply(this.parentCollection.localMatrix, matrix);
    } else {
      this.localMatrix = matrix;
    }
  }

  _recalculateNormalMatrix() {
    this.normalMatrix = Matrix.transpose(Matrix.inverse(this.localMatrix));
  }

  setProjectionMatrix(matrix) {
    this._recalculateModelMatrix();
    this._recalculateNormalMatrix();
    this.projectionMatrix = matrix;
  }

  setPosition(x, y, z) {
    this.position = { x, y, z };
    this._recalculateModelMatrix();
  }

  setRotationX(angle) {
    this.rotation.x = angle;
    this._recalculateModelMatrix();
  }

  setRotationY(angle) {
    this.rotation.y = angle;
    this._recalculateModelMatrix();
  }

  setRotationZ(angle) {
    this.rotation.z = angle;
    this._recalculateModelMatrix();
  }

  setScale(x, y, z) {
    this.scale = { x, y, z };
    this._recalculateModelMatrix();
  }

  setAttribute(name, data, size) {
    this.attributes[name] = {
      name,
      data,
      size,
      count: data.length / size,
    };
    this._setAttributeData();
  }

  setUniform(name, value, type) {
    this.uniforms[name] = {
      name,
      value,
      type,
    };
    this._setUniformData();
  }

  setShader(shader) {
    this.shader = shader;
    this._setAttributeData();
    this._setUniformData();
  }

  setParent(collection) {
    if (this.parentCollection) {
      let index = this.parentCollection.items.indexOf(this);
      if (index >= 0) {
        this.parentCollection.items.splice(index, 1);
      }
    }

    if (collection) {
      collection.items.push(this);
    }
    this.parentCollection = collection;
  }
}
