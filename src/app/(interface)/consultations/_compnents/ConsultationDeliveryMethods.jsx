"use client"
import React from "react";
import { Video, FileText, Phone, Users, Sparkles, Clock, CheckCircle } from "lucide-react";

const ConsultationDeliveryMethods = () => {
  const deliveryMethods = [
    {
      id: 1,
      title: "جلسات Zoom مباشرة",
      icon: <Video className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      description: "جلسات مباشرة عبر الإنترنت",
      features: ["تفاعل مباشر", "مشاركة الشاشة", "تسجيل الجلسة"]
    },
    {
      id: 2,
      title: "مكالمات هاتفية",
      icon: <Phone className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-primary",
      description: "استشارات صوتية مريحة",
      features: ["سهولة الوصول", "مرونة في التوقيت", "خصوصية تامة"]
    },
    {
      id: 3,
      title: "استشارات مكتوبة pdf",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      description: "تقارير مفصلة ومكتوبة",
      features: ["تفاصيل شاملة", "سهولة المراجعة", "تطبيق عملي"]
    },
    {
      id: 4,
      title: "حضور مباشر",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      description: "لقاءات وجهاً لوجه",
      features: ["تفاعل شخصي", "بيئة عمل مناسبة", "نتائج فورية"]
    }
  ];

  return (
    <div className=" bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-950 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 w-full md:w-[220px] text-center justify-center bg-gradient-to-r from-primary to-primary text-white px-6 py-3 md:rounded-full rounded-md text-sm font-medium shadow-lg mb-6 dark:bg-gradient-to-r dark:from-indigo-700 dark:to-indigo-900">
            <Sparkles className="w-4 h-4" />
            كيف نقدم الخدمة
          </div>
          
          <h1 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-6 dark:text-gray-100">
            طرق تقديم الاستشارة
          </h1>
          
          <p className="text-gray-600 font-normal text-lg max-w-4xl mx-auto leading-relaxed dark:text-gray-300">
            نلتزم بتقديم استشارات تسويقية استثنائية تحقق نتائج حقيقية لأعمالك، ونركز على إحداث تأثير
            ملموس بدعم نموك وتحقيق أهدافك.
          </p>
        </div>

        {/* Desktop Layout - 4 cards in one row */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-8">
            {deliveryMethods.map((method, index) => (
              <div key={method.id} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-100 overflow-hidden dark:bg-gray-900 dark:border-gray-800 dark:shadow-gray-900/40">
                  {/* Card Header */}
                  <div className="p-8 text-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <div className="text-white">
                        {method.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 dark:text-gray-100">
                      {method.title}
                    </h3>
                    
                  
                  </div>
                  
                 
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout - 2 cards per row */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 gap-4">
            {deliveryMethods.map((method, index) => (
              <div key={method.id} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden dark:bg-gray-900 dark:border-gray-800 dark:shadow-gray-900/40">
                  {/* Mobile Card Content */}
                  <div className="p-4 text-center">
                    <div className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <div className="text-white">
                        <div className="w-6 h-6">
                          {React.cloneElement(method.icon, { className: "w-6 h-6" })}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-base font-bold text-gray-900 mb-2  text-[12.5px] dark:text-gray-100">
                      {method.title}
                    </h3>
                    
                  
                    
                 
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

     
      </div>
    </div>
  );
};

export default ConsultationDeliveryMethods;