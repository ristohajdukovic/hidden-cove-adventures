import { cn } from "@/lib/utils";

type WaveDividerProps = {
  backgroundColor: string;
  frontColor: string;
  backColor?: string;
  className?: string;
};

const period = 400;
const amplitude = 42;
const waveHeight = 170;
const middle = 66;
const periods = 6;
const waveWidth = period * periods;

function createWavePath() {
  let path =
    `M0 ${middle} ` +
    `q ${period / 4} ${-amplitude * 2} ` +
    `${period / 2} 0`;

  for (let x = period / 2; x < waveWidth; x += period / 2) {
    path += ` t ${period / 2} 0`;
  }

  path += ` L ${waveWidth} ${waveHeight}` + ` L 0 ${waveHeight} Z`;

  return path;
}

const wavePath = createWavePath();

function WaveLayer({ fill, className }: { fill: string; className: string }) {
  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${waveWidth} ${waveHeight}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
      >
        <path d={wavePath} fill={fill} />
      </svg>
    </div>
  );
}

export function WaveDivider({
  backgroundColor,
  frontColor,
  backColor,
  className,
}: WaveDividerProps) {
  return (
    <div className={cn("wave-divider", className)} style={{ backgroundColor }} aria-hidden="true">
      <WaveLayer
        fill={backColor ?? frontColor}
        className="wave-divider__layer wave-divider__layer--back"
      />
      <WaveLayer fill={frontColor} className="wave-divider__layer wave-divider__layer--front" />
    </div>
  );
}
