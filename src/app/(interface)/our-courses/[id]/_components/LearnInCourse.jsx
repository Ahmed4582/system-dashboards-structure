import React from 'react';
import { Check, Play } from 'lucide-react';

export default function LearnInCourse() {
  const learningPoints = [
    {
      title: "Correct Pronunciation (Makharij)",
      description: "Learn how to pronounce each Arabic letter from its proper point of articulation."
    },
    {
      title: "Tajweed Rules Simplified",
      description: "Understand and apply the essential rules of Tajweed including Idgham, Ikhfa, Qalqalah, and more."
    },
    {
      title: "Fluency in Recitation",
      description: "Develop smooth, confident recitation with the right pace, rhythm, and tone."
    },
    {
      title: "Common Recitation Mistakes",
      description: "Identify and fix common errors made while reading the Quran."
    },
    {
      title: "Memorization Support (Optional)",
      description: "Tips and guidance for starting or improving your Hifz journey."
    },
    {
      title: "Practical Application",
      description: "Recite verses during live sessions and receive feedback from your teacher."
    },
    {
      title: "Spiritual Connection",
      description: "Build a deeper, more meaningful connection with the Quran as you improve your recitation."
    },
    {
      title: "Confidence & Consistency",
      description: "Gain the confidence to recite in prayer and public settings with regular practice."
    }
  ];

  const targetAudience = [
    "Non-Arabic speaking Muslims",
    "Beginners in Quran recitation",
    "Students who want to improve their Tajweed",
    "Adults and children seeking structured, teacher-guided learning"
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-teal-500 transition-colors duration-300">
      <div className="max-w-[95%] mx-auto p-6">
        {/* Main Content */}
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
          
          {/* What You'll Learn Section */}
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#2E4856] dark:text-[#D7B483]">
              What You'll Learn:
            </h2>
            
            <div className="space-y-4">
              {learningPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#2E4856] dark:bg-[#D7B483] rounded-sm flex items-center justify-center mt-0.5">
                    <Check size={14} className="text-white" />
                  </div>
                  <div>
                   
                    <span className="ml-2 text-gray-600 dark:text-white">
                      {point.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

         

          {/* Who This Course Is For Section */}
          <div className="p-8 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-600">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-[#D7B483]">
              Who This Course Is For:
            </h2>
            
            <div className="space-y-3">
              {targetAudience.map((audience, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 dark:bg-white rounded-full"></div>
                  <span className="text-gray-700 dark:text-white">
                    {audience}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
       
      </div>
    </div>
  );
}