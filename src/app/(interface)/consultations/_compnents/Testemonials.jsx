"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, { useRef } from "react";
import CourseCard from "../../_components/CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import TestemonialsCard from "./TestemonialsCard";

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
  return (
    <div className=" bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="relative max-w-[85%] mx-auto my-4 dark:my-0  rounded-lg ">
        {/* Custom Navigation Buttons */}
        <button
          className="absolute z-10  top-1/2 -left-6 transform -translate-y-1/2 bg-white dark:bg-gray-800 border border-[#EC5252] dark:border-[#EC5252] shadow-lg rounded-full w-12 h-12 md:flex  hidden items-center justify-center hover:bg-[#EC5252] hover:text-white dark:hover:bg-[#EC5252] dark:hover:text-white transition-all duration-300 group"
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
          className="absolute z-10 top-1/2 -right-6 transform -translate-y-1/2 bg-white dark:bg-gray-800 border border-[#EC5252] dark:border-[#EC5252] shadow-lg  rounded-full w-12 h-12 md:flex hidden items-center justify-center hover:bg-[#EC5252] hover:text-white dark:hover:bg-[#EC5252] dark:hover:text-white transition-all duration-300 group"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next"
          type="button"
        >
          <ArrowRight
            size={28}
            className="text-[#EC5252] group-hover:text-white dark:text-[#EC5252] dark:group-hover:text-white transition-colors duration-300"
          />
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
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
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
