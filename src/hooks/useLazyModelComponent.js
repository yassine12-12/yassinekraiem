import { useEffect, useState } from 'react';

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

  useEffect(() => {
    if (!shouldLoad || !modelKey || !modelLoaders[modelKey]) return;
    let cancelled = false;
    modelLoaders[modelKey]().then((mod) => {
      if (!cancelled) setComponent(() => mod.default);
    });
    return () => {
      cancelled = true;
    };
  }, [modelKey, shouldLoad]);

  return Component;
};
