"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import TestemonialsCard from "../about/_components/TestemonialCard";
// import TestemonialsCard from "./TestemonialCard";

const Testemonials = () => {
  const swiperRef = useRef(null);
  const courseData = [
    {
      id: 1,
      image: "/images/protfolio.jpg",
      name: "د. منى",
      description:
        "اكتشف عالم اللغة العربية وابدأ رحلتك في تعلم العربية و... كتشف عالم اللغة العربية وابدأ رحلتك في تعلم العربية و...كتشف عالم اللغة العربية وابدأ رحلتك في تعلم العربية و...",
      rating: 4.5,
      price: 34232,
      tag: "الأكثر مبيعًا هذا الشهر",
    },
    {
      id: 2,
      image: "/images/protfolio.jpg",
      name: "الشيخ أحمد",
      description:
        "أتقن تلاوة القرآن وقواعد اللغة العربية من خلال جلسات تفاعلية مباشرة... كتشف عالم اللغة العربية وابدأ رحلتك في تعلم العربية و...كتشف عالم اللغة العربية وابدأ رحلتك في تعلم العربية و...",
      rating: 4.8,
      price: 28500,
      tag: "الأعلى تقييماً من الطلاب",
    },
    {
      id: 3,
      image: "/images/protfolio.jpg",
      name: "الشيخ أحمد",
      description:
        "أتقن تلاوة القرآن وقواعد اللغة العربية من خلال جلسات تفاعلية مباشرة...كتشف عالم اللغة العربية وابدأ رحلتك في تعلم العربية و...كتشف عالم اللغة العربية وابدأ رحلتك في تعلم العربية و...",
      rating: 4.8,
      price: 28500,
      tag: "الأعلى تقييماً من الطلاب",
    },
    {
      id: 4,
      image: "/images/protfolio.jpg",
      name: "الشيخ أحمد",
      description:
        "أتقن تلاوة القرآن وقواعد اللغة العربية من خلال جلسات تفاعلية مباشرة...كتشف عالم اللغة العربية وابدأ رحلتك في تعلم العربية و...كتشف عالم اللغة العربية وابدأ رحلتك في تعلم العربية و...",
      rating: 4.8,
      price: 28500,
      tag: "الأعلى تقييماً من الطلاب",
    },
    {
      id: 5,
      image: "/images/protfolio.jpg",
      name: "الشيخ أحمد",
      description:
        "أتقن تلاوة القرآن وقواعد اللغة العربية من خلال جلسات تفاعلية مباشرة...كتشف عالم اللغة العربية وابدأ رحلتك في تعلم العربية و...كتشف عالم اللغة العربية وابدأ رحلتك في تعلم العربية و...",
      rating: 4.8,
      price: 28500,
      tag: "الأعلى تقييماً من الطلاب",
    },
  ];

  // إعدادات محسنة بناء على عدد العناصر
  const getSwiperSettings = () => {
    const dataLength = courseData.length;
    
    // لو فيه كاردين بس - اعرضهم كاملين
    if (dataLength === 2) {
      return {
        centeredSlides: false,
        breakpoints: {
          640: { 
            slidesPerView: 1, 
            spaceBetween: 20,
            centeredSlides: false
          },
          768: { 
            slidesPerView: 2, 
            spaceBetween: 25,
            centeredSlides: false
          },
          1024: { 
            slidesPerView: 2, 
            spaceBetween: 30,
            centeredSlides: false
          },
          1280: { 
            slidesPerView: 2, 
            spaceBetween: 30,
            centeredSlides: false
          },
        }
      };
    }
    
    // لو كارد واحد بس
    if (dataLength === 1) {
      return {
        centeredSlides: true,
        breakpoints: {
          640: { slidesPerView: 1, spaceBetween: 20, centeredSlides: true },
          768: { slidesPerView: 1, spaceBetween: 25, centeredSlides: true },
          1024: { slidesPerView: 1, spaceBetween: 30, centeredSlides: true },
          1280: { slidesPerView: 1, spaceBetween: 30, centeredSlides: true },
        }
      };
    }
    
    // للعناصر الأكثر من 2 - الديزاين الأصلي (كارد في النص + نصف كارد على الجوانب)
    return {
      centeredSlides: true,
      breakpoints: {
        640: { 
          slidesPerView: 1.5, 
          spaceBetween: 20, 
          centeredSlides: true 
        },
        768: { 
          slidesPerView: 1.8, 
          spaceBetween: 25, 
          centeredSlides: true 
        },
        1024: { 
          slidesPerView: 2.2, 
          spaceBetween: 30, 
          centeredSlides: true 
        },
        1280: { 
          slidesPerView: 2.5, 
          spaceBetween: 30, 
          centeredSlides: true 
        },
      }
    };
  };

  const swiperSettings = getSwiperSettings();

  return (
    <div className=" py-12 transform transition-all duration-500 bg-white dark:bg-gray-900">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 mt-4 text-primary ">
        ماذا يقول عملاؤنا
      </h2>
      <div className="relative max-w-[95%] mx-auto my-4 dark:my-0 bg-white dark:bg-gray-900 rounded-lg">
        {/* Navigation Buttons - تظهر فقط لو فيه أكثر من كارد واحد */}
        {courseData.length > 1 && (
          <>
            <button
              className="absolute z-10 top-1/2 -left-6 transform -translate-y-1/2 bg-white dark:bg-gray-800 border border-[#EC5252] dark:border-gray-700 shadow-lg rounded-full w-12 h-12 md:flex hidden items-center justify-center hover:bg-[#EC5252] hover:text-white dark:hover:bg-[#EC5252] dark:hover:text-white transition-all duration-300 group"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous"
              type="button"
            >
              <ArrowLeft
                size={28}
                className="text-[#EC5252] group-hover:text-white dark:text-[#EC5252] dark:group-hover:text-white transition-colors duration-300"
              />
            </button>
            <button
              className="absolute z-10 top-1/2 -right-6 transform -translate-y-1/2 bg-white dark:bg-gray-800 border border-[#EC5252] dark:border-gray-700 shadow-lg rounded-full w-12 h-12 md:flex hidden items-center justify-center hover:bg-[#EC5252] hover:text-white dark:hover:bg-[#EC5252] dark:hover:text-white transition-all duration-300 group"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next"
              type="button"
            >
              <ArrowRight
                size={28}
                className="text-[#EC5252] group-hover:text-white dark:text-[#EC5252] dark:group-hover:text-white transition-colors duration-300"
              />
            </button>
          </>
        )}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          centeredSlides={swiperSettings.centeredSlides}
          loop={courseData.length > 2} // تفعيل اللوب فقط لو فيه أكثر من 2 كاردز
          autoplay={courseData.length > 1 ? {
            delay: 3000,
            disableOnInteraction: false,
          } : false}
          breakpoints={swiperSettings.breakpoints}
          className="portfolio-swiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {courseData.map((course) => (
            <SwiperSlide key={course.id}>
              <TestemonialsCard data={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testemonials;