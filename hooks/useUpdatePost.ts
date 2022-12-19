import iurbanApi from "../api/iurbanApi";
import { IPost } from "../interfaces/posts";

type Data = string | IPost;

export const useUpdatePost = async (
  id: string,
  title: string,
  description: string,
  cover: string,
  tags?: string[]
): Promise<Data> => {
  try {
    const { data } = await iurbanApi.put<IPost>("posts", {
      id,
      title: title.trim(),
      description,
      cover,
      tags
    });

    return data;

    // Procesa la respuesta del servidor
  } catch (error) {
    return "error al crear el post";
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
