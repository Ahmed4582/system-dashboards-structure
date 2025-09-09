"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  MoreVertical,
  Mail,
  Phone,
  User,
  Shield,
  Users,
  Crown,
  UserCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import AddUser from "./AddUser";
import Link from "next/link";

import DeleteUser from "./DeleteUser";

const TabelUsers = () => {
  const [showStatsAndSearch, setShowStatsAndSearch] = useState(true);

  const users = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      phone: "+1 (555) 123-4567",
      email: "john@example.com",
      role: "Admin",
      avatar: "JD",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      username: "sarahj",
      phone: "+1 (555) 234-5678",
      email: "sarah@example.com",
      role: "Editor",
      avatar: "SJ",
    },
    {
      id: 3,
      name: "Mike Wilson",
      username: "mikew",
      phone: "+1 (555) 345-6789",
      email: "mike@example.com",
      role: "User",
      avatar: "MW",
    },
    {
      id: 4,
      name: "Emily Davis",
      username: "emilyd",
      phone: "+1 (555) 456-7890",
      email: "emily@example.com",
      role: "Admin",
      avatar: "ED",
    },
    {
      id: 5,
      name: "Chris Brown",
      username: "chrisb",
      phone: "+1 (555) 567-8901",
      email: "chris@example.com",
      role: "User",
      avatar: "CB",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      username: "lisaa",
      phone: "+1 (555) 678-9012",
      email: "lisa@example.com",
      role: "Editor",
      avatar: "LA",
    },
  ];

  return (
    <div className="min-h-screen transition-all duration-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-900 bg-gradient-to-br from-gray-50 to-slate-100 relative z-30">
      <div className="max-w-8xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-primary bg-clip-text text-transparent">
              User Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Manage your team members and their roles
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowStatsAndSearch(!showStatsAndSearch)}
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium"
            >
              {showStatsAndSearch ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
              <span>{showStatsAndSearch ? "Hide Stats" : "Show Stats"}</span>
            </button>

            <AddUser />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border dark:border-gray-700">
          {/* Desktop Table */}
          <div className="block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort("name")}
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <User size={16} />
                      User
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    <button
                      // onClick={() => handleSort("email")}
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <Mail size={16} />
                      Contact
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort("role")}
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <Shield size={16} />
                      Role
                    </button>
                  </th>
                  <th className="px-6 py-4  text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors "
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-sm">
                          {user.avatar}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            @{user.username}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {user.email}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {user.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                      <div className="flex items-center justify-center gap-2">
                        <Link
                          href={`/users/${user.id}`}
                          className="p-2 border border-primary text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300"
                        >
                          <Eye size={16} />
                        </Link>
                        <AddUser user={user} />
                        <DeleteUser
                          user={user}
                          onDelete={(u) => console.log("Deleting", u)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            Showing {users.length} of {users.length} users
          </p>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Previous
            </button>
            <span className="px-3 py-1 bg-primary text-white rounded">1</span>
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabelUsers;
