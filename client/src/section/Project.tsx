import Card from "../component/Card";
import Link from "../component/Link";
import { projects } from "../data";

const Project = () => {
  return (
    <section className="mt-36 xs:mt-24">
      <h2 className="heading-lv-2 dark:text-primary-dark">Project</h2>
      <div className="mt-10 flex gap-6 xs:flex-col">
        {projects.map((item, index) => (
          <Card key={index} project={item} />
        ))}
      </div>
      <div className="mt-20 flex items-center justify-center">
        <Link
          to={"/project"}
          className="rounded-2xl bg-secondary px-20 py-4 text-base uppercase text-primary-dark dark:bg-linear dark:text-primary xs:mt-4"
          variant="solid"
        >
          See all products
        </Link>
      </div>
    </section>
  );
};
export default Project;
