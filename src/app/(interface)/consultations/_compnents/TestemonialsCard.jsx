import React from "react";
import { Star } from "lucide-react";

const TestemonialsCard = ({ data }) => {
  const { image, name, description } = data;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 mx-auto border dark:border-gray-700 p-4 w-full  flex flex-col justify-between space-y-4 ">
      {/* Stars */}
      <div className="flex   gap-0.5 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      {/* Testimonial Text */}
      <p className="text-[13px] leading-relaxed text-gray-800 dark:text-gray-100 font-normal  ">
        {description}
      </p>
      {/* Name and Avatar */}
      <div className="flex items-center  mt-auto gap-2">
        <span className="font-bold text-md text-gray-900 dark:text-gray-100">{name}</span>
        <img
          src={image}
          alt={name}
          className="w-7 h-7 rounded-full object-cover border border-gray-200 dark:border-gray-700"
        />
      </div>
    </div>
  );
};

export default TestemonialsCard;
