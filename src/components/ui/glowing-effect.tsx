"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

const GlowingEffect = memo(function GlowingEffect({
  blur = 0,
  inactiveZone = 0.7,
  proximity = 0,
  spread = 20,
  variant = "default",
  glow = false,
  className,
  disabled = false,
  movementDuration = 2,
  borderWidth = 1,
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number>(0);

  const handleMove = useCallback(
    (e: MouseEvent | { clientX: number; clientY: number }) => {
      if (!containerRef.current || disabled) return;

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }

      animationFrame.current = requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        const maxDistance = Math.max(rect.width, rect.height);

        const inactiveRadius = maxDistance * inactiveZone;
        if (proximity === 0 && distance < inactiveRadius) {
          container.style.setProperty("--glow-opacity", "0");
          return;
        }

        if (proximity > 0 && distance > proximity) {
          container.style.setProperty("--glow-opacity", "0");
          return;
        }

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const angle = Math.atan2(y - rect.height / 2, x - rect.width / 2);
        const degrees = (angle * 180) / Math.PI + 180;

        lastPosition.current = { x, y };

        container.style.setProperty("--glow-x", `${x}px`);
        container.style.setProperty("--glow-y", `${y}px`);
        container.style.setProperty("--glow-angle", `${degrees}deg`);
        container.style.setProperty("--glow-opacity", "1");
      });
    },
    [disabled, inactiveZone, proximity]
  );

  const handleLeave = useCallback(() => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty("--glow-opacity", "0");
  }, []);

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => {
      handleMove({
        clientX: lastPosition.current.x,
        clientY: lastPosition.current.y,
      });
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("scroll", handleScroll, true);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [handleMove, handleLeave, disabled]);

  const gradientColors =
    variant === "white"
      ? "rgba(255,255,255,0.8), rgba(255,255,255,0.4), transparent, transparent, transparent"
      : "rgba(16,185,129,0.8), rgba(6,182,212,0.6), rgba(139,92,246,0.5), transparent, transparent";

  return (
    <div
      ref={containerRef}
      style={
        {
          "--glow-spread": `${spread}deg`,
          "--glow-blur": `${blur}px`,
          "--glow-opacity": "0",
          "--glow-duration": `${movementDuration}s`,
          "--glow-border-width": `${borderWidth}px`,
        } as React.CSSProperties
      }
      className={cn("pointer-events-none absolute inset-0 rounded-[inherit]", className)}
    >
      <div
        className="absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: "var(--glow-opacity)" as unknown as number,
          background: `conic-gradient(from var(--glow-angle, 180deg) at var(--glow-x, 50%) var(--glow-y, 50%), ${gradientColors})`,
          filter: blur > 0 ? `blur(${blur}px)` : undefined,
          maskImage: `radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), black 0%, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), black 0%, transparent 70%)`,
        }}
      />
      {glow && (
        <div
          className="absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: "var(--glow-opacity)" as unknown as number,
            background: `conic-gradient(from var(--glow-angle, 180deg) at var(--glow-x, 50%) var(--glow-y, 50%), ${gradientColors})`,
            filter: `blur(${Math.max(blur, 15)}px)`,
            maskImage: `radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), black 0%, transparent 60%)`,
            WebkitMaskImage: `radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), black 0%, transparent 60%)`,
          }}
        />
      )}
    </div>
  );
});

export { GlowingEffect };
