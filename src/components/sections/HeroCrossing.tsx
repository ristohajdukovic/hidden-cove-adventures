import { useEffect, useRef } from "react";

/**
 * Ambient "crossing" scene for the hero: a hand-drawn dotted wave line that
 * rolls like water, with a small boat riding it across the section.
 * Custom rAF engine (same approach as the site Loader) — no animation deps.
 */

const STRIP_HEIGHT = 110;
const MID_Y = 66;
const WAVE_AMPLITUDE = 8;
const WAVELENGTH_PX = 260;
const ROLL_PERIOD_MS = 8000;
const CROSSING_PERIOD_MS = 36000;
const BOB_PERIOD_MS = 2400;
const BOB_AMPLITUDE = 2.2;
const EDGE_FADE = 0.08;
const PATH_STEP_PX = 14;
const MAX_TILT_DEG = 7;

function wavePoint(x: number, phase: number) {
  const k = (2 * Math.PI) / WAVELENGTH_PX;
  const y = MID_Y + WAVE_AMPLITUDE * Math.sin(k * x + phase);
  const slope = WAVE_AMPLITUDE * k * Math.cos(k * x + phase);
  return { y, slope };
}

function buildWavePath(width: number, phase: number) {
  const points: string[] = [];
  for (let x = 0; x <= width + PATH_STEP_PX; x += PATH_STEP_PX) {
    const { y } = wavePoint(x, phase);
    points.push(`${points.length === 0 ? "M" : "L"} ${x} ${y.toFixed(1)}`);
  }
  return points.join(" ");
}

function edgeOpacity(progress: number) {
  const fadeIn = Math.min(1, progress / EDGE_FADE);
  const fadeOut = Math.min(1, (1 - progress) / EDGE_FADE);
  return Math.min(fadeIn, fadeOut);
}

export function HeroCrossing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const boatRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;
    const boat = boatRef.current;
    if (!container || !path || !boat) return;

    let width = container.clientWidth;
    const resizeObserver = new ResizeObserver(() => {
      width = container.clientWidth;
    });
    resizeObserver.observe(container);

    const placeBoat = (x: number, phase: number, bob: number) => {
      const { y, slope } = wavePoint(x, phase);
      const tilt = Math.max(
        -MAX_TILT_DEG,
        Math.min(MAX_TILT_DEG, (Math.atan(slope) * 180) / Math.PI),
      );
      boat.style.transform = `translate(${x.toFixed(1)}px, ${(y + bob).toFixed(1)}px) rotate(${tilt.toFixed(2)}deg)`;
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      path.setAttribute("d", buildWavePath(width, 0));
      placeBoat(width * 0.68, 0, 0);
      boat.style.opacity = "1";
      return () => resizeObserver.disconnect();
    }

    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const phase = -(elapsed / ROLL_PERIOD_MS) * 2 * Math.PI;

      path.setAttribute("d", buildWavePath(width, phase));

      const progress = (elapsed % CROSSING_PERIOD_MS) / CROSSING_PERIOD_MS;
      const bob =
        Math.sin((elapsed / BOB_PERIOD_MS) * 2 * Math.PI) * BOB_AMPLITUDE;
      placeBoat(progress * width, phase, bob);
      boat.style.opacity = edgeOpacity(progress).toFixed(2);

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-crossing"
      style={{ height: STRIP_HEIGHT }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height={STRIP_HEIGHT}
        className="hero-crossing__svg"
        focusable="false"
      >
        <path
          ref={pathRef}
          className="hero-crossing__wave"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="0.5 11"
        />
        {/* Boat drawn around origin; waterline sits at y=0 */}
        <g ref={boatRef} className="hero-crossing__boat" style={{ opacity: 0 }}>
          <path
            className="hero-crossing__sail"
            d="M 1 -25 Q 14.5 -17, 3.5 -5.5 L 1 -5.5 Z"
          />
          <path
            className="hero-crossing__jib"
            d="M -0.5 -21 Q -10.5 -13.5, -1.5 -5.5 L -0.5 -5.5 Z"
          />
          <path d="M 1 -25 L 1 -4" fill="none" />
          <path
            className="hero-crossing__hull"
            d="M -19 -4 Q -16.5 3, -9.5 4.2 L 11.5 4.2 Q 18.5 3, 21.5 -4 Q 7.5 -1.8, -19 -4 Z"
          />
        </g>
      </svg>
    </div>
  );
}
