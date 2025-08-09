import React from "react";
import { ArrowLeft, Users, Target, TrendingUp, Sparkles } from "lucide-react";

const AboutConsultion = () => {
  return (
    <div className=" bg-white dark:bg-gray-900" id="about">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Content Section */}
          <div className="order-2 lg:order-1 space-y-6">
            {/* Badge */}
            <div className="inline-flex md:w-[150px] w-full items-center gap-2 bg-gradient-to-r from-primary to-primary text-white px-4 py-2 md:rounded-full rounded-md text-sm font-medium shadow-lg dark:shadow-primary/30 dark:bg-gradient-to-r dark:from-primary dark:to-primary">
              <Sparkles className="w-4 h-4" />
              نبذة عن الخدمة
            </div>
            
            {/* Main Title */}
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent dark:from-primary dark:to-primary">
                فريق من خبراء التسويق
              </span>
            </h1>
            
            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                نحن لا نقدم حلولًا عامة، بل استشارات تسويقية مبنية على فهم عميق
                لاحتياجاتك.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                سواء كنت تطلق منتجًا جديدًا، أو ترغب في تحسين نتائج حملاتك
                الحالية، نحن هنا لمساعدتك على اتخاذ قرارات فعّالة ومبنية على بيانات.
              </p>
            </div>
            
           
            
            {/* CTA Button */}
            <div className="pt-4 ">
              <button className="group  md:w-[230px] w-full flex items-center gap-3 bg-gradient-to-r from-primary to-primary hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 md:rounded-xl rounded-md font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 dark:shadow-primary/30 dark:bg-gradient-to-r dark:from-primary dark:to-primary">
                <span>تعرف على فريقنا</span>
                <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              
              {/* Main image container */}
              <div className="relative bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-2xl dark:shadow-primary/30">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/images/heroConsultions.jpg" 
                    alt="فريق خبراء التسويق"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent dark:from-black/60 dark:via-black/10 dark:to-transparent"></div>
                </div>
                
            
              </div>
            </div>
          </div>
        </div>
      </div>
      
     
    </div>
  );
};

export default AboutConsultion;