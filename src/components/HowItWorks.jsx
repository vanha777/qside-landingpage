import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '40% bottom'
      },
      opacity: 0,
      scale: 0,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            NFCTag216 chip.
            <br /> The executive's optimal choice.
          </h2>

          <p className="hiw-subtitle">
            It's here. The epitome of elegance in business.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            {/* <div className="hiw-video">
              <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div> */}
          </div>
          {/* <p className="text-gray font-semibold text-center mt-3">Honkai: Star Rail</p> */}
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              NFCTag216 is an entirely new NFC technology chip that delivers {' '}
              <span className="text-white">
                the fastest scanning range and the best storage capacity by far.
              </span>.
            </p>

            <p className="hiw-text g_fadeIn">
              Business Card {' '}
              <span className="text-white">
                will look and feel so immersive
              </span>,
              With incredibly personalized data and detailed engraving.
            </p>
          </div>


          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Executive Business Card</p>
            <p className="hiw-text">with tapable features</p>
          </div>
        </div>
        {/* <div className="hiw-video"> */}
        {/* <div className="p-10 pt-20">
          <video className="pointer-events-none" playsInline loop preload="none" muted autoPlay ref={videoRef}>
            <source src={frameVideo} type="video/mp4" />
          </video>
        </div> */}
      </div>

    </section>
  )
}

export default HowItWorks