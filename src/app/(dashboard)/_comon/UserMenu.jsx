"use client"
import { User, LogOut, UserCircle, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/context/translate-api";
// import TestButton from "../../(interface)/_components/ToggelThem";

const UserMenu = () => {
  const { t, direction } = useI18n();
  const dir = direction;
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
    setUserMenuOpen(false);
  };

  return (
    <div className="relative" ref={userMenuRef}>
      <button
        onClick={() => setUserMenuOpen(!userMenuOpen)}
        className={`flex items-center space-x-2 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 border-${dir === 'rtl' ? 'r' : 'l'} border-gray-200 dark:border-gray-700 pl-3 ml-2`}
      >
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-md">
          <User className="w-4 h-4 text-white" />
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''} hidden sm:block`} />
      </button>

      {/* Dropdown Menu */}
      {userMenuOpen && (
        <div className={`absolute ${dir === 'rtl' ? 'left-0' : 'right-0'} mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50 animate-in fade-in-0 zoom-in-95`}>
          {/* User Info Section */}
          <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                  Ahmed Mohamed
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  System Administrator
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400 truncate">
                  ahmed@company.com
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <button className="flex items-center w-full px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
              <UserCircle className="w-4 h-4 mr-3 text-gray-400" />
              Profile
            </button>
            
            {/* <TestButton /> */}

            <div className="border-t border-gray-100 dark:border-gray-700 my-2"></div>
            
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-150"
            >
              <LogOut className="w-4 h-4 mr-3" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;