import Button from "../component/Button";
import Card from "../component/Card";
import { projects } from "../data";

const Project = () => {
  return (
    <section className="xs:mt-24 mt-36">
      <h2 className="heading-lv-2 dark:text-primary-dark">Project</h2>
      <div className="xs:flex-col mt-10 flex gap-6">
        {projects.map((item, index) => (
          <Card key={index} project={item} />
        ))}
      </div>
      <Button
        className="xs:mt-4 mx-auto mt-20 block px-20 py-4 align-baseline uppercase"
        variant="solid"
      >
        See all products
      </Button>
    </section>
  );
};
export default Project;
