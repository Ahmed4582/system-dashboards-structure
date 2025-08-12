"use client"

import React, { useState, useMemo } from 'react';
import { Search, Plus, Edit, Trash2, Eye, MoreVertical, Mail, Phone, User, Shield, Users, Crown, UserCheck, ChevronDown, ChevronUp } from 'lucide-react';
import TabelUsersMobile from './TabelUsersMobile';



import AddUser from './AddUser';
import Link from 'next/link';
import EditUser from './EditUser';
import DeleteUser from './DeleteUser';

const TabelUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [showStatsAndSearch, setShowStatsAndSearch] = useState(true);


  const users = [
    { id: 1, name: 'John Doe', username: 'johndoe', phone: '+1 (555) 123-4567', email: 'john@example.com', role: 'Admin', avatar: 'JD' },
    { id: 2, name: 'Sarah Johnson', username: 'sarahj', phone: '+1 (555) 234-5678', email: 'sarah@example.com', role: 'Editor', avatar: 'SJ' },
    { id: 3, name: 'Mike Wilson', username: 'mikew', phone: '+1 (555) 345-6789', email: 'mike@example.com', role: 'User', avatar: 'MW' },
    { id: 4, name: 'Emily Davis', username: 'emilyd', phone: '+1 (555) 456-7890', email: 'emily@example.com', role: 'Admin', avatar: 'ED' },
    { id: 5, name: 'Chris Brown', username: 'chrisb', phone: '+1 (555) 567-8901', email: 'chris@example.com', role: 'User', avatar: 'CB' },
    { id: 6, name: 'Lisa Anderson', username: 'lisaa', phone: '+1 (555) 678-9012', email: 'lisa@example.com', role: 'Editor', avatar: 'LA' },
  ];
  const stats = useMemo(() => {
    const totalUsers = users.length;
    const adminCount = users.filter(user => user.role === 'Admin').length;
    const editorCount = users.filter(user => user.role === 'Editor').length;
    const userCount = users.filter(user => user.role === 'User').length;

    return {
      total: totalUsers,
      admins: adminCount,
      editors: editorCount,
      regularUsers: userCount
    };
  }, [users]);


  const getRoleColor = (role) => {
    switch (role.toLowerCase()) {
      case 'admin': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'editor': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'user': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  return (
    <div className="min-h-screen transition-all duration-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-900 bg-gradient-to-br from-gray-50 to-slate-100 relative z-30">
      <div className="max-w-8xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-primary bg-clip-text text-transparent">
              User Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Manage your team members and their roles</p>
          </div>
          
          <div className="flex items-center gap-3">
               <button 
              onClick={() => setShowStatsAndSearch(!showStatsAndSearch)}
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium"
            >
              {showStatsAndSearch ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              <span>{showStatsAndSearch ? 'Hide Stats' : 'Show Stats'}</span>
            </button>
            {/* Remove the wrapping button and just render AddUser directly */}
            <AddUser/>
          </div>
        </div>

        {/* Controls */}
      {showStatsAndSearch && (
          <div className="hidden lg:block mb-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Total Users Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">Total Users</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stats.total || 0}</p>
                  </div>
                  <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Users
                     className="text-white" size={24} />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <div className="flex -space-x-2">
                    {users.slice(0, 4).map((user, index) => (
                      <div 
                        key={index}
                        className="h-8 w-8 rounded-full bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center text-white text-xs font-semibold border-2 border-white dark:border-gray-800"
                      >
                        {user.avatar || 'U'}

                      </div>
                    ))}
                    {users.length > 4 && (
                      <div className="h-8 w-8 rounded-full bg-gray-400 dark:bg-gray-600 flex items-center justify-center text-white text-xs font-semibold border-2 border-white dark:border-gray-800">
                        +{users.length - 4}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Admins Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">Administrators</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stats.admins || 0}</p>
                  </div>
                  <div className="h-12 w-12 bg-gradient-to-r from-primary to-red-600 rounded-xl flex items-center justify-center">
                    <Crown className="text-white" size={24} />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-red-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(stats.admins / stats.total) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {Math.round((stats.admins / stats.total) * 100)}% of total users
                  </p>
                </div>
              </div>

              {/* Active Users Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">Active Users</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stats.editors + stats.regularUsers}</p>
                  </div>
                  <div className="h-12 w-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <UserCheck className="text-white" size={24} />
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Editors</span>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{stats.editors}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Users</span>
                    <span className="text-sm font-semibold text-green-600 dark:text-green-400">{stats.regularUsers}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Controls */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border dark:border-gray-700">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
                {/* Search */}
                <div className="relative flex-1 min-w-0">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search users by name, username, or email..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                {/* {searchTerm && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Found {filteredAndSortedUsers.length} user{filteredAndSortedUsers.length !== 1 ? 's' : ''}
                    </span>
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="text-sm text-primary hover:text-red-700 transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border dark:border-gray-700">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort('name')}
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <User size={16} />
                      User
                      {sortBy === 'name' && (
                        <span className="text-primary">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort('email')}
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <Mail size={16} />
                      Contact
                      {sortBy === 'email' && (
                        <span className="text-primary">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    <button
                      onClick={() => handleSort('role')}
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <Shield size={16} />
                      Role
                      {sortBy === 'role' && (
                        <span className="text-primary">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </button>
                  </th>
                  <th className="px-6 py-4  text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {users.map((user, index) => (

                  <tr key={user.id} className={`hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors `}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-sm">
                          {user.avatar}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">{user.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">@{user.username}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">{user.email}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{user.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(user.role)}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                      <div className="flex items-center justify-center gap-2">

                        <Link href={`/users/${user.id}`}  className="p-2 border border-primary text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300">
                          <Eye size={16} />
                        </Link>
                        {/* Remove the wrapping button and just render EditUser directly */}
                        <EditUser user={user} />
                        {/* Remove the wrapping button and just render DeleteUser directly */}
                        <DeleteUser user={user} onDelete={(u) => console.log("Deleting", u)} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          
          <TabelUsersMobile users={users} getRoleColor={getRoleColor} />

        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>Showing {users.length} of {users.length} users</p>
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