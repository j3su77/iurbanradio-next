import useSWR, { SWRConfiguration } from "swr";
import { IPost } from "../interfaces";

export const useProducts = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR<IPost[]>(`/api${url}`, config);

  return {
    posts: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
