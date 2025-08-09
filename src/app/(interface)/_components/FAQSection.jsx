"use client"
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection({show}) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "كيف يمكنني الوصول إلى خدمة العملاء؟",
      answer: "عند بناء موقع إلكتروني بالطريقة الصحيحة، يجب على أخصائي تحسين محركات البحث التركيز على ضمان هيكل موقع نظيف خلال مرحلة البحث، وبعد استخدام الموقع، يُعتبر ذلك عاملاً رئيسياً في استراتيجية التسويق عبر البحث. من المهم للعملاء معرفة أن البحث عن خدمات تحسين محركات البحث المتخصصة في تزايد وأن السوق ينمو، مما يعني أن الإنترنت أصبح مكانًا يمكن للجميع النجاح فيه، بشرط استخدام الاستراتيجيات التسويقية الصحيحة لتحقيق النجاح."
    },
    {
      question: "هل تواجه أي مشاكل أو صعوبات؟",
      answer: "نحن نقدم دعمًا شاملاً لمساعدتك في حل أي مشكلات تقنية قد تواجهها. فريقنا متاح لمساعدتك في استكشاف المشكلات وإيجاد الحلول."
    },
    {
      question: "كيف يمكنني التواصل مع الفريق؟",
      answer: "يمكنك التواصل مع فريقنا عبر عدة قنوات تشمل البريد الإلكتروني، الهاتف، الدردشة المباشرة، أو من خلال نموذج الاتصال. نحن نسعى للرد على جميع الاستفسارات بسرعة."
    },
    {
      question: "هل الموقع مجاني أم مدفوع؟",
      answer: "نحن نقدم خططًا مجانية ومدفوعة. النسخة المجانية تتضمن الميزات الأساسية، بينما تتيح الخطط المدفوعة ميزات متقدمة ودعمًا أولوياً."
    },
    {
      question: "كيف يمكنني بناء عملي الخاص؟",
      answer: "بدء عملك الخاص يتطلب تخطيطًا دقيقًا، وبحثًا في السوق، واستخدام الأدوات المناسبة. نحن نوفر الموارد والإرشادات لمساعدة رواد الأعمال على بناء أعمال ناجحة عبر الإنترنت."
    },
    {
      question: "كيف أبني الثقة والمصداقية لموقعي؟",
      answer: "بناء الثقة يتطلب تصميمًا احترافيًا، ومعلومات اتصال واضحة، وشهادات العملاء، وشهادات الأمان، وتقديم محتوى قيم ودقيق باستمرار."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-white dark:bg-gray-900  transform transition-all duration-500">
      {/* FAQ Section */}
      <div className="flex flex-col md:flex-row md:gap-8 mt-9 dark:mt-0 max-w-[85%] mx-auto ">
        {/* FAQ Questions */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center md:hidden block my-4">الأسئلة الشائعة</h2>
        <div className="flex-1 w-full md:w-auto">
          <div className="">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 px-2 ">
                <button
                  onClick={() => toggleQuestion(index)}
                  className={`w-full flex items-center justify-between text-left py-3 transition-colors ${openIndex === index ? 'bg-red-500 text-white rounded-md px-2 dark:bg-red-600 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'} `}
                >
                  <span className={`font-medium ${openIndex === index ? 'text-white dark:text-white' : 'text-gray-800 dark:text-gray-100'}`}>{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform ${openIndex === index ? 'text-white dark:text-white transform rotate-180' : 'text-red-500 dark:text-red-400'}`}
                  />
                </button>
                {openIndex === index && (
                  <div className="mt-3 text-gray-900 dark:text-gray-200 text-sm leading-relaxed animate-in slide-in-from-top-2 duration-200 bg-gray-50 dark:bg-gray-800 p-2 rounded-md">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Illustration */}
      { show &&  <div className="w-80 flex-col items-center hidden md:flex">
          <div className="relative">
            <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <HelpCircle className="w-12 h-12 text-blue-500 dark:text-blue-300" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-500 dark:bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">?</span>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">الأسئلة المتكررة</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              ابحث عن إجابات لأكثر الأسئلة شيوعًا حول خدماتنا. إذا لم تجد ما تبحث عنه، لا تتردد في التواصل معنا مباشرة للحصول على مساعدة مخصصة.
            </p>
          </div>
        </div>}
      </div>
    </div>
  );
}