"use client";

import { useEffect, useState } from "react";
import HeadeMobile from "./HeadeMobile";
import useScrollHeader from "./scroleHeader";
// import ToggleTheme from "./ToggelThem";
import { Globe, ChevronDown } from "lucide-react";
import Image from "next/image";
import ToggleTheme from "./ToggelThem";
import TestButton from "./ToggelThem";
import Link from "next/link";
import { LanguageSwitcher } from "@/app/(dashboard)/_comon/LanguageSwitcher";

const Header = () => {
  const scrolled = useScrollHeader();
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  // Navigation links array with Arabic text
  const navigationLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "أنظمة المواقع", href: "/webSiteSystem" },
    { 
      name: "الصفحات", 
      href: "#",
      isDropdown: true,
      dropdownItems: [
        { name: "الإستشارات", href: "/consultations" },
        { name: "أعمالنا", href: "/protofolio" },
        { name: "الفريق", href: "/team" },
        { name: "المدونة", href: "/blog" },
        { name: "الأسئلة الشائعة", href: "/Fqs" },
        { name: "سياسة الخصوصية", href: "/privacypolicy" },
        { name: "شروط الخدمة", href: "/conditionsAndTerms" }
      ]
    },
    { name: "الخطط", href: "#" , isDropdown: true, dropdownItems: [
      { name: "خطط الاستشارات", href: "/consultations" },
      { name: "أعمالنا", href: "/protofolio" },
    
    ]},
    { name: "تواصل معنا", href: "/contactUs" }
  ];

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
     <div className="block lg:hidden"> 
      <HeadeMobile />
     </div>
      <div
        className={`fixed hidden lg:block top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white backdrop-blur-sm text-gray-900 shadow-lg"
            : "bg-white backdrop-blur-sm text-gray-900"
        }`}
       
      >
        <div className="flex items-center justify-between max-w-[95%] mx-auto p-4">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Image 
             src={"/images/logo.png"}
             width={40}
             height={40}
             alt="شعار"
            />
          </div>

          {/* Navigation Menu */}
          <ul className="flex items-center justify-center gap-6 text-sm md:text-base">
            {navigationLinks.map((link, index) => (
              <li key={index} className="relative">
                {link.isDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setOpenDropdownIndex(index)}
                    onMouseLeave={() => setOpenDropdownIndex(null)}
                  >
                    <button
                      onClick={() => setOpenDropdownIndex(openDropdownIndex === index ? null : index)}
                      className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.name}
                      <ChevronDown size={14} className={`transition-transform ${openDropdownIndex === index ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {openDropdownIndex === index && (
                      <div className="absolute top-full right-0 mt-1 w-48 bg-white shadow-lg rounded-md border border-gray-200 py-2 z-10">
                        {link.dropdownItems.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                            onClick={() => setOpenDropdownIndex(null)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
       

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
           
            <div className="flex items-center gap-2 ">
             
              <TestButton />
              <button className="hover:text-primary transition-colors">
               <LanguageSwitcher />
              </button>
            </div>
            
            {/* Auth Buttons */}
            <div className="flex items-center gap-2">
              <Link href={"/register"} onClick={()=>console.log("object")} className="border-2 border-primary px-3 py-1 font-semibold text-[12.5px] rounded hover:bg-primary hover:text-white transition-all">
                إنشاء حساب
              </Link>
              <Link href={"/login"} className="bg-primary text-white px-3 py-1 font-semibold text-[13.5px] rounded hover:bg-primary/90 transition-all">
                تسجيل الدخول
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;