"use client";
import { useState } from "react";
import MainFeature from "./MainFeature";
import SiteBenefits from "./SiteBenefits";
import SiteContent from "./SiteContent";

export default function YearSystem() {
  const [activeSection, setActiveSection] = useState("subscription");

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 ">
              محتوى الموقع 
            </h2>
            <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
            <SiteContent />
            </div>
          </div>
        );

      case "subscription":
        return (
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 ">
              ماذا سيقدم لك هذ الموقع
                          </h2>
            <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
             <SiteBenefits />
            </div>
          </div>
        );

      case "features":
        return (
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 ">
              الميزات الأساسية
            </h2>
            <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
             <MainFeature />
            </div>
          </div>
        );

      case "support":
        return (
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 ">
              وصف النظام
            </h2>
            <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                    هو نظام إدارة المؤسسات التعليمية
                الفردية والشركات والجامعات عبر الانترنت، الموقع قائم بنظام
                الاشتراك السنوي البسيط مقارنة بالمزايا المتاحة من خلاله،
                والمفاجأة أن الموقع سيظهر لعملائك بالدومين والشعار الخاصين بك
                وحدك، ولا يشاركك في ذلك أحد، مع تخصيص الموقع من حيث الألوان
                والشعار ونوع الخط وتصميم الموقع ذاته.
              </p>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 ">
              صفحة غير موجودة
            </h2>
            <p className="text-gray-600 dark:text-gray-300 ">
              عذراً، الصفحة المطلوبة غير متاحة حالياً.
            </p>
          </div>
        );
    }
  };

  const navigationItems = [
    {
      key: "support",
      label: " وصف النظام",
      active: activeSection === "support",
    },
    {
      key: "features",
      label: "الميزات الأساسية",
      active: activeSection === "features",
    },
    {
      key: "subscription",
      label: "ماذا سيقجم لك هذا الموقع",
      active: activeSection === "subscription",
    },
    {
      key: "overview",
      label: "نظرة عامة",
      active: activeSection === "overview",
    },
  ];

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 font-sans">
      {/* Header Navigation */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 max-w-[95%] mx-auto">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex overflow-x-auto flex-nowrap space-x-2 sm:space-x-8 scrollbar-hide">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveSection(item.key)}
                  className={`min-w-max px-4 py-2 text-sm font-medium transition-colors duration-200 rounded focus:outline-none focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900 focus:ring-offset-2 ${
                    item.active
                      ? "text-red-600 dark:text-red-400 border-b-2 border-red-600 dark:border-red-400 bg-red-50 dark:bg-gray-800"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto md:px-6 lg:px-8 py-8">
        <div className="">{renderContent()}</div>
      </main>
    </div>
  );
}
