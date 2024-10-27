import { useEffect, useRef, useState } from "react";


const Slider = () => {
  return (
    <section className="common-padding text-secondary bg-base-100">
      <div className="flex justify-center">
        <div className="carousel rounded-box space-x-4 p-4">
          <div className="carousel-item">
            <div className="card bg-white w-80 shadow-xl">
              <figure>
                <img
                  src="/assets/images/explore1.png"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title ">
                  Step 1: Grab A Metal Card
                  {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p>Select your perfect Biz-Touch metal card, customized to match your unique style and vibe.</p>
                {/* <div className="card-actions justify-end">
                  <div className="badge badge-outline">Style</div>
                  <div className="badge badge-outline">Design</div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card bg-white w-80 shadow-xl">
              <figure>
                <img
                  src="/assets/images/step2.png"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title ">
                  Step 2: Build your profile
                  {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p>Receive forms via email, customize the design, and highlight key contacts to showcase your business and personal profile.</p>
                {/* <div className="card-actions justify-end">
                  <div className="badge badge-outline">Digital Profile</div>
                  <div className="badge badge-outline">Offical</div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card bg-white w-80 shadow-xl">
              <figure>
                <img
                  src="/assets/images/step3.png"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Step 3: Share & connnect
                  {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p>Receive your card and connect instantly. With one tap on a smartphone, your contact gains access to all the information you wish to share.</p>
                {/* <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider