"use client"
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./SideBar";
import { useI18n } from "../../../context/translate-api";
import { PopupProvider } from "../_context/PopupContext";

export default function DashboardClient({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { t, direction } = useI18n();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <PopupProvider>
        <Sidebar 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className={`transition-all duration-300 ${
          direction === 'ltr' 
            ? (sidebarOpen ? 'ml-0 md:ml-64' : 'ml-0 md:ml-16')
            : (sidebarOpen ? 'mr-0 md:mr-64' : 'mr-0 md:mr-16')
        }`}>
          <Header 
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          {children}
        </div>
      </PopupProvider>
    </div>
  );
}


