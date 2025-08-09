"use client"
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FqsList() {
  const [expandedCards, setExpandedCards] = useState(new Set());

  const toggleCard = (index) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  const faqItems = [
    {
      question: "How can I subscribe to the platform?",
      answer: "You can subscribe by creating a new account and clicking the sign-up button on the homepage."
    },
    {
      question: "Can I learn according to my own schedule?",
      answer: "Yes, you can access all lessons and materials anytime, allowing you to learn at your own pace."
    },
    {
      question: "Is the platform free or paid?",
      answer: "The platform offers a basic free plan and advanced paid plans with more features."
    },
    {
      question: "Is there technical support if I face an issue?",
      answer: "Yes, a dedicated support team is available 24/7 to help you with any issues."
    },
    {
      question: "Are there teachers available for live lessons?",
      answer: "Yes, we provide specialized teachers for live and interactive sessions."
    },
    {
      question: "Can I get a certificate?",
      answer: "Of course, you can receive an accredited certificate after successfully completing the course and passing the required tests."
    },
    {
      question: "Do you offer certificates?",
      answer: "Yes, we offer accredited certificates to students who successfully complete the courses."
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="bg-white dark:bg-gray-900 min-h-screen py-20">
        {/* Header */}
        <div className="bg-white dark:bg-gray-900 dark:text-white text:black  p-6 text-center relative">
          <h1 className="text-2xl font-bold mb-2">What is Bayan Platform?</h1>
          <p className="text-back dark:text-blue-200 text-sm leading-relaxed max-w-4xl mx-auto">
            Bayan is an educational platform specialized in teaching the Holy Quran and its sciences interactively using the latest technologies to help learners improve their recitation, memorization, and understanding of the Holy Book.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="max-w-4xl mx-auto p-6 flex flex-col gap-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleCard(index)}
                className="w-full p-4 text-left flex items-center justify-between bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {item.question}
                </span>
                <div className="flex-shrink-0 ml-3">
                  {expandedCards.has(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  )}
                </div>
              </button>
              {expandedCards.has(index) && (
                <div className="px-4 pb-4 bg-gray-50 dark:bg-gray-800">
                  <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center p-6 text-gray-500 dark:text-gray-400 text-sm">
          <p>Have more questions? Contact us via email or live chat.</p>
        </div>
      </div>
    </div>
  );
}