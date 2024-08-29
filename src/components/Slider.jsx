import { useEffect, useRef, useState } from "react";



const Slider = () => {
  return (
    <section className="common-padding text-black">
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
                <h2 className="card-title text-primary">
                  Step 1: Grab A Metal Card
                  {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p>Choose your preferred Biz-Touch metal card based on the level of customization you desire.</p>
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
                <h2 className="card-title text-primary">
                  Step 2: Build your profile
                  {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p>Let your connections know more about your and your company by editing your profile information and design.</p>
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
                <h2 className="card-title text-primary">
                  Step 3: Share & connnect
                  {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p>With one tap on a smart phone, your connection has access to all the information you want to share.</p>
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