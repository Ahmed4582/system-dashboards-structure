import React from 'react'
import { Users, Target, Award, Calendar } from "lucide-react";

const OurAchievement = () => {
  const stats = [
    {
      id: 1,
      icon: <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      iconBg: "bg-blue-100 dark:bg-blue-900",
      value: "1000+",
      title: "Training Courses",
      subtitle: "Successfully Delivered",
    },
    {
      id: 2,
      icon: <Target className="w-8 h-8 text-green-600 dark:text-green-400" />,
      iconBg: "bg-green-100 dark:bg-green-900",
      value: "95%",
      title: "Completion Rate",
      subtitle: "Course Completion Ratio",
    },
    {
      id: 3,
      icon: <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      iconBg: "bg-purple-100 dark:bg-purple-900",
      value: "200+",
      title: "Academic Trainers",
      subtitle: "Top Specialized Experts",
    },
    {
      id: 4,
      icon: <Calendar className="w-8 h-8 text-orange-600 dark:text-orange-400" />,
      iconBg: "bg-orange-100 dark:bg-orange-900",
      value: "+5 Years",
      title: "Experience in Education",
      subtitle: "Years of Excellence",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Proud Numbers</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-16">
          We've achieved remarkable milestones in the field of tech education over the past years.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div
              key={item.id}
              className="text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`w-16 h-16 ${item.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                {item.icon}
              </div>
              <div className="text-3xl font-bold mb-2 text-inherit">{item.value}</div>
              <div className="text-gray-600 dark:text-gray-300">{item.title}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {item.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAchievement;
