import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { useWebGLSupport } from '../hooks/useWebGLSupport';

const ViewerFallback = () => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-center px-6">
    <span className="text-4xl">🔧</span>
    <p className="text-white font-medium">3D viewing isn&apos;t supported in this browser</p>
    <p className="text-gray-400 text-sm max-w-sm">
      Your browser or device doesn&apos;t support WebGL, which this 3D viewer needs. Try a different
      browser or device.
    </p>
  </div>
);

const Model3DViewer = ({ model: ModelComponent, isOpen, onClose, title }) => {
  const webglSupported = useWebGLSupport();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full h-full max-w-4xl max-h-[80vh] bg-gray-900/95 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-gray-900/90 to-transparent">
          <div className="flex justify-between items-center">
            <h2 className="text-white text-xl font-semibold">{title}</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-red-400 transition-colors duration-300 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>

        {/* 3D Viewer */}
        <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
          {webglSupported ? (
            <ErrorBoundary fallback={<ViewerFallback />}>
              <Canvas
                camera={{
                  position: [20, 20, 20],
                  fov: 45
                }}
              >
                <Suspense fallback={null}>
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
          ) : (
            <ViewerFallback />
          )}
        </div>

        {/* Controls Info */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-gray-900/90 to-transparent">
          <div className="text-white text-xs opacity-80">
            <div className="flex flex-wrap gap-4">
              <span>🖱️ <strong>Left Click + Drag:</strong> Rotate</span>
              <span>🔍 <strong>Scroll:</strong> Zoom</span>
              <span>⚡ <strong>Right Click + Drag:</strong> Pan</span>
              <span>❌ <strong>ESC:</strong> Close</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model3DViewer;