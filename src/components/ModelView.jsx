import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three'
import Lights from './Lights';
import Loader from './Loader';
import IPhone from './IPhone';
import { Suspense } from "react";

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  const [controlsEnabled, setControlsEnabled] = useState(false);
  const controlsRef = useRef(null);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.enabled = controlsEnabled;
    }
  }, [controlsEnabled]);

  const toggleControls = () => {
    setControlsEnabled(prev => !prev);
  };

  return (
      <View
        index={index}
        id={gsapType}
        className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
        style={{
          position: 'relative',  // Change to relative to avoid overlapping
        }}
      >
        {/* Ambient Light */}
        <ambientLight intensity={0.3} />

        <PerspectiveCamera makeDefault position={[0, 0, 4]} />

        <Lights />

        <OrbitControls
          makeDefault
          ref={controlsRef}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          target={new THREE.Vector3(0, 0, 0)}
          onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
        />

        <group ref={groupRef} name={`${index === 1} ? 'small' : 'large`} position={[0, 0, 0]}>
          <Suspense fallback={<Loader />}>
            <IPhone
              scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
              item={item}
              size={size}
            />
          </Suspense>
        </group>
      </View>

  )
}

export default ModelView