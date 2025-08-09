"use client"
import React, { useState } from 'react'
import { Star, Zap, Shield, Headphones, Palette, Globe, ArrowRight, CheckCircle, Sparkles, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const WebsiteBuilderSystem = () => {
  const [activeCard, setActiveCard] = useState(null)

  const features = [
    { icon: <Palette className="w-6 h-6" />, title: "تصميم مخصص", desc: "تصاميم فريدة تناسب هويتك التجارية" },
    { icon: <Shield className="w-6 h-6" />, title: "الأمان والحماية", desc: "حماية متقدمة لموقعك وبياناتك" },
    { icon: <Globe className="w-6 h-6" />, title: "سرعة فائقة", desc: "تحميل سريع وأداء محسن للسيو" },
    { icon: <Headphones className="w-6 h-6" />, title: "دعم متواصل", desc: "فريق دعم فني محترف على مدار الساعة" }
  ]

  return (
    <div className="md:py-24 py-8 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 ">
        {/* Hero Section */}
        <div className="text-center ">
          {/* <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">أفضل حلول إنشاء المواقع في المنطقة</span>
          </div> */}
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            أنظمة إنشاء المواقع
            <br />
            <span className="text-3xl md:text-5xl text-primary dark:text-[#EC5252]">
              مع إديو نظام
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            نحن نقدم حلول متطورة وحديثة لإنشاء مواقع إلكترونية استثنائية تلبي كافة احتياجاتك التجارية والشخصية. 
            اختر النظام الذي يناسبك من بين خيارين مميزين مصممين خصيصاً لضمان نجاحك الرقمي.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-12 max-w-xs mx-auto md:grid-cols-4 md:max-w-7xl">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300 text-center min-h-[100px]"
              >
                <div className="text-primary dark:text-[#EC5252] mb-2">{feature.icon}</div>
                <div className="text-gray-900 dark:text-white font-semibold text-sm">{feature.title}</div>
                <div className="text-gray-600 dark:text-gray-300 text-xs">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Full Purchase System Card */}
          <div
            className="relative group cursor-pointer border border-gray-200 rounded-2xl p-8 hover:border-red-300 transition-all duration-300"
            onMouseEnter={() => setActiveCard('full')}
            onMouseLeave={() => setActiveCard(null)}
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <Star className="w-4 h-4 fill-current" />
                الأكثر شعبية
              </div>
            </div>

            <div className="text-center mb-8 pt-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">نظام الشراء الكامل</h3>
              <div className="text-4xl font-bold text-primary mb-2">
                ملكية كاملة
              </div>
              <p className="text-gray-600">دفعة واحدة - ملكية مدى الحياة</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "دفع تكلفة الإنشاء لمرة واحدة فقط",
                "تصميم حصري ومميز حسب طلبك الخاص",
                "دعم فني مجاني متواصل لمدة 6 أشهر",
                "دعم فني متقدم بتكلفة رمزية بعد 6 أشهر",
                "ترخيص الملكية الكاملة للموقع مدى الحياة",
                "تصميم متجاوب مع جميع الأجهزة والشاشات",
                "تحسين محركات البحث SEO متقدم",
                "شهادة SSL مجانية للحماية الكاملة"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700 dark:text-white">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group">
              عرض التفاصيل والأسعار
              <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Annual Subscription System Card */}
          <div
            className="relative group cursor-pointer border border-gray-200 rounded-2xl p-8 hover:border-red-300 transition-all duration-300"
            onMouseEnter={() => setActiveCard('subscription')}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">نظام الاشتراك السنوي</h3>
              <div className="text-4xl font-bold text-primary mb-2">
                خدمة شاملة
              </div>
              <p className="text-gray-600">اشتراك سنوي - خدمات متكاملة</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "اشتراك سنوي شامل جميع الخدمات",
                "تصميم احترافي مخصص حسب رغبتك",
                "خصوصية وأمان كامل لبياناتك",
                "دعم فني مجاني مدى فترة الاشتراك",
                "تصميم متجاوب مع كافة الأجهزة",
                "خدمات متنوعة ومتطورة باستمرار",
                "نسخ احتياطي أسبوعي للموقع",
                "تحديثات مجانية ومستمرة"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700 dark:text-white">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Link href={"/YearlyPlan"} className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group">
              عرض التفاصيل والأسعار
              <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-red-50 dark:bg-gray-900 border border-red-200 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            هل أنت مستعد لبناء موقعك المثالي؟
          </h2>
          <p className="text-xl text-gray-600 dark:text-white mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف العملاء الذين وثقوا بنا لبناء حضورهم الرقمي المتميز
          </p>
          <button className="bg-primary hover:bg-red-700 text-white  font-bold py-4 px-12 rounded-xl transition-all duration-300 text-lg">
            ابدأ رحلتك الآن
          </button>
        </div>
      </div>
    </div>
  )
}

export default WebsiteBuilderSystem