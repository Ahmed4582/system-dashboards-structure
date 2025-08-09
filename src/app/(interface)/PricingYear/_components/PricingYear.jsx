import React from 'react';

export default function PricingYear() {
  const pricingPlans = [
    {
      name: "Primary - مبتدئ",
      price: "$50",
      duration: "سنوياً",
      period: "خدمة الاشتراك 12 شهراً",
      features: [
        { name: "ما يتضمن", included: true },
        { name: "استضافة معلاية", included: true },
        { name: "دومين مجاني", included: false },
        { name: "السيستم التعليمي", included: false },
        { name: "خدمات المختلفين", included: false },
        { name: "متعدد الفئات", included: true },
        { name: "يقبل الدفع", included: false },
        { name: "نظام المحادثات", included: false },
        { name: "تصميمات متعددة", included: false },
        { name: "التخصيص", included: true },
        { name: "الدعم الفني", included: true }
      ],
      buttonText: "اشترك الآن",
      buttonStyle: "border"
    },
    {
      name: "Basic - أساسي",
      price: "$150",
      duration: "سنوياً",
      period: "خدمة الاشتراك 24 شهراً",
      features: [
        { name: "ما يتضمن", included: true },
        { name: "استضافة معلاية", included: true },
        { name: "دومين مجاني", included: true },
        { name: "السيستم التعليمي", included: true },
        { name: "خدمات المختلفين", included: true },
        { name: "متعدد الفئات", included: true },
        { name: "يقبل الدفع", included: true },
        { name: "نظام المحادثات", included: false },
        { name: "تصميمات متعددة", included: true },
        { name: "التخصيص", included: true },
        { name: "الدعم الفني", included: true }
      ],
      buttonText: "اشترك الآن",
      buttonStyle: "border"
    },
    {
      name: "Advanced - متقدم",
      price: "$250",
      duration: "سنوياً",
      period: "خدمة الاشتراك 24 شهراً",
      popular: true,
      features: [
        { name: "ما يتضمن", included: true },
        { name: "استضافة معلاية", included: true },
        { name: "دومين مجاني", included: true },
        { name: "السيستم التعليمي", included: true },
        { name: "خدمات المختلفين", included: true },
        { name: "متعدد الفئات", included: true },
        { name: "يقبل الدفع", included: true },
        { name: "نظام المحادثات", included: true },
        { name: "تصميمات متعددة", included: true },
        { name: "التخصيص", included: true },
        { name: "الدعم الفني", included: true }
      ],
      buttonText: "اشترك الآن",
      buttonStyle: "filled"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            أسعار الاشتراكات السنوية
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            يمكنك أن تختار خطة الاشتراك السنوي وتتضمن خدمات الاستضافة والنظام التعليمي مع دعم فني إلى أن ينتهي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 ${
                plan.popular ? 'border-2 border-red-500 dark:border-red-400' : 'border border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <span className="bg-red-500 dark:bg-red-400 text-white dark:text-gray-900 px-4 py-1 rounded-full text-sm font-medium">
                    موصى به
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-300 mr-2">{plan.duration}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{plan.period}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-200">{feature.name}</span>
                    <div className="mr-3">
                      {feature.included ? (
                        <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                  plan.buttonStyle === 'filled'
                    ? 'bg-red-500 hover:bg-red-600 dark:bg-red-400 dark:hover:bg-red-500 text-white dark:text-gray-900'
                    : 'border-2 border-red-500 dark:border-red-400 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-gray-900'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}