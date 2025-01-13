import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';

const Target = (props) => {
  const targetRef = useRef();

  try {
    const { scene } = useGLTF('/models/adamHead.gltf');
    console.log(scene);  
 return (
      <primitive object={scene} {...props} ref={targetRef} scale={0.1} />
    );
  } catch (error) {
    console.error('Error loading model:', error);
    return null;
  }
};

export default Target;
