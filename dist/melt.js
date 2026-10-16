// A continuous texture deformation: the portrait stretches into glossy liquid
// fingers while its upper edge drains away. No pre-rendered movie is used.
const vertexSource = `
attribute vec2 position;
varying vec2 uv;
void main() {
  uv = position * .5 + .5;
  gl_Position = vec4(position, 0., 1.);
}`;
const fragmentSource = `
precision mediump float;
varying vec2 uv;
uniform sampler2D portrait;
uniform vec2 resolution;
uniform vec4 source;
uniform vec2 atlasCell;
uniform float time;
uniform float reach;
uniform vec4 head;
uniform vec4 body;
const float PI = 3.14159265;

float ease(float a, float b, float t) {
  return smoothstep(a, b, t);
}

void main() {
  vec2 pixel = vec2(uv.x, 1. - uv.y) * resolution;
  vec2 p = (pixel - source.xy) / source.zw;
  float angle = .02618;
  p = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * p;
  p += .5;
  float flow = ease(.11, .77, time);
  float drain = ease(.36, .93, time);
  float envelope = pow(max(0., sin(clamp(p.x, 0., 1.) * PI)), .4);
  float phase = p.x * PI * 12. + .7;
  // A shallow superellipse profile keeps long drops broad and rounded at the tip.
  float finger = pow(max(0., .5 + .5 * cos(phase)), .10);
  float length = .72 + .28 * (.5 + .5 * sin(p.x * 13. + 1.3));
  float tip = 1. + flow * reach * envelope * finger * length;
  float upper = drain * (1. + reach * .91)
                + sin(p.x * 19. + time * 4.) * .025 * sin(time * PI);
  float depth = max(.025, tip - upper);
  float v = (p.y - upper) / depth;
  float wobble = sin(p.y * 8. + p.x * 14. - time * 8.) * .008 * flow;
  float u = p.x + wobble;
  float edge = min(min(u, 1. - u), min(v, 1. - v));
  float alpha = smoothstep(0., .008, edge);
  vec2 h = (vec2(u, v) - head.xy) / head.zw;
  vec2 b = (vec2(u, v) - body.xy) / body.zw;
  float subject = smoothstep(-.08, .04, max(1. - dot(h, h), 1. - dot(b, b)));
  alpha *= mix(1., subject, ease(.05, .38, time));
  alpha *= 1. - ease(.86, 1., time);
  if (depth < .03 || alpha < .001) discard;
  vec2 samplePoint = (atlasCell + vec2(clamp(u, .003, .997), clamp(v, .003, .997))) / vec2(4., 3.);
  vec3 color = texture2D(portrait, samplePoint).rgb;
  // Cylindrical glints and a darker rim make the pulled paint read as liquid.
  float shine = pow(max(0., cos(phase + .55)), 20.);
  float wet = flow * ease(.05, .65, v) * (1. - ease(.78, .99, time));
  color += vec3(.29, .27, .22) * shine * wet;
  color *= 1. - .12 * wet * pow(1. - finger, 2.);
  float rim = (1. - ease(.012, .08, 1. - v)) * wet;
  color = mix(color, color * .63, rim * .65);
  gl_FragColor = vec4(color, alpha);
}`;

let imagePromise;
function loadPortraits() {
  imagePromise ??= new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = new URL('./assets/portraits.png', import.meta.url).href;
  });
  return imagePromise;
}

export async function meltPortrait({ studio, portrait, board, art, onProgress }) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const image = await loadPortraits();
  const canvas = document.createElement('canvas');
  canvas.className = 'melt-overlay';
  canvas.setAttribute('aria-hidden', 'true');
  const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false, antialias: false });
  if (!gl) return;
  const shaders = [];
  const program = gl.createProgram();
  for (const [type, source] of [[gl.VERTEX_SHADER, vertexSource], [gl.FRAGMENT_SHADER, fragmentSource]]) {
    const shader = gl.createShader(type);
    shaders.push(shader);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(shader));
    }
    gl.attachShader(program, shader);
  }
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
  gl.useProgram(program);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, 'position');
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  const uniforms = Object.fromEntries(['resolution', 'source', 'atlasCell', 'time', 'reach', 'head', 'body'].map(name => [name, gl.getUniformLocation(program, name)]));
  gl.uniform2f(uniforms.atlasCell, art % 4, Math.floor(art / 4));
  // Broad silhouette envelopes keep the background from becoming falling ribbons.
  const headRadii = [[.34,.46],[.31,.44],[.47,.43],[.49,.43],[.44,.46],[.43,.42],[.4,.44],[.35,.46],[.46,.47],[.37,.46],[.42,.51],[.46,.51]];
  gl.uniform4f(uniforms.head, .5, .36, ...headRadii[art]);
  gl.uniform4f(uniforms.body, .54, .98, .55, .49);
  studio.append(canvas);
  studio.classList.add('melting');
  try {
    await new Promise(resolve => {
      let started;
      function frame(now) {
        started ??= now;
        const t = Math.min(1, (now - started) / 2500);
        const area = studio.getBoundingClientRect();
        const painting = portrait.getBoundingClientRect();
        const target = board.getBoundingClientRect();
        const dpr = Math.min(devicePixelRatio || 1, 2);
        const width = Math.round(area.width * dpr), height = Math.round(area.height * dpr);
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
          gl.viewport(0, 0, width, height);
        }
        gl.uniform2f(uniforms.resolution, area.width, area.height);
        gl.uniform4f(uniforms.source, painting.left + painting.width / 2 - area.left, painting.top + painting.height / 2 - area.top, portrait.clientWidth, portrait.clientHeight);
        gl.uniform1f(uniforms.reach, (target.top + target.height * .38 - painting.bottom) / portrait.clientHeight);
        gl.uniform1f(uniforms.time, t);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        onProgress(t);
        if (t < 1) requestAnimationFrame(frame);
        else resolve();
      }
      requestAnimationFrame(frame);
    });
  } finally {
    studio.classList.remove('melting');
    canvas.remove();
    gl.deleteBuffer(buffer);
    gl.deleteTexture(texture);
    shaders.forEach(shader => gl.deleteShader(shader));
    gl.deleteProgram(program);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
  }
}
