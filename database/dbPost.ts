import { db } from "./";
import { Post } from "../models";
import { IPost } from "../interfaces";

interface PostSlug {
  slug: string;
}
export const getAllPostSlugs = async (): Promise<PostSlug[]> => {
  await db.connect();
  const slugs = await Post.find().select("slug -_id").lean();
  await db.disconnect();
  return slugs;
};

export const getPostBySlug = async (slug: string): Promise<IPost | null> => {
  await db.connect();
  const post = await Post.findOne({ slug }).lean();
  await db.disconnect();

  if (!post) {
    return null;
  }

  return JSON.parse(JSON.stringify(post));
};
