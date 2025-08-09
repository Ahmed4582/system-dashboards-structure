import React from 'react'
// import FqsList from './_components/FqsList'
import FAQSection from '../_components/FAQSection'
import Hero from '../protofolio/_components/Hero'
import Header from './_components/Header'

const page = () => {
  return (
    <div className='  bg-white dark:bg-gray-900 transform transition-all duration-500'>
     <Header />      
      <FAQSection show={false} />
    </div>
  )
}

export default page
