import skills from "../assets/data/skill";
import Skill from "../component/Skill";

const Skills = () => {
  // const COLUMN = 5;

  return (
    <div className="xs:mt-24 mt-36">
      <h2 className="heading-lv-2 text-sub-title dark:text-primary-dark">
        Skills
      </h2>
      <div className="gap-x-30 xs:grid-cols-3 xs:gap-x-12 xs:gap-y-20 mt-7 grid grid-cols-5 gap-y-20">
        {skills.map((item, index) => (
          <Skill key={index} data={item} />
        ))}
      </div>
    </div>
  );
};
export default Skills;
