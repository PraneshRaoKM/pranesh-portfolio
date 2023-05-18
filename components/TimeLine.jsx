"use client";

// Data Import
import { SectionHeader } from "@/components/Common/SectionHeader";
const {
  title,
  subtitle,
  content,
} = require("../content/TimeLine.json");

import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";

import { fadeIn } from "@/util/animations";

import ExperienceCard from "@/components/Cards/ExperienceCard";

const TimeLine = () => {
  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 bg-gradient-to-r from-lblack via-crimson  to-lblack w-screen`}
    >
      <SectionHeader
        title={title}
        subtitle={subtitle}
      />
      <motion.div
        variants={fadeIn("", "", 0.3, 2)}
        className="mt-20 flex flex-col"
      >
        <VerticalTimeline>
          {content.map((WorkExperience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              WorkExperience={WorkExperience}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </motion.section>
  );
};

export default TimeLine;
