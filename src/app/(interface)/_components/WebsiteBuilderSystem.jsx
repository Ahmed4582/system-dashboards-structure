import React from 'react'

const WebsiteBuilderSystem = () => {
  return (
    <div className="flex flex-col items-center w-full mt-8 mx-a  ">
      <h2 className="text-xl md:text-2xl font-bold mb-1 text-gray-900 dark:text-gray-100">أنظمة إنشاء المواقع مع إبو نظام</h2>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">نوفر نظامين للحصول على موقع إلكتروني بفئات متعددة. وهما: نظام الاشتراك السنوي، ونظام شراء الموقع بشكل كامل</p>
      <div className="flex flex-col md:flex-row gap-6 w-full  max-w-[85%] justify-center">
        {/* Full Purchase System Card */}
        <div className="flex-1 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-2xl p-6 flex flex-col items-center shadow-sm">
          <div className="mb-2">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 text-red-500 dark:text-red-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.086a.563.563 0 00.475.346l5.518.442c.499.04.701.68.321 1.02l-4.204 3.684a.563.563 0 00-.182.557l1.285 5.385c.117.492-.414.87-.845.593l-4.646-2.977a.563.563 0 00-.6 0l-4.646 2.977c-.43.277-.962-.101-.845-.593l1.285-5.385a.563.563 0 00-.182-.557L2.066 10.393c-.38-.34-.178-.98.32-1.02l5.519-.442a.563.563 0 00.475-.346l2.125-5.086z" />
              </svg>
            </span>
          </div>
          <span className="bg-red-100 dark:bg-red-900 text-red-500 dark:text-red-300 text-xs px-3 py-1 rounded-full mb-2">الأشهر!</span>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">نظام الشراء الكامل</h3>
          <ul className="text-gray-700 dark:text-gray-300 text-sm mb-6 space-y-1 list-decimal pr-4">
            <li>دفع تكلفة الإنشاء لمرة واحدة</li>
            <li>تصميم مميز حسب الطلب</li>
            <li>دعم فني مجاني لمدة 6 أشهر بعد التسليم</li>
            <li>دعم فني مدفوع سنوياً بعد ستة أشهر</li>
            <li>ترخيص الملكية الكاملة للموقع بشكل سنوي</li>
            <li>فئات متعددة حساب عرض الموقع</li>
          </ul>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white dark:bg-red-600 dark:hover:bg-red-700 font-semibold py-2 rounded-lg transition">عرض التفاصيل</button>
        </div>
        {/* Annual Subscription System Card */}
        <div className="flex-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 flex flex-col items-center shadow-sm">
          <div className="mb-2">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-blue-500 dark:text-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-7 4h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">نظام الاشتراك السنوي</h3>
          <ul className="text-gray-700 dark:text-gray-300 text-sm mb-6 space-y-1 list-decimal pr-4">
            <li>دفع سنوي مقابل خدمات الموقع</li>
            <li>تصميم مميز حسب الطلب</li>
            <li>خصوصية كاملة</li>
            <li>دعم فني مجاني بالاشتراك</li>
            <li>فئات متعددة حساب عرض الموقع</li>
            <li>خدمات متنوعة متعددة</li>
          </ul>
          <button className="w-full bg-gray-800 hover:bg-gray-900 text-white dark:bg-blue-600 dark:hover:bg-blue-700 font-semibold py-2 rounded-lg transition">عرض التفاصيل</button>
        </div>
      </div>
    </div>
  )
}

export default WebsiteBuilderSystem
