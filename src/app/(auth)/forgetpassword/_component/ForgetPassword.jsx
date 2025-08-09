"use client"
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function ForgetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
   
  };

  return (
    <div className="min-h-screen flex flex-row ">
      {/* Left Column - Illustration */}
      <div className="flex-1 flex items-center justify-center p-8" style={{ backgroundColor: '#8A22BF' }}>
        <div className="rounded-2xl p-8 transform transition-transform duration-300">
          <img src='/images/forget.png' />
        </div>
      </div>
      {/* Right Column - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">إعادة تعيين كلمة المرور</h1>
          <label className="block text-sm font-medium text-gray-700 mb-2 text-right w-full">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 mb-4"
            placeholder="أدخل بريدك الإلكتروني"
            required
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-3 px-4 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
            style={{ backgroundColor: '#8A22BF' }}
          >
            إعادة تعيين
          </button>
          <div className="text-center mt-4">
            <span className="text-gray-600 text-sm">ليس لديك حساب؟ </span>
            <Link href="/register" className="text-purple-600 hover:text-purple-800 font-medium text-sm">تسجيل</Link>
            <span className="text-gray-600 text-sm"> أو قم بالعودة إلى </span>
            <Link href="/login" className="text-purple-600 hover:text-purple-800 font-medium text-sm">تسجيل الدخول</Link>
          </div>
        </div>
      </div>
    </div>
  );
}