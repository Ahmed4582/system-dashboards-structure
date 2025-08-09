"use client"
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  Shield, 
  MapPin, 
  Calendar, 
  Edit, 
  Settings, 
  Award, 
  Clock, 
  Users, 
  TrendingUp,
  Globe,
  Briefcase,
  GraduationCap,
  Star,
  Camera,
  CheckCircle,
  XCircle,
  Activity,
  MessageSquare,
  FileText,
  Eye
} from 'lucide-react';

const UserDetail = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample user data - you can replace with props or API data
  const user = {
    id: 1,
    name: 'Sarah Johnson',
    username: 'sarahj',
    email: 'sarah.johnson@company.com',
    phone: '+1 (555) 234-5678',
    role: 'Senior Developer',
    multitenancy: true,
    avatar: 'SJ',
    profileImage: null, // You can add actual image URL here
    department: 'Engineering',
    location: 'San Francisco, CA',
    joinDate: '2022-03-15',
    lastLogin: '2024-08-05T14:30:00Z',
    status: 'active',
    timezone: 'PST (UTC-8)',
    language: 'English',
    experience: '5+ years',
    education: 'Computer Science, Stanford',
    skills: ['React', 'Node.js', 'Python', 'AWS', 'Docker'],
    projects: 12,
    completedTasks: 187,
    rating: 4.8,
    bio: 'Passionate full-stack developer with expertise in modern web technologies. I love creating scalable solutions and mentoring junior developers.',
    socialLinks: {
      linkedin: 'linkedin.com/in/sarahjohnson',
      github: 'github.com/sarahj',
      portfolio: 'sarahj.dev'
    },
    permissions: ['read', 'write', 'admin'],
    teams: ['Frontend Team', 'Architecture Committee', 'Code Review Board']
  };

  const getRoleColor = (role) => {
    switch (role.toLowerCase()) {
      case 'admin': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'senior developer': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'developer': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'editor': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getStatusColor = (status) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatLastSeen = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      return `${Math.floor(diffInHours / 24)} days ago`;
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'activity', label: 'Activity', icon: Activity },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button className="p-2 hover:bg-white dark:hover:bg-gray-800 rounded-lg transition-all duration-300 border dark:border-gray-700">
            <ArrowLeft size={20} className="text-gray-600 dark:text-gray-400" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User Details</h1>
            <p className="text-gray-600 dark:text-gray-400">Comprehensive user information and statistics</p>
          </div>
        </div>

        {/* Profile Header Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border dark:border-gray-700 mb-8">
          <div className="relative h-32 bg-gradient-to-r from-red-400 via-red-500 to-red-600">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          <div className="relative px-8 pb-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6 -mt-16">
              {/* Avatar */}
              <div className="relative">
                <div className="h-32 w-32 rounded-2xl bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center text-white font-bold text-4xl shadow-xl border-4 border-white dark:border-gray-800">
                  {user.profileImage ? (
                    <img src={user.profileImage} alt={user.name} className="w-full h-full rounded-2xl object-cover" />
                  ) : (
                    user.avatar
                  )}
                </div>
                <button className="absolute bottom-2 right-2 p-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300">
                  <Camera size={16} />
                </button>
              </div>

              {/* Basic Info */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mt-4">
                  <div className=' pt-4'>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{user.name}</h2>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getRoleColor(user.role)}`}>
                        {user.role}
                      </span>
                      <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                      {user.multitenancy && (
                        <span className="px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          Multi-tenant
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl">{user.bio}</p>
                  </div>
                  
                  <div className="flex gap-3 pt-4 order border-red-500">
                    <button className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium">
                      <MessageSquare size={16} />
                      Message
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium">
                      <Edit size={16} />
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Stats Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-red-500" />
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">{user.projects}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">{user.completedTasks}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Tasks</div>
                </div>
                <div className="text-center col-span-2">
                  <div className="flex items-center justify-center gap-1">
                    <div className="text-2xl font-bold text-red-500">{user.rating}</div>
                    <Star size={20} className="text-yellow-500 fill-current" />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Mail size={20} className="text-red-500" />
                Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{user.email}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Primary Email</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{user.phone}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Mobile</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{user.location}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Location</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={16} className="text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{user.timezone}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Timezone</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Award size={20} className="text-red-500" />
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-sm font-medium rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border dark:border-gray-700 overflow-hidden">
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                          activeTab === tab.id
                            ? 'border-red-500 text-red-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                        }`}
                      >
                        <Icon size={16} />
                        {tab.label}
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    {/* Professional Info */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Professional Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Briefcase size={16} className="text-gray-400" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{user.department}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Department</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Calendar size={16} className="text-gray-400" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{formatDate(user.joinDate)}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Join Date</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <GraduationCap size={16} className="text-gray-400" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{user.education}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Education</div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Clock size={16} className="text-gray-400" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{formatLastSeen(user.lastLogin)}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Last Login</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Award size={16} className="text-gray-400" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{user.experience}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Experience</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Globe size={16} className="text-gray-400" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{user.language}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Language</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Teams & Permissions */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Teams & Access</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                            <Users size={16} />
                            Teams
                          </h5>
                          <div className="space-y-2">
                            {user.teams.map((team, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <CheckCircle size={14} className="text-green-500" />
                                <span className="text-sm text-gray-600 dark:text-gray-400">{team}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                            <Shield size={16} />
                            Permissions
                          </h5>
                          <div className="space-y-2">
                            {user.permissions.map((permission, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <CheckCircle size={14} className="text-green-500" />
                                <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">{permission}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Social Links</h4>
                      <div className="space-y-3">
                        {Object.entries(user.socialLinks).map(([platform, url]) => (
                          <div key={platform} className="flex items-center gap-3">
                            <Globe size={16} className="text-gray-400" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 dark:text-white capitalize">{platform}</div>
                              <div className="text-xs text-blue-600 dark:text-blue-400">{url}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'activity' && (
                  <div className="text-center py-12">
                    <Activity size={48} className="text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Activity Timeline</h3>
                    <p className="text-gray-600 dark:text-gray-400">Recent user activities and interactions will appear here.</p>
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div className="text-center py-12">
                    <Briefcase size={48} className="text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Projects</h3>
                    <p className="text-gray-600 dark:text-gray-400">User's project assignments and contributions will be displayed here.</p>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="text-center py-12">
                    <Settings size={48} className="text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Settings</h3>
                    <p className="text-gray-600 dark:text-gray-400">User preferences and account settings will be available here.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
