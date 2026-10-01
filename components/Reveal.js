"use client";
import { useEffect, useRef } from "react";

// type: "pop" (scale + rise), "fade" (rise only), "stagger" (children pop in one after another)
export default function Reveal({ children, className = "", delay = 0, as: Tag = "div", type = "pop" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) { el?.classList.add("in"); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const base = type === "fade" ? "fade" : type === "stagger" ? "stagger" : "reveal";
  return (
    <Tag ref={ref} className={`${base} ${className}`} style={delay ? { animationDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}
