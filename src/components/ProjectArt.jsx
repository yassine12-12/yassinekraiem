// Generative header art for project cards that have no real screenshot.
// Each piece is a small honest abstraction of what the project actually
// does, not a mocked-up "fake screenshot" - deliberately drawn, not a
// stand-in for real product photography.

const Frame = ({ children, className }) => (
  <svg
    viewBox="0 0 800 224"
    preserveAspectRatio="xMidYMid slice"
    className={className}
    role="img"
  >
    <defs>
      <linearGradient id="artBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0b0d10" />
        <stop offset="100%" stopColor="#14171c" />
      </linearGradient>
    </defs>
    <rect width="800" height="224" fill="url(#artBg)" />
    {children}
  </svg>
);

// AI-Based CNC Monitoring Platform: a row of sensor gauges, one flagging an anomaly
export const CNCMonitoringArt = ({ className }) => {
  const polar = (cx, cy, r, deg) => {
    const rad = (deg * Math.PI) / 180;
    return [cx + r * Math.sin(rad), cy - r * Math.cos(rad)];
  };
  const ticks = [-120, -90, -60, -30, 0, 30, 60, 90, 120];
  const gauges = [
    { cx: 140, angle: -55, alert: false },
    { cx: 340, angle: 20, alert: false },
    { cx: 540, angle: 75, alert: true },
    { cx: 700, angle: -35, alert: false },
  ];
  const r = 40;
  const cy = 108;

  return (
    <Frame className={className}>
      <line x1="90" y1="180" x2="750" y2="180" stroke="#e5e7eb" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="2 5" />
      {gauges.map(({ cx, angle, alert }, i) => {
        const color = alert ? '#ef4444' : '#22d3ee';
        const [nx, ny] = polar(cx, cy, r - 10, angle);
        const [zx1, zy1] = polar(cx, cy, r, 60);
        const [zx2, zy2] = polar(cx, cy, r, 120);
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#e5e7eb" strokeOpacity="0.25" strokeWidth="1.5" />
            {ticks.map((t) => {
              const [x1, y1] = polar(cx, cy, r - 8, t);
              const [x2, y2] = polar(cx, cy, r, t);
              return <line key={t} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#e5e7eb" strokeOpacity="0.25" strokeWidth="1.5" />;
            })}
            {alert && (
              <path d={`M${zx1},${zy1} A${r},${r} 0 0,1 ${zx2},${zy2}`} fill="none" stroke={color} strokeOpacity="0.8" strokeWidth="4" />
            )}
            <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={color} strokeOpacity="0.9" strokeWidth="2" />
            <circle cx={cx} cy={cy} r="4" fill={color} fillOpacity="0.85" />
          </g>
        );
      })}
      <circle cx="540" cy="46" r="3" fill="#ef4444" fillOpacity="0.9" />
      <text x="552" y="50" fontSize="11" fill="#ef4444" fillOpacity="0.85" fontFamily="monospace">anomaly detected</text>
    </Frame>
  );
};

// Carbon-Aware Kubernetes Scheduler: hex pod grid, low-carbon nodes lit up
export const KubernetesArt = ({ className }) => {
  const hexCenters = [];
  const r = 34;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 8; col++) {
      const x = 40 + col * (r * 1.75) + (row % 2 ? r * 0.875 : 0);
      const y = 20 + row * (r * 1.5);
      hexCenters.push([x, y]);
    }
  }
  const lit = new Set([4, 9, 12, 17, 20]);
  const hexPath = (cx, cy) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + r * 0.55 * Math.cos(a)},${cy + r * 0.55 * Math.sin(a)}`;
    }).join(' ');
  return (
    <Frame className={className}>
      {hexCenters.map(([cx, cy], i) => (
        <polygon
          key={i}
          points={hexPath(cx, cy)}
          fill={lit.has(i) ? 'rgba(74,222,128,0.18)' : 'none'}
          stroke={lit.has(i) ? '#4ade80' : '#22d3ee'}
          strokeOpacity={lit.has(i) ? 0.9 : 0.18}
          strokeWidth={lit.has(i) ? 1.5 : 1}
        />
      ))}
    </Frame>
  );
};

// Deep Learning Course Projects: layered network diagram
export const NeuralNetArt = ({ className }) => {
  const layers = [3, 5, 5, 4, 2];
  const xs = layers.map((_, i) => 90 + i * 155);
  const ys = layers.map((n) => Array.from({ length: n }, (_, j) => 30 + (j * (164 / (n - 1 || 1))) + (n === 1 ? 82 : 0)));
  return (
    <Frame className={className}>
      <g stroke="#e5e7eb" strokeOpacity="0.08">
        {layers.slice(0, -1).map((_, li) =>
          ys[li].map((y1, i) =>
            ys[li + 1].map((y2, j) => (
              <line key={`${li}-${i}-${j}`} x1={xs[li]} y1={y1} x2={xs[li + 1]} y2={y2} />
            ))
          )
        )}
      </g>
      <polyline
        points={`${xs[0]},${ys[0][1]} ${xs[1]},${ys[1][3]} ${xs[2]},${ys[2][0]} ${xs[3]},${ys[3][2]} ${xs[4]},${ys[4][0]}`}
        fill="none"
        stroke="#fb923c"
        strokeOpacity="0.7"
        strokeWidth="1.5"
      />
      {layers.map((_, li) =>
        ys[li].map((y, i) => (
          <circle key={`${li}-${i}`} cx={xs[li]} cy={y} r="6" fill="#0b0d10" stroke="#22d3ee" strokeWidth="1.5" />
        ))
      )}
    </Frame>
  );
};

// Applied Machine Learning in Engineering: decision boundary scatter
export const DecisionBoundaryArt = ({ className }) => {
  const seedA = [
    [80, 60], [140, 40], [110, 100], [190, 70], [60, 130], [150, 150], [220, 110], [100, 170], [30, 90], [200, 180],
  ];
  const seedB = [
    [420, 90], [480, 50], [540, 120], [600, 70], [660, 140], [500, 170], [590, 190], [700, 100], [740, 160], [450, 190],
  ];
  return (
    <Frame className={className}>
      <path
        d="M330,-10 C300,60 320,140 360,200 C380,230 400,224 400,224 L400,-10 Z"
        fill="none"
      />
      <path
        d="M300,-10 C260,50 300,90 340,120 C380,150 350,190 320,234"
        fill="none"
        stroke="#e5e7eb"
        strokeOpacity="0.25"
        strokeWidth="1.5"
        strokeDasharray="4 5"
      />
      {seedA.map(([x, y], i) => (
        <circle key={`a${i}`} cx={x} cy={y} r="6" fill="#22d3ee" fillOpacity="0.75" />
      ))}
      {seedB.map(([x, y], i) => (
        <circle key={`b${i}`} cx={x} cy={y} r="6" fill="#fb923c" fillOpacity="0.75" />
      ))}
    </Frame>
  );
};

// Sooqy.tn: classified-ad listing grid
export const MarketplaceArt = ({ className }) => {
  const cards = [0, 1, 2, 3, 4, 5];
  const cols = 3;
  const gap = 24;
  const w = (800 - gap * (cols + 1)) / cols;
  const h = 76;
  return (
    <Frame className={className}>
      <rect x={gap} y="24" width={800 - gap * 2} height="20" rx="10" fill="#e5e7eb" fillOpacity="0.1" />
      <circle cx={gap + 10} cy="34" r="5" fill="none" stroke="#e5e7eb" strokeOpacity="0.35" strokeWidth="1.5" />
      {cards.map((i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = gap + col * (w + gap);
        const y = 62 + row * (h + gap);
        const featured = i === 1;
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={w}
              height={h}
              rx="8"
              fill={featured ? 'rgba(34,211,238,0.08)' : '#e5e7eb'}
              fillOpacity={featured ? 1 : 0.04}
              stroke={featured ? '#22d3ee' : '#e5e7eb'}
              strokeOpacity={featured ? 0.6 : 0.15}
            />
            <rect x={x + 10} y={y + 10} width={h - 20} height={h - 20} rx="5" fill="#e5e7eb" fillOpacity="0.15" />
            <rect x={x + h} y={y + 14} width={w - h - 20} height="8" rx="3" fill="#e5e7eb" fillOpacity="0.4" />
            <rect x={x + h} y={y + 30} width={w - h - 40} height="6" rx="3" fill="#e5e7eb" fillOpacity="0.2" />
            <rect x={x + h} y={y + h - 22} width="46" height="12" rx="3" fill={featured ? '#22d3ee' : '#e5e7eb'} fillOpacity={featured ? 0.7 : 0.25} />
          </g>
        );
      })}
    </Frame>
  );
};
