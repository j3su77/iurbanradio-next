import { FC } from "react";

import { MainLayout, PostList, CarouselHome, Pagination } from "../components";
import { useGetPost } from "../hooks";


const HomePage: FC = () => {
  const { data, isLoading, page, setPage, pageLimit } = useGetPost();

  return (
    <MainLayout title=" Inicio" pageDescription="lo mejor de la radio online">
      <CarouselHome />
      <>
        <>
          <PostList
            titleSection="Publicaciones"
            posts={data.posts}
            isLoading={isLoading}
            pageLimit={pageLimit}
          />
          <Pagination
            data={data}
            pageLimit={pageLimit}
            page={page}
            setPage={setPage}
          />
        </>
      </>
    </MainLayout>
  );
};

export default HomePage;
