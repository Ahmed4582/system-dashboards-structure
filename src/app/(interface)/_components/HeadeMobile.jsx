"use client"
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import ToggleTheme from "./ToggelThem";

const HeaderMobile = () => {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Navigation links array (same as desktop)
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Website Systems", href: "/website-systems" },
    { 
      name: "Pages", 
      href: "#",
      isDropdown: true,
      dropdownItems: [
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Team", href: "/team" },
        { name: "Blog", href: "/blog" },
        { name: "FAQ", href: "/faq" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" }
      ]
    },
    { name: "Plans", href: "/plans" },
    { name: "Contact Us", href: "/contact" }
  ];

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeMobileMenu = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="">
        <button
          onClick={() => setOpen(true)}
          className="text-gray-700 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Offcanvas Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h5 className="text-2xl font-bold text-gray-800 tracking-wide">Your Logo</h5>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-white hover:shadow-md transition-all duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-8">
          {/* Navigation Menu */}
          <nav>
            <ul className="flex flex-col gap-2">
              {navigationLinks.map((link, index) => (
                <li key={index} className="group">
                  {link.isDropdown ? (
                    <div>
                      <button
                        onClick={handleDropdownToggle}
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 rounded-lg transition-all duration-200 font-medium"
                      >
                        <span>{link.name}</span>
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      
                      {/* Dropdown Items */}
                      {dropdownOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {link.dropdownItems.map((item, itemIndex) => (
                            <a
                              key={itemIndex}
                              href={item.href}
                              onClick={closeMobileMenu}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 rounded-lg transition-all duration-200 font-medium"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Auth Buttons */}
          <div className="border-t border-gray-200 pt-6 space-y-3">
            <button className="w-full border-2 border-primary px-4 py-3 font-semibold text-sm rounded-lg hover:bg-primary hover:text-white transition-all">
              Sign Up
            </button>
            <button className="w-full bg-primary text-white px-4 py-3 font-semibold text-sm rounded-lg hover:bg-primary/90 transition-all">
              Sign In
            </button>
          </div>

          {/* Language and Dark Mode Icons */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                <ToggleTheme />
              </div>

              {/* Language Icon */}
              <button className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                <Globe className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderMobile