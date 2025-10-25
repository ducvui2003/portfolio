import { IconBaseProps } from "react-icons/lib";
import {
  SiFigma,
  SiGithubactions,
  SiGooglecloud,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiPostgresql,
  SiRedis,
  SiSpring,
  SiTypescript,
} from "react-icons/si";
import cn from "../util/cn";
import {
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FcLinux } from "react-icons/fc";

type Props = IconBaseProps;
export const Spring = ({ className }: Props) => {
  return <SiSpring className={cn(className, "text-[#6DB33F]")} />;
};
export const NodeJs = ({ className }: Props) => {
  return <FaNodeJs className={cn(className, "text-[#339933]")} />;
};
export const Java = ({ className }: Props) => {
  return <FaJava className={cn(className, "text-[#007396]")} />;
};

export const Docker = ({ className }: Props) => {
  return <FaDocker className={cn(className, "text-[#2496ED]")} />;
};
export const TypeScript = ({ className }: Props) => {
  return <SiTypescript className={cn(className, "text-[#3178C6]")} />;
};
export const Python = ({ className }: Props) => {
  return <FaPython className={cn(className, "text-[#3776AB]")} />;
};
export const MySQL = ({ className }: Props) => {
  return <SiMysql className={cn(className, "text-[#4479A1]")} />;
};
export const PostgreSQL = ({ className }: Props) => {
  return <SiPostgresql className={cn(className, "text-[#336791]")} />;
};
export const MongoDB = ({ className }: Props) => {
  return <SiMongodb className={cn(className, "text-[#47A248]")} />;
};
export const HTML = ({ className }: Props) => {
  return <FaHtml5 className={cn(className, "text-[#E34F26]")} />;
};
export const CSS = ({ className }: Props) => {
  return <FaCss3Alt className={cn(className, "text-[#1572B6]")} />;
};
export const JavaScript = ({ className }: Props) => {
  return <FaJs className={cn(className, "text-[#F7DF1E]")} />;
};
export const Redis = ({ className }: Props) => {
  return <SiRedis className={cn(className, "text-[#D82C20]")} />; // Redis red
};

export const NestJs = ({ className }: Props) => {
  return <SiNestjs className={cn(className, "text-[#E0234E]")} />; // NestJS pink/red
};

export const NextJs = ({ className }: Props) => {
  return (
    <RiNextjsFill className={cn(className, "text-black dark:text-white")} />
  ); // Next.js black/white
};

export const Figma = ({ className }: Props) => {
  return <SiFigma className={cn(className, "text-[#F24E1E]")} />; // Figma orange/red
};
export const GithubAction = ({ className }: Props) => {
  return <SiGithubactions className={cn(className, "text-[#F24E1E]")} />; // Figma orange/red
};
export const GoogleCloud = ({ className }: Props) => {
  return <SiGooglecloud className={cn(className, "text-[#F24E1E]")} />; // Figma orange/red
};
export const Linux = ({ className }: Props) => {
  return <FcLinux className={cn(className)} />; // Figma orange/red
};
