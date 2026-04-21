"use client";

import { useCallback, useEffect, useRef } from "react";

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Trail {
  spring: number;
  friction: number;
  nodes: NodePoint[];
}

const CONFIG = {
  friction: 0.5,
  trails: 20,
  size: 50,
  dampening: 0.025,
  tension: 0.99,
};

function createTrail(spring: number, x: number, y: number): Trail {
  const nodes: NodePoint[] = [];
  for (let i = 0; i < CONFIG.size; i++) {
    nodes.push({ x, y, vx: 0, vy: 0 });
  }
  return {
    spring: spring + 0.1 * Math.random() - 0.05,
    friction: CONFIG.friction + 0.01 * Math.random() - 0.005,
    nodes,
  };
}

function updateTrail(trail: Trail, targetX: number, targetY: number) {
  let spring = trail.spring;
  const nodes = trail.nodes;

  nodes[0].vx += (targetX - nodes[0].x) * spring;
  nodes[0].vy += (targetY - nodes[0].y) * spring;

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (i > 0) {
      const prev = nodes[i - 1];
      node.vx += (prev.x - node.x) * spring;
      node.vy += (prev.y - node.y) * spring;
      node.vx += prev.vx * CONFIG.dampening;
      node.vy += prev.vy * CONFIG.dampening;
    }
    node.vx *= trail.friction;
    node.vy *= trail.friction;
    node.x += node.vx;
    node.y += node.vy;
    spring *= CONFIG.tension;
  }
}

function drawTrail(ctx: CanvasRenderingContext2D, trail: Trail) {
  const nodes = trail.nodes;
  let x = nodes[0].x;
  let y = nodes[0].y;

  ctx.beginPath();
  ctx.moveTo(x, y);

  let a = 1;
  const end = nodes.length - 2;
  for (a = 1; a < end; a++) {
    const curr = nodes[a];
    const next = nodes[a + 1];
    x = 0.5 * (curr.x + next.x);
    y = 0.5 * (curr.y + next.y);
    ctx.quadraticCurveTo(curr.x, curr.y, x, y);
  }
  const curr = nodes[a];
  const next = nodes[a + 1];
  ctx.quadraticCurveTo(curr.x, curr.y, next.x, next.y);
  ctx.stroke();
  ctx.closePath();
}

export function CanvasAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailsRef = useRef<Trail[]>([]);
  const posRef = useRef({ x: 0, y: 0 });
  const runningRef = useRef(true);
  const initializedRef = useRef(false);

  const initTrails = useCallback(() => {
    const trails: Trail[] = [];
    for (let i = 0; i < CONFIG.trails; i++) {
      trails.push(
        createTrail(
          0.45 + (i / CONFIG.trails) * 0.025,
          posRef.current.x,
          posRef.current.y
        )
      );
    }
    trailsRef.current = trails;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    runningRef.current = true;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if ("touches" in e && e.touches.length) {
        posRef.current.x = e.touches[0].pageX;
        posRef.current.y = e.touches[0].pageY;
      } else if ("clientX" in e) {
        posRef.current.x = e.clientX;
        posRef.current.y = e.clientY;
      }

      if (!initializedRef.current) {
        initializedRef.current = true;
        initTrails();
      }
    };

    function render() {
      if (!runningRef.current || !ctx) return;

      // Fade previous frame instead of clearing — eliminates flicker
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(10, 10, 10, 0.15)";
      ctx.fillRect(0, 0, canvas!.width, canvas!.height);

      if (initializedRef.current && trailsRef.current.length > 0) {
        // Use source-over instead of "lighter" to avoid additive brightness spikes
        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
        ctx.lineWidth = 1.5;

        for (let i = 0; i < trailsRef.current.length; i++) {
          updateTrail(
            trailsRef.current[i],
            posRef.current.x,
            posRef.current.y
          );
          drawTrail(ctx, trailsRef.current[i]);
        }
      }

      window.requestAnimationFrame(render);
    }

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("touchmove", handleMove as EventListener);
    document.addEventListener("touchstart", handleMove as EventListener);
    window.addEventListener("resize", resize);

    render();

    return () => {
      runningRef.current = false;
      initializedRef.current = false;
      trailsRef.current = [];
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("touchmove", handleMove as EventListener);
      document.removeEventListener("touchstart", handleMove as EventListener);
      window.removeEventListener("resize", resize);
    };
  }, [initTrails]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
    />
  );
}
