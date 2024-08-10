import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three'
import Lights from './Lights';
import Loader from './Loader';
import IPhone from './IPhone';
import { Suspense } from "react";

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  const [controlsEnabled, setControlsEnabled] = useState(false); // Initially disabled
  const controlsRef = useRef(null);

  // Toggle OrbitControls
  const toggleControls = () => {
    setControlsEnabled(prev => !prev);
  };

  useEffect(() => {
    if (controlsRef.current) {
      // Ensure controls are initialized
      controlsRef.current.enabled = controlsEnabled;
      controlsRef.current.domElement.style.touchAction = controlsEnabled ? 'auto' : 'none';

      // Force update to ensure changes are applied
      controlsRef.current.update();
    }
  }, [controlsEnabled]);

    // Initialize OrbitControls after the component mounts with a delay
    useEffect(() => {
      const initializeControls = () => {
        if (controlsRef.current) {
          controlsRef.current.enabled = false;
          controlsRef.current.domElement.style.touchAction = false ? 'auto' : 'none';
        }
      };
  
      const timer = setTimeout(() => {
        initializeControls();
      }, 3000); // Wait 3 seconds
  
      // Cleanup timer on component unmount
      return () => clearTimeout(timer);
    }, []);

  return (
    <>
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
          onEnd={() => setRotationState(controlsRef.current.getAzimuthalAngle())}
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
      {/* Buttons to enable/disable controls */}
      <div className="absolute top-0 right-0 p-4">
        <button 
          onClick={toggleControls}
          className={`px-4 py-2 text-white ${controlsEnabled ? 'bg-red-500' : 'bg-green-500'} rounded`}
        >
          {controlsEnabled ? 'Disable Controls' : 'Enable Controls'}
        </button>
      </div>
    </>
    
  )
}

export default ModelView