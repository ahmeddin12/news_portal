import type { NewsApiResponse } from "./Types";
import { BaseURL } from "./constants";
import type { ApiResponse } from "./requests";
import { getRequest } from "./requests";

const apiKey = import.meta.env.VITE_API_KEY;

export const getTopHeadlines = async (
  category?: string,
  pageNo?: number
): Promise<ApiResponse<NewsApiResponse>> => {
  //newsapi.org/v2/top-headlines/sources?country=usapiKey=API_KEY
  //newsapi.org/v2/top-headlines/sources?country=us&apiKey=d489c3a3f96c4a91a16ce78d50b8ac03
  const url = `${BaseURL}/top-headlines/sources?country=us&apiKey=${apiKey}${
    category ? `&category=${category}` : ""
  }${pageNo ? `&page=${pageNo}` : ""}`;

  return await getRequest<NewsApiResponse>(url);
};

export const getByQuery = async (
  query: string,
  pageNo?: number
): Promise<ApiResponse<NewsApiResponse>> => {
  const url = `${BaseURL}/everything?apiKey=${apiKey}${
    query ? `&q=${query}` : ""
  }${pageNo ? `&page=${pageNo}` : ""}&pageSize=20`;
  return await getRequest<NewsApiResponse>(url);
};
