import { useState } from 'react';

// Cached at module scope: the check only ever needs to run once per page
// load. Repeating it per-component would create one throwaway WebGL context
// per call, competing with the page's real <Canvas> instances for the
// browser's small pool of simultaneous WebGL contexts.
let cachedSupport = null;

// A single context-creation attempt can fail transiently (GPU process not
// yet spun up right at page load, a momentary context-limit hiccup, an
// extension briefly holding the GPU) even though the browser genuinely
// supports WebGL - and because the result above is cached for the entire
// page session, one bad first attempt used to permanently break every 3D
// preview and the full-screen viewer until a reload. Try a few times, and
// probe webgl2 first since that's what three.js's WebGLRenderer actually
// requests by default - a mismatched probe could pass while the real
// canvas fails, or fail while it would have succeeded.
const probeOnce = () => {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  const ok = !!gl;
  gl?.getExtension('WEBGL_lose_context')?.loseContext();
  return ok;
};

const detectWebGLSupport = () => {
  if (cachedSupport !== null) return cachedSupport;

  let ok = false;
  try {
    for (let attempt = 0; attempt < 3 && !ok; attempt++) {
      ok = probeOnce();
    }
  } catch {
    ok = false;
  }

  cachedSupport = ok;
  return cachedSupport;
};

export const useWebGLSupport = () => {
  const [supported] = useState(detectWebGLSupport);
  return supported;
};
