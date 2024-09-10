import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import ShopifyBuyButton from './components/ShopifyBuyButton';
import Slider from './components/Slider';
import ChatBox from './components/ChatBox';

// import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      {/* <Highlights /> */}
      <Slider />
      <Model />
      <ChatBox/>
      {/* <Features /> */}
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default App;
