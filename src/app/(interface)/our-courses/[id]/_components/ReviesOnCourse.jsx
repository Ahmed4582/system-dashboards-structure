"use client";
import React from 'react';
import { Star } from 'lucide-react';

const ReviewsOnCourse = () => {
  const reviews = [
    {
      id: 1,
      name: "Mohamed Ibrahim",
      rating: 4.6,
      text: "An excellent experience — the structure is professional, and the virtual sessions helped me easily understand the concepts. The lessons are rich with information and practical application.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Mohamed Ibrahim",
      rating: 4.6,
      text: "An excellent experience — the structure is professional, and the virtual sessions helped me easily understand the concepts. The lessons are rich with information and practical application.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Mohamed Ibrahim",
      rating: 4.6,
      text: "An excellent experience — the structure is professional, and the virtual sessions helped me easily understand the concepts. The lessons are rich with information and practical application.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className="w-4 h-4 fill-yellow-400 text-yellow-400"
      />
    ));
  };

  return (
    <div className="min-h-screen p-6 transition-colors duration-300 dark:bg-gray-900 bg-gray-50">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Student Reviews
        </h1>
        <div className="w-16 h-1 bg-[#2E4856] dark:bg-[#D7B483] mx-auto rounded-full"></div>
      </div>

      {/* Reviews Container */}
      <div className="max-w-[95%] mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-[#2E4856] dark:border-[#D7B483] overflow-hidden">
          {reviews.map((review, index) => (
            <div key={review.id} className={`p-6 ${index !== reviews.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''}`}>
              <div className="flex items-start gap-4">
                
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-gray-800 dark:text-white text-lg">
                        {review.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-2">
                          {review.rating}/5
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {review.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        {/* <div className="mt-8 flex justify-center">
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ReviewsOnCourse;
