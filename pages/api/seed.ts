import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedDatabase } from '../../database';
import { Post }from '../../models';

type Data = {
    message: string
}

export default async function  handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (process.env.NODE_ENV === "production")
    return res.status(401).json({ message: "No tiene acceso a esta API" });
  await db.connect();

  await Post.deleteMany();
  await Post.insertMany(seedDatabase.initialData.posts);

  await db.disconnect();

  res.status(200).json({ message: "Proceso realizado correctamente" });






}