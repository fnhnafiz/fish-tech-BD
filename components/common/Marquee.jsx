"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Reusable infinite Marquee component
 * Supports left / right directions, pause on hover, custom speed, and seamless gap accounting.
 */
export function Marquee({
  children,
  pauseOnHover = true,
  direction = "left",
  speed = 5,
  repeat = 4,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "group flex w-full overflow-hidden py-2 [--gap:1.5rem] [gap:var(--gap)] select-none",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-around [gap:var(--gap)] min-w-full",
          direction === "right" ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ "--duration": `${speed}s` }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <React.Fragment key={`marquee-track-1-${i}`}>{children}</React.Fragment>
        ))}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-around [gap:var(--gap)] min-w-full",
          direction === "right" ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ "--duration": `${speed}s` }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <React.Fragment key={`marquee-track-2-${i}`}>{children}</React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
