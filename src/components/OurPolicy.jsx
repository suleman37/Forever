import React from 'react';
import exchange from "../assets/frontend_assets/exchange_icon.png"
import quality from "../assets/frontend_assets/quality_icon.png"
import support from "../assets/frontend_assets/support_img.png"

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20'>
      <div>
        <img src={exchange} alt="exchange_icon" className='w-12 m-auto' />
        <p className='font-samibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We Offers hassles free exchange Policy</p>
      </div>
      <div>
        <img src={quality} alt="exchange_icon" className='w-12 m-auto' />
        <p className='font-samibold'>7 Days Return Policy</p>
        <p className='text-gray-400'>We Provide 7 days free return policy</p>
      </div>
      <div>
        <img src={support} alt="exchange_icon" className='w-12 m-auto' />
        <p className='font-samibold'>Best Customer Support</p>
        <p className='text-gray-400'>We Provide 24/7 Customer Support</p>
      </div>
    </div>
  )
}

export default OurPolicy;