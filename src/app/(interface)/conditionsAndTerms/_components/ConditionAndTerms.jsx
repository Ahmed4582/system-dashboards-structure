import React from 'react';
import { Shield, Eye, Lock, Users, Bell, Gavel } from 'lucide-react';


export default function ConditionAndTerms() {
  return (
    <div className='bg-white dark:bg-gray-800 py-30 '>   
       <div className="p-6 mx-auto max-w-7xl">
      <div className="mb-8 text-center">
        <Shield className="mx-auto mb-4 text-blue-600 dark:text-blue-400" size={48} />
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-100">شروط الاستخدام</h1>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          مرحبًا بكم في موقعنا. يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا. باستخدامك لهذا الموقع، فإنك توافق على الالتزام بهذه الشروط.
        </p>
      </div>

      <div className="space-y-8">
        {/* Section 1 */}
        <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-700">
          <div className="flex items-center mb-4">
            <Eye className="mr-3 text-blue-600 dark:text-blue-400" size={24} />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">١. الاستخدام المسموح</h2>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-400">
            <li className="flex items-start">
              <span className="flex-shrink-0 inline-block w-2 h-2 mt-2 mr-3 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              <span>يمكنك استخدام الموقع لأغراض شخصية وغير تجارية فقط.</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 inline-block w-2 h-2 mt-2 mr-3 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              <span>يجب عدم استخدام الموقع لأي أنشطة غير قانونية أو ضارة.</span>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="p-6 rounded-lg bg-blue-50 dark:bg-gray-700">
          <div className="flex items-center mb-4">
            <Lock className="mr-3 text-blue-600 dark:text-blue-400" size={24} />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">٢. إنشاء الحساب</h2>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-400">
            <li className="flex items-start">
              <span className="flex-shrink-0 inline-block w-2 h-2 mt-2 mr-3 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              <span>يجب عليك تقديم معلومات دقيقة عند التسجيل.</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 inline-block w-2 h-2 mt-2 mr-3 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              <span>أنت مسؤول عن الحفاظ على سرية بيانات تسجيل الدخول الخاصة بك.</span>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="p-6 rounded-lg bg-green-50 dark:bg-gray-700">
          <div className="flex items-center mb-4">
            <Users className="mr-3 text-green-600 dark:text-green-400" size={24} />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">٣. حقوق الملكية الفكرية</h2>
          </div>
          <p className="leading-relaxed text-gray-700 dark:text-gray-400">
            جميع المحتويات المعروضة على الموقع (النصوص، الصور، التصاميم، إلخ) مملوكة للموقع أو لمزودي التراخيص. لا يجوز لك نسخ أو إعادة استخدام هذه المحتويات دون إذن.
          </p>
        </div>

        {/* Section 4 */}
        <div className="p-6 rounded-lg bg-yellow-50 dark:bg-gray-700">
          <div className="flex items-center mb-4">
            <Shield className="mr-3 text-yellow-600 dark:text-yellow-400" size={24} />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">٤. المسؤولية</h2>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-400">
            <li className="flex items-start">
              <span className="flex-shrink-0 inline-block w-2 h-2 mt-2 mr-3 bg-yellow-600 dark:bg-yellow-400 rounded-full"></span>
              <span>لا نضمن أن يكون الموقع خاليًا من الأخطاء أو أن الخدمة ستكون متاحة دائمًا.</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 inline-block w-2 h-2 mt-2 mr-3 bg-yellow-600 dark:bg-yellow-400 rounded-full"></span>
              <span>نحن غير مسؤولين عن أي أضرار ناتجة عن استخدامك للموقع.</span>
            </li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="p-6 rounded-lg bg-purple-50 dark:bg-gray-700">
          <div className="flex items-center mb-4">
            <Gavel className="mr-3 text-purple-600 dark:text-purple-400" size={24} />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">٥. التعديلات</h2>
          </div>
          <p className="leading-relaxed text-gray-700 dark:text-gray-400">
            نحتفظ بالحق في تعديل شروط الاستخدام في أي وقت. سيتم إعلامك بالتغييرات عند الضرورة.
          </p>
        </div>

        {/* Section 6 */}
        <div className="p-6 rounded-lg bg-red-50 dark:bg-gray-700">
          <div className="flex items-center mb-4">
            <Bell className="mr-3 text-red-600 dark:text-red-400" size={24} />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">٦. إنهاء الاستخدام</h2>
          </div>
          <p className="leading-relaxed text-gray-700 dark:text-gray-400">
            نحتفظ بالحق في تعليق أو حذف حسابك إذا انتهكت هذه الشروط.
          </p>
        </div>
      </div>

    </div>
    </div>

  );
}