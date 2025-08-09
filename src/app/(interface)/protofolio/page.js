import React from 'react'
import Hero from './_components/Hero'
import PortofolioList from './_components/PortofolioList'

const page = () => {
  return (
    <div className='bg-white dark:bg-gray-900 transform transition-all duration-500 '>
      <Hero />
      <PortofolioList />
    </div>
  )
}

export default page
