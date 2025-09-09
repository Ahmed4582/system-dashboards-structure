import { Settings } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SettingsButton = ({sidebarOpen}) => {

  return (
    <div className="flex-shrink-0 border-t border-gray-200 dark:border-gray-700 p-3 overflow-hidden">
          <Link href="/dashboard/settings">
            <div className={`flex items-center gap-3 ${sidebarOpen ? 'px-4 py-3' : ''}  rounded-xl bg-gradient-to-r from-primary-gradient to-primary text-white  transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105`}>
              <div className="w-10 h-10 bg-white/20   rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Settings className="w-5 h-5 " />
              </div>
              {sidebarOpen && (
                <div className="flex-1">
                  <p className="text-sm font-semibold">الإعدادات</p>
                  <p className="text-xs opacity-80">إدارة التطبيق</p>
                </div>
              )}
              {/* {sidebarOpen && (
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              )} */}
            </div>
          </Link>
        </div>
  )
}

export default SettingsButton