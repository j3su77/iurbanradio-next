import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { IPost } from "../../../interfaces/posts";
import Post from "../../../models/Post";
// import {ObjectId} from 'mongoose';
import { ObjectId } from "mongoose";
import mongoose from "mongoose";
import User from "../../../models/User";
import { IUser } from "../../../interfaces/user";

type Data = { message: string } | IPost[] | IUser;

export default function (req: NextApiRequest, res: NextApiResponse<Data | {}>) {
  switch (req.method) {
 
    case "GET":
      return getUserById(req, res);

    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}

const getUserById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | {}>
) => {
  const { id_author } = req.query;

  if (!mongoose.isValidObjectId(id_author)) {
    return res.status(400).json({
      message:
        "Lo sentimos pero el id del autor es invalido, contactar con el administrador",
    });
  }
  await db.connect();

  const author = await User.findOne({_id:id_author}).select("username");

  if (!author) {
    return res.status(400).json({
      message: "Lo sentimos pero no existe un autor con ese id proporcionado ",
    });
  }

  await db.disconnect();

  return res.status(200).json(author);
};
