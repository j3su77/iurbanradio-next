import iurbanApi from "../api/iurbanApi";
import { IPost } from '../interfaces/posts';

type Data =  string  | IPost 

export const useCreatePost = async (
  title: string,
  description: string,
  cover: string,
  author: string,
  tags?: string[]
): Promise<Data> => {
  try {
    const { data } = await iurbanApi.post<IPost>("posts", {
      title: title.trim(),
      description,
      cover,
      author,
      tags
    });

    console.log({usecreate: data});

    return data;

    // Procesa la respuesta del servidor
  } catch (error) {
    return "error al crear el post" ;
  }

  // else {
  //   try {
  //     const { data } = await iurbanApi.put('posts', {
  //       id,
  //       title: title.trim(),
  //       description,
  //       cover
  //     });

  //     return data

  //     // Procesa la respuesta del servidor
  //   } catch (error) {
  //     return {message: "error al actualizar el post"}
  //   }
  // }
};
