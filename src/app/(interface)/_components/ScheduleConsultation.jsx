"use client"
import React from 'react';

export default function ScheduleConsultation() {
  return (
    <div className="bg-gray-50 p-4 sm:p-6 md:p-8 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-6">
        {/* Main content section */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 md:p-12 rounded-lg shadow-sm">
            <h1 className="text-base sm:text-lg md:text-2xl font-bold dark:text-white text-gray-800 mb-6 text-center">
              إرشادات تسويقية احترافية لنمو الأعمال
            </h1>
            <p className="text-[11px] sm:text-[13px] md:text-base text-justify text-gray-600 dark:text-white leading-relaxed mb-8">
              احصل على نصائح مخصصة مصممة خصيصًا لتطوير منتجاتك التعليمية من خلال
              خدمات الاستشارات الاستراتيجية التي نقدمها، بما في ذلك استراتيجية التسويق
              وقابلية التوسع للنمو المالي
            </p>
            <div className="text-center">
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors w-full sm:w-auto">
                احجز استشارتك الآن
              </button>
            </div>
          </div>
        </div>
        {/* Cards grid: two rows, each with two cards */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* First row */}
            <div className="col-span-1">
              <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-lg shadow-sm h-full flex flex-col justify-between">
                <h2 className="text-[15px] sm:text-lg md:text-xl font-bold dark:text-white text-gray-800 mb-4">استراتيجية التسويق</h2>
                <p className="text-gray-600 dark:text-white leading-relaxed text-[11px] sm:text-[13px] md:text-base">
                  نطور خطط تسويق شاملة مصممة خصيصًا لطبيعة عملك والجمهور المستهدف.
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-lg shadow-sm h-full flex flex-col justify-between">
                <h2 className="text-[15px] sm:text-lg md:text-xl font-bold dark:text-white text-gray-800 mb-4">تحليل النمو</h2>
                <p className="text-gray-600 dark:text-white leading-relaxed text-[11px] sm:text-[13px] md:text-base">
                  رؤى مستندة إلى البيانات لقياس الأداء وتحديد فرص النمو المستدام.
                </p>
              </div>
            </div>
            {/* Second row */}
            <div className="col-span-1">
              <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-lg shadow-sm h-full flex flex-col justify-between">
                <h2 className="text-[15px] sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-4">قابلية التوسع للنمو</h2>
                <p className="text-gray-600 dark:text-white leading-relaxed text-[11px] sm:text-[13px] md:text-base">
                  إرشادات خبراء حول توسيع منصتك التعليمية واستراتيجيات النمو.
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-lg shadow-sm h-full flex flex-col justify-between">
                <h2 className="text-[15px] sm:text-lg md:text-xl font-bold dark:text-white text-gray-800 mb-4">تحسين المنصة</h2>
                <p className="text-gray-600 dark:text-white leading-relaxed text-[11px] sm:text-[13px] md:text-base">
                  توصيات لتحسين تجربة المستخدم وزيادة معدلات التحويل على منصتك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}