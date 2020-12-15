export default `
  precision mediump float;
  
  attribute vec2 aVertexPosition;
  attribute vec2 uv;

  varying vec2 v_uv;

  uniform mat3 translationMatrix;
  uniform mat3 projectionMatrix;

  void main() {
    v_uv = uv;

    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
  }
`;
// gl_Position = projectionMatrix * translationMatrix * vec4(aVertexPosition, 1.0);
// gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
