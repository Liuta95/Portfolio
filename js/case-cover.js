/* Animated case-card covers: soft light rays fanning from the top-right
   corner, drifting slowly. Plain WebGL, no library. Each
   .case-card__scene sets its own colors via data-glow / data-highlight.
   Rendering pauses while a card is offscreen, and draws one still frame
   under prefers-reduced-motion. */
(function () {
  var scenes = document.querySelectorAll('.case-card__scene');
  if (!scenes.length) return;

  var VERT = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';

  var FRAG = [
    'precision highp float;',
    'uniform vec2 uRes;uniform float uTime;',
    'uniform vec3 uGlow;uniform vec3 uHi;uniform vec3 uBg;',
    'float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}',
    'float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);',
    '  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}',
    'float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}',
    'void main(){',
    '  float asp=uRes.x/uRes.y;',
    '  vec2 uv=gl_FragCoord.xy/uRes; vec2 p=vec2(uv.x*asp,uv.y);',
    '  vec2 src=vec2(asp*1.0,1.06);',            // light source just past the top-right corner
    '  vec2 d=p-src; float r=length(d);',
    '  float a=atan(d.y,d.x);',
    '  float t=uTime*.09;',
    // domain-warped noise along the angle gives wispy, flowing strands
    '  vec2 q=vec2(a*3.2,r*1.1-t);',
    '  vec2 w=vec2(fbm(q+vec2(0.,t*.6)),fbm(q+vec2(5.2,1.3)-t*.4));',
    '  float s=fbm(vec2(a*7.5+w.x*2.4,r*.9-t*1.4+w.y*1.6));',
    '  float strands=pow(smoothstep(.32,.95,s),1.6);',
    // fan the light down-left, fading with distance
    '  float dir=dot(d/max(r,1e-4),normalize(vec2(-.78,-.62)));',
    '  float cone=pow(smoothstep(.35,.98,dir),1.4);',
    '  float fall=exp(-r*1.75);',
    '  float core=exp(-r*7.5);',
    '  float breathe=.85+.15*sin(uTime*.35);',
    '  float I=(strands*cone*fall*3.2+core*1.5+cone*fall*.10)*breathe;',
    '  vec3 col=uBg+uGlow*I+uHi*pow(clamp(I,0.,1.4),3.)*.55;',
    '  col=1.-exp(-col*1.25);',                    // soft tone map keeps highlights from clipping
    '  col+=(hash(gl_FragCoord.xy+fract(uTime)*91.7)-.5)*.045;', // fine animated grain
    '  gl_FragColor=vec4(col,1.);',
    '}'
  ].join('\n');

  function hexToRgb(hex) {
    var n = parseInt(hex.replace('#', ''), 16);
    return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255];
  }

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var start = performance.now();

  scenes.forEach(function (el, idx) {
    var canvas = document.createElement('canvas');
    el.appendChild(canvas);
    var gl = canvas.getContext('webgl', { antialias: false, alpha: false, premultipliedAlpha: false });
    if (!gl) return; // the element's CSS background stays as the fallback

    function compile(type, src) {
      var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.error(gl.getShaderInfoLog(s)); return null; }
      return s;
    }
    var prog = gl.createProgram();
    var vs = compile(gl.VERTEX_SHADER, VERT), fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog); gl.useProgram(prog);

    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    var uRes = gl.getUniformLocation(prog, 'uRes'), uTime = gl.getUniformLocation(prog, 'uTime');
    gl.uniform3fv(gl.getUniformLocation(prog, 'uGlow'), hexToRgb(el.dataset.glow || '#21845d'));
    gl.uniform3fv(gl.getUniformLocation(prog, 'uHi'), hexToRgb(el.dataset.highlight || '#83ffff'));
    gl.uniform3fv(gl.getUniformLocation(prog, 'uBg'), hexToRgb(el.dataset.bg || '#04070a'));

    // Offset each card's clock so the three covers never move in lockstep.
    var offset = idx * 37.0;
    var visible = false, raf = 0;

    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      var w = Math.max(1, Math.round(el.clientWidth * dpr)), h = Math.max(1, Math.round(el.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; gl.viewport(0, 0, w, h); }
      gl.uniform2f(uRes, w, h);
    }
    function draw(now) {
      gl.uniform1f(uTime, (now - start) / 1000 + offset);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
    function loop(now) { draw(now); if (visible && !reduceMotion) raf = requestAnimationFrame(loop); }

    resize(); draw(start + 6000);
    if ('ResizeObserver' in window) new ResizeObserver(function () { resize(); draw(performance.now()); }).observe(el);

    if (!reduceMotion && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        cancelAnimationFrame(raf);
        if (visible) raf = requestAnimationFrame(loop);
      }).observe(el);
    }
  });
})();
