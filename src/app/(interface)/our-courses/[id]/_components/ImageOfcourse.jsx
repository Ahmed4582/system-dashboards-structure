"use client"
import { Star, Users, Calendar, Globe, MapPin, Layers } from 'lucide-react';
import Link from 'next/link';

// Dummy data
const dummyCourseData = {
  id: 1,
  title: {
    en: "Complete UI/UX Design Masterclass",
    ar: "دورة تصميم واجهات المستخدم الشاملة"
  },
  description: {
    en: "Master the fundamentals of user interface and user experience design. Learn industry-standard tools like Figma, Adobe XD, and Sketch. This comprehensive course covers design thinking, wireframing, prototyping, and user testing. Perfect for beginners and intermediate designers looking to advance their skills.",
    ar: "اتقن أساسيات تصميم واجهة المستخدم وتجربة المستخدم"
  },
  big_image: "course-ui-ux.jpg",
  rate: 4.8,
  category: {
    title: {
      en: "UI/UX Design",
      ar: "تصميم واجهات المستخدم"
    }
  },
  students_count: 1250,
  duration: "12 weeks",
  level: "Beginner to Intermediate",
  price: 299,
  status: 1
};

export default function ImageOfcourse({ courseDetails = dummyCourseData }) {
  // Use dummy data if no courseDetails provided
  const courseData = courseDetails || dummyCourseData;
  
  return (
    <div className='bg-white dark:bg-gray-800 w-full mx-auto transition-colors duration-300'>
      <div className="mx-auto px-4 sm:px-6 max-w-[95%] lg:px-8 bg-white dark:bg-gray-800 pt-20 sm:pt-24 md:pt-32 lg:pt-40 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start lg:items-stretch">
          {/* Left side - Course image */}
          <div className="order-1 lg:order-1">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-900/50 h-64 sm:h-80 md:h-96 lg:h-full">
              <img 
                src={`/images/${courseData.big_image}`}
                alt={courseData.title?.en || "Course Image"}
                className="w-full h-full object-cover"
              />
              {/* Fallback placeholder if image fails to load */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <Layers className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold opacity-75">Course Preview</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Course details */}
          <div className="order-2 lg:order-2 flex flex-col justify-between space-y-4 sm:space-y-6 h-full">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300 leading-tight">
                  {courseData?.title?.en || "Course Title"}
                </h1>
                <div className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify transition-colors duration-300">
                  {courseData?.description?.en || "Course description will appear here..."}
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  {courseData?.rate || 4.0}
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)]?.map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-colors duration-300 ${
                        i < Math.round(courseData?.rate || 4) 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'fill-gray-300 text-gray-300 dark:fill-gray-600 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                  ({courseData?.students_count || 0} students)
                </span>
              </div>

              {/* Course details */}
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 dark:text-teal-400 flex-shrink-0 transition-colors duration-300" />
                  <span className="font-medium">Category:</span>
                  <span className="truncate">{courseData?.category?.title?.en || "General"}</span>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 dark:text-blue-400 flex-shrink-0 transition-colors duration-300" />
                  <span className="font-medium">Students:</span>
                  <span>{courseData?.students_count || 0} enrolled</span>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 flex-shrink-0 transition-colors duration-300" />
                  <span className="font-medium">Duration:</span>
                  <span>{courseData?.duration || "Self-paced"}</span>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 dark:text-orange-400 flex-shrink-0 transition-colors duration-300" />
                  <span className="font-medium">Level:</span>
                  <span>{courseData?.level || "All levels"}</span>
                </div>
              </div>

              {/* Price */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    Course Price:
                  </span>
                  <span className="text-2xl font-bold text-[#2E4856] dark:text-[#D7B483]">
                    ${courseData?.price || 0}
                  </span>
                </div>
              </div>
            </div>

            {/* Enroll button */}
            <div className="pt-2 sm:pt-4">
              <button
                disabled={courseData?.status !== 1}
                className={`inline-block w-full sm:w-auto text-center bg-[#2E4856] dark:bg-[#2E4856]
                           text-white font-semibold py-3 px-4 sm:px-6 lg:py-4 lg:px-8 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl 
                         
                           transform hover:scale-105 transition-all duration-200 text-sm sm:text-base lg:text-lg
                           ${courseData?.status === 0 ? 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-lg dark:opacity-60' : 'cursor-pointer '}`}
              >
                {courseData?.status === 1 ? 'Enroll in Course' : 'Course Unavailable'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}