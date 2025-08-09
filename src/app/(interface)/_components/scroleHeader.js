import { useState, useEffect } from 'react';

const useScrollHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = document.getElementById("hero")?.offsetHeight || 100;
      if (window.scrollY > heroSectionHeight - 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrolled;
};

export default useScrollHeader;