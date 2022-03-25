import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { IPost } from '../../../interfaces/posts';
import Post from '../../../models/Post';

type Data = 
|{ message: string}
| IPost[]

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case "GET":
          return getPosts(req, res);
    
        default:
          return res.status(400).json({ message: "Bad Request" });
      }
}
const getPosts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
    await db.connect();

    const products = await Post.find()
      .select("title images description tags slug -_id")
      .lean();
  
    await db.disconnect();
  
    return res.status(200).json(products);

}

