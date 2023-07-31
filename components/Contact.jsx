"use client";

// Data Import
import { SectionHeader } from "./Common/SectionHeader";
const { title, subtitle, content } = require("../content/Contact.json");

import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "@/util/animations";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`sm:px-16 px-1 sm:py-16 py-10 max-w-7xl mx-auto relative z-0  bg-transparent w-fit`}
    >
      <SectionHeader title={title} subtitle={subtitle} />

      <motion.div
        variants={textVariant()}
        className="mt-4 text-secondary text-[15px] max-w-3xl leading-[30px]"
      >
        via E-mail:{" "}
        <a
          href={`mailto:${content.email}`}
          className={"text-white hover:text-crimson hover:cursor-pointer"}
        >
          {content.email}
        </a>
        <br className="sm:block hidden" />
        via LinkedIn:{" "}
        <a
          href={`https://${content.linkedin}`}
          no-referrer
          target="_blank"
          className={
            "text-white hover:text-crimson hover:cursor-pointer text-clip"
          }
        >
          {content.linkedin}
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
