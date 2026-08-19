import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { useWebGLSupport, recheckWebGLSupport } from '../hooks/useWebGLSupport';
import { useLazyModelComponent } from '../hooks/useLazyModelComponent';
import { useWebGLContextRecovery } from '../hooks/useWebGLContextRecovery';

const ViewerFallback = () => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-center px-6">
    <p className="text-white font-medium">3D viewing isn&apos;t supported in this browser</p>
    <p className="text-gray-400 text-sm max-w-sm">
      Your browser or device doesn&apos;t support WebGL, which this 3D viewer needs. Try a different
      browser or device.
    </p>
    <button
      onClick={recheckWebGLSupport}
      className="mt-1 px-4 py-2 rounded-lg text-sm font-medium bg-orange-500/15 text-orange-300 border border-orange-400/30 hover:bg-orange-500/25 transition-colors duration-300"
    >
      Check again
    </button>
  </div>
);

const ViewerError = ({ onRetry }) => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-center px-6">
    <p className="text-white font-medium">Couldn&apos;t load the 3D model</p>
    <p className="text-gray-400 text-sm max-w-sm">This can happen on a flaky connection. Give it another try.</p>
    <button
      onClick={onRetry}
      className="mt-1 px-4 py-2 rounded-lg text-sm font-medium bg-orange-500/15 text-orange-300 border border-orange-400/30 hover:bg-orange-500/25 transition-colors duration-300"
    >
      Retry
    </button>
  </div>
);

const ViewerLoading = () => (
  <div className="flex flex-col items-center gap-3 pointer-events-none whitespace-nowrap">
    <span className="w-6 h-6 rounded-full border-2 border-orange-400/30 border-t-orange-400 animate-spin" />
    <p className="text-orange-300/80 text-xs tracking-[0.2em] uppercase">Loading model</p>
  </div>
);

const CONTROLS = [
  { label: 'Rotate', hint: 'Left click + drag' },
  { label: 'Zoom', hint: 'Scroll' },
  { label: 'Pan', hint: 'Right click + drag' },
  { label: 'Close', hint: 'Esc' },
];

const Model3DViewer = ({ model, isOpen, onClose, title }) => {
  const webglSupported = useWebGLSupport();
  // Resolved via plain dynamic import() into state, not React.lazy() - see
  // useLazyModelComponent for why.
  const { Component: ModelComponent, error: loadError, retry: retryLoad } = useLazyModelComponent(
    model,
    isOpen && webglSupported
  );
  const { canvasKey, lost: contextLost, handleCreated, retry: retryContext } = useWebGLContextRecovery(
    `viewer:${model}`
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full h-full max-w-4xl max-h-[80vh] rounded-xl overflow-hidden bg-black/40 backdrop-blur-md border border-orange-500/20 shadow-[0_20px_60px_-15px_rgba(251,146,60,0.25)]">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 backdrop-blur-md bg-black/50 border-b border-white/10">
          <div className="flex justify-between items-center gap-4 p-4">
            <div className="flex items-center gap-3 min-w-0">
              <span className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-orange-500/15 text-orange-300 border border-orange-400/30">
                3D Model
              </span>
              <h2 className="text-white text-lg font-semibold truncate">{title}</h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close 3D viewer"
              className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-red-400 hover:bg-red-500/10 hover:border-red-400/30 transition-all duration-300"
            >
              <span className="text-lg leading-none">×</span>
            </button>
          </div>
        </div>

        {/* 3D Viewer */}
        <div
          className="relative w-full h-full"
          style={{
            background:
              'radial-gradient(circle at 50% 45%, rgba(251,146,60,0.10) 0%, rgba(10,10,10,0) 55%), linear-gradient(135deg, #0a0a0a 0%, #16130f 50%, #0a0a0a 100%)',
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(251,146,60,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,0.6) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {!webglSupported ? (
            <ViewerFallback />
          ) : loadError ? (
            <ViewerError onRetry={retryLoad} />
          ) : contextLost ? (
            <ViewerError onRetry={retryContext} />
          ) : (
            <ErrorBoundary fallback={<ViewerFallback />}>
              <Canvas
                key={canvasKey}
                onCreated={handleCreated}
                dpr={[1, 2]}
                camera={{
                  position: [20, 20, 20],
                  fov: 45
                }}
              >
                <Suspense fallback={<Html center><ViewerLoading /></Html>}>
                  <OrbitControls
                    enablePan
                    enableZoom
                    enableRotate
                    autoRotate={false}
                    target={[0, 0, 0]}
                    minDistance={5}
                    maxDistance={150}
                    enableDamping={true}
                    dampingFactor={0.05}
                  />

                  {/* Enhanced lighting for better visibility */}
                  <ambientLight intensity={0.8} />
                  <directionalLight position={[20, 20, 10]} intensity={1.5} castShadow />
                  <directionalLight position={[-20, -20, -10]} intensity={1} />
                  <directionalLight position={[0, 20, 0]} intensity={0.8} />
                  <pointLight position={[10, 10, 10]} intensity={0.5} />

                  {/* Environment for reflections */}
                  <Environment preset="studio" />

                  {ModelComponent && (
                    <ModelComponent
                      position={[0, 0, 0]}
                      rotation={[0, 0, 0]}
                      scale={title?.includes('Lifting Unit') ? 0.02 : 0.025}
                    />
                  )}
                </Suspense>
              </Canvas>
            </ErrorBoundary>
          )}
        </div>

        {/* Controls Info */}
        <div className="absolute bottom-0 left-0 right-0 z-10 backdrop-blur-md bg-black/50 border-t border-white/10 p-3">
          <div className="flex flex-wrap justify-center gap-2">
            {CONTROLS.map((c) => (
              <span
                key={c.label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-orange-500/10 border border-orange-400/20 text-orange-200/90"
              >
                <strong className="font-semibold text-orange-200">{c.label}</strong>
                <span className="text-orange-200/60">· {c.hint}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model3DViewer;
