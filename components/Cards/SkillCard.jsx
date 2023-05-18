import { textVariant } from "@/util/animations";
import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      variants={textVariant(1)}
      className={`cursor-pointer w-[150px] h-[150px] bg-xlblack rounded-xl p-4 text-white flex flex-col items-center justify-start text-center sm:basis-8 basis-1/2 border-2 border-crimson`}
    >
      <img
        src={`/assets/skill-icons/${skill.icon}`}
        alt={skill.title}
        className="w-[50%] h-[50%] sm:w-[80%] sm:h-80% object-contain"
      ></img>
      <div>{skill.title}</div>
    </motion.div>
  );
};

export { SkillCard };
