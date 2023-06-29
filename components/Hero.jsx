import { Gugi } from "next/font/google";
const { intro, currentJob } = require("../content/Hero.json");

const gugi = Gugi({ subsets: ["latin"], weight: ["400"] });

const Hero = () => {
  return (
    <section
      className={`relative w-full h-[98vh] mx-auto flex flex-row items-center justify-start`}
    >
      <div className={`pl-1 md:pl-10`}>
        <div
          className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 `}
        >
          <h1 className="text-3xl">{intro}</h1>
          <h1>
            <span className={`${gugi.className} text-6xl`}>
              Dr. <span className="text-[#ff4268]">Pranesh Rao K.M.</span>
            </span>
          </h1>
        </div>
        <p
          className={`text-[#f8afb9] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}
        >
          Currently, <br className="sm:block hidden" />
          {currentJob}.
        </p>
      </div>
      <div className="absolute bottom-5  w-full flex justify-center items-center rotate-180 text-7xl text-[#c4c2c2] ">
        <a href="#about" className={`animate-bounce`}>
          &#94;
        </a>
      </div>
    </section>
  );
};

export default Hero;
