import React from 'react'
import { locations } from '../constants';
import { GoArrowRight } from "react-icons/go";
import Navbar from './Navbar';


const Hero = () => {
  return (
    <div className='w-full relative h-screen'>
      <Navbar/>
      <div className="max-container padding-container">
        <div className="mt-[150px] md:mt-[100px] md:flexStart2 flexCenter flex-col gap-4">
          <h1 className='md:bold-100 lg:bold-120 bold-40 text-white'>TRAVEL TIME</h1>
          <p className='regular-16 px-12 md:px-0 text-center md:text-start text-white w-[550px]'>
            Discover breathtaking destinations, seamless itineraries, exclusive deals. Plan your escape with our user-friendly platform. From sun-kissed beaches to historic landmarks, embark on unforgettable journeys. Your adventure begins here.
          </p>
          <button className='btn_home'>Explore</button>
        </div>

        <div className={`hidden lg:flex absolute bottom-2 gap-8`}>
          {/* <div className=''> */}
              {locations.map((location, index) => (
                <div key={index}>
                  <div className={`flex location_bg p-4 text-white/50 gap-2`}>
                      <img src={location.img} alt="" className='w-[28px] h-[28px]'/>
                      <div className="flex flex-col">
                        <h5 className='regular-14'>{location.title}</h5>
                        <p className='regular-14'>{location.des}</p>
                        <div className="flex items-center justify-center gap-2 mt-2">
                          <button className='uppercase'>MORE details</button>
                          <GoArrowRight />
                        </div>
                      </div>
                  </div>
                </div>
              ))}
          {/* </div> */}
        
        </div>
      </div>
      

    </div>
  )
}

export default Hero