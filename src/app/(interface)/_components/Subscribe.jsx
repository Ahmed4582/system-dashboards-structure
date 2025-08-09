"use client";
import React, { useState } from "react";

const Subscribe = () => {
  return (
    <>
      <div className="bg-[linear-gradient(88.64deg,_#0F4561_2.88%,_#A04E57_75.96%,_#EC5252_100%)] dark:bg-[linear-gradient(88.64deg,_#111827_2.88%,_#111827_75.96%,_#111827_100%)] dark:mt-0 transition-colors duration-300 px-6 md:px-0 flex flex-col items-center justify-center  mb-6 dark:mb-0">
        <p className="text-white text-center md:text-2xl text-[12.5px] font-bold mt-12 mb-2">
          كن أول من يعرف عن دوراتنا وعروضنا!
        </p>
        <p className="text-white text-center mb-6 md:max-w-xl max-w-md font-normal md:text-[12.5px] text-[9px] ">
          كن أول من يعرف عن آخر تحديثات الدورات، الموارد التعليمية، والمقالات — وانضم إلى مجتمعنا التعليمي!
        </p>
        <form className="flex flex-row-reverse items-center w-full max-w-xl mb-2 rounded-md px-4 bg-white">
          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 my-1 rounded-md  transition-colors duration-200"
          >
            اشترك
          </button>
          <input
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
            className="w-full flex-1 px-4 py-2  bg-white focus:outline-none"
          />
        </form>
        <p className="text-xs text-white text-center mt-2 mb-8">
          بالاشتراك، أنت توافق على
          {" "}
          <a href="#" className="underline">
            سياسة الخصوصية
          </a>
          {" "}و {" "}
          <a href="#" className="underline">
            شروط الخدمة
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default Subscribe;
