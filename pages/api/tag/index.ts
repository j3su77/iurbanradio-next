import { NextApiRequest, NextApiResponse } from 'next';
import { ITag } from '../../../interfaces';
import { db } from '../../../database';
import {Tag} from '../../../models';



type Data = { message: string } | ITag[] | ITag;

export default function (req: NextApiRequest, res: NextApiResponse<Data | {}>) {
  switch (req.method) {
 
    case "GET":
      return getTags(req, res);

    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}

const getTags = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const tags = await Tag.find()
    .select("name -_id")
    .lean();

  await db.disconnect();
  console.log(tags[0]["name"]);

  return res.status(200).json(tags);
};