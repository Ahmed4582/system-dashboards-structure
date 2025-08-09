"use client";
import React, { useState } from "react";
import {
  Mail,
  ShoppingBag,
  Target,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Users,
  MessageCircle,
  ChevronLeft,
} from "lucide-react";

const ConsultationTypes = () => {
  const [activeCard, setActiveCard] = useState(null);

  const consultationTypes = [
    {
      id: 1,
      title: "استشارات التسويق عبر المحتوى",
      icon: <Mail className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      description:
        "وضع استراتيجية محتوى فعّالة لزيادة التفاعل وتحسين محركات البحث وبناء الثقة مع الجمهور وضع استراتيجية محتوى فعّالة لزيادة التفاعل وتحسين محركات البحث وبناء الثقة مع الجمهور",
    },
    {
      id: 2,
      title: "استشارات التجارة الإلكترونية",
      icon: <ShoppingBag className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      description:
        "مساعدتك في بناء وإدارة متجرك الإلكتروني بطريقة احترافية لتحقيق أقصى مبيعات ممكنة.",
    },
    {
      id: 3,
      title: "استشارات استراتيجية",
      icon: <Target className="w-6 h-6" />,
      color: "from-purple-500 to-blue-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      description:
        "تحليل الوضع الحالي ووضع خطة تسويقية شاملة تشمل التحليل والجمهور المستهدف والقنوات والميزانية.",
    },
  ];

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-orange-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center w-full md:w-[200px] gap-2 bg-gradient-to-r from-primary to-primary text-white px-6 py-3 md:rounded-full rounded-md text-sm font-medium shadow-lg mb-6 dark:bg-gradient-to-r dark:from-blue-700 dark:to-blue-900">
            <Sparkles className="w-4 h-4" />
            خدماتنا التسويقية
          </div>

          <h1 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
            أنواع الاستشارات التسويقية
          </h1>

          <p className="text-gray-600 md:text-lg text-[12.5px] max-w-3xl mx-auto leading-relaxed dark:text-gray-300">
            نقدم مجموعة شاملة من خدمات الاستشارات التسويقية الرقمي لمساعدتك على
            تنمية أعمالك وتحقيق النجاح في عالم الإنترنت.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-8">
              {/* Right Cards Panel */}
            <div className="col-span-7">
              <div className="space-y-6">
                {consultationTypes.map((type, index) => (
                  <div
                    key={type.id}
                    className={`group cursor-pointer transition-all duration-300 ${
                      activeCard === type.id
                        ? "transform scale-105"
                        : "hover:transform hover:scale-102"
                    }`}
                    onClick={() => handleCardClick(type.id)}
                  >
                    <div
                      className={`bg-white rounded-2xl shadow-lg hover:shadow-xl border-2 transition-all duration-300 dark:bg-gray-900 dark:border-gray-700 dark:hover:border-blue-700 ${
                        activeCard === type.id
                          ? "border-blue-500 shadow-blue-100 dark:border-blue-400 dark:shadow-blue-900"
                          : "border-gray-100 hover:border-gray-200 dark:border-gray-700 dark:hover:border-gray-500"
                      }`}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-14 h-14 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center text-white shadow-lg dark:shadow-blue-900`}
                            >
                              {type.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-1 dark:text-white">
                                {type.title}
                              </h3>
                              <p className="text-gray-600 text-sm line-clamp-2 dark:text-gray-300">
                                {type.description.slice(0,100)}
                              </p>
                            </div>
                          </div>
                          <ChevronLeft
                            className={`w-6 h-6 text-gray-400 transition-transform duration-300 dark:text-gray-300 ${
                              activeCard === type.id ? "" : ""
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Left Detail Panel */}
            <div className="col-span-5">
              <div className="sticky top-8">
                {activeCard ? (
                  <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 dark:bg-gray-900 dark:border-gray-700">
                    {consultationTypes.map(
                      (type) =>
                        type.id === activeCard && (
                          <div key={type.id} className="space-y-6">
                            <div className="flex items-center gap-4">
                              <div
                                className={`w-16 h-16 ${type.bgColor} rounded-2xl flex items-center justify-center dark:bg-gray-800`}
                              >
                                <div className={type.textColor + " dark:text-blue-400"}>
                                  {type.icon}
                                </div>
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                  {type.title}
                                </h3>
                              </div>
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed dark:text-gray-200">
                              {type.description}
                            </p>
                          </div>
                        )
                    )}
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center dark:bg-gray-900 dark:border-gray-700">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 dark:bg-gray-800">
                      <Users className="w-10 h-10 text-gray-400 dark:text-gray-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">
                      اختر نوع الاستشارة
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      انقر على أي من الخدمات لمعرفة المزيد من التفاصيل
                    </p>
                  </div>
                )}
              </div>
            </div>

          
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 gap-6">
            {consultationTypes.map((type) => (
              <div
                key={type.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden dark:bg-gray-900"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center text-white shadow-lg dark:shadow-blue-900`}
                    >
                      {type.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 dark:text-white">
                        {type.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed dark:text-gray-300">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationTypes;
