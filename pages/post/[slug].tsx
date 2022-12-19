import { useState } from "react";
import { GetServerSideProps, NextPage } from "next";

import { MainLayout, Post, PostEdit } from "../../components";
import { IPost } from "../../interfaces";
import { dbPost } from "../../database";

interface Props {
  post: IPost;
}

const PostPage: NextPage<Props> = ({ post }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <MainLayout title={post.title} pageDescription={post.description}>
      <div className={` container`}>
        {!isEditing ? (
          <>
            <Post
              isEditing={isEditing}
              post={post}
              setIsEditing={setIsEditing}
            />
          </>
        ) : (
          <>
            <PostEdit setIsEditing={setIsEditing} post={post} />
          </>
        )}
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug = "" } = params as { slug: string };

  const post = await dbPost.getPostBySlug(slug);
  console.log(post);
  if (!post) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
// export const getStaticPaths: GetStaticPaths = async (ctx) => {
//   const postsSlug = await dbPost.getAllPostSlugs();

//   return {
//     paths: postsSlug.map(({ slug }) => ({
//       params: {
//         slug,
//       },
//     })),
//     fallback: "blocking",
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { slug = "" } = params as { slug: string };

//   const post = await dbPost.getPostBySlug(slug);

//   if (!post) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       post,
//     },
//     revalidate: 86400,
//   };
// };
