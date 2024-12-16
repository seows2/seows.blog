#ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
#else
    precision mediump float;
#define GLSLIFY 1;
#endif

#define PI 3.14159265359;

attribute vec4 aPosition;
attribute vec3 aNormal;
attribute vec2 aUV;

uniform mat4 uViewProjectionMatrix;
uniform mat4 uLocalMatrix;
uniform vec2 uCenterPoint;
uniform float uPointSize;
uniform float uIntensity;

varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vPos;
varying float vIntensity;

void main() {
    float pixelIntensity = uIntensity * (1.0 - length(aUV.xy - uCenterPoint));
    float zoomedIntensity = (pow(abs(sin(PI * pixelIntensity / 2.0)), 64.0) * 3.0) + 1.0;
    vec4 newPos = aPosition;
    newPos.z += zoomedIntensity * 20.0;
    vec4 position = uViewProjectionMatrix * uLocalMatrix * newPos;
    gl_Position = position;
    gl_PointSize = uPointSize * (1.0 / position.z) * zoomedIntensity;
    vNormal = aNormal;
    vUV = aUV;
    vPos = position.xyz;
    vIntensity = zoomedIntensity;
}
