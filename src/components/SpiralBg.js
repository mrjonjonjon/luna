import React, { useRef, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import createREGL from 'regl';
import Bg from './bg.js';
import './SpiralBg.css'
export default function SpiralBg() {
  const canvasRef = useRef(null);
  const reglRef = useRef(null);
  let scroll = 0.0, velocity = 0.0, lastScroll = 0.0;
  
  useEffect(() => {
    
    const canvas = canvasRef.current;
    
    const regl = createREGL({
      canvas: canvas,
      onDone: function(error, regl) {
        if (error) { alert(error); }
      }
    });
    reglRef.current = regl;
    
    const draw = regl({
        //https://tympanus.net/Development/ScrollSpiral/
      frag:  `#define TWO_PI 6.2831853072
      #define PI 3.14159265359
  
      precision highp float;
  
      uniform float globaltime;
      uniform vec2 resolution;
      uniform float aspect;
      uniform float scroll;
      uniform float velocity;
  
      const float timescale = 0.15;
      const float displace = 0.03;
      const float gridSize = 50.0;//20
      const int layers = 3;
      const float detail = 1.0;
      const float wave = 1.0;
  
      vec2 rotate(vec2 v, float angle) {
          float c = cos(angle);
          float s = sin(angle);
          return v * mat2(c, -s, s, c);
      }
  
      vec3 coordToHex(vec2 coord, float scale, float angle) {
          vec2 c = rotate(coord, angle);
          float q = (1.0 / 3.0 * sqrt(3.0) * c.x - 1.0 / 3.0 * c.y) * scale;
          float r = 2.0 / 3.0 * c.y * scale;
          return vec3(q, r, -q - r);
      }
  
      vec3 hexToCell(vec3 hex, float m) {
          return fract(hex / m) * 2.0 - 1.0;
      }
  
      float absMax(vec3 v) {
          return max(max(abs(v.x), abs(v.y)), abs(v.z));
      }
  
      float nsin(float value) {
          return sin(value * TWO_PI) * 0.5 + 0.5;
      }
  
      float hexToFloat(vec3 hex, float amt) {
          return mix(absMax(hex), 1.0 - length(hex) / sqrt(3.0), amt);
      }
  
      float calc(vec3 hex, float time, float len) {
          float value = 0.0;
  
          for (int i = 0; i < layers; i++) {
              vec3 cell = hexToCell(hex, 1.0 + float(i));
              value += nsin(
                  hexToFloat(
                      cell,
                      nsin(len * wave + time + float(i) / float(layers))
                  ) * detail + nsin(time * 0.5)
              );
          }
  
          return value / float(layers);
      }
  
      void main(void) {
          
          vec2 tx = (gl_FragCoord.xy / (resolution.xy) - 0.5) * vec2(aspect, 1.0) * 2.0;
          float time = globaltime * timescale - scroll;
          float invScroll = 1.0 - scroll;
          float rgb[3];
          float len = 1.0 - length(tx) * 0.3;
          float zoom = nsin(time * 0.1) + len * velocity * 3.0;
          float angle = TWO_PI * nsin(time * 0.05) + PI * len * scroll;
          vec3 hex = coordToHex(tx, gridSize * zoom, angle);
  
          for (int i = 0; i < 3; i++) {
              float time2 = time + float(i) * displace * invScroll;
              rgb[i] = pow(calc(hex, time2, len), 3.0) * (0.2 + 0.8 * sin(PI * len * 0.5));
          }
  
          gl_FragColor = vec4(
              rgb[0] * (1.0 - scroll * 0.2),
              rgb[1] * invScroll,
              (rgb[2] + 0.2) * invScroll,
              1.0);
          }`,
      vert: `attribute vec2 position;
        void main() {
          gl_Position = vec4(3.0 * position, 0.0, 1.0);
        }`,
      attributes: { position: [[-1, 0], [0, -1], [1, 1]] },
      count: 3,
      uniforms: {
        globaltime: regl.prop('globaltime'),
        resolution: regl.prop('resolution'),
        aspect: regl.prop('aspect'),
        scroll: regl.prop('scroll'),
        velocity: regl.prop('velocity')
      }
    });
    
    function handleFrame(ctx) {
      const { viewportWidth, viewportHeight, time } = ctx;
      const aspect =canvas.scrollWidth / (canvas.scrollHeight);
      canvas.width = 10000*aspect;
      canvas.height=10000;

      scroll = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
       velocity = velocity * 0.99 + (scroll - lastScroll);
      velocity = 0;
      lastScroll = scroll;
      regl.clear({ color: [0, 0, 0, 0] });
      draw({
        globaltime: time,
        resolution: [viewportWidth,viewportHeight],
        aspect: aspect,
        scroll: scroll,
        velocity: velocity
      });
    }
    regl.frame(handleFrame);
    
    return () => {
      reglRef.current.destroy();
    };
  }, []);
  
  return (
    <>
      <canvas id="webgl" ref={canvasRef} />
      
    </>
  );
}
