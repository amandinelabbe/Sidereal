'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '@/lib/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  step(mx: number | null, my: number | null): void;
  draw(): void;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Config adaptée au thème
    const isDark = theme === 'dark';
    const CONFIG = {
      baseDensity: 0.12,
      maxSpeed: 0.6,
      radius: [1.0, 2.2] as [number, number],
      linkDist: 110,
      linkAlpha: 0.16,
      mouseInfluence: 110,
      repelStrength: 0.35,
      attractStrength: 0.2,
      clickBurst: 120,
      colorParticle: isDark ? '#c9e7ff' : '#1e3a5f',
      colorLink: isDark ? '#7dd3fc' : '#4f8ef7',
      bgGradient1: isDark ? 'rgba(56, 189, 248, 0.1)' : 'rgba(79, 142, 247, 0.15)',
      bgGradient2: isDark ? 'rgba(124, 58, 237, 0.1)' : 'rgba(168, 85, 247, 0.1)',
      bgColor: isDark ? '#0b1220' : '#f8fafc'
    };

    let DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    let W = 0;
    let H = 0;

    function resize() {
      DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      W = canvas.width = Math.floor(window.innerWidth * DPR);
      H = canvas.height = Math.floor(window.innerHeight * DPR);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      computeParticlesCount();
    }

    function rand(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    function clamp(v: number, a: number, b: number) {
      return Math.max(a, Math.min(b, v));
    }

    class ParticleClass implements Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;

      constructor() {
        this.reset(true);
      }

      reset(randomPos = false) {
        this.x = randomPos ? rand(0, W) : Math.random() < 0.5 ? 0 : W;
        this.y = randomPos ? rand(0, H) : rand(0, H);
        const ang = rand(0, Math.PI * 2);
        const speed = rand(0.05, CONFIG.maxSpeed);
        this.vx = Math.cos(ang) * speed;
        this.vy = Math.sin(ang) * speed;
        this.r = rand(CONFIG.radius[0], CONFIG.radius[1]) * DPR;
      }

      step(mx: number | null, my: number | null) {
        if (mx !== null && my !== null) {
          const dx = this.x - mx;
          const dy = this.y - my;
          const d2 = dx * dx + dy * dy;
          const r = CONFIG.mouseInfluence * DPR;
          if (d2 < r * r) {
            const d = Math.sqrt(d2) || 0.001;
            const ux = dx / d;
            const uy = dy / d;
            const strength = CONFIG.repelStrength;
            this.vx += ux * strength * (1 - d / r);
            this.vy += uy * strength * (1 - d / r);
          }
        }

        const sp = Math.hypot(this.vx, this.vy);
        const maxSp = CONFIG.maxSpeed;
        if (sp > maxSp) {
          this.vx *= maxSp / sp;
          this.vy *= maxSp / sp;
        }

        this.x += this.vx * DPR;
        this.y += this.vy * DPR;

        if (this.x < -50) this.x = W + 50;
        if (this.x > W + 50) this.x = -50;
        if (this.y < -50) this.y = H + 50;
        if (this.y > H + 50) this.y = -50;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = CONFIG.colorParticle;
        ctx.globalAlpha = isDark ? 0.9 : 0.7;
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    let targetCount = 0;

    function computeParticlesCount() {
      const area = (W * H) / (DPR * DPR);
      const per10k = CONFIG.baseDensity;
      targetCount = Math.round(per10k * (area / 10000));
      targetCount = clamp(targetCount, 40, 220);
      if (particles.length < targetCount) {
        const add = targetCount - particles.length;
        for (let i = 0; i < add; i++) particles.push(new ParticleClass());
      } else if (particles.length > targetCount) {
        particles.length = targetCount;
      }
    }

    const mouse = { x: null as number | null, y: null as number | null };

    function drawLinks() {
      ctx.lineWidth = 1 * DPR;
      ctx.strokeStyle = CONFIG.colorLink;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONFIG.linkDist * DPR) {
            const alpha = CONFIG.linkAlpha * (1 - dist / (CONFIG.linkDist * DPR));
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    }

    function loop() {
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        particles[i].step(mouse.x, mouse.y);
      }

      drawLinks();

      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
      }

      requestAnimationFrame(loop);
    }

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX * DPR;
      mouse.y = e.clientY * DPR;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleClick = (e: MouseEvent) => {
      const mx = e.clientX * DPR;
      const my = e.clientY * DPR;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.x - mx;
        const dy = p.y - my;
        const d2 = dx * dx + dy * dy;
        const r = CONFIG.mouseInfluence * DPR;
        if (d2 < r * r) {
          const d = Math.sqrt(d2) || 0.001;
          const ux = dx / d;
          const uy = dy / d;
          p.vx += ux * (CONFIG.clickBurst / 100);
          p.vy += uy * (CONFIG.clickBurst / 100);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', resize, { passive: true });

    // Init
    resize();
    for (let i = 0; i < 120; i++) particles.push(new ParticleClass());
    computeParticlesCount();
    loop();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="fixed inset-0 w-screen h-screen display-block" />;
}
