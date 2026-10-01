"use client";
import { useEffect, useRef } from "react";

// Portrait with soft, border-less edges (CSS mask) that fades out as the page scrolls.
export default function HeroPhoto({ src, alt }) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const t = Math.min(1, y / 420);
      const el = ref.current;
      if (!el) return;
      el.style.opacity = String(1 - t);
      el.style.transform = `translateY(${y * 0.12}px) scale(${1 - t * 0.04})`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="relative mx-auto w-full max-w-[210px]">
      <div className="absolute inset-x-6 top-10 h-3/4 rounded-full bg-pale blur-2xl" />
      <div ref={ref} className="photo-fade relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="block h-auto w-full" />
      </div>
    </div>
  );
}
