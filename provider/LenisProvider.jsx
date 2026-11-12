"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const LENIS_OPTIONS = {
  lerp: 0.08,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.5,
  anchors: true,
  autoRaf: true,
  allowNestedScroll: true,
  stopInertiaOnNavigate: true,
  respectReducedMotion: true,
  prevent: (node) =>
    Boolean(node.closest?.("dialog[open], [data-lenis-prevent]")),
};

/**
 * Resets scroll position cleanly when navigating between App Router routes
 * so inertia never carries over across page transitions.
 */
function LenisRouteSync() {
  const pathname = usePathname();
  const lenis = useLenis();
  const previousPathRef = useRef(pathname);

  useEffect(() => {
    if (previousPathRef.current !== pathname) {
      previousPathRef.current = pathname;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname, lenis]);

  return null;
}

export default function LenisProvider({ children }) {
  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      <LenisRouteSync />
      {children}
    </ReactLenis>
  );
}

