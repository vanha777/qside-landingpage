import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three'
import Lights from './Lights';
import Loader from './Loader';
import IPhone from './IPhone';
import { Suspense } from "react";

const ModelView = ({type, index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  console.log("this is changing card ", size);
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
        // style={{
        //   position: 'relative',  // Change to relative to avoid overlapping
        // }}
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
              type={type}
              index={index}
              scale={index === 1 ? [15, 15, 15] : [15, 15, 15]}
              item={item}
              size={size}
            />
          </Suspense>
        </group>
      </View>

      {/* Buttons to enable/disable controls */}
      <div className="absolute top-0 right-0 p-4 md:hidden flex justify-between items-center w-full">
        <p className="text-sm font-light text-center">3D Viewer</p>
        <input
          type="checkbox"
          className="toggle toggle-success"
          checked={controlsEnabled}
          onChange={toggleControls}
        />
      </div>
    </>


  )
}

export default ModelView