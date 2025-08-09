import React from 'react';

export default function SiteContent	() {
  const accountTypes = [
    {
      title: "لوحة التحكم",
      description: "ومن خلال تسجيل الدخول إلى لوحة التحكم الخاصة بالمؤسسة، يمكنك إدارة جميع المستخدمين والأدوار والصلاحيات. يمكنك إنشاء حسابات جديدة للطلاب والمعلمين وإدارة المحتوى التعليمي.",
      buttonText: "موقع لوحة التحكم",
      image: "/images/Hero.png"
    },
    {
      title: "الواجهة الرئيسية",
      description: "وهي واجهة الموقع الرئيسية، وعلامة تجارية خاصة بك. يتم عرضها للزوار الجدد وتتضمن جميع المعلومات الأساسية حول المؤسسة والخدمات المقدمة.",
      buttonText: "موقع الواجهة الرئيسية",
      image: "/images/Hero.png"
    },
    {
      title: "حساب المعلم",
      description: "حساب المعلم ومن خلاله يمكن إدارة حلقة مع الطلاب ومرحلة وبرنامج والدردشة مع الطلاب وإنشاء الدروس والواجبات وعرض النتائج.",
      buttonText: "موقع حساب المعلم",
      image: "/images/Hero.png"
    },
    {
      title: "حساب الطالب",
      description: "وهو التسجيل الأساسي للطلاب. ومن خلال تسجيل الدخول للطلاب يمكن استعراض الدروس وأداء المهام والتفاعل مع الأقران وقدر المشاركات وعرض النتائج.",
      buttonText: "موقع حساب الطالب",
      image: "/images/Hero.png"
    },
    {
      title: "حساب ولي الأمر",
      description: "وهو حساب ولي أمر الطالب الذي يمكنه من متابعة تقدم الطالب في التعليم والاطلاع على الدرجات والتفاعل مع المعلمين حسب الحاجة.",
      buttonText: "موقع حساب ولي الأمر",
      image: "/images/Hero.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 ">
      <div className=" md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accountTypes.map((account, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img 
                src={account.image} 
                alt={account.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {account.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {account.description}
                </p>
                <button className="bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
                  {account.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}