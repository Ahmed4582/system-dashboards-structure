import { BarChart3, Settings } from "lucide-react";
import React from "react";
import ToggleTheme from "./ToggelThem";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="relative h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center overflow-hidden"
    >
    

    
      <div
        className="absolute inset-0 bg-cover bg-center dark:opacity-40 opacity-90 z-5"
        style={{
          backgroundImage: "url('images/hero.jpg')",
        }}
      ></div>

      {/* المحتوى فوق الأوفرلاي */}
    <div className="relative z-20 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-xl md:max-w-3xl lg:max-w-7xl xl:max-w-9xl">
          {/* بطاقة زجاجية التأثير */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 sm:p-8 md:p-12 shadow-xl border border-white/20">
            {/* العنوان الرئيسي */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4 sm:mb-8 leading-tight">
              نظام التعليم – خيارك الأفضل
           
            </h1>
            
            {/* نص الوصف */}
            <p className="text-black dark:text-white font-normal text-base sm:text-lg md:text-xl leading-relaxed text-center mb-6 sm:mb-12 max-w-full">
              نقدم لك حلولاً رقمية متكاملة تشمل تصميم وتطوير المواقع الإلكترونية، بالإضافة إلى نظام إدارة تعليمي مصمم خصيصًا لتلبية احتياجات مؤسستك التعليمية أو الإدارية. نلتزم بأعلى معايير الجودة والأداء، لضمان تجربة مستخدم سلسة وتصميم احترافي. كما نوفر نظام إدارة ذكي يساعدك على إدارة محتواك بكفاءة وسهولة، مع أسعار تنافسية وحلول آمنة وحديثة تحترم قيمة وقتك.
            </p>
            
            {/* أزرار الإجراءات */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full">
              <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2 sm:gap-3 min-w-0 sm:min-w-64 text-base sm:text-lg">
                <Settings className="w-5 h-5" />
                نظام الموقع الإلكتروني
              </button>
              
              <button className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/10 flex items-center justify-center gap-2 sm:gap-3 min-w-0 sm:min-w-64 text-base sm:text-lg">
                <BarChart3 className="w-5 h-5" />
                التخطيط والأسعار
              </button>
            </div>
          </div>
          
       
        </div>
        </div>
    </div>
  );
};

export default HeroSection;
