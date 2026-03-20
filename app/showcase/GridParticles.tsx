"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  horizontal: boolean;
};

export default function GridParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const GRID = 50;
    const MAX_PARTICLES = 8;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = () => {
      if (particles.length >= MAX_PARTICLES) return;
      const horizontal = Math.random() > 0.5;
      const maxLife = 400 + Math.random() * 300;
      if (horizontal) {
        const row = Math.round(Math.random() * (canvas.height / GRID)) * GRID;
        particles.push({
          x: -20,
          y: row,
          vx: 0.2 + Math.random() * 0.35,
          vy: 0,
          life: 0,
          maxLife,
          horizontal: true,
        });
      } else {
        const col = Math.round(Math.random() * (canvas.width / GRID)) * GRID;
        particles.push({
          x: col,
          y: -20,
          vx: 0,
          vy: 0.2 + Math.random() * 0.35,
          life: 0,
          maxLife,
          horizontal: false,
        });
      }
    };

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn new particles
      if (Math.random() < 0.02) spawn();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Remove if off screen or expired
        if (p.life > p.maxLife || p.x > canvas.width + 40 || p.y > canvas.height + 40) {
          particles.splice(i, 1);
          continue;
        }

        const progress = p.life / p.maxLife;
        const fade = progress < 0.1 ? progress / 0.1 : progress > 0.7 ? (1 - progress) / 0.3 : 1;
        const alpha = fade * 0.04;

        // Glowing trail
        const trailLen = 40 + Math.random() * 10;
        const grad = p.horizontal
          ? ctx.createLinearGradient(p.x - trailLen, p.y, p.x, p.y)
          : ctx.createLinearGradient(p.x, p.y - trailLen, p.x, p.y);

        grad.addColorStop(0, `rgba(0, 160, 255, 0)`);
        grad.addColorStop(0.5, `rgba(0, 160, 255, ${alpha * 0.3})`);
        grad.addColorStop(1, `rgba(0, 200, 255, ${alpha})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        if (p.horizontal) {
          ctx.moveTo(p.x - trailLen, p.y);
          ctx.lineTo(p.x, p.y);
        } else {
          ctx.moveTo(p.x, p.y - trailLen);
          ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();

        // Bright head dot
        ctx.fillStyle = `rgba(100, 200, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Glow around head
        const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 8);
        glowGrad.addColorStop(0, `rgba(0, 180, 255, ${alpha * 0.5})`);
        glowGrad.addColorStop(1, `rgba(0, 180, 255, 0)`);
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
