import SkillType from "../type/skill.type";
const Skill = ({ data }: { data: SkillType }) => {
  return (
    <div className="inline-flex flex-col items-center gap-2">
      <img src={data.image} className="xs:size-20 size-32" />
      <h3 className="xs:text-xs text-base uppercase text-primary dark:text-primary-dark">
        {data.name}
      </h3>
    </div>
  );
};

export default Skill;
