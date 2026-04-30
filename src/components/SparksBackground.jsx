"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 44;

const randomRange = (min, max) => min + Math.random() * (max - min);

const respawnParticle = (particle, width, height) => {
  const sideRoll = Math.random();
  const fromLeft = sideRoll < 0.47;
  const fromRight = sideRoll >= 0.47 && sideRoll < 0.94;
  const cornerBias = Math.random() < 0.16;

  if (fromLeft) {
    particle.origin = "left";
    particle.x = randomRange(-42, -12);
    particle.y = cornerBias ? randomRange(-20, height * 0.22) : randomRange(height * 0.12, height * 0.96);
    particle.vx = randomRange(36, 94);
  } else if (fromRight) {
    particle.origin = "right";
    particle.x = randomRange(width + 12, width + 42);
    particle.y = cornerBias ? randomRange(-20, height * 0.22) : randomRange(height * 0.12, height * 0.96);
    particle.vx = randomRange(-94, -36);
  } else {
    particle.origin = "bottom";
    particle.x = randomRange(width * 0.12, width * 0.88);
    particle.y = randomRange(height + 6, height + 44);
    particle.vx = randomRange(-16, 16);
  }

  particle.vy = randomRange(-108, -48);
  particle.life = 0;
  particle.maxLife = randomRange(2.6, 6.4);
  particle.size = randomRange(1.2, 3.6);
  particle.alpha = randomRange(0.1, 0.34);
  particle.flickerSpeed = randomRange(7, 20);
  particle.curveStrength = randomRange(14, 40) * (Math.random() < 0.5 ? -1 : 1);
  particle.driftNoise = randomRange(0.8, 2.5);
  particle.depth = Math.random() < 0.3 ? 1.35 : Math.random() < 0.64 ? 1 : 0.72;
};

export function SparksBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    let rafId = 0;
    let last = performance.now();
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      life: 0,
      maxLife: 1,
      size: 1,
      alpha: 0.3,
      flickerSpeed: 10,
      curveStrength: 10,
      driftNoise: 1,
      depth: 1,
      origin: "left",
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { innerWidth, innerHeight } = window;
      canvas.width = Math.floor(innerWidth * dpr);
      canvas.height = Math.floor(innerHeight * dpr);
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles.forEach((particle) => respawnParticle(particle, innerWidth, innerHeight));
    };

    const draw = (now) => {
      const reduceMotion = mediaQuery.matches;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const windCarrier = Math.sin(now * 0.00033) * 0.5 + Math.sin(now * 0.00077 + 1.7) * 0.5;
      const gust = 12 + (windCarrier + 1) * 28;
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        if (!reduceMotion) {
          particle.life += dt;
          const age = particle.life / particle.maxLife;
          const normalizedY = Math.max(0, Math.min(1, particle.y / Math.max(height, 1)));
          const sidePushBase = particle.origin === "left" ? 1 : particle.origin === "right" ? -1 : 0;
          const sidePush = sidePushBase * (0.8 + (1 - normalizedY) * 1.5);
          const updraft = 0.85 + (1 - normalizedY) * 0.65;

          particle.x += particle.vx * dt * particle.depth;
          particle.y += particle.vy * dt * (0.95 + particle.depth * 0.3) * updraft;

          const wave = Math.sin(now * 0.0012 * particle.driftNoise + particle.curveStrength);
          particle.x += wave * particle.curveStrength * 0.05 * dt * 60;
          particle.vx += wave * 0.78 * dt;
          particle.vx += sidePush * gust * dt * 0.29;
          particle.vx *= 0.992;

          if (age >= 1 || particle.x < -90 || particle.x > width + 90 || particle.y < -90) {
            respawnParticle(particle, width, height);
            continue;
          }
        }

        const lifeRatio = Math.min(particle.life / particle.maxLife, 1);
        const fadeIn = Math.min(lifeRatio / 0.14, 1);
        const fadeOut = lifeRatio > 0.72 ? Math.max(0, 1 - (lifeRatio - 0.72) / 0.28) : 1;
        const flicker = 0.7 + 0.3 * Math.sin(now * 0.001 * particle.flickerSpeed + particle.curveStrength);
        const alpha = reduceMotion ? particle.alpha * 0.22 : particle.alpha * fadeIn * fadeOut * flicker;
        if (alpha <= 0.005) continue;

        const size = particle.size * (0.85 + (1 - lifeRatio) * 0.35);
        const glow = size * (reduceMotion ? 1.15 : 2.05) * particle.depth;

        context.beginPath();
        const gradient = context.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, glow);
        gradient.addColorStop(0, `rgba(165, 214, 255, ${alpha * 0.28})`);
        gradient.addColorStop(0.45, `rgba(98, 168, 245, ${alpha * 0.14})`);
        gradient.addColorStop(1, "rgba(42, 96, 182, 0)");
        context.fillStyle = gradient;
        context.arc(particle.x, particle.y, glow, 0, Math.PI * 2);
        context.fill();

        context.beginPath();
        context.fillStyle = `rgba(176, 218, 255, ${alpha * 0.78})`;
        context.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        context.fill();
      }

      if (!reduceMotion) {
        rafId = window.requestAnimationFrame(draw);
      }
    };

    resize();
    rafId = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    const onMotionChange = () => {
      if (mediaQuery.matches) {
        window.cancelAnimationFrame(rafId);
        draw(performance.now());
      } else {
        last = performance.now();
        rafId = window.requestAnimationFrame(draw);
      }
    };

    mediaQuery.addEventListener("change", onMotionChange);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      mediaQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <div className="sparks-bg" aria-hidden>
      <canvas ref={canvasRef} className="sparks-canvas" />
    </div>
  );
}
