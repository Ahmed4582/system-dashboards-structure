// "use client"
// import React from "react";
// import { Github, Globe, Facebook, Twitter } from "lucide-react";
// import Link from "next/link";

// const Footer = () => {
//   return (
// <footer 
//   className="text-white py-12 px-6 transition-colors duration-300 bg-[#0F4561] dark:bg-gray-900 shadow-[ -2px_-4px_10px_0px_#0000001A ]"
 
// >
//       <div className="max-w-6xl mx-auto">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//           {/* Sections Column */}
//           <div>
//             <h3 className="text-xl font-bold mb-4 text-white dark:text-gray-100">
//               الأقسام
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
//                   اللغة العربية
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
//                   تلاوة القرآن
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
//                   التجويد
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
//                   الشكاوى والاقتراحات
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Latest Skills Column */}
//           <div>
//             <h3 className="text-xl font-bold mb-4 text-white dark:text-gray-100">
//               أحدث المهارات
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
//                   كيفية تحسين مهارات التصميم لديك
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
//                   أهم المهارات التعليمية في عام 2025
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Links Column */}
//           <div>
//             <h3 className="text-xl font-bold mb-4 text-white dark:text-gray-100">
//               الروابط
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
//                   من نحن
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
//                   الدورات الأكاديمية
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
//                   المهارات
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
//                   الشراكات
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-600 dark:border-gray-700 mb-8"></div>

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//           {/* Social Media Icons */}
//           <div className="flex gap-4">
//             <a 
//               href="#" 
//               className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-200"
//               aria-label="GitHub"
//             >
//               <Github className="w-6 h-6" />
//             </a>
//             <a 
//               href="#" 
//               className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-200"
//               aria-label="الموقع الإلكتروني"
//             >
//               <Globe className="w-6 h-6" />
//             </a>
//             <a 
//               href="#" 
//               className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-200"
//               aria-label="Facebook"
//             >
//               <Facebook className="w-6 h-6" />
//             </a>
//             <a 
//               href="#" 
//               className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-200"
//               aria-label="Twitter"
//             >
//               <Twitter className="w-6 h-6" />
//             </a>
//           </div>

//           {/* Bottom Links */}
//           <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 dark:text-gray-400">
//             <Link href="/conditionsAndTerms" className="hover:text-white dark:hover:text-white transition-colors duration-200">
//               شروط الخدمة
//             </Link>
//             <Link href="/privacypolicy" className="hover:text-white dark:hover:text-white transition-colors duration-200">
//               سياسة الخصوصية
//             </Link>
//             <a href="#" className="hover:text-white dark:hover:text-white transition-colors duration-200">
//               شهادة الضمان
//             </a>
//             <a href="#" className="hover:text-white dark:hover:text-white transition-colors duration-200">
//               شروط الخدمة
//             </a>
//           </div>

//           {/* Copyright */}
//           <button onClick={()=>console.log("object")}  className="text-center text-gray-400 dark:text-gray-500 text-sm">
//             © 2025 جميع الحقوق محفوظة
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



"use client"
import React from "react";
import { Github, Globe, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white py-8 px-4 transition-colors duration-300 bg-[#0F4561] dark:bg-gray-900">
      <div className="max-w-[95%] mx-auto">
        {/* Mobile: Simplified single column layout */}
        <div className="block md:hidden">
          {/* Social Media Icons - Top on mobile */}
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
              aria-label="الموقع الإلكتروني"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Links - Horizontal on mobile */}
          <div className="text-center mb-6">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors duration-200 py-1">
                من نحن
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200 py-1">
                الدورات
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200 py-1">
                المهارات
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200 py-1">
                التجويد
              </a>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="text-center mb-4">
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <Link href="/conditionsAndTerms" className="hover:text-white transition-colors duration-200">
                شروط الخدمة
              </Link>
              <Link href="/privacypolicy" className="hover:text-white transition-colors duration-200">
                سياسة الخصوصية
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-xs">
            © 2025 جميع الحقوق محفوظة
          </div>
        </div>

        {/* Desktop: Original layout */}
        <div className="hidden md:block">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Sections Column */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white dark:text-gray-100">
                الأقسام
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
                    اللغة العربية
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
                    تلاوة القرآن
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
                    التجويد
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
                    الشكاوى والاقتراحات
                  </a>
                </li>
              </ul>
            </div>

            {/* Latest Skills Column */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white dark:text-gray-100">
                أحدث المهارات
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
                    كيفية تحسين مهارات التصميم لديك
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
                    أهم المهارات التعليمية في عام 2025
                  </a>
                </li>
              </ul>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white dark:text-gray-100">
                الروابط
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
                    من نحن
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
                    الدورات الأكاديمية
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
                    المهارات
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-200">
                    الشراكات
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-600 dark:border-gray-700 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-200"
                aria-label="الموقع الإلكتروني"
              >
                <Globe className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>

            {/* Bottom Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 dark:text-gray-400">
              <Link href="/conditionsAndTerms" className="hover:text-white dark:hover:text-white transition-colors duration-200">
                شروط الخدمة
              </Link>
              <Link href="/privacypolicy" className="hover:text-white dark:hover:text-white transition-colors duration-200">
                سياسة الخصوصية
              </Link>
              <a href="#" className="hover:text-white dark:hover:text-white transition-colors duration-200">
                شهادة الضمان
              </a>
              <a href="#" className="hover:text-white dark:hover:text-white transition-colors duration-200">
                شروط الخدمة
              </a>
            </div>

            {/* Copyright */}
            <button onClick={()=>console.log("object")} className="text-center text-gray-400 dark:text-gray-500 text-sm">
              © 2025 جميع الحقوق محفوظة
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;