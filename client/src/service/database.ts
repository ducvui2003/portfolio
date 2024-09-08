import { Project, Tag } from "../type/project.type";
import INSTANCE from "../util/axios";

const DATABASE_ID = import.meta.env.VITE_NOTION_DATABASE_ID;

const getProject = (): Promise<Project[]> => {
  return INSTANCE.post(`/databases/${DATABASE_ID}/query`, {})
    .then((response) => {
      return response.data.results.map((item: any): Project => {
        return {
          id: item.id as string,
          title: item.properties.name.title[0]?.plain_text as string,
          description: item.properties.description.rich_text[0]?.plain_text,
          tags: item.properties.tags.multi_select?.map(
            (tag: any): Tag => ({ name: tag.name, color: tag.color }),
          ),
          source: item.properties.source.url as string,
          website: item.properties.website.url as string,
          created_time: item.created_time as Date,
          thumbnail: item.properties.thumbnail?.files[0]?.file.url as string,
        };
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export { getProject };
