import { useEffect, useState } from 'react';

// Success is cached at module scope for the page session - once WebGL is
// confirmed working there's no reason to keep opening throwaway contexts
// that compete with the page's real <Canvas> instances for the browser's
// small pool of simultaneous WebGL contexts.
//
// Failure is deliberately NOT cached. A probe can fail transiently (GPU
// process still spinning up right at page load, or recovering from a
// crash) even though the browser genuinely supports WebGL. An earlier
// version latched that first failure for the whole session, which showed
// up as "3D previews work on some visits and not others" in every browser:
// whether they appeared depended on whether the GPU happened to be ready
// in the instant the page loaded. Instead, a failed probe schedules
// re-probes on a backoff, and every subscribed component flips to
// supported the moment one succeeds.
// Debug/preview override: load any page with ?no3d to see the no-WebGL
// fallbacks in a healthy browser.
const FORCE_OFF = typeof window !== 'undefined' && /[?&]no3d\b/.test(window.location.search);

let confirmedSupported = false;
let probing = false;
const subscribers = new Set();

const RETRY_DELAYS_MS = [500, 1500, 4000];

// Fresh canvas per context type: a failed webgl2 creation attempt can
// leave that canvas refusing to hand out a webgl context afterwards, so a
// same-canvas fallback chain could report "unsupported" on a browser where
// plain webgl works fine.
const probeContextType = (type) => {
  const gl = document.createElement('canvas').getContext(type);
  gl?.getExtension('WEBGL_lose_context')?.loseContext();
  return !!gl;
};

const probeOnce = () => {
  try {
    return (
      probeContextType('webgl2') || probeContextType('webgl') || probeContextType('experimental-webgl')
    );
  } catch {
    return false;
  }
};

const notifySupported = () => {
  subscribers.forEach((listener) => listener(true));
};

const runProbeSequence = () => {
  if (FORCE_OFF || confirmedSupported || probing) return;
  probing = true;

  const attempt = (idx) => {
    if (probeOnce()) {
      probing = false;
      confirmedSupported = true;
      notifySupported();
      return;
    }
    if (idx >= RETRY_DELAYS_MS.length) {
      probing = false;
      console.warn('[3D] WebGL context creation failed after all probe attempts');
      return;
    }
    setTimeout(() => attempt(idx + 1), RETRY_DELAYS_MS[idx]);
  };

  attempt(0);
};

// For "Check again" affordances on the unsupported fallback: starts a new
// probe sequence (no-op while one is already running); subscribed
// components update through the hook if it succeeds.
export const recheckWebGLSupport = () => runProbeSequence();

export const useWebGLSupport = () => {
  const [supported, setSupported] = useState(() => {
    // Kick off (or join) the probe sequence before first paint; the first
    // attempt is synchronous, so on healthy browsers this still returns
    // true immediately.
    runProbeSequence();
    return confirmedSupported;
  });

  useEffect(() => {
    if (confirmedSupported) {
      setSupported(true);
      return undefined;
    }
    subscribers.add(setSupported);
    return () => subscribers.delete(setSupported);
  }, []);

  return FORCE_OFF ? false : supported;
};
