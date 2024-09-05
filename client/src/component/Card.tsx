import { isCurrentBreakpoint } from "../util/mediaQuery";
import Chip from "./Chip";

interface CardProps {
  project: {
    name: string;
    tags: {
      text: string;
      color: string;
    }[];
    description: string;
    thumbnail: string;
  };
}
const Card = ({
  project: { name, tags, description, thumbnail },
}: CardProps) => {
  return (
    <article className="flex flex-1 flex-col overflow-hidden rounded-md shadow-md">
      <img
        className="xs:h-[300px] block h-96 w-full object-cover"
        src={thumbnail}
        alt=""
      />
      <div className="xs:pr-2 bg-card dark:bg-card-dark flex-1 pb-7 pl-6 pr-1 pt-7">
        <h3 className="heading-lv-3 text-sub-title uppercase dark:text-[#D9F2F2]">
          {name}
        </h3>
        <ul
          className={`mb-3 mt-2 flex gap-3 ${!isCurrentBreakpoint("xs") ? "scrollbar-hidden overflow-x-scroll" : "flex-wrap"}`}
        >
          {tags.map((tag, index) => (
            <Chip key={index}>{tag.text} </Chip>
          ))}
        </ul>
        <p className="text-primary dark:text-primary-dark">{description}</p>
      </div>
    </article>
  );
};
export default Card;
