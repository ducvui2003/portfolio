import { ReactNode } from "react";
import cn from "../util/cn";
import Link from "./Link";
import {
  FaNodeJs,
  FaJava,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiSpring,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGnubash,
} from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";

const TECHS = [
  {
    iconComp: <FaNodeJs className="text-[#339933]" />, // Node.js green
    href: "https://nodejs.org/en",
  },
  {
    iconComp: <FaJava className="text-[#007396]" />, // Java blue
    href: "https://www.java.com/",
  },
  {
    iconComp: <FaDocker className="text-[#2496ED]" />, // Docker blue
    href: "https://www.docker.com/",
  },
  {
    iconComp: <FaHtml5 className="text-[#E34F26]" />, // HTML5 orange
    href: "https://developer.mozilla.org/docs/Web/HTML",
  },
  {
    iconComp: <FaCss3Alt className="text-[#1572B6]" />, // CSS3 blue
    href: "https://developer.mozilla.org/docs/Web/CSS",
  },
  {
    iconComp: <FaJs className="text-[#F7DF1E]" />, // JS yellow
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    iconComp: <SiTypescript className="text-[#3178C6]" />, // TS blue
    href: "https://www.typescriptlang.org/",
  },
  {
    iconComp: <FaPython className="text-[#3776AB]" />, // Python blue
    href: "https://www.python.org/",
  },
  {
    iconComp: <SiGnubash className="text-[#4EAA25]" />, // Bash green
    href: "https://www.gnu.org/software/bash/",
  },
  {
    iconComp: <SiSpring className="text-[#6DB33F]" />, // Spring green
    href: "https://spring.io/",
  },
  {
    iconComp: <SiMysql className="text-[#4479A1]" />, // MySQL blue
    href: "https://www.mysql.com/",
  },
  {
    iconComp: <SiPostgresql className="text-[#336791]" />, // PostgreSQL blue
    href: "https://www.postgresql.org/",
  },
  {
    iconComp: <SiMongodb className="text-[#47A248]" />, // MongoDB green
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
