import { FC } from "react";
import Link from "next/link";
import { IPost } from "../../interfaces/posts";

import styles from "./PostCard.module.css";

interface Props {
  post: IPost;
}

export const PostCard: FC<Props> = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`} passHref>
    <a>
    <div className={`${styles.post__content}`}>
      <div className={styles.tag__content}>
      {
        post.tags.map((tag, index) => (
          <div key={index} className={styles.tag__item}>{tag}</div>
        ))
      }
      </div>
      
          <img
            src={`/posts/${post.images[0]}`}
            alt={post.title}
            className={styles.post__img}
          />
      
      <div className={styles.description__post}>
        <h3 className={styles.post__title}>{post.title}</h3>
      </div>
    </div>
    </a>
      </Link>
  );
};
