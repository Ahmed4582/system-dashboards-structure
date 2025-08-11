import { Edit, Eye, Trash2 } from 'lucide-react'
import React from 'react'
import EditMobile from './EditMobile'

import Link from 'next/link'
import DeleteUser from './DeleteUser'

const TabelUsersMobile = ({users, getRoleColor}) => {
  return (
    <div className="lg:hidden divide-y divide-gray-200 dark:divide-gray-700 ">
      {users.map((user) => (
        <div key={user.id} className="p-6 bg-white dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center text-white font-semibold">
                {user.avatar}
              </div>
              <div className="ml-2">
                <h3 className="text-[12.5px] font-semibold text-gray-900 dark:text-white">{user.name}</h3>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full mt-1 ${getRoleColor(user.role)}`}>
                  {user.role}
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Link href={`/users/${user.id}`} className=" text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300">
                <Eye size={16} />
              </Link>
              <button className="  text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-all duration-300">
                {/* <Edit size={16} /> */}
                <EditMobile user={user} />
              </button>
              <button className=" text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-300">
                {/* <Trash2 size={16} /> */}
                <DeleteUser  user={user} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TabelUsersMobile