import { useState } from 'react';

// Cached at module scope: the check only ever needs to run once per page
// load. Repeating it per-component would create one throwaway WebGL context
// per call, competing with the page's real <Canvas> instances for the
// browser's small pool of simultaneous WebGL contexts.
let cachedSupport = null;

const detectWebGLSupport = () => {
  if (cachedSupport !== null) return cachedSupport;

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    cachedSupport = !!gl;
    // Release the probe context immediately instead of leaving it to be
    // garbage collected - otherwise it can keep counting against the
    // context limit for a while and starve the real canvases.
    gl?.getExtension('WEBGL_lose_context')?.loseContext();
  } catch {
    cachedSupport = false;
  }

  return cachedSupport;
};

export const useWebGLSupport = () => {
  const [supported] = useState(detectWebGLSupport);
  return supported;
};
