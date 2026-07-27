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

// AI-Based CNC Monitoring Platform: machine -> streaming pipeline -> predictive-maintenance forecast
export const CNCMonitoringArt = ({ className }) => {
  const dots = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 16; col++) {
      dots.push([25 + col * 50, 20 + row * 46]);
    }
  }
  const hexPoints = (cx, cy, r) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    }).join(' ');

  return (
    <Frame className={className}>
      <g fill="#e5e7eb" fillOpacity="0.06">
        {dots.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.2" />
        ))}
      </g>

      {/* CNC machine: spindle + bed with toolpath */}
      <rect x="50" y="130" width="170" height="64" rx="6" fill="none" stroke="#e5e7eb" strokeOpacity="0.3" strokeWidth="1.5" />
      <rect x="120" y="40" width="30" height="30" rx="4" fill="none" stroke="#fb923c" strokeOpacity="0.85" strokeWidth="2" />
      <line x1="135" y1="70" x2="135" y2="130" stroke="#fb923c" strokeOpacity="0.6" strokeWidth="2" />
      <polyline
        points="70,150 70,180 100,180 100,150 130,150 130,180 160,180 160,150 190,150 190,180"
        fill="none"
        stroke="#22d3ee"
        strokeOpacity="0.85"
        strokeWidth="2"
      />
      <circle cx="140" cy="118" r="1.5" fill="#fb923c" fillOpacity="0.8" />
      <circle cx="129" cy="112" r="1.5" fill="#fb923c" fillOpacity="0.6" />
      <circle cx="146" cy="105" r="1.5" fill="#fb923c" fillOpacity="0.4" />

      {/* Streaming pipeline: sensor -> Kafka -> LSTM model */}
      <circle cx="300" cy="112" r="14" fill="none" stroke="#22d3ee" strokeWidth="2" strokeOpacity="0.85" />
      <circle cx="300" cy="112" r="4" fill="#22d3ee" fillOpacity="0.6" />
      <line x1="316" y1="112" x2="364" y2="112" stroke="#e5e7eb" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 4" />
      <polygon points={hexPoints(392, 112, 24)} fill="rgba(251,146,60,0.08)" stroke="#fb923c" strokeWidth="2" strokeOpacity="0.85" />
      <line x1="418" y1="112" x2="466" y2="112" stroke="#e5e7eb" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 4" />
      <rect x="470" y="94" width="36" height="36" rx="5" fill="none" stroke="#22d3ee" strokeOpacity="0.85" strokeWidth="2" />
      <polyline points="478,118 486,104 494,116 502,106" fill="none" stroke="#22d3ee" strokeOpacity="0.85" strokeWidth="1.5" />

      {/* Predictive forecast: historical telemetry -> forecast crossing failure threshold */}
      <polyline
        points="560,140 585,132 610,148 635,128 660,140"
        fill="none"
        stroke="#e5e7eb"
        strokeOpacity="0.5"
        strokeWidth="2"
      />
      <line x1="660" y1="40" x2="660" y2="190" stroke="#e5e7eb" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="3 4" />
      <line x1="660" y1="70" x2="780" y2="70" stroke="#ef4444" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="2 4" />
      <polyline
        points="660,140 690,120 720,90 745,72"
        fill="none"
        stroke="#fb923c"
        strokeWidth="2"
        strokeOpacity="0.9"
        strokeDasharray="5 4"
      />
      <path d="M745,42 L763,74 L727,74 Z" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.9" />
      <line x1="745" y1="53" x2="745" y2="63" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.9" />
      <circle cx="745" cy="68" r="1.3" fill="#ef4444" fillOpacity="0.9" />
      <text x="700" y="200" fontSize="11" fill="#ef4444" fillOpacity="0.85" fontFamily="monospace">24h forecast</text>
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
