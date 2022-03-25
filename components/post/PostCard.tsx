import { FC } from "react";
import Link from "next/link";
import { IPost } from "../../interfaces/posts";

import styles from "./PostCard.module.css";

interface Props {
  post: IPost;
}

export const PostCard: FC<Props> = ({ post }) => {
  return (
    <div className={`${styles.post__content}`}>
      <Link href={`/post/${post.slug}`} passHref>
        <a>
          <img
            src={`/posts/${post.images[0]}`}
            alt=""
            className={styles.post__img}
          />
        </a>
      </Link>
      <div className={styles.description__post}>
        <h3 className={styles.post__title}>{post.title}</h3>
      </div>
    </div>
  );
};
