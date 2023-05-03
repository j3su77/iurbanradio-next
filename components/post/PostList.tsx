import { FC } from "react";

import { IPost } from "../../interfaces/posts";
import { PostCard } from "./PostCard";

import styles from "./PostList.module.css";

interface Props {
  posts: IPost[];
  titleSection?: string;
  isLoading: boolean;
  pageLimit: number
}

export const PostList: FC<Props> = ({ posts, titleSection, isLoading, pageLimit }) => {
  return (
    <div className={styles.post__container + " container"} id="publicaciones">
      <h2 className={"section__title-center"}>{titleSection}</h2>
      <div className={styles.posts__content + " grid"}>
        {!posts ? (
          <PostCard isLoading={isLoading} pageLimit={pageLimit} />
        ) : (
          posts.map((post, index) => (
            <PostCard key={index} post={post} isLoading={isLoading}  />
          ))
        )}
      </div>
    </div>
  );
};
