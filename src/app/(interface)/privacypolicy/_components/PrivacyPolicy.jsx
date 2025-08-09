import React from 'react';
import { Shield, Eye, Lock, Users, Bell, Gavel } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className='bg-white dark:bg-gray-800 transform transition-all duration-500'>
    <div className="p-6 mx-auto max-w-7xl py-30 dark:py-30">
      <div className="mb-8 text-center">
        <Shield className="mx-auto mb-4 text-blue-600 dark:text-blue-400" size={48} />
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-100">سياسة الخصوصية</h1>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا ومشاركتنا لمعلوماتك الشخصية عند استخدامك لخدماتنا.
        </p>
      </div>

      <div className="space-y-8">
        {/* Section 1 */}
        <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="flex items-center mb-4 gap-2">
            <Eye className="mr-3 text-blue-600 dark:text-blue-400" size={24} />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">١. المعلومات التي نجمعها</h2>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-400">
            <li className="flex gap-2">
              <span className="inline-block flex-shrink-0 mt-2 mr-3 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              <span>معلومات التسجيل (مثل الاسم، عنوان البريد الإلكتروني)</span>
            </li>
            <li className="flex gap-2">
              <span className="inline-block flex-shrink-0 mt-2 mr-3 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              <span>بيانات الاستخدام (مثل الصفحات التي تزورها، الوقت المستغرق)</span>
            </li>
            <li className="flex gap-2">
              <span className="inline-block flex-shrink-0 mt-2 mr-3 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              <span>المعلومات التي تقدمها طوعًا (مثل التعليقات أو الرسائل)</span>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="p-6 bg-blue-50 dark:bg-gray-700 rounded-lg">
          <div className="flex items-center mb-4 gap-2">
            <Lock className="mr-3 text-blue-600 dark:text-blue-400" size={24} />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">٢. كيف نستخدم معلوماتك</h2>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-400">
            <li className="flex gap-2">
              <span className="inline-block flex-shrink-0 mt-2 mr-3 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              <span>لتحسين تجربتك على الموقع</span>
            </li>
            <li className="flex gap-2">
              <span className="inline-block flex-shrink-0 mt-2 mr-3 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              <span>للتواصل معك بخصوص حسابك أو خدماتنا</span>
            </li>
            <li className="flex gap-2">
              <span className="inline-block flex-shrink-0 mt-2 mr-3 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              <span>لتخصيص المحتوى والاقتراحات</span>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="p-6 bg-green-50 dark:bg-gray-700 rounded-lg">
          <div className="flex items-center mb-4 gap-2">
            <Users className="mr-3 text-green-600 dark:text-green-400" size={24} />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">٣. مشاركة المعلومات</h2>
          </div>
          <p className="leading-relaxed text-gray-700 dark:text-gray-400">
            نحن لا نبيع أو نؤجر بياناتك لأطراف ثالثة. قد نشارك بعض البيانات مع شركائنا لأغراض تشغيل الخدمة، وذلك وفقًا لسياسات الخصوصية المعمول بها.
          </p>
        </div>

        {/* Section 4 */}
        <div className="p-6 bg-yellow-50 dark:bg-gray-700 rounded-lg">
          <div className="flex items-center mb-4 gap-2">
            <Shield className="mr-3 text-yellow-600 dark:text-yellow-400" size={24} />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">٤. أمان البيانات</h2>
          </div>
          <p className="leading-relaxed text-gray-700 dark:text-gray-400">
            نحن نستخدم تدابير تقنية وتنظيمية مناسبة لحماية معلوماتك من الوصول أو الاستخدام أو الكشف غير المصرح به.
          </p>
        </div>

        {/* Section 5 */}
        <div className="p-6 bg-purple-50 dark:bg-gray-700 rounded-lg">
          <div className="flex items-center mb-4 gap-2">
            <Gavel className="mr-3 text-purple-600 dark:text-purple-400" size={24} />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">٥. حقوق المستخدم</h2>
          </div>
          <p className="leading-relaxed text-gray-700 dark:text-gray-400">
            لديك الحق في الوصول إلى بياناتك أو تعديلها أو حذفها. يمكنك أيضًا طلب التوقف عن تلقي الاتصالات منا. يمكنك التواصل معنا لطلب ذلك.
          </p>
        </div>

        {/* Section 6 */}
        <div className="p-6 bg-red-50 dark:bg-gray-700 rounded-lg">
          <div className="flex items-center mb-4 gap-2">
            <Bell className="mr-3 text-red-600 dark:text-red-400" size={24} />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">٦. تحديثات السياسة</h2>
          </div>
          <p className="leading-relaxed text-gray-700 dark:text-gray-400">
            قد نقوم بتحديث هذه السياسة من وقت لآخر. سنخطرك بأي تغييرات هامة عبر البريد الإلكتروني أو من خلال الموقع. إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، لا تتردد في التواصل معنا.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      {/* <div className="p-6 mt-12 text-center text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
        <h3 className="mb-2 text-xl font-semibold">هل لديك أسئلة حول هذه السياسة؟</h3>
        <p className="mb-4 gap-2">إذا كان لديك أي أسئلة أو استفسارات حول سياسة الخصوصية الخاصة بنا، نحن هنا لمساعدتك.</p>
        <button className="px-6 py-2 font-semibold text-blue-600 bg-white rounded-lg transition-colors hover:bg-gray-100">
          تواصل معنا
        </button>
      </div> */}
    </div>
    </div>
  );
}