import {
  GoogleCloud,
  Java,
  Linux,
  MySQL,
  NestJs,
  NextJs,
  PostgreSQL,
  Redis,
  Spring,
  TypeScript,
} from "../component/Icon";
import ProjectCard from "../component/ProjectCard";
import { ProjectType } from "../type/project.type";

const PROJECTS: ProjectType[] = [
  {
    id: 1,
    name: "Website Sell Clothes",
    description:
      "Online clothing sales website for Web Programming course at university",
    start: new Date(10, 10, 2023),
    status: "close",
    techs: [<Spring />, <Java />, <MySQL />],
    githubHref: "https://github.com/ducvui2003/spring-mvc-sell-clothes",
    thumbnail: "/project_web_sell_thumb.png",
  },
  {
    id: 2,
    name: "Website Sell Clothes",
    description:
      "Online clothing sales website for Web Programming course at university",
    start: new Date(10, 10, 2023),
    status: "close",
    techs: [
      <TypeScript />,
      <NextJs />,
      <NestJs />,
      <Redis />,
      <PostgreSQL />,
      <Linux />,
      <GoogleCloud />,
    ],
    githubHref: "https://github.com/ducvui2003/ecommerce",
    thumbnail:
      "https://github.com/ducvui2003/ecommerce/raw/main/web/public/images/logo-transparent.png",
  },
];

const ProjectPage = () => {
  return (
    <section className="pc:grid-cols-2 grid gap-4 px-4 pt-4 font-serif">
      {PROJECTS.map((item) => (
        <ProjectCard key={item.id} {...item} />
      ))}
    </section>
  );
};

export default ProjectPage;
