"use client";

// Data Import
import { SectionHeader } from "./Common/SectionHeader";
const {
  title,
  subtitle,
  content,
} = require("../content/About.json");

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/util/animations";

const About = () => {
  return (
    <motion.section
    id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0  bg-gradient-to-r from-lblack via-slate-500 to-lblack w-screen`}
    >
      <SectionHeader
        title={title}
        subtitle={subtitle}
      />

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {content}
      </motion.div>
    </motion.section>
  );
};

export default About;
