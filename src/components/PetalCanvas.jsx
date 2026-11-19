import React, { useEffect, useRef } from "react";

const PETAL_TYPES = [
  // Rose petal (teardrop)
  (ctx, x, y, size, color, angle) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.bezierCurveTo(size * 0.6, -size * 0.6, size * 0.6, size * 0.3, 0, size * 0.6);
    ctx.bezierCurveTo(-size * 0.6, size * 0.3, -size * 0.6, -size * 0.6, 0, -size);
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.82;
    ctx.fill();
    ctx.restore();
  },
  // Daisy (circular)
  (ctx, x, y, size, color, angle) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.55, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.72;
    ctx.fill();
    ctx.restore();
  },
  // Sparkle (star)
  (ctx, x, y, size, color, angle) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.beginPath();
    for (let i = 0; i < 4; i++) {
      const a = (i * Math.PI) / 2;
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(a) * size, Math.sin(a) * size);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 0.65;
    ctx.stroke();
    ctx.restore();
  }
];

const COLORS = [
  "#D98291", "#E99B91", "#F5E4DF", "#C6A15B", "#E8C879",
  "#A9B99A", "#FFFFFF", "#F1D8CF", "#FDF6BA", "#E8A0AD"
];

function createPetal(W, H) {
  const type = Math.floor(Math.random() * PETAL_TYPES.length);
  return {
    x: Math.random() * W,
    y: -20 - Math.random() * 60,
    vx: (Math.random() - 0.5) * 1.4,
    vy: 0.6 + Math.random() * 1.4,
    size: 5 + Math.random() * 7,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.06,
    sway: Math.random() * Math.PI * 2,
    swaySpeed: 0.015 + Math.random() * 0.02,
    swayAmp: 0.6 + Math.random() * 0.9,
    type,
    opacity: 0,
    fadingIn: true,
    life: 0
  };
}

export default function PetalCanvas({ active }) {
  const canvasRef = useRef(null);
  const petals = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const ctx = canvas.getContext("2d");
    const W = () => canvas.width;
    const H = () => canvas.height;

    // Seed initial petals
    for (let i = 0; i < 22; i++) {
      const p = createPetal(W(), H());
      p.y = Math.random() * H(); // scattered already on screen
      p.opacity = Math.random() * 0.8;
      petals.current.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, W(), H());

      // Occasionally add new petals
      if (petals.current.length < 35 && Math.random() < 0.04) {
        petals.current.push(createPetal(W(), H()));
      }

      petals.current = petals.current.filter((p) => {
        // Fade in
        if (p.fadingIn) {
          p.opacity = Math.min(1, p.opacity + 0.025);
          if (p.opacity >= 1) p.fadingIn = false;
        }

        p.sway += p.swaySpeed;
        p.x += p.vx + Math.sin(p.sway) * p.swayAmp;
        p.y += p.vy;
        p.angle += p.spin;
        p.life++;

        if (p.y > H() + 30) return false;

        ctx.globalAlpha = p.opacity * 0.88;
        PETAL_TYPES[p.type](ctx, p.x, p.y, p.size, p.color, p.angle);
        ctx.globalAlpha = 1;

        return true;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      petals.current = [];
    };
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 999,
        width: "100%",
        height: "100%"
      }}
    />
  );
}
