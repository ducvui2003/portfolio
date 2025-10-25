import { GoArrowUpRight } from "react-icons/go";
import Link from "./Link";
import { ProjectType } from "../type/project.type";
type ProjectCardProps = ProjectType;

const ProjectCard = ({
  name,
  description,
  thumbnail,
  githubHref = "",
  techs,
}: ProjectCardProps) => {
  return (
    <article className="border-app pc:flex-row relative flex min-h-[300px] flex-col gap-4 p-6">
      <div className="pc:basis-[300px] mt-4">
        <img
          className="pc:w-[300px] aspect-video object-contain"
          src={thumbnail}
        />
      </div>
      <div className="flex-1">
        <h2 className="font-mono text-2xl">{name}</h2>
        <p className="pt-4 leading-[1.67] text-gray-500">{description}</p>
        <div className="my-3 flex justify-end gap-4 [&>*]:text-2xl">
          {techs.map((item) => item)}
        </div>
      </div>
      <Link
        target="_blank"
        to={githubHref}
        className="absolute bottom-4 left-4 rounded-full border-[1px] bg-white p-2 outline-0 transition-all hover:outline-2 hover:outline-gray-300 dark:bg-gray-200 dark:outline-white"
      >
        <GoArrowUpRight size={25} className="dark:text-gray-500" />
      </Link>
    </article>
  );
};

export default ProjectCard;
