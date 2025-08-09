import React from 'react';

const plans = [
  {
    name: 'الباقة الأساسية',
    price: '499 دولار',
    period: 'شهرياً',
    note: 'متاحة للشركات الصغيرة',
    features: [
      'إدارة وسائل التواصل الاجتماعي (منصتان)',
      'جدولة محتوى شهري',
      'تحسين أساسي لمحركات البحث (SEO)',
      'تقرير أداء شهري',
      'دعم عبر البريد الإلكتروني',
    ],
    buttonClass: 'w-full bg-white border-2 border-red-500 text-red-500 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors',
    featured: false,
    borderClass: 'bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-shadow',
    buttonText: 'اشترك الآن',
  },
  {
    name: 'الباقة القياسية',
    price: '999 دولار',
    period: 'شهرياً',
    note: 'متاحة للشركات المتوسطة',
    features: [
      'إدارة وسائل التواصل الاجتماعي (4 منصات)',
      'إنشاء والتسويق المحتوى',
      'تحسين متقدم لمحركات البحث (SEO)',
      'حملات تسويق عبر البريد الإلكتروني',
      'تقارير أداء نصف شهرية',
      'دعم أولوية',
    ],
    buttonClass: 'w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors',
    featured: true,
    borderClass: 'bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-red-500 relative hover:shadow-2xl transition-shadow',
    buttonText: 'اشترك الآن',
    badge: 'الأشهر',
  },
  {
    name: 'الباقة المميزة',
    price: '1,999 دولار',
    period: 'شهرياً',
    note: 'للشركات الراسخة',
    features: [
      'إدارة شاملة لوسائل التواصل الاجتماعي (جميع المنصات)',
      'إنشاء محتوى احترافي ومتميز',
      'استراتيجية متكاملة للتحسين محركات البحث (SEO)',
      'تسويق متقدم عبر البريد الإلكتروني',
      'إدارة الإعلانات المدفوعة',
      'استشارات إدارة متخصصة',
      'مدير حساب مخصص',
    ],
    buttonClass: 'w-full bg-white border-2 border-red-500 text-red-500 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors',
    featured: false,
    borderClass: 'bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-shadow',
    buttonText: 'اشترك الآن',
  },
];

const PricingTable = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 transition-colors duration-300" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-red-100 dark:bg-red-900/20 w-full md:w-[180px] text-red-600 dark:text-red-400 px-4 py-2 md:rounded-full rounded-md  text-sm font-medium mb-4 transition-colors duration-300">
            الأسعار والباقات
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">
            بثقة الاستشارات
          </h1>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`${plan.borderClass} dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/30 transition-colors duration-300 relative`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-500 dark:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                    {plan.badge}
                  </div>
                </div>
              )}
              <div className={`text-center mb-6${plan.featured ? ' mt-4' : ''}`}>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">{plan.name}</h3>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">{plan.price}</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">{plan.period}</div>
                <div className="text-gray-500 dark:text-gray-400 text-xs mt-1 transition-colors duration-300">{plan.note}</div>
              </div>
              <ul className="space-y-3 mb-8 text-sm md:text-base">
                {plan.features.map((feature, i) => (
                  <li className="flex items-start" key={i}>
                    <span className="text-green-500 dark:text-green-400 ml-2 transition-colors duration-300">•</span>
                    <span className="text-gray-800 dark:text-gray-200 transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`${plan.buttonClass} dark:bg-gray-900 dark:text-red-400 dark:border-red-400 dark:hover:bg-gray-800 transition-colors duration-300`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;