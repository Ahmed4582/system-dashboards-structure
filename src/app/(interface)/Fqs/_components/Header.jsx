import React from "react";
import { HelpCircle, MessageCircle, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <div className="max-w-[85%] mx-auto py-22 text-center relative">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-[#EC5252]/10 to-[#ff6b6b]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-10 right-1/3 w-24 h-24 bg-gradient-to-l from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      {/* Icon Container */}
      <div className="relative mb-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#EC5252] to-[#ff6b6b] rounded-full shadow-lg mb-4 relative">
          <HelpCircle className="w-10 h-10 text-white" />
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-bounce" />
        </div>
      </div>

      {/* Main Title */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#EC5252] via-[#ff6b6b] to-[#EC5252] bg-clip-text text-transparent mb-6 leading-tight">
        الأسئلة الشائعة
      </h2>

      {/* Subtitle with enhanced styling */}
      <div className="relative max-w-4xl mx-auto">
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8 font-medium">
          تجد إجابات عن أبرز الأسئلة التي قد تخطر ببالك حول استخدام المنصة، حرصنا
          على تقديم إجابات واضحة تساعدك في الحصول على تجربة سلسة
        </p>
        
        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <div className="flex items-center gap-2 text-[#EC5252] font-semibold">
            <MessageCircle className="w-5 h-5" />
            <span>إذا لم تجد سؤالك هنا، لا تتردد في التواصل معنا!</span>
          </div>
          
          <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#EC5252] to-[#ff6b6b] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#EC5252]/25">
            <MessageCircle className="w-4 h-4 transition-transform group-hover:rotate-12" />
            تواصل معنا الآن
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#EC5252]/30 to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#EC5252] rounded-full animate-ping"></div>
      <div className="absolute bottom-10 right-10 w-3 h-3 bg-blue-500 rounded-full animate-ping delay-500"></div>
      <div className="absolute top-32 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-1000"></div>
    </div>
  );
};

export default Header;