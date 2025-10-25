import { ReactNode } from "react";

interface ProjectType {
  id: number;
  name: string;
  description: string;
  techs: ReactNode[];
  start: Date;
  status: "open" | "close";
  tag?: { name: string; color: string; bgColor: string }[];
  githubHref?: string;
  thumbnail?: string;
}

export type { ProjectType };
