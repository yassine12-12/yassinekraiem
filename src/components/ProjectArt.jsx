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

// AI-Based CNC Monitoring Platform: machine grid, flagged nodes signal predicted failures
export const CNCMonitoringArt = ({ className }) => {
  const hexCenters = [];
  const r = 34;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 8; col++) {
      const x = 40 + col * (r * 1.75) + (row % 2 ? r * 0.875 : 0);
      const y = 20 + row * (r * 1.5);
      hexCenters.push([x, y]);
    }
  }
  const flagged = new Set([6, 13, 19]);
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
          fill={flagged.has(i) ? 'rgba(251,146,60,0.18)' : 'none'}
          stroke={flagged.has(i) ? '#fb923c' : '#22d3ee'}
          strokeOpacity={flagged.has(i) ? 0.9 : 0.18}
          strokeWidth={flagged.has(i) ? 1.5 : 1}
        />
      ))}
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

