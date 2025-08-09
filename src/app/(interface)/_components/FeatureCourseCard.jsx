import React from "react";
import ToggelThem from "./ToggelThem";

const FeatureCourseCard = ({ data }) => {
  const { title, description, image } = data;

  return (
    <div className="max-w-[650px] mx-auto text-center bg-white dark:bg-gray-800 rounded-3xl shadow-lg dark:shadow-gray-900/50 p-6 space-y-4 transition-colors duration-300 border dark:border-gray-700">
      <h3 className="font-bold text-2xl text-black dark:text-white transition-colors duration-300">
        {title}
      </h3>
      <p className="font-normal text-gray-700 dark:text-gray-300 text-base leading-relaxed transition-colors duration-300">
        {description}
      </p>
      <img
        src={image}
        alt={title}
        className="w-full h-auto rounded-2xl object-cover shadow-md dark:shadow-gray-900/30 transition-shadow duration-300"
      />
      {/* <ToggelThem /> */}
    </div>
  );
};

export default FeatureCourseCard;
