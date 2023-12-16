import { Gugi } from "next/font/google";
const { content } = require("../content/Footer.json");

const gugi = Gugi({ subsets: ["latin"], weight: ["400"] });

const Footer = () => {
  return (
    <section className={`relative w-full h-full py-5 px-0 sm:px-20`}>
      <div className="flex sm:flex-row flex-col items-center justify-between flex-shrink">
        <div>
          A portfolio website for <br className="sm:block block" />
          <span className={`${gugi.className} text-crimson`}>
            Dr. Pranesh Rao K.M.
          </span>
          .
        </div>
        <div>
          Made by{" "}
          <a
            href={`https://${content.coder.githubURL}`}
            no-referrer
            target="_blank"
            className={"text-white hover:text-crimson hover:cursor-pointer"}
          >
            {content.coder.name}
          </a>
        </div>
      </div>
      <br className="sm:block block" />
      <div className="text-center">
        <a
          href={`https://${content.sourceCodeURL}`}
          no-referrer
          target="_blank"
          className={"text-white hover:text-crimson hover:cursor-pointer"}
        >
          Source Code
        </a>
      </div>
    </section>
  );
};

export default Footer;
