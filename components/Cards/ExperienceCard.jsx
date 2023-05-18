import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ WorkExperience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#111111",
        color: "#ffffff",
      }}
      contentArrowStyle={{ borderRight: "#ffffff" }}
      date={WorkExperience.date}
      iconStyle={{ background: "#ffffff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={WorkExperience.icon}
            alt={WorkExperience.company_name}
            className="object-contain w-[80%] h-[80%]"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {WorkExperience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {WorkExperience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {WorkExperience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
