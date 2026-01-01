'use client';

import React, { useEffect, useRef } from 'react';

// Qar rəngini mövzuya görə dəyişmək üçün util
function getSnowColor() {
  if (typeof window !== 'undefined' && window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return '#fff'; // dark mode üçün ağ
    }
  }
  return '#b3d8f6'; // light mode üçün daha tünd mavi-ağ (gözəçarpan)
}

// Sadə qar yağması effekti üçün canvas istifadə olunur
const Snowfall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(undefined);
  const snowColorRef = useRef<string>(getSnowColor());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;


    // Daha real qar dənəcikləri üçün əlavə parametrlər və parıltı
    let snowflakes = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.2 + 1.2, // radius
      d: Math.random() * 1.1 + 0.7, // düşmə sürəti
      vx: (Math.random() - 0.5) * 0.6, // üfüqi hərəkət
      vy: (Math.random() - 0.5) * 0.3, // yüngül dalğalanma
      opacity: 0.7 + Math.random() * 0.3,
      sparkle: 0, // parıltı animasiyası üçün
    }));


    // Light string parametrləri (üst işıqlar üçün)
    const bulbCount = 36;
    const bulbY = 32; // işıqların y oxu (LightString ilə uyğun)
    const bulbGap = width / bulbCount;
    const bulbRadius = 16;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.globalAlpha = 0.85;
      ctx.fillStyle = snowColorRef.current;
      snowflakes.forEach(flake => {
        // Qar dənəsi
        ctx.save();
        ctx.globalAlpha = flake.opacity;
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
        ctx.shadowColor = flake.sparkle > 0 ? '#fff' : 'transparent';
        ctx.shadowBlur = flake.sparkle > 0 ? 16 : 0;
        ctx.fill();
        ctx.restore();
      });
      ctx.restore();
      update();
      animationRef.current = requestAnimationFrame(draw);
    }


    function update() {
      for (let flake of snowflakes) {
        // Realistik dalğalanma
        flake.x += flake.vx + Math.sin(flake.y / 24) * 0.18;
        flake.y += flake.d + Math.cos(flake.x / 32) * 0.09 + flake.vy;

        // İşıqlara toxunma və parıltı
        if (
          flake.y > bulbY - bulbRadius &&
          flake.y < bulbY + bulbRadius &&
          Math.abs(((flake.x % width) / bulbGap) - Math.round((flake.x % width) / bulbGap)) < 0.18
        ) {
          flake.sparkle = 1.0;
        } else if (flake.sparkle > 0) {
          flake.sparkle -= 0.08;
          if (flake.sparkle < 0) flake.sparkle = 0;
        }

        // Ekrandan çıxarsa yenidən yuxarıdan
        if (flake.y > height + 4) {
          flake.x = Math.random() * width;
          flake.y = -flake.r;
          flake.vx = (Math.random() - 0.5) * 0.6;
          flake.vy = (Math.random() - 0.5) * 0.3;
          flake.opacity = 0.7 + Math.random() * 0.3;
          flake.sparkle = 0;
        }
        // Yanlardan çıxarsa wrap-around
        if (flake.x < -8) flake.x = width + 8;
        if (flake.x > width + 8) flake.x = -8;
      }
    }

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    }

    function handleThemeChange() {
      snowColorRef.current = getSnowColor();
      // Yeni rəngi tətbiq etmək üçün canvası təmizləyib redraw etmək lazımdır
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }

    window.addEventListener('resize', handleResize);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);
    draw();
    return () => {
      window.removeEventListener('resize', handleResize);
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'background 0.3s',
      }}
    />
  );
};

export default Snowfall;
