import { db } from "../database";
import { Post } from "../models";

export const countTotalPost = async (): Promise<number> => {
  let total: number = 0;
  if(!process.browser) {
    await db.connect();
    await Post.estimatedDocumentCount((err: any, numOfDocs: number) => {
      if(err) throw(err);
      total = numOfDocs
      console.log(`Total: ${numOfDocs}.`);
    });
    await db.disconnect();
  }
  return total;
};
