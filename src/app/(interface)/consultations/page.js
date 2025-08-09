import React from 'react'
import HeroSection from './_compnents/HeroSection'
import AboutConsultion from './_compnents/AboutConsultion'
import ConsultationTypes from './_compnents/ConsultationTypes'
import ConsultationDeliveryMethods from './_compnents/ConsultationDeliveryMethods'
import PricingTable from './_compnents/PricingTable'
import ContactForm from './_compnents/ContactForm'
import Testemonials from './_compnents/Testemonials'

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutConsultion />
      <ConsultationTypes />
      <ConsultationDeliveryMethods />
      <PricingTable />
        <Testemonials />
      <ContactForm />
    
    </div>
  )
}

export default page
