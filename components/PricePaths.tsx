import { PATH_VIEW, pricePaths } from "@/lib/simulate";

const tones = ["blue", "violet", "white"];
const paths = pricePaths();

export default function PricePaths() {
  return (
    <div className="price-paths" aria-hidden="true">
      {paths.map((d, i) => (
        <svg
          key={i}
          className={`path-layer ${i === 0 ? "lead" : tones[i % tones.length]}`}
          viewBox={`0 0 ${PATH_VIEW.width} ${PATH_VIEW.height}`}
          preserveAspectRatio="none"
        >
          <path d={d} />
        </svg>
      ))}
    </div>
  );
}
