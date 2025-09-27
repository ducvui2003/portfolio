import cn from "../../util/cn";
import Link from "../Link";
import { GoArrowUpRight } from "react-icons/go";
import ballon from "../../assets/ballon.svg";
import heart from "../../assets/heart.svg";
import star from "../../assets/star.svg";
import rubik from "../../assets/rubik.svg";
const AboutHomePage = () => {
  return (
    <>
      <h2 className="pc:aspect-auto pc:text-[30px] text-[25px] font-bold text-sky-800 dark:text-white">
        How it started vs. how it's going
      </h2>
      <p className="pc:mt-5 mt-3 font-serif leading-[1.67] text-sky-700 dark:text-white">
        A short personal history as it relates to design and development,and how
        I've found value in the cross-section between both disciplines.
      </p>
      <Link
        target="_blank"
        to={"about"}
        className="pc:absolute pc:mt-0 bottom-10 left-10 mt-3 flex w-fit items-center gap-2 rounded-full border-[1px] p-2 font-serif outline-0 transition-all hover:outline-2 hover:outline-gray-300 dark:text-white dark:outline-white"
      >
        <GoArrowUpRight size={25} className="dark:text-gray-500" />
        Read more
      </Link>

      <SVGLoader
        url={ballon}
        className="pc:right-5 absolute right-0 top-12 h-[50px] w-[100px]"
      />
      <SVGLoader
        url={heart}
        className="pc:size-[100px] absolute bottom-10 left-1/2 size-[50px]"
      />
      <SVGLoader
        url={star}
        className="pc:top-auto pc:h-[50px] pc:w-[100px] absolute left-5 top-2 h-[30px] w-[60px]"
      />
      <SVGLoader
        url={rubik}
        className="pc:size-[80px] absolute bottom-10 right-5 size-[50px]"
      />
    </>
  );
};

const SVGLoader = ({ url, className }: { url: string; className?: string }) => {
  return <img src={url} className={cn(className)} alt="" />;
};

export default AboutHomePage;
