import React from "react";
import CourseCard from "./CourseCard";

const courseData = [
  {
    id: 1,
    image: "/images/teacherone.jpg",
    name: "Dr. Mona",
    description:
      "Discover the world of the Arabic language and start your journey in learning Arabic and...",
    rating: 4.5,
    price: 34232,
    tag: "Top seller this month",
  },
  {
    id: 2,
    image: "/images/teacherone.jpg",
    name: "Sheikh Ahmed",
    description:
      "Master Quran recitation and Arabic grammar through live, interactive sessions...",
    rating: 4.8,
    price: 28500,
    tag: "Top rated by students",
  },
  {
    id: 3,
    image: "/images/teacherone.jpg",
    name: "Sheikh Ahmed",
    description:
      "Master Quran recitation and Arabic grammar through live, interactive sessions...",
    rating: 4.8,
    price: 28500,
    tag: "Top rated by students",
  },
  {
    id: 4,
    image: "/images/teacherone.jpg",
    name: "Sheikh Ahmed",
    description:
      "Master Quran recitation and Arabic grammar through live, interactive sessions...",
    rating: 4.8,
    price: 28500,
    tag: "Top rated by students",
  },
];

const CourseCardList = ({bg}) => {
  return (
    <div className={`max-w-[95%]  dark:max-w-full mx-auto rounded-2xl dark:rounded-[0] ${bg ? "bg-gradient-to-b from-[#142027] to-[#324D5D] dark:from-gray-900 dark:to-gray-800 transition-colors duration-300" : " bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"}`}>   
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:grid-cols-4 max-w-[94%] mx-auto py-10">
        {courseData.map((course) => (
          <CourseCard key={course.id} data={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseCardList;
