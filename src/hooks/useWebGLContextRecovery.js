import { useCallback, useEffect, useRef, useState } from 'react';

// The browser can revoke a live WebGL context at any time (GPU process
// crash or restart, driver reset, too many simultaneous contexts). The
// canvas goes permanently blank when that happens and nothing brings it
// back short of replacing the <canvas> element, so recovery works by
// bumping `canvasKey` to force a fresh one.
//
// A lost context is usually transient - the GPU process restarts within a
// couple of seconds - so the first two losses remount automatically on a
// short backoff instead of surfacing an error. Only when the context
// keeps dying does `lost` flip true and the manual-retry UI take over
// (remounting into a crash-looping GPU would just feed the loop).
const AUTO_RETRY_DELAYS_MS = [2000, 6000];

// A context that stays alive this long "earns back" its auto-retries.
// Without this, two losses over a whole session - however far apart -
// would permanently downgrade a card to the manual-retry UI, even though
// spaced-out losses are exactly the transient kind worth self-healing.
const RESET_ATTEMPTS_AFTER_MS = 30000;

export const useWebGLContextRecovery = (label) => {
  const [canvasKey, setCanvasKey] = useState(0);
  const [lost, setLost] = useState(false);
  const autoAttempts = useRef(0);
  const timer = useRef(null);
  const resetTimer = useRef(null);

  useEffect(
    () => () => {
      clearTimeout(timer.current);
      clearTimeout(resetTimer.current);
    },
    []
  );

  const handleCreated = useCallback(
    (state) => {
      const canvas = state.gl.domElement;
      clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => {
        autoAttempts.current = 0;
      }, RESET_ATTEMPTS_AFTER_MS);
      const onLost = (event) => {
        event.preventDefault();
        clearTimeout(resetTimer.current);
        const attempt = autoAttempts.current;
        if (attempt < AUTO_RETRY_DELAYS_MS.length) {
          autoAttempts.current = attempt + 1;
          console.warn(
            `[3D] WebGL context lost${label ? ` (${label})` : ''} - auto-remounting in ${AUTO_RETRY_DELAYS_MS[attempt]}ms`
          );
          timer.current = setTimeout(() => setCanvasKey((k) => k + 1), AUTO_RETRY_DELAYS_MS[attempt]);
        } else {
          console.warn(`[3D] WebGL context lost${label ? ` (${label})` : ''} - giving up after auto-remounts`);
          setLost(true);
        }
      };
      canvas.addEventListener('webglcontextlost', onLost, { once: true });
    },
    [label]
  );

  const retry = useCallback(() => {
    autoAttempts.current = 0;
    setLost(false);
    setCanvasKey((k) => k + 1);
  }, []);

  return { canvasKey, lost, handleCreated, retry };
};
