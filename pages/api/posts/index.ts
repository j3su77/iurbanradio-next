import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { IPost } from "../../../interfaces/posts";
import Post from "../../../models/Post";
// import {ObjectId} from 'mongoose';
import { ObjectId } from "mongoose";
import mongoose from "mongoose";
import User from "../../../models/User";
import { IUser } from "../../../interfaces/user";

type Data = { message: string } | object | number | IUser;

export default function (req: NextApiRequest, res: NextApiResponse<Data | {}>) {
  switch (req.method) {
    case "GET":
      return getPosts(req, res);

    case "POST":
      return createPost(req, res);

    case "PUT":
      return updatePost(req, res);

    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}

const getPosts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();
  const { page = 1, pageSize = 5 } = req.query;
  let total = 0;

  const posts = await Post.find()
    .select("title images description tags slug cover -_id")
    .skip((Number(page) - 1) * Number(pageSize))
    .limit(Number(pageSize))
    .lean();

  const countTotal = await Post.find().countDocuments();
  total = countTotal;
  await db.disconnect();

  return res.status(200).json({ posts, total });
};

const createPost = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | {}>
) => {
  const { title, description, cover, author, tags } = req.body as {
    title: string;
    description: string;
    cover: string;
    author: string;
    tags?: string[];
  };

  await db.connect();

  if (title.length < 5) {
    return res.status(400).json({
      message: "El titulo debe de ser de 2 caracteres",
    });
  }

  if (description.length < 10) {
    return res.status(400).json({
      message: "la desctipcion es demasiado corta",
    });
  }

  if (cover.length < 4) {
    return res.status(400).json({
      message: "debe agregar una imagen",
    });
  }

  if (!mongoose.isValidObjectId(author)) {
    return res.status(400).json({
      message:
        "Error, el ID del autor no es válido, contactar al administrador del sistema",
    });
  }

  const post = new Post({
    title: title.toLocaleLowerCase(),
    description,
    cover,
    slug: createSlug(title),
    author,
    tags,
  });


  post.save((err) => {
    if (err) {
      return res.status(400).json({
        message:
          "Error al crear el post, contactar al administrador del sistema",
      });
    } else {
      return res.status(200).json({
        _id: post!._id,
        title: post!.title,
        slug: post!.slug,
      });
    }
  });
  await db.disconnect();

  return post;
};

const updatePost = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | {}>
) => {
  const { id, title, description, cover, tags } = req.body as {
    id: string;
    title: string;
    description: string;
    cover: string;
    tags?: string[];
  };

  await db.connect();

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({
      message:
        "Lo sentimos pero el id del post es invalido, contactar con el administrador del sistema",
    });
  }

  if (title.length < 5) {
    return res.status(400).json({
      message: "El titulo debe de ser de 2 caracteres",
    });
  }

  if (description.length < 10) {
    return res.status(400).json({
      message: "la desctipcion es demasiado corta",
    });
  }

  if (cover.length < 1) {
    return res.status(400).json({
      message: "debe agregar una imagen",
    });
  }

  const newPost = {
    title: title.toLocaleLowerCase(),
    description,
    cover,
    slug: createSlug(title),
    tags,
  };

  const options = {
    new: true, // Devuelve el documento actualizado en vez del documento original
    runValidators: true, // Aplica validaciones del modelo durante la actualización
  };

  try {
    Post.findByIdAndUpdate(id, newPost, options, (err, post) => {
      if (err) {
        // Hubo un error al actualizar el documento
        console.error(err);
      } else {
        return res.status(200).json({
          _id: post!._id,
          title: post!.title,
          slug: post!.slug,
        });
      }
    });

    await db.disconnect();
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res.status(500).json({
      message: "Revisar logs del servidor",
    });
  }
};

function createSlug(str: string) {
  // Codifica los caracteres especiales
  str = str.replace(/[áäà]/g, "a");
  str = str.replace(/[éëè]/g, "e");
  str = str.replace(/[íïì]/g, "i");
  str = str.replace(/[óöò]/g, "o");
  str = str.replace(/[úüù]/g, "u");
  str = str.replace(/[´]/g, "");

  // Reemplazar la ñ por n
  str = str.replace(/ñ/g, "n");
  str = encodeURIComponent(str);

  // Reemplaza los espacios con guiones bajos
  str = str.replace(/%20/g, "_");

  // Convierte el string a minúsculas
  str = str.toLowerCase();

  // Elimina cualquier carácter que no sea una letra, número o guion bajo
  str = str.replace(/[^a-z0-9_]/g, "");

  return str;
}
