"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function MotionSystem() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLSpanElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const lenis = reduced ? null : new Lenis({ duration: 1.05, easing: (value) => 1 - Math.pow(1 - value, 3), smoothWheel: true });
    let lenisFrame = 0;
    const animateScroll = (time: number) => { lenis?.raf(time); lenisFrame = requestAnimationFrame(animateScroll); };
    if (lenis) lenisFrame = requestAnimationFrame(animateScroll);
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal], .ref-hero-copy h1, .ref-intro h2, .ref-section-head h2, .ref-fit h2, .ref-final h2, .ref-work-card, .ref-service-stack a, .ref-process article");
    revealTargets.forEach((element) => { if (!element.dataset.reveal) element.dataset.reveal = element.matches(".ref-hero-copy h1") ? "mask" : "up"; revealObserver.observe(element); });

    if (reduced || !finePointer) return () => { revealObserver.disconnect(); if (lenisFrame) cancelAnimationFrame(lenisFrame); lenis?.destroy(); };

    const cursor = cursorRef.current;
    const cursorLabel = cursorLabelRef.current;
    const preview = previewRef.current;
    if (!cursor || !cursorLabel || !preview) return () => { revealObserver.disconnect(); if (lenisFrame) cancelAnimationFrame(lenisFrame); lenis?.destroy(); };
    let pointerX = -100, pointerY = -100, frame = 0;
    let currentX = pointerX, currentY = pointerY;
    let activeMagnetic: HTMLElement | null = null;

    const paint = () => {
      currentX += (pointerX - currentX) * 0.16;
      currentY += (pointerY - currentY) * 0.16;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      preview.style.transform = `translate3d(${currentX + 26}px, ${currentY + 22}px, 0)`;
      frame = requestAnimationFrame(paint);
    };
    const pointerMove = (event: PointerEvent) => {
      pointerX = event.clientX; pointerY = event.clientY;
      const target = (event.target as Element | null)?.closest<HTMLElement>("[data-cursor], [data-service-preview], .magnetic");
      const cursorMode = target?.dataset.cursor ?? (target?.dataset.servicePreview ? "view" : "");
      cursor.classList.toggle("is-active", Boolean(cursorMode));
      cursorLabel.textContent = cursorMode === "drag" ? "DRAG" : cursorMode === "view" ? "VIEW" : "";
      preview.classList.toggle("is-active", Boolean(target?.dataset.servicePreview));
      if (target?.dataset.servicePreview) {
        preview.dataset.kind = target.dataset.servicePreview;
        preview.querySelector("strong")!.textContent = target.dataset.servicePreview.toUpperCase();
      }
      const magnetic = (event.target as Element | null)?.closest<HTMLElement>(".magnetic");
      if (magnetic) {
        const rect = magnetic.getBoundingClientRect(); const distanceX = event.clientX - (rect.left + rect.width / 2); const distanceY = event.clientY - (rect.top + rect.height / 2);
        if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 80) { activeMagnetic = magnetic; magnetic.style.setProperty("--mag-x", `${distanceX * 0.08}px`); magnetic.style.setProperty("--mag-y", `${distanceY * 0.12}px`); }
      } else if (activeMagnetic) { activeMagnetic.style.setProperty("--mag-x", "0px"); activeMagnetic.style.setProperty("--mag-y", "0px"); activeMagnetic = null; }
      const hero = (event.target as Element | null)?.closest<HTMLElement>(".ref-hero, .home-hero");
      if (hero) { const rect = hero.getBoundingClientRect(); hero.style.setProperty("--mouse-x", `${((event.clientX - rect.left) / rect.width - .5) * 18}px`); hero.style.setProperty("--mouse-y", `${((event.clientY - rect.top) / rect.height - .5) * 18}px`); }
    };
    const leave = () => { cursor.classList.remove("is-active"); preview.classList.remove("is-active"); if (activeMagnetic) { activeMagnetic.style.setProperty("--mag-x", "0px"); activeMagnetic.style.setProperty("--mag-y", "0px"); activeMagnetic = null; } };
    const click = (event: MouseEvent) => { const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[data-transition]"); if (!anchor || anchor.target === "_blank" || anchor.origin !== window.location.origin) return; transitionRef.current?.classList.add("is-active"); window.setTimeout(() => transitionRef.current?.classList.remove("is-active"), 780); };
    document.addEventListener("pointermove", pointerMove, { passive: true }); document.addEventListener("pointerleave", leave); document.addEventListener("click", click);
    frame = requestAnimationFrame(paint);
    const progress = () => document.querySelectorAll<HTMLElement>(".ref-process").forEach((element) => { const rect = element.getBoundingClientRect(); const value = Math.min(1, Math.max(0, (window.innerHeight * .78 - rect.top) / Math.max(1, rect.height))); element.style.setProperty("--process-progress", String(value)); });
    window.addEventListener("scroll", progress, { passive: true }); progress();
    return () => { revealObserver.disconnect(); cancelAnimationFrame(frame); if (lenisFrame) cancelAnimationFrame(lenisFrame); lenis?.destroy(); document.removeEventListener("pointermove", pointerMove); document.removeEventListener("pointerleave", leave); document.removeEventListener("click", click); window.removeEventListener("scroll", progress); };
  }, []);

  return <><div className="motion-cursor" ref={cursorRef} aria-hidden><span ref={cursorLabelRef} /></div><div className="motion-preview" ref={previewRef} aria-hidden><span>PREVIEW /</span><strong>WEB</strong><i /></div><div className="motion-transition" ref={transitionRef} aria-hidden /></>;
}
