"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Interactive3DProps {
  children: React.ReactNode;
  className?: string;
  perspective?: number;
  maxRotation?: number;
}

export function Interactive3D({
  children,
  className,
  perspective = 1000,
  maxRotation = 15,
}: Interactive3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = ((e.clientX - centerX) / (rect.width / 2)) * maxRotation;
    const y = (-(e.clientY - centerY) / (rect.height / 2)) * maxRotation;
    setRotateX(y);
    setRotateY(x);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      style={{ perspective: `${perspective}px` }}
      className={cn("flex items-center justify-center", className)}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* Glow reflection */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.15 : 0,
            x: rotateY * 3,
            y: -rotateX * 3,
          }}
          className="pointer-events-none absolute -inset-4 rounded-3xl bg-emerald-500 blur-2xl"
        />
        <div style={{ transform: "translateZ(0)" }}>{children}</div>
      </motion.div>
    </div>
  );
}
