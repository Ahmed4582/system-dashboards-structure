"use client";

import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <motion.main
        initial={{ opacity: 0, y: -100 }}   // يبدأ من فوق
        animate={{ opacity: 1, y: 0 }}      // ينزل لمكانه الطبيعي
        exit={{ opacity: 0, y: 100 }}       // يخرج لتحت
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ minHeight: "100vh" }}
      >
        {children}
      </motion.main>
    </div>
  );
};

export default PageWrapper;
