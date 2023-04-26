import axios from "axios";
import { service } from "@/config/config";

const apiKey = service.newsApiKey

const getHeadlines = (
  params: { q?: string; form?: string; sortBy?: string }
) => {
  const result = axios.get(`${service.newsApiUrl}everything`, {
    params: { ...params, apiKey },
  });
  return result;
};
export default getHeadlines;
