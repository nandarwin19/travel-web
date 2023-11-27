// Contact.js

import React, { useState } from 'react';
import ContactBackgroundVideo from './ContactBackgroundVideo';
import { lastMinuteDeals, partners, travelAgency } from '../constants';
import { SlArrowRight } from "react-icons/sl";


const Contact = () => {

  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendClick = () => {
    console.log(`Sending email to: ${email}`);
  };
  return (
    <div className='w-full h-sreecn relative'> 
      <ContactBackgroundVideo/>
      <div className="w-full py-10 max-container padding-container">
        <div className="w-full mx-auto flex-col md:flex-row md:flexBetween md:w-1/2">
          <div className="flex flex-col text-white">
            <h3 className='bold-14'>KEEP IN TOUCH</h3>
            <h1 className='bold-24'>TRAVEL WITH US</h1>
          </div>
          <div className="flex w-full md:w-1/2 relative my-4 md:my-0">
              <input
                type='email'
                placeholder='Enter your email'
                className='h-[50px] relative w-full px-6 border border-gray-400 rounded-full regular-16 md:regular-12'
                value={email}
                onChange={handleEmailChange}
              />
              <button
                className='bg-[#1d1c1c] text-white absolute right-0 h-[50px] px-8 py-2 ml-2 rounded-full hover:bg-blue-700'
                onClick={handleSendClick}
              >
                Send
              </button>
          </div>
        </div>

        <div className="w-full flexCenter flex-col lg:flexBetween lg:flex-row bg-[#1d1c1c] p-4 my-12 rounded-xl">
          <div className="flex-flex-col md:pr-16">
            <h1 className='logo bold-20'>KAKROO</h1>
            <p className='text-white'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa illo maxime voluptas architecto vitae fuga in eos, quis molestiae doloremque incidunt velit beatae, placeat esse id ab laudantium suscipit dolore nemo asperiores, veritatis officia ad voluptatem nobis. Molestiae minus odit reprehenderit quod facere, et nihil, tempora, cupiditate quas dicta sit.
            </p>
          </div>
          <div className="my-4 flex items-start justify-between w-full">
            <div className="flex flex-col flex-1 text-white w-1/3">
              <h5 className='uppercase bold-14'>Our Agency</h5>
              {travelAgency.map((agency, index) => (
                <div className="flex items-center gap-1" key={index}>
                  <SlArrowRight className='w-[8px] h-[8px]'/>
                  <p className="regular-13">{agency.title}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col flex-1 text-white w-1/3">
              <h5 className='uppercase bold-14'>Partners</h5>
              {partners.map((partner, index) => (
                <div className="flex items-center gap-1" key={index}>
                  <SlArrowRight className='w-[8px] h-[8px]'/>
                  <p className="regular-13">{partner.title}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col flex-1 text-white w-1/3">
              <h5 className='uppercase bold-14'>Last minutes</h5>
              {lastMinuteDeals.map((lastmin, index) => (
                <div className="flex items-center gap-1" key={index}>
                  <SlArrowRight className='w-[8px] h-[8px]'/>
                  <p className="regular-13">{lastmin.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>

    </div>
  );
}

export default Contact;
