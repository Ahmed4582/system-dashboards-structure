"use client";
import React from "react";

export default function OurNess() {
  const sections = [
    // {
    //   id: "message",
    //   title: "رسالتنا",
    //   content:
    //     "نلتزم بتمكين جميع المتعلمين، بغض النظر عن خلفياتهم أو مجالاتهم، للوصول إلى أقصى إمكاناتهم من خلال توفير تعليم شامل وملهم يدعم رحلتهم نحو التميز والمعرفة المستدامة.",
    // },
    {
      id: "vision",
      title: "رؤيتنا",
      content:
        "أن نصبح المنصة التعليمية الرائدة في العالم العربي، من خلال دمج التكنولوجيا المتقدمة والمحتوى التعليمي عالي الجودة لإلهام جيل من المتعلمين القادرين على بناء مستقبل أفضل.",
    },
    {
      id: "mission",
      title: "مهمتنا",
      content:
        "نسعى لتقديم تجربة تعلم شاملة ومبتكرة تُمكّن الطلاب والباحثين من الوصول إلى مصادر أكاديمية موثوقة وأدوات تفاعلية، مما يساهم في تطوير مهاراتهم وتعزيز قدرتهم على تحقيق أهدافهم الأكاديمية والمهنية.",
    },
  ];

  return (
    <div className=" p-4 font-sans dark:bg-gray-900" dir="rtl">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center  relative">
          <div className="relative rounded-3xl p-8 border border-white/20 dark:border-gray-700/50">
            <h1 className="text-4xl md:text-5xl font-bold text-[#142027] dark:text-white mb-4">
              رؤيتنا ورسالتنا
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              يبدأ مستقبلنا بالتعليم الأساسي. نهدف إلى بناء نظام يمكّن المتعلمين من جميع الخلفيات.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:gap-12 ">
          {sections.map((section) => (
            <div key={section.id} className="group relative transition-all duration-300">
              <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 transition-all duration-300 opacity-100"></div>

              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-md border-r-4 border-primary dark:border-blue-400 p-4 shadow-lg dark:shadow-gray-900/30 transition-all duration-500">
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}