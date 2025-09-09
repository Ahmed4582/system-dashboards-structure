"use client";
import Link from "next/link";
import { Settings } from "lucide-react";

export default function SettingsButton({ sidebarOpen }) {
  return (
    <div className="p-3 border-t border-gray-200 dark:border-gray-700">
      <Link
        href="/settings"
        className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <Settings className="w-4 h-4" />
        {sidebarOpen && <span>الإعدادات</span>}
      </Link>
    </div>
  );
}


