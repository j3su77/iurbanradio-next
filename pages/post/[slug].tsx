import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { IPost } from "../../interfaces";
import { MainLayout } from "../../components/layouts";
import { dbPost } from "../../database";

interface Props {
  post: IPost;
}

const PostPage: NextPage<Props> = ({ post }) => {
  return (
    <MainLayout title={post.title} pageDescription={post.description}>
      <div className={` container`}>
        <img src={`/posts/${post.images[0]}`} alt="" />
        <h2 className="">{post.title}</h2>
        <p>{ post.description }</p>

      </div>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const postsSlug = await dbPost.getAllPostSlugs();

  return {
    paths: postsSlug.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params as { slug: string };

  const post = await dbPost.getPostBySlug(slug);

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
    revalidate: 86400,
  };
};

export default PostPage;
