import React from 'react'
import OurNess from './_components/OurNess'
import AboutUs from './_components/AboutUs'
import Testemonials from './_components/Testemonials'

const page = () => {
  return (
    <div className=' bg-white dark:bg-gray-900 transform transition-all duration-500'> 
        {/* <About/> */}
        <AboutUs />
        <OurNess />
        <Testemonials />
      
    </div>
  )
}

export default page
