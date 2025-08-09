"use client"
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import CourseCard from "./CourseCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ArabicTeacherCertification = () => {
  const swiperRef = useRef(null);
  const courseData = [
    {
      id: 1,
      image: "/images/protfolio.jpg",
      name: "د. منى",
      description:
        "اكتشف عالم اللغة العربية وابدأ رحلتك في تعلم العربية و...",
      rating: 4.5,
      price: 34232,
      tag: "الأكثر مبيعًا هذا الشهر",
    },
    {
      id: 2,
      image: "/images/protfolio.jpg",
      name: "الشيخ أحمد",
      description:
        "أتقن تلاوة القرآن وقواعد اللغة العربية من خلال جلسات تفاعلية مباشرة...",
      rating: 4.8,
      price: 28500,
      tag: "الأعلى تقييماً من الطلاب",
    },
    {
      id: 3,
      image: "/images/protfolio.jpg",
      name: "الشيخ أحمد",
      description:
        "أتقن تلاوة القرآن وقواعد اللغة العربية من خلال جلسات تفاعلية مباشرة...",
      rating: 4.8,
      price: 28500,
      tag: "الأعلى تقييماً من الطلاب",
    },
  ];

  return (
    <div className="w-full bg-[#EC525233] dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-[95%] mx-auto lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-8">
          {/* Left Column: Program Description */}
          <div className="lg:col-span-2 md:space-y-4 space-y-6">
            <h3 className="font-bold text-xl md:text-2xl lg:text-xl leading-snug text-gray-900 dark:text-white">
              أعمالنا تتحدث عن نفسها
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
              لقد ساعدنا المؤسسات التعليمية والمدربين في تحويل أفكارهم إلى منصات تعليمية متكاملة وسهلة الاستخدام. نصمم حلولاً تقنية مرنة تناسب احتياجات كل عميل. استكشف بعض مشاريعنا المميزة، ودعنا نكون شريكك في بناء موقعك التعليمي القادم. هل لديك فكرة لمنصة تعليمية إلكترونية؟
            </p>
            <button className="w-full sm:w-auto bg-primary dark:bg-primary/90 text-white px-6 py-3 rounded-md hover:bg-primary-90 dark:hover:bg-primary-90 transition-all duration-300 font-medium text-sm sm:text-base shadow-md hover:shadow-lg">
              ابدأ الآن
            </button>
          </div>

          {/* Right Column: Swiper Cards */}
          <div className="lg:col-span-4 relative ">
            {/* Custom Navigation Buttons */}
            <button
              className="absolute z-10  top-1/2 -left-6 transform -translate-y-1/2 bg-white dark:bg-gray-800 border border-[#EC5252] shadow-lg rounded-full w-12 h-12 md:flex  hidden items-center justify-center hover:bg-[#EC5252] hover:text-white transition-all duration-300 group"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous"
              type="button"
            >
              <ArrowLeft size={28} className="text-[#EC5252] group-hover:text-white transition-colors duration-300" />
            </button>
            <button
              className="absolute z-10 top-1/2 -right-6 transform -translate-y-1/2 bg-white dark:bg-gray-800 border border-[#EC5252] shadow-lg  rounded-full w-12 h-12 md:flex hidden items-center justify-center hover:bg-[#EC5252] hover:text-white transition-all duration-300 group"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next"
              type="button"
            >
              <ArrowRight size={28} className="text-[#EC5252] group-hover:text-white transition-colors duration-300" />
            </button>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={false}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
              }}
              className="portfolio-swiper"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {courseData.map((course) => (
                <SwiperSlide key={course.id}>
                  <CourseCard data={course} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      
      {/* Custom Swiper Styles */}
      <style jsx>{`
        .portfolio-swiper .swiper-button-next,
        .portfolio-swiper .swiper-button-prev {
          display: none !important;
        }
        .portfolio-swiper .swiper-pagination-bullet {
          background-color: #EC5252 !important;
          opacity: 0.5;
          transition: background-color 0.3s, opacity 0.3s;
        }
        .portfolio-swiper .swiper-pagination-bullet-active {
          background-color: #EC5252 !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ArabicTeacherCertification;