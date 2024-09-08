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
    url?: string;
    source: string;
  };
}
const Card = ({
  project: { name, tags, description, thumbnail, url, source },
}: CardProps) => {
  return (
    <article className="flex flex-1 flex-col overflow-hidden rounded-md shadow-md">
      <div className="xs:h-[300px] relative h-96">
        <img
          className="block h-full w-full object-cover object-center"
          src={thumbnail || "https://picsum.photos/200/300"}
          alt={name}
        />
        {source && (
          <a href={source} className="absolute right-[20px] top-[20px]">
            <Chip>Github</Chip>
          </a>
        )}
      </div>
      <div className="xs:pr-2 bg-card dark:bg-card-dark flex-1 pb-7 pl-6 pr-1 pt-7">
        <a target="_blank" href={url}>
          <h3 className="heading-lv-3 text-sub-title uppercase dark:text-[#D9F2F2]">
            {name}
          </h3>
        </a>
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
