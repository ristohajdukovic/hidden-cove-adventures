import { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo/logo.png";
import { BRAND_NAME } from "@/lib/business";

const REST_LEVEL = 0.1;
const ROLL_PERIOD_MS = 3000;
const WAVE_CYCLES = 2;
const WAVE_AMPLITUDE_PCT = 6;
const POINT_COUNT = 40;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function buildWavyClipPath(fillLevel: number, rollPhase: number) {
  const baseY = (1 - fillLevel) * 100;
  const points: string[] = [];

  for (let i = 0; i <= POINT_COUNT; i++) {
    const xPct = (i / POINT_COUNT) * 100;
    const wave = Math.sin(2 * Math.PI * (xPct / 100) * WAVE_CYCLES + rollPhase) * WAVE_AMPLITUDE_PCT;
    points.push(`${xPct}% ${baseY + wave}%`);
  }

  points.push("100% 100%", "0% 100%");

  return `polygon(${points.join(", ")})`;
}

const MIN_VISIBLE_MS = 1400;
const EXIT_ANIMATION_MS = 1100;
const TIDE_EXIT_MS = 700;

export function Loader() {
  const [exiting, setExiting] = useState(false);
  const [receding, setReceding] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(
    () => document.readyState === "complete",
  );
  const fillRef = useRef<HTMLSpanElement>(null);
  const exitStartRef = useRef<number | null>(null);
  const removedRef = useRef(false);

  useEffect(() => {
    const showTimer = window.setTimeout(() => setMinTimeElapsed(true), MIN_VISIBLE_MS);
    return () => window.clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (pageLoaded) return;
    const handleLoad = () => setPageLoaded(true);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, [pageLoaded]);

  useEffect(() => {
    if (minTimeElapsed && pageLoaded) setExiting(true);
  }, [minTimeElapsed, pageLoaded]);

  useEffect(() => {
    if (!exiting) return;
    exitStartRef.current = performance.now();
    const recedeTimer = window.setTimeout(() => {
      setReceding(true);
      document.documentElement.classList.add("site-revealed");
    }, EXIT_ANIMATION_MS);
    return () => window.clearTimeout(recedeTimer);
  }, [exiting]);

  useEffect(() => {
    if (!receding) return;
    const removeTimer = window.setTimeout(() => {
      removedRef.current = true;
      setRemoved(true);
    }, TIDE_EXIT_MS);
    return () => window.clearTimeout(removeTimer);
  }, [receding]);

  useEffect(() => {
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      if (removedRef.current) return;

      const rollPhase = ((now - start) / ROLL_PERIOD_MS) * 2 * Math.PI;

      let fillLevel = REST_LEVEL;
      if (exitStartRef.current !== null) {
        const progress = Math.min(1, (now - exitStartRef.current) / EXIT_ANIMATION_MS);
        fillLevel = REST_LEVEL + (1 - REST_LEVEL) * easeInOutCubic(progress);
      }

      if (fillRef.current) {
        fillRef.current.style.clipPath = buildWavyClipPath(fillLevel, rollPhase);
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  if (removed) return null;

  const classNames = [
    "loader",
    exiting && "loader--exiting",
    receding && "loader--receding",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} aria-hidden="true">
      <img className="loader__logo" src={logo} alt="" width={96} height={96} />

      <div className="loader__brand">
        <span className="loader__wordmark">{BRAND_NAME}</span>
        <span ref={fillRef} className="loader__wordmark-fill">
          {BRAND_NAME}
        </span>
      </div>
    </div>
  );
}
