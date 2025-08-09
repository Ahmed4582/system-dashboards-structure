"use client";
import React from "react";

const DetailTeachers = () => {
  return (
    <div className=" bg-white dark:bg-gray-900   text-black dark:text-white mx-auto py-20 ">
      <div className="max-w-[95%] pt-6 mx-auto border-gray-300 border-b px-4 py-10">
        {/* Flex Container */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
        

          {/* Image + Info */}
          <div className="flex flex-col items-center text-center  ">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face"
              alt="Maryam Mahmoud Al-Farsi"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 mb-3"
            />
            <h3 className="text-lg font-bold ">Maryam Mahmoud Al-Farsi</h3>
            <p className="text-sm ">Arabic Language Instructor</p>
          </div>
            {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold  mb-4">About Her:</h2>
            <p className=" leading-relaxed mb-4">
              An Arabic language teacher with over 8 years of experience in teaching various academic levels. She is known for simplifying grammar and enhancing students’ reading, writing, and expression skills.
            </p>
            <p className="leading-relaxed">
              Her teaching approach is based on interactive methods that consider individual differences. She always aims to create an engaging learning environment that encourages students to be creative and confident. She has a clear impact on developing students’ language skills and strengthening their love for the language from early stages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTeachers;
