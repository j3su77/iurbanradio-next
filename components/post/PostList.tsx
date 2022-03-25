import { FC } from "react";
import { IPost } from "../../interfaces/posts";
import { PostCard } from "./PostCard";

import styles from "./PostList.module.css";

interface Props {
  posts: IPost[];
  titleSection?: string
}

export const PostList: FC<Props> = ({ posts, titleSection }) => {
  return (
    <div className={styles.post__container + " container"}>
    <h2 className={"section__title-center"}>{titleSection}</h2>

      <div className={styles.posts__content + " grid"}>
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};
