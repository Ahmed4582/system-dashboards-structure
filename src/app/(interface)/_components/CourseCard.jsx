import React from "react";
import { Star } from "lucide-react";

const CourseCard = ({ data }) => {
  
  const { image, name, description, rating, price, tag } = data;


  return (
   <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg dark:shadow-gray-900/50  mx-auto transition-colors duration-300 border dark:border-gray-700">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-[300px] object-cover"
      />

      {/* Content */}
      <div className="bg-white dark:bg-gray-900  dark:text-gray-100 text-gray-900 p-4 transition-colors duration-300">
        {/* Name */}
        <h3 className="text-md font-semibold dark:text-gray-100 text-gray-900">
          {name}
        </h3>

        {/* Description */}
        <p className="text-[9.5px] leading-relaxed dark:text-gray-100 font-normal text-gray-900">
          {description}{" "}
          <span className="text-blue-400 dark:text-blue-300 cursor-pointer hover:text-blue-300 dark:hover:text-blue-200 transition-colors duration-200">
            Show more
          </span>
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-400 dark:text-yellow-300 text-sm">
          <Star className="w-4 h-4 fill-current" />
          <span>{rating}</span>
        </div>

        {/* Price */}
        {/* <p className="text-lg font-bold text-green-400 dark:text-green-300">
          ${price.toLocaleString()}
        </p> */}

        {/* Tagline */}
        {/* <p className="text-xs text-gray-300 dark:text-gray-400 italic">
          {tag}
        </p> */}
      </div>
    </div>
  );
};

export default CourseCard;
