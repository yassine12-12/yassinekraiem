import { useCallback, useEffect, useState } from 'react';

// Plain dynamic import() resolved into state, NOT React.lazy(). React.lazy's
// Suspense-based resolution is unreliable for components rendered inside
// @react-three/fiber's <Canvas> (a separate custom reconciler, not the DOM
// one Suspense/lazy normally targets) - resolving here means the model
// component that reaches <Canvas> is always already a plain, fully-loaded
// component, never a lazy wrapper.
const modelLoaders = {
  Hubwerkseinheit: () => import('../components/Hubwerkseinheit'),
  TischNew: () => import('../components/TischNew'),
  Flaschenzug: () => import('../components/Flaschenzug'),
};

export const useLazyModelComponent = (modelKey, shouldLoad) => {
  const [Component, setComponent] = useState(null);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!shouldLoad || !modelKey || !modelLoaders[modelKey]) return;
    let cancelled = false;
    setError(null);
    modelLoaders[modelKey]()
      .then((mod) => {
        if (!cancelled) setComponent(() => mod.default);
      })
      .catch((err) => {
        // A rejected dynamic import (network blip, or a stale chunk hash
        // after a redeploy) must not leave the viewer stuck on an infinite
        // loading spinner with no way out.
        if (!cancelled) setError(err);
      });
    return () => {
      cancelled = true;
    };
  }, [modelKey, shouldLoad, attempt]);

  const retry = useCallback(() => {
    setComponent(null);
    setError(null);
    setAttempt((a) => a + 1);
  }, []);

  return { Component, error, retry };
};
