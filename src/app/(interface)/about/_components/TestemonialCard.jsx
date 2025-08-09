import React from "react";
import { Star } from "lucide-react";

const QuoteIcon = () => (
  <div className="absolute -top-3 -left-3 bg-[#FF6F91] w-8 h-8 flex items-center justify-center rounded-full shadow-md">
    <span className="text-white text-lg font-bold">"</span>
  </div>
);

const TestemonialsCard = ({ data }) => {
  const { image, name, description, source } = data;

  return (
    <div className="bg-[#FDEEEF] dark:bg-blue-500/10 rounded-xl shadow-lg mx-auto border border-[#FDEEEF] dark:border-[#333] p-4 sm:p-6 w-full flex flex-col space-y-4">
      {/* Stars */}
      {/* Image and Description Side by Side on desktop, stacked on mobile */}
      <div className="flex flex-col sm:flex-row items-center w-full gap-3 sm:gap-4">
        {/* Avatar with Quote Icon */}
        <div className="relative mb-2 flex-shrink-0">
          {/* <span className="absolute -top-2 -left-2 z-10">
            <QuoteIcon />
          </span> */}
          <img
            src={image}
            alt={name}
            className="w-20 h-20 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-dashed border-[#FFB4B4] dark:border-[#FF6F91] bg-white dark:bg-[#222] mx-auto"
          />
        </div>
        {/* Testimonial Text */}
        <div className="w-full">
          <div className="flex gap-0.5 mb-1 sm:mb-2 justify-center sm:justify-start">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFB400] text-[#FFB400] dark:fill-[#FFD700] dark:text-[#FFD700]" />
            ))}
          </div>
          <p className="text-[14px] sm:text-[15px] leading-relaxed text-gray-800 dark:text-gray-200 font-normal mb-2 w-full">
            {description}
          </p>
          <div className="flex flex-col w-full items-center sm:items-start">
            <span className="font-bold text-sm sm:text-md text-gray-900 dark:text-gray-100">{name}</span>
            {source && <span className="text-xs font-bold text-gray-700 dark:text-gray-300 mt-1">{source}</span>}
          </div>
        </div>
      </div>
      {/* Name and Source */}
    </div>
  );
};

export default TestemonialsCard;
