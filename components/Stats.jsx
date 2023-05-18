"use client";

const { content } = require("../content/Stats.json");

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/util/animations";

const statsStyle =
  "pt-2 mt-1 text-secondary text-[20px] sm:text-[30px] max-w-3xl leading-[30px] sm:basis-1 basis-1/2";

const Stats = () => {
  return (
    <motion.section className="flex flex-col select-none sm:px-10 px-6 sm:py-10 bg-gradient-to-r from-xlblack via-crimson  text-white w-screen to-xlblack py-10 max-w-7xl mx-auto ">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`mx-20 justify-between text-center relative z-0 h-full flex flex-row flex-wrap`}
      >
        <motion.div
          variants={fadeIn("", "", 0.5, 1)}
          className={`${statsStyle}`}
        >
          <div>{content.experienceYears}+</div>
          <div className={`text-sm`}>
            Years of Experience
            <br className="sm:block hidden" />
            in the Field
          </div>
        </motion.div>
        <motion.div variants={fadeIn("", "", 1, 1)} className={`${statsStyle}`}>
          <div>{content.publicationCount}+</div>
          <div className={`text-sm`}>Publications</div>
        </motion.div>
        <motion.div
          variants={fadeIn("", "", 1.5, 1)}
          className={`${statsStyle}`}
        >
          <div>{content.publicationReadCount}+</div>
          <div className={`text-sm`}>Reads on Publications</div>
        </motion.div>
        <motion.div variants={fadeIn("", "", 2, 1)} className={`${statsStyle}`}>
          <div>{content.citiationCount}+</div>
          <div className={`text-sm`}>Citiations Made</div>
        </motion.div>
      </motion.div>
      <motion.div className={`text-blue-200 mt-9 text-center `}>
        <a href={`https://${content.source}`} target="_blank" no-referrer>
          Click here to view Publications on ResearchGate
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Stats;
