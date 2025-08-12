import React, { useState } from "react";
import {
  Home,
  BookOpen,
  Users,
  GraduationCap,
  Gift,
  Clock,
  ChevronLeft,
  ChevronDown,
  ChartBar,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/context/translate-api";
import SettingsButton from "./SettingsButton";

// Sidebar Component
const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const { t, direction } = useI18n();
  const pathname = usePathname();
  
  // إزالة السطر: const dir = t === "ar" ? "rtl" : "ltr";
  const navigationItems = [
    { icon: Home, label: "dashbord", href: "/dashbord" },
    { icon: BookOpen, label: "المستخدمين", href: "/users" },
    { icon: Users, label: "طلبات الطلاب", href: "/dashboard/lessons/2" },
    {
      icon: GraduationCap,
      label: "الفصول",
      hasSubmenu: true,
      href: "",
      submenuItems: [
        {
          label: "الفصل 1",
          href: "/usersrr",
        },
        {
          label: "الفصل 2",
          href: "/dashboard/lessons/2",
        },
      ],
    },
    { icon: Gift, label: "التجارب المجانية", href: "/dashboard/lessons/2" },
    { icon: Clock, label: "أوقاتي", href: "/dashboard/lessons/2" },
    { icon: ChartBar, label: "الإحصائيات", href: "/statistics" },
  ];

  const toggleSubmenu = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Function to check if a route is active
  const isActiveRoute = (href, submenuItems = null) => {
    if (href && pathname === href) {
      return true;
    }
    
    // Check if any submenu item is active
    if (submenuItems) {
      return submenuItems.some(subItem => pathname === subItem.href);
    }
    
    return false;
  };

  // Function to check if submenu item is active
  const isActiveSubmenuItem = (href) => {
    return pathname === href;
  };

  return (
    <>
      {/* Sidebar */}
      <div
        id="sidebar"
        className={`fixed inset-y-0 ${direction === "ltr" ? "left-0" : "right-0"} ${sidebarOpen ? "z-50" : "z-30"}  bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 ease-in-out flex flex-col ${
          sidebarOpen
            ? "w-64 translate-x-0"
            : direction === "ltr"
              ? "w-16 -translate-x-full md:translate-x-0"
              : "w-16 translate-x-full md:translate-x-0"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className="flex items-center justify-between w-full">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-red-600 transition-colors duration-200"
            >
              <BookOpen className="w-5 h-5 text-white" />
            </button>
            {sidebarOpen && (
              <div className="transition-opacity duration-200 whitespace-nowrap flex-1 text-center">
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                   التاجر الرقمي
                </h1>
              </div>
            )}
          </div>
        </div>

        {/* Navigation - Scrollable Area */}
        <nav className="flex-1 overflow-y-auto mt-6 px-3 pb-4">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => {
              const isActive = isActiveRoute(item.href, item.submenuItems);
              
              return (
                <li key={index}>
                  {/* Main Navigation Item */}
                  <div
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary hover:text-white cursor-pointer ${
                      isActive
                        ? "bg-primary text-white shadow-lg"
                        : "text-gray-700 dark:text-gray-200 hover:text-white"
                    }`}
                    onClick={() =>
                      item.hasSubmenu ? toggleSubmenu(index) : null
                    }
                  >
                    <item.icon
                      className={`w-5 h-5 flex-shrink-0 ${
                        sidebarOpen ? "mr-3" : "mx-auto"
                      } transition-all duration-200`}
                    />

                    {sidebarOpen && (
                      <Link href={item.href || "#"} className="whitespace-nowrap flex-1">
                        {item.label}
                      </Link>
                    )}

                    {sidebarOpen && item.hasSubmenu && (
                      <div className="transition-transform duration-200">
                        {expandedItems[index] ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronLeft className="w-4 h-4" />
                        )}
                      </div>
                    )}
                  </div>

                  {/* Submenu Items */}
                  {item.hasSubmenu && sidebarOpen && expandedItems[index] && (
                    <ul className="mt-2 space-y-1 ml-6">
                      {item.submenuItems?.map((subItem, subIndex) => {
                        const isSubActive = isActiveSubmenuItem(subItem.href);
                        
                        return (
                          <li key={subIndex}>
                            <Link
                              href={subItem.href || "#"}
                              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                                isSubActive
                                  ? "text-primary bg-primary/10 font-medium"
                                  : "text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-700"
                              }`}
                            >
                              <span className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${
                                isSubActive ? "bg-primary" : "bg-gray-400"
                              }`}></span>
                              {subItem.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Settings Section - Fixed at Bottom */}
        <SettingsButton sidebarOpen={sidebarOpen} />
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
