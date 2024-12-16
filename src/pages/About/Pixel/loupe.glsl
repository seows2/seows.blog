#ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
#else
    precision mediump float;
#define GLSLIFY 1
#endif

uniform float uProgress;
uniform float uOpacity;

varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vPos;
varying float vIntensity;

float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min1) / (max1 - min1);
}

void main() {
    vec2 center = vec2(0.5);
    float dist = pow(-distance(vUV, center) + 1.0, uProgress);
    float distanceFromLeft = distance(gl_PointCoord.x, 0.0);
    float intensity = ((vIntensity - 1.0) / 3.0);
    vec3 triColor = vec3(1.0, 0.0, 0.0);
    triColor = mix(vec3(0.0, 1.0, 0.0), triColor, step(distanceFromLeft, 0.33333));
    triColor = mix(vec3(0.0, 0.0, 1.0), triColor, step(distanceFromLeft, 0.66666));
    vec3 color = mix(vec3(dist) * 0.5, triColor, intensity);
    gl_FragColor = vec4(color * uOpacity, uOpacity);
}