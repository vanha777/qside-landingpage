import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three'
import Lights from './Lights';
import Loader from './Loader';
import IPhone from './IPhone';
import { Suspense } from "react";

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  const [controlsEnabled, setControlsEnabled] = useState(false); // Initially disabled
  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };
  // Set controlsEnabled based on device type on mount
  useEffect(() => {
    if (isMobileDevice()) {
      setControlsEnabled(false); // Disable by default on mobile
    } else {
      setControlsEnabled(true); // Enable by default on desktop
    }
  }, []);

  // Toggle OrbitControls
  const toggleControls = () => {
    setControlsEnabled(prev => !prev);
  };

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
        {controlsEnabled && (
          <OrbitControls
            makeDefault
            ref={controlRef}
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.4}
            target={new THREE.Vector3(0, 0, 0)}
            onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
          />
        )}

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
      <div className="absolute top-0 right-0 p-4 md:hidden">
        {/* <button
     onClick={toggleControls}
     className={`px-4 py-2 text-white ${controlsEnabled ? 'bg-red-500' : 'bg-green-500'} rounded`}
   >
     {controlsEnabled ? 'Disable Controls' : 'Enable Controls'}
   </button> */}
        <button
          onClick={() => setControlsEnabled(prev => !prev)}
          className={`px-4 py-2 text-white rounded flex items-center ${controlsEnabled ? 'bg-red-500' : 'bg-green-500'}`}
        >
          <span className="mr-2">
            {controlsEnabled ? 'Disable Controls' : 'Enable Controls'}
          </span>
          <svg
            className={`w-5 h-5 transition-transform ${controlsEnabled ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
    </>


  )
}

export default ModelView