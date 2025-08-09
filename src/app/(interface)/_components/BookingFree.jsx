import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const BookingFree = () => {
  return (
    <div className=" py-8 bg-white dark:bg-gray-900   ">
      <div className="text-white  rounded-4xl bg-[linear-gradient(88.64deg,_#0F4561_2.88%,_#A04E57_75.96%,_#EC5252_100%)] dark:bg-gradient-to-r dark:from-[#0F4561] dark:via-[#A04E57] dark:to-[#EC5252] transition-colors duration-300 px-3 sm:px-6 md:px-10 max-w-[98%] sm:max-w-[95%] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-4 gap-0 p-3 sm:p-4 md:p-6">
          <p className="text-[9.5px] md:text-lg text-white dark:text-gray-100 t font-medium">
            احجز استشارة لمساعدتك في تحويل فكرتك إلى موقع إلكتروني احترافي
          </p>
          <button className="border border-white dark:border-gray-300 text-white dark:text-gray-100 flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/10 dark:hover:bg-gray-700 transition-all duration-300 text-xs sm:text-sm md:text-base mt-3 md:mt-0">
            احجز موعدك الآن
            <ArrowRight size={18} className="rtl:rotate-180" />
          </button>
        </div>
      </div>
    </div>

  );
};

export default BookingFree;
