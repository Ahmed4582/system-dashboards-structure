import React from "react";
import { Search } from "lucide-react";

export default function ArabicEducationHeader() {
  return (
    <div className={`transition-colors  pt-20 g-gray-50 dark:bg-gray-900  `}>
      <div className="bg-gray-50 dark:bg-gray-900 max-w-[95%] mx-auto ">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm my-4">
          <div className=" px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo/Title */}
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Educational Courses
                </h1>
              </div>

              {/* Search Bar */}
              <div className="flex-1 max-w-md mx-8 ">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="البحث عن دورة..."
                    className="w-full px-4 py-2 pr-10 text-right bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    dir="rtl"
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className=" px-4 sm:px-6 lg:px-8 ">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 dark:from-gray-900 dark:to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}

            <div className="relative px-8 sm:px-12 py-2">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Enrole Now !
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                    And get up to 50% off on all courses
                  </p>

                  <button className="bg-white hover:bg-gray-100 text-slate-800 font-bold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg">
                    Enrole Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
