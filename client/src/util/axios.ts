import axios, { AxiosInstance } from "axios";
const env = import.meta.env;
const INSTANCE: AxiosInstance = axios.create({
  baseURL: `${env.VITE_API_NOTION_URL}/databases/${env.VITE_API_NOTION_DATABASE_ID}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${env.VITE_API_NOTION_TOKEN}`,
    "Notion-Version": "2022-06-28",
  },
});
INSTANCE.interceptors.request.use(function (config) {
  if (config.data) {
    config.data = {
      ...config.data,
      modifiedKey: "newValue",
    };
  }
  return config;
});
export default INSTANCE;
