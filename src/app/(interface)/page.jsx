export const dynamic = "force-dynamic";

import React from 'react';
import Header from './_components/Header';
import HeroSection from './_components/HeroSection';
import FeaturesCourses from './_components/FeaturesCourses';
import SystemStudy from './_components/SystemStudy';
import CourseCardList from './_components/Courses';
import FeatureCoursesTow from './_components/FeatureCoursesTow';
import Footer from './_components/Footer';
import Subscribe from './_components/Subscribe';
import ArabicTeacherCertification from './_components/ArabicTeacherCertification';
import Bodcast from './_components/Bodcast';
import { getHero } from './_utils/serviceFeatching';
import ContactUs from './_components/ContactUs';
// import FAQSection from './_components/FAQSection';
import BookingFree from './_components/BookingFree';
import ScheduleConsultation from './_components/ScheduleConsultation';
import FAQSection from './_components/FAQSection';
import Testemonials from './_components/Testemonials';
import WebsiteBuilderSystem from './_components/WebsiteBuilderSystem';
import BenefitsShowcase from './_components/BenefitsShowcase';
// import Testemonials from './about/_components/Testemonials';


const page = async () => {
 
  const res = await getHero()
  // console.log(res)
 
            
  return (
    <div className=' '>
      {/* <Header /> */}
      <HeroSection />
      <FeaturesCourses />
      {/* <SystemStudy />
      <CourseCardList /> */}
      <BenefitsShowcase /> 
      {/* <FeatureCoursesTow /> */}
       
    
     {/* <WebsiteBuilderSystem /> */}
    
      <Testemonials />
       <ScheduleConsultation/>
        <BookingFree />
        <FAQSection show={true} />
      <ArabicTeacherCertification />
       <ContactUs />
         <Subscribe />
      {/* <Footer /> */}
    </div>
  );
};

export default page;
