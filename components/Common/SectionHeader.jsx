import { motion } from "framer-motion";
import { textVariant, fadeIn } from "@/util/animations";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}
        >
          {subtitle}
        </p>
        <h2
          className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}
        >
          {title}
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.3, 2)}
        className={`w-[70vw] h-[5px] bg-crimson`}
      ></motion.div>
    </>
  );
};

export { SectionHeader };
