import React from 'react'
import { features } from '../constants';

const Features = () => {
  return (
    <div className='h-full w-full py-16'>
      <div className="max-container padding-container flexCenter md:flexBetween flex-wrap">
          {features.map((feature) => (
            <div className='flexCenter flex-col py-8 px-3 my-4 md:my-2 mx-4 shadow-xl border border-gray-200' key={feature.id}>
              <img src={feature.img} alt="" className='mb-4'/>
              <p className='regular-14 py-1 px-4 bg-[#fddde4] text-[#017888]'>{feature.title}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Features