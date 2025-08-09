"use client"
import React, { useState } from 'react';

const ServicesGrid = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const services = [
    {
      title: "حماية وأمان شامل",
      description: "نطبق أعلى معايير الأمان لضمان حماية بياناتك مع استخدام تقنيات متطورة لتأمين واستعادة المعلومات",
      bgColor: "bg-blue-100 dark:bg-blue-900"
    },
    {
      title: "مواقع متقدمة ومثيرة",
      description: "نصمم مواقع متخصصة تفاعلية وسهلة الاستخدام مع تجربة مستخدم ممتازة التركيز على الأداء والتوافق مع التقنيات الحديثة",
      bgColor: "bg-pink-100 dark:bg-pink-900"
    },
    {
      title: "تحسين محركات البحث (SEO)",
      description: "نرفع قواعد تحسين الظهور في نتائج البحث لضمان وصول أكبر للجمهور المستهدف مما يزيد من فرص البيع والانتشار",
      bgColor: "bg-red-100 dark:bg-red-900"
    },
    {
      title: "سرعة في الإنجاز وكفاءة في الأداء",
      description: "نلتزم بمواعيد التسليم دون التساهل بالجودة ونضمن أن يكون الموقع سريع الاستجابة وبأحدث التقنيات",
      bgColor: "bg-green-100 dark:bg-green-900"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {services.map((service, index) => {
        const isActive = index === activeSlide;
        return (
          <div
            key={index}
            className={`${service.bgColor} rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 transition-all duration-500 hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-black transform hover:scale-105 ${
              isActive ? 'ring-2 ring-red-400 dark:ring-red-600 shadow-xl scale-105' : ''
            }`}
          >
            {/* حذف الأيقونة */}
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 leading-tight mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              {service.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesGrid;