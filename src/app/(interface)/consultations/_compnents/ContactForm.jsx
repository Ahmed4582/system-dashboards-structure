"use client"
import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4" >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="inline-block w-full md:w-[180px] text-center bg-red-100 dark:bg-red-900 text-primary dark:text-red-200 px-4 py-2 md:rounded-full ronded-md text-sm font-medium mb-4">
                تواصل معنا
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                اطلب استشارتنا التسويقية
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                هل أنت مستعد لتنمية أعمالك؟ قم بتعبئة النموذج
                وسيتواصل معك فريقنا خلال 24 ساعة.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 space-x-reverse">
                <div className="bg-red-100 dark:bg-red-900 p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-primary dark:text-red-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">العنوان</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    14 شارع التأمين بجانب بنك القاهرة
                    <br />
                    مدينة نصر
                    <br />
                    القاهرة، مصر
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 space-x-reverse">
                <div className="bg-red-100 dark:bg-red-900 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-primary dark:text-red-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">الهاتف</h3>
                  <div className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <p>+1 (308) 371 321</p>
                    <p>+20123456789</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 space-x-reverse">
                <div className="bg-red-100 dark:bg-red-900 p-3 rounded-full">
                  <Mail className="w-5 h-5 text-primary dark:text-red-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">البريد الإلكتروني</h3>
                  <div className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <p>example@gmail.com</p>
                    <p>info@alphas.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-primary dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white dark:text-red-200 mb-6 text-center">
              الاسم الكامل
            </h2>
            
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-40 border border-white border-opacity-30 dark:border-gray-700 dark:border-opacity-50 rounded-lg text-black dark:text-white placeholder-white dark:placeholder-gray-300 placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-red-200 focus:ring-opacity-50 focus:border-transparent"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              {/* Email */}
              <div>
                <h3 className="text-white dark:text-red-200 font-semibold mb-2">البريد الإلكتروني</h3>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-40 border border-white border-opacity-30 dark:border-gray-700 dark:border-opacity-50 rounded-lg text-white dark:text-white placeholder-white dark:placeholder-gray-300 placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-red-200 focus:ring-opacity-50 focus:border-transparent"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              {/* Message */}
              <div>
                <h3 className="text-white dark:text-red-200 font-semibold mb-2">الرسالة</h3>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-white bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-40 border border-white border-opacity-30 dark:border-gray-700 dark:border-opacity-50 rounded-lg text-white dark:text-white placeholder-white dark:placeholder-gray-300 placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-red-200 focus:ring-opacity-50 focus:border-transparent resize-none"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-white dark:bg-red-500 text-red-500 dark:text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-red-200 focus:ring-opacity-50"
              >
                إرسال الرسالة
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;