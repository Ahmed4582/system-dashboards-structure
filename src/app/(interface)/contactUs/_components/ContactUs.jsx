// import { MapPin, Phone, Mail, Clock } from "lucide-react";

// export default function ContactUs() {
//   return (
//     <div className=" bg-gray-50 dark:bg-gray-900 p-4 flex items-center justify-center">
//       <div className="max-w-5xl w-full py-30">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
//             Contact Us Easily at Any Time!
//           </h1>
//           <p className="text-gray-600 dark:text-gray-300">
//             We're here to help you with any questions or concerns
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Contact Information */}
//           <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
//             <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
//               Contact Information
//             </h2>
            
//             <div className="space-y-6">
//               {/* Address */}
//               <div className="flex items-start space-x-4">
//                 <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
//                   <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h3>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     14 Tahrir Street, next to Cairo Bank<br />
//                     New Cairo City<br />
//                     Cairo, Egypt
//                   </p>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start space-x-4">
//                 <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
//                   <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     +1 (308) 321 321<br />
//                     +020123456789
//                   </p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-start space-x-4">
//                 <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
//                   <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     example@gmail.com<br />
//                     info@alphas.com
//                   </p>
//                 </div>
//               </div>

//               {/* Working Hours */}
//               <div className="flex items-start space-x-4">
//                 <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-lg">
//                   <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Working Hours</h3>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     Saturday - Thursday: 9:00 AM to 5:00 PM<br />
//                     Friday: Closed
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
//             <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
//               Send us a Message
//             </h2>
            
//             <div className="space-y-6">
//               {/* Name */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
//                   placeholder="Enter your full name"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
//                   placeholder="Enter your email address"
//                 />
//               </div>

//               {/* Phone */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
//                   placeholder="Enter your phone number"
//                 />
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   rows={4}
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
//                   placeholder="Write your message here..."
//                 ></textarea>
//               </div>

//               {/* Submit Button */}
//               <button
//                 className="w-full bg-[#142027]  dark:bg-[#D7B483]  text-white dark:text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
//               >
//                 Send Message
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client"
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('تم إرسال الرسالة بنجاح!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header with Image */}
      <div className="relative w-full h-64 md:h-72 flex items-center justify-center overflow-hidden">
        <img
          src="/images/heroConsultions.jpg"
          alt="صورة تواصل معنا"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="relative z-20 container mx-auto px-6 py-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight text-center">
            تواصل معنا
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-center">
            يسعدنا تواصلك معنا في أي وقت. نحن هنا للإجابة على جميع استفساراتك ومساعدتك.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-white/20">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">أرسل لنا رسالة</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-white/70 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  placeholder="اسمك الكامل"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/30 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/70 focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-white/20 transition-all"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-white/70 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="البريد الإلكتروني"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/30 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/70 focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-white/20 transition-all"
                />
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-6 text-gray-400 dark:text-white/70 w-5 h-5" />
                <textarea
                  name="message"
                  placeholder="اكتب رسالتك هنا..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/30 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/70 focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-white/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#EC5252]  text-white  font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 "
              >
                <Send className="w-5 h-5" />
                إرسال الرسالة
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">معلومات التواصل</h3>
              <p className="text-gray-700 dark:text-white/90 mb-8 leading-relaxed text-center">
                جاهزون لمساعدتك في أي وقت. تواصل معنا عبر الطرق التالية:
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-white/70 text-sm">البريد الإلكتروني</p>
                    <p className="text-gray-900 dark:text-white font-semibold">hello@company.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-white/70 text-sm">رقم الهاتف</p>
                    <p className="text-gray-900 dark:text-white font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-white/70 text-sm">العنوان</p>
                    <p className="text-gray-900 dark:text-white font-semibold">123 شارع الأعمال<br />المدينة، الدولة 12345</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Office Hours */}
            <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">ساعات العمل</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-white/70">الاثنين - الجمعة</span>
                  <span className="text-gray-900 dark:text-white font-semibold">9:00 ص - 6:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-white/70">السبت</span>
                  <span className="text-gray-900 dark:text-white font-semibold">10:00 ص - 4:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-white/70">الأحد</span>
                  <span className="text-gray-900 dark:text-white font-semibold">مغلق</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto shadow-2xl border border-gray-200 dark:border-white/20">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            هل أنت مستعد لبدء مشروعك؟
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-white/90 mb-8 max-w-2xl mx-auto">
            دعنا نناقش أفكارك ونحولها إلى واقع. نحن متحمسون للعمل معك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-100 dark:bg-primary   text-blue-900 dark:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm border border-blue-200 ">
              احجز مكالمة
            </button>
            <Link href={"/protofolio"} className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-gray-300 dark:border-white/50">
              عرض الأعمال السابقة
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}