
import React from 'react';

export default function MainFeature() {
  const orgData = [
    "1. الموظف مدير الأعمال",
    "2. مدير التصميمات ومدير تخصصية", 
    "3. مدير عام التطبيقات الهواتف والتطبيقات",
    "4. يستقبل المدفوعات مباشرة",
    "5. مخصص لإدارة أجهزة المحتوى",
    "6. يحتوي على نظم مختارات بناءً على الأعضاء",
    "7. إمدادات أجهزة كينتيوب بمنصات سحابية مختلفة ويربط مدائم منتجة (نظام الاشتراك السنوي فقط)",
    "8. إمدادات متاحة من إجمالي (نظام المشترك السنوي فقط)",
    "9. دعم فني ومالي وتسويقي ومحاسبة رقمي (نظام الاشتراك السنوي فقط)",
    "10. Learning Management System",
    "CMS - Content Management System 8."
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300 rounded-xl p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">الهيكل الأساسية</h1>
      <div className="space-y-2">
        {orgData.map((item, index) => (
          <div key={index} className="text-gray-900 dark:text-gray-100 transition-colors duration-300">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}