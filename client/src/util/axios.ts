import axios, { AxiosInstance } from "axios";
const env = import.meta.env;
const INSTANCE: AxiosInstance = axios.create({
  baseURL: `${env.VITE_URL_PROXY}`,
  headers: {
    "Content-Type": "application/json",
  },
});
export default INSTANCE;
