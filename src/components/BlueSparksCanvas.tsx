"use client";

import { useEffect, useRef } from "react";

type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  opacity: number;
  blur: number;
  side: "left" | "right";
};

const BRAND_BLUE = "#3b82f6"; // change this to your exact brand blue

/** Mobile / narrow viewports: canvas shadows + high DPR + many particles destroy GPU time. */
function getPerformanceProfile(w: number) {
  const narrow = w < 768;
  const veryNarrow = w < 480;
  return {
    /** Cap backing-store scale (retina 3x = 9x pixels). */
    maxDpr: veryNarrow ? 1 : narrow ? 1.25 : 2,
    maxParticles: veryNarrow ? 24 : narrow ? 36 : Math.min(130, Math.floor(w / 12)),
    /** shadowBlur is extremely expensive on mobile; use flat fills instead. */
    useShadow: !narrow,
    /** Full-screen gradient every frame is costly; skip on small screens. */
    drawHaze: !narrow,
    /** Blending the full viewport is expensive; keep normal on mobile. */
    useScreenBlend: !narrow,
  };
}

export default function BlueSparksCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = 1;
    let darknessBoost = 1;
    let profile = getPerformanceProfile(width);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      profile = getPerformanceProfile(width);
      const rawDpr = window.devicePixelRatio || 1;
      dpr = Math.min(rawDpr, profile.maxDpr);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.style.mixBlendMode = profile.useScreenBlend ? "screen" : "normal";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      updateDarknessBoost();
    };

    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    const parseColorToRgb = (color: string): { r: number; g: number; b: number } | null => {
      const rgbMatch = color.match(/rgba?\(([^)]+)\)/i);
      if (!rgbMatch) return null;
      const channels = rgbMatch[1].split(",").map((part) => Number.parseFloat(part.trim()));
      if (channels.length < 3 || channels.some((v) => Number.isNaN(v))) return null;
      return { r: channels[0], g: channels[1], b: channels[2] };
    };

    const updateDarknessBoost = () => {
      const bodyBg = window.getComputedStyle(document.body).backgroundColor;
      const rgb = parseColorToRgb(bodyBg);
      if (!rgb) {
        darknessBoost = 1;
        return;
      }
      const luminance = (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;
      const darkness = 1 - Math.max(0, Math.min(1, luminance));
      darknessBoost = 0.85 + darkness * 0.85;
    };

    const createSpark = (): Spark => {
      const side: "left" | "right" = Math.random() > 0.5 ? "left" : "right";

      const fromLeft = side === "left";

      const x = fromLeft ? random(-80, -20) : random(width + 20, width + 80);

      const y = random(height * 0.05, height * 0.95);

      const direction = fromLeft ? 1 : -1;

      return {
        x,
        y,
        vx: direction * random(1.4, 4.2),
        vy: random(-1.45, 0.3),
        size: random(0.8, 3.2),
        life: 0,
        maxLife: random(140, 320),
        opacity: random(0.25, 0.9),
        blur: random(4, 14),
        side,
      };
    };

    const resetSparks = () => {
      const count = profile.maxParticles;
      sparksRef.current = Array.from({ length: count }, createSpark);
    };

    const drawSpark = (spark: Spark) => {
      const progress = spark.life / spark.maxLife;

      const fadeIn = Math.min(progress * 4, 1);
      const fadeOut = progress < 0.72 ? 1 : 1 - (progress - 0.72) / 0.28;
      const alpha = spark.opacity * fadeIn * fadeOut;

      if (alpha <= 0) return;

      ctx.save();

      ctx.globalAlpha = alpha;

      if (profile.useShadow) {
        ctx.shadowBlur = spark.blur * darknessBoost;
        ctx.shadowColor = BRAND_BLUE;
        ctx.fillStyle = BRAND_BLUE;
      } else {
        ctx.shadowBlur = 0;
        // Cheap soft dot without shadow pipeline (mobile).
        ctx.fillStyle = `rgba(147, 197, 253, ${Math.min(1, 0.55 + alpha * 0.35)})`;
      }

      ctx.beginPath();
      ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const updateSpark = (spark: Spark) => {
      spark.life += 1;

      // Natural ember drift / wind turbulence
      spark.x += spark.vx + Math.sin(spark.life * 0.03) * 0.32;
      spark.y += spark.vy + Math.cos(spark.life * 0.025) * 0.14;

      // Tiny random movement to avoid robotic motion
      spark.vx += random(-0.02, 0.02);
      spark.vy += random(-0.01, 0.01);

      const outOfBounds =
        spark.x < -220 || spark.x > width + 220 || spark.y < -180 || spark.y > height + 180;

      if (spark.life >= spark.maxLife || outOfBounds) {
        Object.assign(spark, createSpark());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      if (profile.drawHaze) {
        const gradient = ctx.createRadialGradient(
          width / 2,
          height / 2,
          0,
          width / 2,
          height / 2,
          Math.max(width, height) / 1.2
        );

        gradient.addColorStop(0, "rgba(59, 130, 246, 0.025)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      for (const spark of sparksRef.current) {
        updateSpark(spark);
        drawSpark(spark);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    updateDarknessBoost();
    resetSparks();
    animationRef.current = requestAnimationFrame(animate);

    const onResize = () => {
      resize();
      resetSparks();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
