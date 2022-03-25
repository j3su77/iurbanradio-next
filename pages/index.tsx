import React, { FC } from "react";

import { MainLayout } from "../components/layouts/MainLayout";
import { PostList } from "../components/post";
import { useProducts } from "../hooks";
import { LoadingFullScreen } from "../components/ui";

const HomePage: FC = () => {
  const { posts, isLoading } = useProducts("/posts");
 
  return (
    <MainLayout
      title="📻 - IUrbanRadio"
      pageDescription="lo mejor de la radio online"
    >
      {isLoading ? (
        <LoadingFullScreen />
      ) : (
        <PostList posts={posts} titleSection="Publicaciones" />
      )}
    </MainLayout>
  );
};

export default HomePage;
