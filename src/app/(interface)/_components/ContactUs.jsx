"use client"
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className=' dark:bg-gray-900 ' dir="rtl">
    <div className="max-w-[95%] mx-auto p-4  md:p-8   flex items-center justify-center" >
      <div className="w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
        <div className="border-2 border-dashed border-primary dark:border-primary-90 p-4 sm:p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-2">
              تواصل معنا بسهولة، الآن!
            </h1>
            <p className="text-gray-500 dark:text-gray-300 text-base sm:text-lg">نحن هنا لمساعدتك والإجابة على أي سؤال قد يكون لديك.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                معلومات الاتصال
              </h2>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">العنوان</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    14، الحي الثامن، بجوار بنك القاهرة<br />
                    مدينة نصر<br />
                    القاهرة، مصر
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-600 dark:text-gray-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">الهاتف</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    +1 (308) 321 321<br />
                    +02012345678
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">البريد الإلكتروني</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    example@gmail.com<br />
                    info@alpha5.com
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-600 dark:text-gray-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">ساعات العمل</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    السبت - الخميس: 9:00 صباحاً إلى 5:00 مساءً<br />
                    الجمعة: مغلق
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                أرسل لنا رسالة!
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 outline-none transition-colors shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 outline-none transition-colors shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400"
                    placeholder="أدخل عنوان بريدك الإلكتروني"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    الهاتف
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 outline-none transition-colors shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400"
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    الرسالة
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 outline-none transition-colors shadow-sm resize-vertical bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none shadow-md dark:bg-primary dark:hover:bg-primary-90"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}