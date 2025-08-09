import React from "react";
import { ArrowLeft } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-[#F9EAEA] dark:bg-gray-900 w-full  transform transition-all duration-500">
      <div className="lg:container mx-auto px-0 lg:px-4  py-0 md:py-0 md:px-0  lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-6 order-2 lg:order-1 md:px-4 px-2 md:py-4">
            {/* Headline */}
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 md:mt-16">
              نقدم الحلول المثلى لإدارة مشاريعك عبر الانترنت
            </h1>
            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                إذا كنت تبحث عن المهارة المناسبة لتتعلمها، أو كنت بحاجة إلى مهارة إضافية لتعزيز سيرتك الذاتية، سواء كانت الدورة افتراضية بالكامل، أو حضورية تمامًا، أو مزيجًا بينهما – استكشف الآن.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                إذا كنت تبحث بدقة عن المهارة التي ترغب في تعلمها، أو إذا كنت تحتاج فقط إلى مهارة إضافية لإكمال سيرتك الذاتية – سواء كانت الدورة افتراضية بالكامل…
              </p>
            </div>
            {/* CTA Link */}
            <div className="pt-2">
              <a href="#" className="text-[#F14B6E] dark:text-[#F14B6E] font-bold flex items-center gap-1 hover:underline w-fit ml-auto">
                <span>اشترك الآن ...</span>
                <ArrowLeft className="w-4 h-4" />

              </a>
            </div>
          </div>
          
          {/* Image Section */}
          <div className=" flex justify-center order-1 md:order-1 lg:order-2 ">
            <div className="relative rounded-2xl shadow-2xl dark:shadow-gray-900/50 max-w-[400px] w-full md:max-w-none md:w-full lg:max-w-[400px]">
              <div className="relative overflow-hidden md:rounded-none lg:rounded-2xl">
                <img 
                  src="/images/heroConsultions.jpg" 
                  alt="فريق خبراء التسويق"
                  className="w-full h-80 md:h-96 lg:h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;