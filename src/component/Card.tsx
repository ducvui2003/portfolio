import { Project } from "../interface/Project";
import { isCurrentBreakpoint } from "../util/mediaQuery";
import Chip from "./Chip";

interface CardProps {
  project: Project;
}
const Card = ({ project: { name, tags, desc, thumbnail } }: CardProps) => {
  return (
    <article className="flex flex-1 flex-col overflow-hidden rounded-md shadow-md">
      <img
        className="xs:h-[300px] block h-96 w-full object-cover"
        src={thumbnail}
        alt=""
      />
      <div className="xs:pr-2 flex-1 bg-card pb-7 pl-6 pr-1 pt-7 dark:bg-card-dark">
        <h3 className="heading-lv-3 uppercase text-sub-title dark:text-[#D9F2F2]">
          {name}
        </h3>
        <ul
          className={`mb-3 mt-2 flex gap-3 ${!isCurrentBreakpoint("xs") ? "overflow-x-scroll scrollbar-hidden" : "flex-wrap"}`}
        >
          {tags.map((tag, index) => (
            <Chip key={index}>{tag.text} </Chip>
          ))}
        </ul>
        <p className="text-primary dark:text-primary-dark">{desc}</p>
      </div>
    </article>
  );
};
export default Card;
