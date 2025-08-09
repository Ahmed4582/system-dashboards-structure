"use client"
import { useState } from 'react';
import { Star } from 'lucide-react';

const ProtofolioCard = ({ image, title, subtitle, description, rating, buttonText }) => {
  return (
    <div 
      className="relative rounded-md w-[320px] h-80 overflow-hidden cursor-pointer transition-all duration-500 p-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 group hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Background Image */}
      <img 
        src={image} 
        alt="Portfolio Background"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500" 
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black z-10 transition-all duration-500 opacity-60 group-hover:opacity-70" />
      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-4 text-center">
        {/* العنوان الرئيسي */}
        <h2 className="text-white text-2xl font-bold mb-1 drop-shadow-lg tracking-wide">
          {title}
        </h2>
        {/* العنوان الفرعي */}
        <h3 className="text-orange-400 text-lg font-bold mb-2 uppercase tracking-wider">
          {subtitle}
        </h3>
        {/* الوصف */}
        <p className="text-gray-200 text-sm leading-relaxed mb-4 max-w-xs mx-auto">
          {description.split('\n').map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </p>
        {/* النجوم */}
        <div className="flex justify-center mb-4">
          <div className="flex space-x-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        {/* الزر */}
        <button className="border-2 border-red-500 text-red-400 px-8 py-2 rounded-md bg-transparent hover:bg-red-500 hover:text-white transition-all duration-300 text-base font-bold tracking-wide shadow-md">
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default ProtofolioCard
