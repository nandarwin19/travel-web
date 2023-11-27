import React from 'react'
import Navbar from './Navbar'
import BackgroundVideo from './BackgroundVideo'
import Hero from './Hero'

const Home = () => {
  return (
    <div className='home w-full h-sreecn relative'>
       <BackgroundVideo/>
       <div className='w-full max-container padding-container relative'>
          <Hero/>
       </div>
    </div>
  )
}

export default Home