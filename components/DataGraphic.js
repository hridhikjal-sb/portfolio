// Decorative animated chart (illustrative shapes only, not real data).
const bars = [38, 56, 44, 70, 62, 88, 76, 100];
const pts = bars.map((h, i) => [18 + i * 36, 112 - h * 0.95]);

export default function DataGraphic() {
  const d = pts.map((p, i) => `${i ? "L" : "M"}${p[0]} ${p[1]}`).join(" ");
  return (
    <svg viewBox="0 0 300 130" className="w-full" role="img" aria-label="Animated illustration of a growing chart">
      <defs>
        <linearGradient id="gv" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="var(--g1)" stopOpacity=".25" />
          <stop offset="1" stopColor="var(--g2)" stopOpacity=".85" />
        </linearGradient>
        <linearGradient id="gl" x1="0" x2="1">
          <stop offset="0" stopColor="var(--g3)" />
          <stop offset="1" stopColor="var(--mark)" />
        </linearGradient>
      </defs>
      {bars.map((h, i) => (
        <rect key={i} className="bar" x={10 + i * 36} y={115 - h} width="16" height={h} rx="3"
              fill="url(#gv)" style={{ animationDelay: `${i * 0.08}s` }} />
      ))}
      <path d={d} pathLength="1" className="line-draw" fill="none" stroke="url(#gl)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <circle key={i} className="dot-pop" cx={p[0]} cy={p[1]} r="3.5" fill="var(--bg)" stroke="var(--g3)" strokeWidth="2"
                style={{ animationDelay: `${0.6 + i * 0.2}s` }} />
      ))}
    </svg>
  );
}
