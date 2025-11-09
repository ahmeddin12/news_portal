import type { NewsApiResponse } from "./Types";
import { BaseURL } from "./constants";
import type { ApiResponse } from "./requests";
import { getRequest } from "./requests";

export const getTopHeadlines = async (
  category?: string,
  pageNo?: number
): Promise<ApiResponse<NewsApiResponse>> => {
  const url = `${BaseURL}/top-headlines?${
    category ? `category=${category}&` : ""
  }${pageNo ? `page=${pageNo}&` : ""}country=us`;

  return await getRequest<NewsApiResponse>(url);
};

export const getByQuery = async (
  query: string,
  pageNo?: number
): Promise<ApiResponse<NewsApiResponse>> => {
  const url = `${BaseURL}/everything?${
    query ? `q=${encodeURIComponent(query)}&` : ""
  }${pageNo ? `page=${pageNo}&` : ""}pageSize=20`;
  return await getRequest<NewsApiResponse>(url);
};
