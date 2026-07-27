import { useState } from 'react';

const supportsWebGL = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
};

export const useWebGLSupport = () => {
  const [supported] = useState(supportsWebGL);
  return supported;
};
