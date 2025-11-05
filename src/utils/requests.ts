import axios from "axios";

interface RequestError extends Error {
  status?: number;
  details?: unknown;
}

export interface ApiResponse<T> {
  data?: T;
  error?: RequestError;
}

export const getRequest = async <T>(url: string): Promise<ApiResponse<T>> => {
  try {
    const response = await axios.get<T>(url);
    return { data: response.data };
  } catch (error: unknown) {
    const requestError: RequestError = {
      name: "RequestError",
      message: `Error fetching ${url}`,
    };

    if (axios.isAxiosError(error)) {
      requestError.status = error.response?.status;
      requestError.details = error.response?.data;
    }

    return { error: requestError };
  }
};
