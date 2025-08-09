"use client";
import React, { useState } from "react";
import { Users, FileText, Award, Headphones } from "lucide-react";

const dummyData = [
  {
    id: 1,
    title: "الدورات المباشرة",
    content: [
      {
        icon: "📚",
        text: "بالإضافة إلى التعليم المباشر من قبل المعلمين، تشجع الجلسات المباشرة التفاعل بين الطلاب، مما يسمح لهم بالتعاون في المشاريع والمشاركة في الأنشطة الجماعية في أي وقت.",
      },
      {
        icon: "🤝",
        text: "يستفيد الطلاب من التفاعل المباشر ويمكنهم طرح الأسئلة، ومشاركة الأفكار، وبناء مهارات التواصل في الوقت الفعلي.",
      },
    ],
  },
  {
    id: 2,
    title: "الملفات المتاحة",
    content: [
      {
        icon: "📁",
        text: "يمكن للطلاب الوصول إلى مجموعة متنوعة من المواد التعليمية القابلة للتنزيل في أي وقت، بما في ذلك ملفات PDF، والعروض التقديمية، والملاحظات.",
      },
      {
        icon: "📄",
        text: "يتم تصنيف الملفات حسب المادة والدورة لمساعدة الطلاب على البقاء منظمين.",
      },
    ],
  },
  {
    id: 3,
    title: "الاختبارات والامتحانات الدورية",
    content: [
      {
        icon: "📝",
        text: "يمكن للطلاب تقييم تقدمهم من خلال الاختبارات والامتحانات المجدولة التي يعدها المعلمون.",
      },
      {
        icon: "📊",
        text: "تساعد النتائج في توجيه التحسينات والاستعداد للتقييمات النهائية.",
      },
    ],
  },
  {
    id: 4,
    title: "دعم فني 24/7",
    content: [
      {
        icon: "🛠️",
        text: "فريق الدعم لدينا متاح على مدار الساعة لمساعدتك في أي مشاكل تقنية أو استفسارات.",
      },
      {
        icon: "💬",
        text: "تواصل معنا عبر الدردشة أو البريد الإلكتروني أو الهاتف — في أي وقت تحتاج فيه إلى المساعدة.",
      },
    ],
  },
];

const FeaturesCourses = () => {
  const [activeTab, setActiveTab] = useState("الدورات المباشرة");

  const activeData = dummyData.find((item) => item.title === activeTab);

  const features = [
    {
      icon: Users,
      label: "الدورات المباشرة",
    },
    {
      icon: FileText,
      label: "الملفات المتاحة",
    },
    {
      icon: Award,
      label: "الاختبارات والامتحانات الدورية",
    },
    {
      icon: Headphones,
      label: "دعم فني 24/7",
    },
  ];

  return (
    <>
      <p className="text-gray-900 dark:text-primary pt-4 py-4 bg-white dark:bg-gray-900 text-center text-2xl font-bold transition-colors duration-300 my-4 mt-12 dark:mt-0 dark:my-0">
        ميزات موقعنا
      </p>

      <div className="bg-[linear-gradient(88.64deg,_#0F4561_2.88%,_#A04E57_75.96%,_#EC5252_100%)] dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 dark:mt-0 transition-colors duration-300 px-6 md:px-0">
        <div className="grid grid-cols-2 gap-4 max-w-7xl mx-auto h-auto md:flex md:grid-cols-none md:gap-0 md:justify-between dark:border dark:border-slate-600/30 dark:shadow-2xl dark:backdrop-blur-sm md:h-60">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.label}
                className="flex flex-col items-center bg-white/20 dark:bg-slate-800/50 dark:backdrop-blur-sm rounded-xl shadow dark:shadow-lg p-4 md:bg-transparent md:shadow-none md:rounded-none md:flex-row md:items-center md:gap-2 md:p-0 dark:border dark:border-slate-600/20 transition-all duration-300 hover:scale-105 dark:hover:bg-slate-700/60"
              >
                <Icon className="w-8 h-8 text-white dark:text-slate-200 mb-2 md:mb-0 transition-colors duration-300" />
                <p className="text-white dark:text-slate-100 text-center md:text-left transition-colors duration-300">{feature.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FeaturesCourses;