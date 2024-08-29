import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('reisze', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    // <section className="w-full nav-height bg-opacity-10 bg-gray-100 relative" style={{ backgroundColor: '#ECEBEC' }}>
    <section className="w-full nav-height bg-opacity-10 relative mt-10 " style={{ backgroundColor: '#ffffff' }}>
      {/* <div className="h-5/6 w-full flex-center flex-col ">
        <p id="hero" className="hero-title" style={{ color: 'black' }}>Qside Executive Business Card</p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted loop playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div> */}

      <div className="relative h-5/6 w-full flex-center flex-col">
        <div className="md:w-10/12 w-9/12">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <p id="hero" className="hero-title" style={{ color: 'black' }}>
          Digital Business Card
        </p>
        <a href="https://biz-touch.myshopify.com/collections/all" className="btn font-normal text-white text-xl">Shop Now</a>
        {/*href="#highlights"  <p className="font-normal text-black text-xl">From $299</p> */}
      </div>
    </section>
  )
}

export default Hero