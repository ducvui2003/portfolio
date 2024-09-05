interface Project {
  id: string;
  title: string;
  tags: Tag[];
  description: string;
  website: string;
  source: string;
  thumbnail: string;
  created_time: Date;
}
interface Tag {
  name: string;
  color: string;
}
export type { Project as Project, Tag as Tag };
