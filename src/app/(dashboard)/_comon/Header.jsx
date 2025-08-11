import { Bell, Menu, Search, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/context/translate-api";
import TestButton from "../../(interface)/_components/ToggelThem";
import UserMenu from "./UserMenu";
import { NotificationsMenu } from "./NotificationsMenu";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const { t, direction } = useI18n();
  const dir = direction;

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="flex items-center justify-between h-14 sm:h-16 px-3 sm:px-4 lg:px-6">
        {/* Left Section */}
        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 sm:p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 xl:hidden"
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {sidebarOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
          
          {/* Dashboard Title */}
          <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white truncate">
            {t === "ar" ? "لوحة التحكم" : "Dashboard"}
          </h1>
        </div>

        {/* Center Search Bar - Desktop Only */}
        <div className="hidden xl:flex items-center flex-1 max-w-lg mx-6">
          <div className="relative w-full">
            <div className={`absolute inset-y-0 ${dir === 'rtl' ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={t === "ar" ? "ابحث في لوحة التحكم..." : "Search dashboard..."}
              className={`block w-full ${dir === 'rtl' ? 'pr-10 pl-3' : 'pl-10 pr-3'} py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
          {/* Mobile Search Button */}
          <button 
            className="p-1.5 sm:p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 xl:hidden"
            aria-label="Search"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Notifications */}
          {/* <button 
            className="p-1.5 sm:p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 relative"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="absolute -top-1 right-1  w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full border border-white dark:border-gray-800"></span>
          </button> */}
          <NotificationsMenu />

          {/* Language Switcher - Hidden on extra small screens */}
          <div className=" xs:block">
            <LanguageSwitcher />
          </div>

          {/* Theme Toggle - Hidden on small screens */}
          <div className="hidden sm:block">
            <TestButton />
          </div>

          {/* User Menu Dropdown */}
          <UserMenu />

          {/* Mobile Menu for Language/Theme - Visible on small screens only */}
         
        </div>
      </div>

      {/* Mobile Search Bar - Expandable */}
      <div className="xl:hidden border-t border-gray-200 dark:border-gray-700 px-3 sm:px-4 py-2 bg-gray-50 dark:bg-gray-900/50 hidden" id="mobile-search">
        <div className="relative">
          <div className={`absolute inset-y-0 ${dir === 'rtl' ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder={t === "ar" ? "ابحث في لوحة التحكم..." : "Search dashboard..."}
            className={`block w-full ${dir === 'rtl' ? 'pr-10 pl-3' : 'pl-10 pr-3'} py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;