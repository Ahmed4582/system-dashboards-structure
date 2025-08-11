"use client";
import React, { useState, useEffect } from "react";
import { usePopup } from "../_context/PopupContext";

// Enhanced SVG Flag Components
const EgyptFlag = () => (
  <svg width="28" height="20" viewBox="0 0 28 20" className="rounded-md shadow-lg border border-white/20">
    <defs>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.1"/>
      </filter>
    </defs>
    <rect width="28" height="6.67" fill="#CE1126"/>
    <rect y="6.67" width="28" height="6.67" fill="#FFFFFF"/>
    <rect y="13.33" width="28" height="6.67" fill="#000000"/>
    <g transform="translate(14,10)" filter="url(#shadow)">
      <circle r="3" fill="#FFD700" stroke="#DAA520" strokeWidth="0.3"/>
      <path d="M-1.8,-1.2 L1.8,-1.2 L0.6,1.2 L-0.6,1.2 Z" fill="#8B4513"/>
      <circle r="0.4" fill="#000" cx="0" cy="-0.6"/>
    </g>
  </svg>
);

const SaudiFlag = () => (
  <svg width="28" height="20" viewBox="0 0 28 20" className="rounded-md shadow-lg border border-white/20">
    <defs>
      <filter id="shadowSA" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.2"/>
      </filter>
    </defs>
    <rect width="28" height="20" fill="#006C35"/>
    <g transform="translate(14,10)" filter="url(#shadowSA)">
      <text x="0" y="1" textAnchor="middle" fill="white" fontSize="6" fontFamily="Arial, sans-serif" fontWeight="bold">
        لا إله إلا الله
      </text>
      <path d="M-7,3 L7,3 L6,5 L-6,5 Z" fill="white"/>
    </g>
  </svg>
);

const UAEFlag = () => (
  <svg width="28" height="20" viewBox="0 0 28 20" className="rounded-md shadow-lg border border-white/20">
    <rect width="7" height="20" fill="#FF0000"/>
    <rect x="7" width="21" height="6.67" fill="#00A859"/>
    <rect x="7" y="6.67" width="21" height="6.67" fill="#FFFFFF"/>
    <rect x="7" y="13.33" width="21" height="6.67" fill="#000000"/>
  </svg>
);

const USAFlag = () => (
  <svg width="28" height="20" viewBox="0 0 28 20" className="rounded-md shadow-lg border border-white/20">
    <rect width="28" height="20" fill="#FFFFFF"/>
    {[0,2,4,6,8,10,12].map(i => (
      <rect key={i} y={i*1.54} width="28" height="1.54" fill="#B22234"/>
    ))}
    <rect width="11.2" height="10.77" fill="#3C3B6E"/>
    {Array.from({length: 50}, (_, i) => {
      const row = Math.floor(i / 6);
      const col = i % 6;
      return (
        <circle 
          key={i} 
          cx={1.2 + col * 1.5} 
          cy={1 + row * 1} 
          r="0.25" 
          fill="white"
        />
      );
    })}
  </svg>
);

export default function PopupForm() {
  const { isOpen, closePopup } = usePopup();
     
  const countries = [
    { code: "+20", name: "Egypt", flag: <EgyptFlag /> },
    { code: "+966", name: "Saudi Arabia", flag: <SaudiFlag /> },
    { code: "+971", name: "UAE", flag: <UAEFlag /> },
    { code: "+1", name: "USA", flag: <USAFlag /> },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Enhanced click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.country-dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isDropdownOpen]);

  // Enhanced country detection with error handling
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (response.ok) {
          const data = await response.json();
          const country = countries.find((c) => 
            c.name.toLowerCase().includes(data.country_name?.toLowerCase()) || 
            data.country_code === 'EG' && c.name === 'Egypt' ||
            data.country_code === 'SA' && c.name === 'Saudi Arabia' ||
            data.country_code === 'AE' && c.name === 'UAE' ||
            data.country_code === 'US' && c.name === 'USA'
          );
          if (country) setSelectedCountry(country);
        }
      } catch (error) {
        console.log("Could not detect country:", error);
      }
    };
    
    detectCountry();
  }, []);

  // Enhanced form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone.replace(/[\s-()]/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log({
        ...formData,
        phone: `${selectedCountry.code}${formData.phone}`,
        country: selectedCountry.name,
      });
      
      // Success feedback
      closePopup();
      // You could add a success toast here
      
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black/80 via-black/90 to-black/95 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-in fade-in duration-300">
      <div 
        className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-full max-w-md mx-auto border border-white/20 dark:border-gray-700/50 transform animate-in zoom-in-95 duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
              Enter Your Details
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              We'll get back to you shortly
            </p>
          </div>
          <button 
            onClick={closePopup}
            className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Full Name *
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-4 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-800/50 dark:text-white transition-all duration-200 placeholder-gray-400 backdrop-blur-sm ${
                  errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 dark:border-gray-600'
                }`}
                
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Email Address *
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-4 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-800/50 dark:text-white transition-all duration-200 placeholder-gray-400 backdrop-blur-sm ${
                  errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 dark:border-gray-600'
                }`}
                
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Phone Input with Enhanced Country Selector */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Phone Number *
            </label>
            
            {/* Country Sele ctor */}
            <div className="  flex items-center ">        
                   <div className="space-y-2">
              <div className="country-selector country-dropdown-container relative">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  className={`w-full flex items-center justify-between gap-3 bg-gray-50/80 dark:bg-gray-700/50 p-4 rounded-xl border-2 hover:bg-gray-100/80 dark:hover:bg-gray-600/50 transition-all duration-200 backdrop-blur-sm ${
                    isDropdownOpen ? 'border-blue-500 ring-4 ring-blue-500/20' : 'border-gray-200 dark:border-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-3 w-[60px]">
                    {selectedCountry.flag}
                    <span className="text-[12px] font-semibold text-gray-700 dark:text-gray-300">
                      {selectedCountry.code}
                    </span>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor" className={`transform transition-transform duration-200 text-gray-500 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                    <path d="M6 8L2 4h8l-4 4z"/>
                  </svg>
                </button>

                {/* Country Options */}
                {isDropdownOpen && ( 
                  <div className="absolute w-[200px]  top-full left-0 right-0 mt-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-600/50 rounded-xl shadow-xl max-h-48 overflow-y-auto z-50">

                    {countries.map((country, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          setSelectedCountry(country);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-4 px-4 py-3 hover:bg-gray-50/80 dark:hover:bg-gray-700/50 transition-all duration-150 text-left first:rounded-t-xl last:rounded-b-xl"
                      >
                        {country.flag}
                        <div className="flex flex-col flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                              {country.code}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {country.name}
                            </span>
                          </div>
                        </div>
                        {selectedCountry.code === country.code && (
                          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Phone Number Input */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full  p-4 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-800/50 dark:text-white transition-all duration-200 placeholder-gray-400 backdrop-blur-sm ${
                  errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 dark:border-gray-600'
                }`}
                
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          </div>
 

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={closePopup}
              disabled={isLoading}
              className="flex-1 px-6 py-4 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 font-semibold backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:via-blue-600 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Submit
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}