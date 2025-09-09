'use client';
import Cookies from 'js-cookie';
import { Moon, Sun } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkCookie = Cookies.get("dark");
    setIsDark(darkCookie === "dark");
    if (darkCookie === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      Cookies.remove("dark");
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      Cookies.set("dark", "dark", { path: "/", expires: 365 });
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded text-gray-900 transition-all duration-300 hover:text-primary  relative z-50 "
    >
      {isDark ?  <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}


