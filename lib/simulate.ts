// Seeded so the server and client render the same paths.
function mulberry32(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function normalSampler(rand: () => number) {
  return () => {
    let u = 0;
    while (u === 0) u = rand();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * rand());
  };
}

export const PATH_VIEW = { width: 1200, height: 700 };
export const HIST_VIEW = { width: 1200, height: 340 };

// Geometric Brownian motion sample paths, drawn as SVG path strings.
export function pricePaths(count = 16, steps = 150, seed = 20260901): string[] {
  const normal = normalSampler(mulberry32(seed));
  const { width, height } = PATH_VIEW;
  const start = 430;
  const sigma = 0.022;
  const mu = 0.0006;
  const scale = 700;
  const paths: string[] = [];

  for (let i = 0; i < count; i++) {
    let logReturn = 0;
    let d = `M0 ${start}`;
    for (let j = 1; j <= steps; j++) {
      logReturn += mu - 0.5 * sigma * sigma + sigma * normal();
      const y = Math.max(10, Math.min(height - 10, start - scale * logReturn));
      d += ` L${((j * width) / steps).toFixed(1)} ${y.toFixed(1)}`;
    }
    paths.push(d);
  }
  return paths;
}

// Histogram of standard normal draws, plus the density curve on top.
export function distribution(samples = 6000, bins = 48, seed = 20260902) {
  const normal = normalSampler(mulberry32(seed));
  const lo = -3.2;
  const hi = 3.2;
  const { width, height } = HIST_VIEW;
  const peakHeight = 300;
  const counts = new Array<number>(bins).fill(0);

  for (let i = 0; i < samples; i++) {
    const b = Math.floor(((normal() - lo) / (hi - lo)) * bins);
    if (b >= 0 && b < bins) counts[b]++;
  }

  const peak = Math.max(...counts);
  const binWidth = width / bins;
  const bars = counts
    .map((c, i) => {
      const h = (c / peak) * peakHeight;
      const x = i * binWidth + 3;
      return `M${x.toFixed(1)} ${height} V${(height - h).toFixed(1)} h${(binWidth - 6).toFixed(1)} V${height} Z`;
    })
    .join(" ");

  let curve = "";
  for (let i = 0; i <= 120; i++) {
    const z = lo + ((hi - lo) * i) / 120;
    const y = height - peakHeight * Math.exp((-z * z) / 2);
    curve += `${i === 0 ? "M" : " L"}${((i * width) / 120).toFixed(1)} ${y.toFixed(1)}`;
  }

  return { bars, curve };
}
