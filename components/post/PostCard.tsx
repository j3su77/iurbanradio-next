import { FC, useState,useEffect , useContext} from 'react';
import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import styles from "./PostCard.module.css";

import { UIContext } from '../../context/ui/UIContext';


interface Props {
  post?: any;
  isLoading: boolean;
  isDark?: boolean;
  pageLimit?: number;
}

export const PostCard: FC<Props> = ({ post, isLoading, pageLimit }) => {
  const {isDark} = useContext(UIContext)
  
  return (
    <>
      {!post || isLoading ? (
        <SkeletonTheme
          baseColor={isDark ? "#202020" : "#f0eff6"}
          highlightColor={isDark ? "#404040" : "#d5d5d5"}
          duration={.8}
        >
          {Array.from(Array(pageLimit).keys()).map((pag) => (
            <div key={pag} className={`${styles.post__content}`}>
              <Skeleton key={pag} width="100%" height={300} inline />
            </div>
          ))}
        </SkeletonTheme>
      ) : (
        <Link href={`/post/${post.slug}`} passHref>
          <a>
            <div className={`${styles.post__content}`}>
              <div className={styles.tag__content}>
                {post.tags.map((tag: any, index: any) => (
                  <div key={index} className={styles.tag__item}>
                    {tag}
                  </div>
                ))}
              </div>

              <img
                src={post.cover}
                alt={post.title}
                className={styles.post__img}
              />

              <div className={styles.description__post}>
                <h3 className={styles.post__title}>{post.title}</h3>
              </div>
            </div>
          </a>
        </Link>
      )}
    </>
  );
};
