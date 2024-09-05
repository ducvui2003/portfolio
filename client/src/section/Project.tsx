import { useEffect, useState } from "react";
import Card from "../component/Card";
import Link from "../component/Link";
import { getProject } from "../service/database";
import { Project as ProjectType } from "../type/project.type";

const Project = () => {
  const [data, setData] = useState<ProjectType[]>([]);
  useEffect(() => {
    getProject().then((data) => setData(data));
  }, []);
  return (
    <section className="xs:mt-24 mt-36">
      <h2 className="heading-lv-2 dark:text-primary-dark">Project</h2>
      <div className="xs:flex-col mt-10 flex gap-6">
        {data.map((item, index) => (
          <Card
            key={index}
            project={{
              name: item.title,
              tags: item.tags.map((tag) => ({
                text: tag.name,
                color: tag.color,
              })),
              description: item.description,
              thumbnail: item.thumbnail,
            }}
          />
        ))}
      </div>
      <div className="mt-20 flex items-center justify-center">
        <Link
          to={"/project"}
          className="bg-secondary text-primary-dark dark:bg-linear dark:text-primary xs:mt-4 rounded-2xl px-20 py-4 text-base uppercase"
          variant="solid"
        >
          See all products
        </Link>
      </div>
    </section>
  );
};
export default Project;
