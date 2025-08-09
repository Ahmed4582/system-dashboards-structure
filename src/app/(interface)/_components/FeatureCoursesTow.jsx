import React from "react";
import FeatureCourseCard from "./FeatureCourseCard";

const featuresData = [
  {
    id: 1,
    title: "Flexibility in Learning",
    description:
      "Choose between self-paced, interactive, or structured learning based on your schedule.",
    image: "/images/teacherone.jpg",
  },
  {
    id: 2,
    title: "Interactive Lessons",
    description:
      "Engage with teachers and students in real-time sessions to enhance your skills through collaboration.",
    image: "/images/teacherone.jpg",
  },
  {
    id: 3,
    title: "Expert Instructors",
    description:
      "Learn from highly qualified instructors with deep knowledge and practical experience.",
    image: "/images/teacherone.jpg",
  },
  {
    id: 4,
    title: "Expert Instructors",
    description:
      "Learn from highly qualified instructors with deep knowledge and practical experience.",
    image: "/images/teacherone.jpg",
  },
];

const FeatureCoursesTow = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-3 py-10 max-w-[95%] mx-auto">
        {featuresData.map((item) => (
          <FeatureCourseCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default FeatureCoursesTow;
