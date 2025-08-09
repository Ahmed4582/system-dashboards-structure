"use client";
import React, { useState } from "react";
import {
  Moon,
  Sun,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Star,
  Users,
  BookOpen,
} from "lucide-react";

export default function TeacherList() {
  const teachers = [
    {
      id: 1,
      name: "Omar Al-Farisi",
      title: "Senior Arabic Teacher",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      description:
        "He has been teaching Arabic to non-native speakers since 2011 and has taught hundreds of students from various parts of the world. Specializes in Modern Standard Arabic and classical texts.",
      rating: 4.9,
      students: 342,
      experience: "12 years",
      email: "omar.farisi@email.com",
      phone: "+1 (555) 123-4567",
      location: "Cairo, Egypt",
      subjects: ["Arabic", "Islamic Studies", "Literature"],
    },
    {
      id: 2,
      name: "Fatima Hassan",
      title: "French Language Specialist",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      description:
        "Native French speaker with expertise in business French and conversation. Has worked with international companies and diplomatic missions to provide language training.",
      rating: 4.8,
      students: 198,
      experience: "8 years",
      email: "fatima.hassan@email.com",
      phone: "+1 (555) 234-5678",
      location: "Paris, France",
      subjects: ["French", "Business Communication", "Translation"],
    },
    {
      id: 3,
      name: "David Chen",
      title: "Mandarin & Culture Expert",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      description:
        "Certified Mandarin instructor with deep knowledge of Chinese culture and history. Helps students understand not just the language but the cultural context behind it.",
      rating: 4.7,
      students: 276,
      experience: "10 years",
      email: "david.chen@email.com",
      phone: "+1 (555) 345-6789",
      location: "Beijing, China",
      subjects: ["Mandarin", "Chinese Culture", "HSK Preparation"],
    },
    {
      id: 4,
      name: "Maria Rodriguez",
      title: "Spanish Literature Professor",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      description:
        "PhD in Spanish Literature with 15 years of teaching experience. Passionate about helping students explore the rich literary traditions of Spanish-speaking countries.",
      rating: 4.9,
      students: 421,
      experience: "15 years",
      email: "maria.rodriguez@email.com",
      phone: "+1 (555) 456-7890",
      location: "Madrid, Spain",
      subjects: ["Spanish", "Literature", "Creative Writing"],
    },
  ];

  return (
    <div
      className={` transition-colors duration-300 min-h-screen bg-gray-0  dark:bg-gray-900  py-20  `}
    >
      <div className="  p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Meet Our Teachers
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Discover expert educators from around the world
              </p>
            </div>
          </div>
        </div>

        {/* Teacher Cards Grid */}
        <div className="max-w-[95%]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white dark:bg-gray-900 border border-gray-50 rounded-xl shadow-md p-4 flex items-center gap-4 transition hover:shadow-lg"
            >
              {/* صورة المعلم */}
              <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-white">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* محتوى النص */}
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-800 dark:text-white">
                  {teacher.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {teacher.title}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-200 mt-1 line-clamp-2">
                  {teacher.description}
                </p>

                <div className="mt-2">
                  <button className="text-sm font-medium text-blue-600 dark:text-white hover:underline">
                    view details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
