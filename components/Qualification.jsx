"use client";

// Data Import
import { SectionHeader } from "./Common/SectionHeader";
import { SkillCard } from "./Cards/SkillCard";
const {
  title,
  subtitle,
  content,
} = require("../content/Qualification.json");

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/util/animations";

const EducationCard = ({ course, place, year }) => {
  return (
    <div>
      <div>
        <h1 className={`text-3xl`}>{course}</h1>
        <p className={`text-sm uppercase`}>
          <span className="text-crimson">at</span> {place}, {year}.
        </p>
      </div>
    </div>
  );
};

const CertificationCard = ({ course, place }) => {
  return (
    <div>
      <h1 className={`text-3xl`}>{course}</h1>
      <p className={`text-sm uppercase`}>
        <span className="text-crimson">by</span> {place}.
      </p>
    </div>
  );
};

const Qualification = () => {
  return (
    <motion.section
    id="qualification"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0  bg-gradient-to-r from-lblack via-cyan-500 to-lblack w-screen`}
    >
      <SectionHeader
        title={title}
        subtitle={subtitle}
      />
      <br className="sm:block hidden" />

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="w-full h-full mt-4 text-secondary text-[17px] flex lg:flex-row flex-col items-start justify-between leading-[30px]"
      >
        <div className={`text-2xl`}>
          <p
            className={`sm:text-[16px] text-[12px] text-secondary tracking-wider`}
          >
            <span className={`text-crimson`}>My</span> Education:
          </p>
          <div>
            {content.education.map((edu, index) => (
              <EducationCard
                key={`certificate-${index}`}
                course={edu.course}
                place={edu.place}
                year={edu.year}
              />
            ))}
          </div>
        </div>
        <div className={`text-2xl`}>
          <p
            className={`sm:text-[16px] text-[12px] text-secondary tracking-wider`}
          >
            <span className={`text-crimson`}>My</span> Certifications:
          </p>

          <div>
            {content.certifications.map((cert, index) => (
              <CertificationCard
                key={`certificate-${index}`}
                course={cert.course}
                place={cert.place}
              />
            ))}
          </div>
        </div>
      </motion.div>
      <br className="sm:block hidden" />
      <div className={`text-2xl`}>
        <p
          className={`sm:text-[16px] text-[12px] text-secondary tracking-wider`}
        >
          <span className={`text-crimson`}>My</span> Skills:
        </p>
        <div className="flex flex-row flex-wrap w-full justify-between items-start">
          {content.skills.map((skill, index) => (
            <SkillCard key={`skill-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Qualification;
