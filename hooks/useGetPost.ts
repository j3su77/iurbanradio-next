import useSWR from "swr";
import { useState } from "react";
import axios from "axios";


const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useGetPost = () => {
  const pageLimit = 5;
  const [page, setPage] = useState<number>(1);

  const { data, error } = useSWR(
    `/api/posts?page=${page}&pageSize=${pageLimit}`,
    fetcher
  );

  return {
    data: (data && data) || [],
    isLoading: !error && !data,
    isError: error,
    page,
    setPage,

    pageLimit,
  };
};
