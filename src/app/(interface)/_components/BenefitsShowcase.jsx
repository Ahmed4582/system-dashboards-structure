"use client"

import { useState } from "react";
import ServicesGrid from "./ServicesGrid";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BenefitsShowcase = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const benefits = [
    {
      id: 1,
      title: "حماية وأمان شامل",
      description: "نطبق أحدث معايير الأمان لحماية أصولك الرقمية وضمان المعاملات الآمنة من خلال أنظمة تشفير ومراقبة متقدمة.",
      features: ["أمان متقدم", "مراقبة لحظية", "تشفير البيانات", "حماية على مدار الساعة"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "مواقع مرنة وفريدة",
      description: "نصمم مواقع مخصصة تعكس هوية علامتك التجارية بأحدث التقنيات وتصميم متجاوب مع جميع الأجهزة.",
      features: ["تصميم مخصص", "متجاوب مع الجوال", "واجهة حديثة", "دمج العلامة التجارية"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "تحسين محركات البحث",
      description: "نرفع ظهور موقعك في محركات البحث عبر استراتيجيات سيو متقدمة وتقنيات تحسين المحتوى.",
      features: ["بحث الكلمات المفتاحية", "تحسين المحتوى", "سيو تقني", "متابعة الأداء"],
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "سرعة وكفاءة في الأداء",
      description: "ننجز المشاريع بسرعة دون المساس بالجودة باستخدام أحدث أدوات التطوير وتقنيات التحسين.",
      features: ["تسليم سريع", "أداء عالي", "كود محسن", "تحميل سريع"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const currentBenefit = benefits[activeSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
    

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* العنوان المحسن */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent mb-6">
            مزايا التعاقد معنا
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            نمتلك الخبرة في تصميم وتطوير المواقع الإلكترونية الاحترافية التي تدعم أعمالكم وتواكب تطلعاتكم الرقمية
          </p>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="flex-1 flex items-center">
          <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
            
            {/* اليسار - شبكة الخدمات */}
            <div className="order-2 lg:order-1 ">
              <ServicesGrid activeSlide={activeSlide} />

            </div>

            {/* اليمين - عرض الصور والتفاصيل */}
            <div className="order-1 lg:order-2 flex flex-col items-center mt-4 ">
              <div className="relative w-full max-w-lg mx-auto">
                {/* الصورة الرئيسية */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl dark:shadow-gray-900/50">
                  <img
                    src={currentBenefit.image}
                    alt={currentBenefit.title}
                    className="w-full h-96 object-cover transition-all duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent dark:from-black/60 dark:to-transparent"></div>
                </div>

                {/* بادج العد */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-red-600 dark:from-red-700 dark:to-red-900 text-white px-4 py-2 rounded-xl shadow-lg dark:shadow-gray-900/50">
                  <div className="text-sm font-bold">{activeSlide + 1} / {benefits.length}</div>
                </div>

           
              </div>

              {/* أزرار التنقل المحسنة */}
              {/* <div className="flex items-center justify-center  gap-4 mt-4">
                <button
                  onClick={prevSlide}
                  className="group p-4 bg-white dark:bg-gray-800 hover:bg-red-500 dark:hover:bg-red-700 rounded-full shadow-lg dark:shadow-gray-900/50 hover:shadow-xl text-gray-700 dark:text-gray-200 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-700"
                  aria-label="السابق"
                >
                  <ChevronRight className="w-6 h-6 transition-transform group-hover:scale-110" />
                </button>
                
               
                <div className="flex gap-2">
                  {benefits.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeSlide 
                          ? 'bg-red-500 dark:bg-red-700 w-8' 
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                      }`}
                      aria-label={`انتقل إلى الشريحة ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="group p-4 bg-white dark:bg-gray-800 hover:bg-red-500 dark:hover:bg-red-700 rounded-full shadow-lg dark:shadow-gray-900/50 hover:shadow-xl text-gray-700 dark:text-gray-200 hover:text-white transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-700"
                  aria-label="التالي"
                >
                  <ChevronLeft className="w-6 h-6 transition-transform group-hover:scale-110" />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsShowcase;
