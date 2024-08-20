import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";

import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animations";
import ShopifyBuyButton from "./ShopifyBuyButton";

const Model = () => {
  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title: 'Metal Card in Natural Titanium',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
  })

  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();
  const cameraControlExLarge = useRef();

  // model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());
  const exLarge = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);
  const [exLargeRotation, setExLargeRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    switch (size) {
      case 'large':
        animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', '#view3', {
          transform: 'translateX(-120%)',
          duration: 2
        });
        break;
      case 'small':
        animateWithGsapTimeline(tl, large, largeRotation, '#view3', '#view2', '#view1', {
          transform: 'translateX(0)',
          duration: 2
        });
        break;
      case 'exLarge':
        animateWithGsapTimeline(tl, exLarge, exLargeRotation, '#view2', '#view3', '#view1', {
          transform: 'translateX(-240%)',
          duration: 2,
        });
        break;

        break;
      default:
        break;
    }
  }, [size]);


  useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 1 })
  }, []);

  console.log("this is changing card ", size);
  const [controlsEnabled, setControlsEnabled] = useState(false); // Initially disabled
  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };
  // Set controlsEnabled based on device type on mount
  useEffect(() => {
    if (isMobileDevice()) {
      console.log("setting false");
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
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>
        {/* Buttons to enable/disable controls */}
        <div className=" top-0 right-0 p-4 md:hidden flex justify-between items-center w-full">
          <p className="text-sm font-light text-center">3D Viewer</p>
          <input
            type="checkbox"
            className="toggle toggle-success"
            checked={controlsEnabled}
            onChange={toggleControls}
          />
        </div>
        <div className="flex flex-col items-center mt-5">
          <div className=" w-full h-[75vh] md:h-[90vh] overflow-hidden relative"
          // onTouchStart={(e) => e.stopPropagation()}
          // onTouchMove={(e) => e.stopPropagation()}
          // onTouchEnd={(e) => e.stopPropagation()}
          >
            <ModelView
              type="silver"
              index={1}
              // groupRef={large}
              groupRef={small}
              gsapType="view1"
              // controlRef={cameraControlLarge}
              // setRotationState={setLargeRotation}
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
              controlsEnabled={controlsEnabled}
            />
            <ModelView
              type="rose"
              index={2}
              groupRef={large}
              gsapType="view2"
              // controlRef={cameraControlLarge}
              // setRotationState={setLargeRotation}
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
              controlsEnabled={controlsEnabled}
            />
            <ModelView
              type="gold"
              index={3}
              groupRef={exLarge}
              gsapType="view3"
              controlRef={cameraControlExLarge}
              setRotationState={setExLargeRotation}
              item={model}
              size={size}
              controlsEnabled={controlsEnabled}
            />

            {/* <ModelView 
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            /> */}
            <Canvas
              className="w-full h-full"
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden'
              }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li key={i} className="w-6 h-6 rounded-full mx-2 cursor-pointer" style={{ backgroundColor: item.color[0] }} onClick={() => {
                    setModel(item)
                    setSize(item.type)
                  }} />
                ))}
              </ul>

              {/* <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span key={label} className="size-btn" style={{ backgroundColor: size === value ? 'white' : 'transparent', color: size === value ? 'black' : 'white' }} onClick={() => setSize(value)}>
                    {label}
                  </span>
                ))}
              </button> */}
            </div>
          </div>

        </div>

        <div className="flex justify-center items-center mt-20">
          <div className="carousel carousel-center bg-neutral rounded-box max-w-xl space-x-4 p-4">
          <script src="http://sdks.shopifycdn.com/buy-button/v0.0.2/buybutton.min.js"></script>
            <div className="carousel-item">
              <ShopifyBuyButton className="rounded-box" productId="7400507113537" />
            </div>
            <div className="carousel-item" >
              <ShopifyBuyButton className='rounded-box' productId="7409613471809" />
            </div>
            <div className="carousel-item" >
              <ShopifyBuyButton className='rounded-box' productId="7409614225473" />
            </div>
          </div>
        </div>

      </div>
      {/* <div  className="flex flex-row items-center justify-center p-10">
        <ShopifyBuyButton productId="7400507113537" />
        <ShopifyBuyButton productId="7409613471809" />
        <ShopifyBuyButton productId="7409614225473" />
      </div> */}

    </section>
  )
}

export default Model