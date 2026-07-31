import { useCallback, useState } from 'react';

// WebGL contexts can be silently force-lost by the browser at any time after
// creation - most commonly when too many live contexts compete for the
// platform's limited pool (this page can have several 3D previews mounted
// at once). react-three-fiber does not surface or recover from this on its
// own, so without this the canvas just goes blank with no error and no way
// back short of a full page reload. `retry` forces a fresh <canvas> element
// (via a key bump) since a truly lost WebGL context cannot be reopened on
// the same canvas.
export const useWebGLContextRecovery = () => {
  const [canvasKey, setCanvasKey] = useState(0);
  const [lost, setLost] = useState(false);

  const handleCreated = useCallback((state) => {
    const canvas = state.gl.domElement;
    const onLost = (event) => {
      event.preventDefault();
      setLost(true);
    };
    canvas.addEventListener('webglcontextlost', onLost, { once: true });
  }, []);

  const retry = useCallback(() => {
    setLost(false);
    setCanvasKey((k) => k + 1);
  }, []);

  return { canvasKey, lost, handleCreated, retry };
};
