"use client";
import React from "react";

const HeroSection = ({ data }) => {
  return (
    <div className="relative min-h-screen bg-[url('/images/heroConsultions.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Dynamic Overlay - darker in light mode, lighter in dark mode */}
      <div className="absolute inset-0 bg-black opacity-60 dark:opacity-40 transition-opacity duration-300"></div>

      {/* Content Container */}
      <div className="relative z-10 flex md:pt-8 flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-8">
          <h1 className="text-white dark:text-gray-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight drop-shadow-lg">
            <span className="block mb-2 sm:mb-3">
              استشارات تسويقية مخصصة لنمو أعمالك
            </span>
            <span className="block mb-2 sm:mb-3 text-[22.5px] text-gray-100 font-normal max-w-3xl mx-auto">
              احصل على رؤية استراتيجية مبنية على تحليل دقيق لطبيعة عملك، وابدأ
              في اتخاذ قرارات تسويقية أكثر ذكاءً. ابدأ الآن، وسنكون معك خطوة
              بخطوة.
            </span>
          </h1>
        </div>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none">
          {/* Primary Button */}
          

          {/* Secondary Button */}
          <button className="w-full sm:w-auto md:px-12 px-8 md:py-3 py-4  bg-primary font-normal text-white  text-sm  rounded-md   transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 backdrop-blur-sm">
            طلب استشارتك الآن
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block">
        <button
          type="button"
          aria-label="Scroll to About section"
          onClick={() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="focus:outline-none"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white dark:text-gray-200 opacity-70 dark:opacity-80 drop-shadow-md"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
