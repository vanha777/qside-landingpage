// import React from 'react'
// import { footerLinks } from '../constants'

// const Footer = () => {
//   return (
//     <footer className="py-5 sm:px-10 px-5">
//       <div className="screen-max-width">
//         <div>
//           <p className="font-semibold text-gray text-xs">
//             {/* More ways to shop: {' '}
//             <span className="underline text-blue">
//             Find an Apple Store {' '}
//             </span>
//             or {' '}
//             <span className="underline text-blue">
//             other retailer
//             </span>{' '}
//             near you. */}
//             You buy because what they buy you access to
//           </p>
//           {/* <p className="font-semibold text-gray text-xs">
//             Or call 000800-040-1966
//           </p> */}
//         </div>

//         <div className="bg-neutral-700 my-5 h-[1px] w-full" />

//         <div className="flex md:flex-row flex-col md:items-center justify-between">
//           <p className="font-semibold text-gray text-xs">Copright @ 2024 Biz-Touch Inc. All rights reserved.</p>
//           <div className="flex">
//             {footerLinks.map((link, i) => (
//               <p key={link} className="font-semibold text-gray text-xs">
//                 {link}{' '}
//                 {i !== footerLinks.length - 1 && (
//                   <span className="mx-2"> | </span>
//                 )}
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

import React from 'react'

const Footer = () => {
  return (
    <footer className="footer bg-transparent text-secondary p-10">
      <aside>
        <img
          src="assets/images/apple.png"
          alt="BizTouch Logo"
          width={50}
          height={50}
          className="mb-4 rounded-full"
        />
        <p>
          BizTouch
          <br />
          2024 all rights reserved
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a>
            <img
              src="https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/theme/faceBook.svg"
              alt="Facebook"
              width="36"
              height="36"
            />
          </a>
          <a>
          <img
              src="https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/theme/instargram.svg"
              alt="Facebook"
              width="36"
              height="36"
            />
          </a>
          <a>
          <img
              src="https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/theme/tiktok.svg"
              alt="Facebook"
              width="36"
              height="36"
            />
          </a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
