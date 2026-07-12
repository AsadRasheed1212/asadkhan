'use client';

import { useEffect, useRef } from 'react';

export default function ParticlesBg() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'width:100%;height:100%;position:absolute;top:0;left:0';
    wrap.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const COLORS = ['rgba(110,193,228,', 'rgba(97,206,112,', 'rgba(255,255,255,'];
    const COUNT = Math.min(90, Math.floor(W / 18));

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.r = Math.random() * 1.8 + 0.4;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.o = Math.random() * 0.5 + 0.1;
        this.c = COLORS[Math.floor(Math.random() * COLORS.length)];
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.c + this.o + ')';
        ctx.fill();
      }
    }

    const points = Array.from({ length: COUNT }, () => new Particle());

    function connect() {
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(110,193,228,${0.07 * (1 - d / 140)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }
    }

    let raf;
    function loop() {
      ctx.clearRect(0, 0, W, H);
      points.forEach((p) => {
        p.update();
        p.draw();
      });
      connect();
      raf = requestAnimationFrame(loop);
    }
    loop();

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      wrap.removeChild(canvas);
    };
  }, []);

  return <div id="particles-bg" ref={wrapRef} />;
}
