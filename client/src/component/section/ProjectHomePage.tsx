import { GoArrowUpRight } from "react-icons/go";
import Link from "../Link";

const ProjectHomePage = () => {
  return (
    <div className="relative h-full overflow-x-hidden">
      <div className="dark:bg-primary-dark absolute top-5 z-10 aspect-[16/9] h-[200px] translate-x-[50px] -rotate-[25deg] overflow-hidden rounded-2xl">
        <img
          src="/project_ecommerce_thumb.png"
          alt="E-commerce project thumbnail"
          className="h-full w-full rounded-2xl object-cover object-left-top"
        />
      </div>
      <div className="dark:bg-primary-dark absolute bottom-1/4 z-10 aspect-[16/9] h-[200px] translate-x-[50px] -rotate-[25deg] overflow-hidden rounded-2xl">
        <img
          src={"/project_web_sell_thumb.png"}
          alt=""
          className="h-full w-full rounded-2xl object-cover object-left-top"
        />
      </div>
      <span className="absolute -left-1/4 top-1/2 z-0 size-[200px] rounded-full bg-pink-300"></span>
      <Link
        target="_blank"
        to={""}
        className="absolute bottom-4 left-4 rounded-full bg-white p-2 outline-0 transition-all hover:outline-2 hover:outline-gray-300 dark:bg-gray-200 dark:outline-white"
      >
        <GoArrowUpRight size={25} className="dark:text-gray-500" />
      </Link>
    </div>
  );
};

export default ProjectHomePage;
