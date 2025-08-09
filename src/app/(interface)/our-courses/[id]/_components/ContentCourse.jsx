import React from 'react';
import { FileText, Download, Lock } from 'lucide-react';

const CourseContentSection = () => {
  const courseItems = [
    {
      title: "Proper Pronunciation Methods for Arabic Letters",
      pages: 5,
      size: "12 MB",
      type: "pdf",
      locked: false,
      contentPreview: "Content Preview"
    },
    {
      title: "Proper Pronunciation Methods for Arabic Letters",
      pages: 5,
      size: "12 MB",
      type: "pdf",
      locked: false,
      contentPreview: "Content Preview"
    },
    {
      title: "Proper Pronunciation Methods for Arabic Letters",
      pages: 5,
      size: "12 MB",
      type: "pdf",
      locked: true,
      contentPreview: null
    },
    {
      title: "Proper Pronunciation Methods for Arabic Letters",
      pages: 5,
      size: "12 MB",
      type: "pdf",
      locked: true,
      contentPreview: null
    },
    {
      title: "Proper Pronunciation Methods for Arabic Letters",
      pages: 5,
      size: "12 MB",
      type: "pdf",
      locked: true,
      contentPreview: null
    }
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-[95%] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
          <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            Course Content
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Access your learning materials and resources
          </p>
        </div>

        {/* Course Items */}
        <div className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800">
          {courseItems.map((item, index) => (
            <div
              key={index}
              className="p-4 border-b last:border-b-0 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="space-y-3">
                {/* First row - File info and lock */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {item.locked && (
                      <Lock className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    )}
                    
                    {/* File info */}
                    <div className="flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-blue-600 dark:text-[#D7B483]" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {item.pages} pages
                      </span>
                    </div>
                    
                    {/* Size info */}
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {item.size} {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Content preview */}
                  <div>
                    {item.contentPreview && (
                      <button className="text-sm px-3 py-1 rounded text-blue-600 dark:text-[#D7B483] hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                        {item.contentPreview}
                      </button>
                    )}
                  </div>
                </div>

                {/* Second row - Title */}
                <div className="text-center">
                  <h3 className={`font-semibold ${
                    item.locked 
                      ? 'text-gray-400 dark:text-gray-500'
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}

          {/* Download More Button */}
          <div className="p-6 text-center">
            <button className="px-8 py-3 rounded-lg font-semibold bg-gray-900 dark:bg-[#D7B483] hover:bg-gray-800   text-white shadow-lg transition-all transform hover:scale-105">
              Download More from Course Content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContentSection;