"use client";
import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <a
      href="#"
      className={`fixed object-contain flex items-center justify-center bottom-0 right-0 z-20 text-6xl rounded-full m-5 border-4 border-slate-200 bg-xlblack h-[60px] w-[60px] ${
        scrolled ? "block" : "hidden"
      }`}
    >
      <img src="/assets/commons/BackToTop.svg" alt="Back To Top"></img>
    </a>
  );
};

export default BackToTop;
