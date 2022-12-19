import { useEffect, useState } from "react";


export const useLoaded = () => {
  const [loadedPage, setLoadedPage] = useState(false);
  useEffect(() => setLoadedPage(true), []);
  return loadedPage;
};
