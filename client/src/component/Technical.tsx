import { ReactNode } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { SiGnubash } from "react-icons/si";
import cn from "../util/cn";
import {
  CSS,
  Docker,
  HTML,
  Java,
  JavaScript,
  MongoDB,
  MySQL,
  NodeJs,
  PostgreSQL,
  Python,
  Spring,
  TypeScript,
} from "./Icon";
import Link from "./Link";

const TECHS = [
  {
    iconComp: <NodeJs />, // Node.js green
    href: "https://nodejs.org/en",
  },
  {
    iconComp: <Java />, // Java blue
    href: "https://www.java.com/",
  },
  {
    iconComp: <Docker />, // Docker blue
    href: "https://www.docker.com/",
  },
  {
    iconComp: <HTML />, // HTML5 orange
    href: "https://developer.mozilla.org/docs/Web/HTML",
  },
  {
    iconComp: <CSS />, // CSS3 blue
    href: "https://developer.mozilla.org/docs/Web/CSS",
  },
  {
    iconComp: <JavaScript />, // JS yellow
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    iconComp: <TypeScript />, // TS blue
    href: "https://www.typescriptlang.org/",
  },
  {
    iconComp: <Python />, // Python blue
    href: "https://www.python.org/",
  },
  {
    iconComp: <SiGnubash className="text-[#4EAA25]" />, // Bash green
    href: "https://www.gnu.org/software/bash/",
  },
  {
    iconComp: <Spring />, // Spring green
    href: "https://spring.io/",
  },
  {
    iconComp: <MySQL />, // MySQL blue
    href: "https://www.mysql.com/",
  },
  {
    iconComp: <PostgreSQL />, // PostgreSQL blue
    href: "https://www.postgresql.org/",
  },
  {
    iconComp: <MongoDB />, // MongoDB green
    href: "https://www.mongodb.com/",
  },
];

const Technical = () => {
  return (
    <section className="relative aspect-[1/2] overflow-hidden bg-[url('/arrowhead.svg')] dark:bg-[url('/arrowhead-dark.svg')]">
      <div className="pc:rotate-25 pc:left-10 pc:gap-4 relative grid grid-cols-3 gap-3 p-4">
        {TECHS.map((item, idx) => {
          const isLast = idx === TECHS.length - 1;
          const singleLast = TECHS.length % 3 === 1 && isLast;

          return (
            <Item
              key={item.href}
              {...item}
              className={singleLast ? "col-start-2" : ""}
            />
          );
        })}
      </div>
      <Link
        target="_blank"
        to={"/skills"}
        className="absolute bottom-4 left-4 rounded-full border-[1px] bg-white p-2 outline-0 transition-all hover:outline-2 hover:outline-gray-300 dark:bg-gray-200 dark:outline-white"
      >
        <GoArrowUpRight size={25} className="dark:text-gray-500" />
      </Link>
    </section>
  );
};

const Item = ({
  iconComp,
  href,
  className,
}: {
  iconComp: ReactNode;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex aspect-square items-center justify-center rounded-xl bg-white text-4xl shadow-xl hover:shadow-2xl",
        className,
      )}
    >
      {iconComp}
    </Link>
  );
};

export default Technical;
