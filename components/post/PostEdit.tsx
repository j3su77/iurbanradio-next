import { Dispatch, FC, useState, useContext, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";

import { AuthContext, UIContext } from "../../context";
import { IPost } from "../../interfaces";
import { useCreatePost, useUpdatePost } from "../../hooks";

import styles from "./PostEdit.module.css";
import { BiImageAdd } from "react-icons/bi";
import React from "react";
import { Editor } from "../ui/Editor";
import iurbanApi from '../../api/iurbanApi';
import { ITag } from '../../interfaces/tag';
import { AiFillTag } from "react-icons/ai";

interface Props {
  post?: IPost;
  isCreating?: boolean;
  setIsEditing?: Dispatch<boolean>;
}

type FormData = {
  title: string;
  description: string;
  cover: string;
  slug: string;
  author: string;
  tags: string[];
};

export const PostEdit: FC<Props> = ({ setIsEditing, post, isCreating }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const [isSubmit, setIsSubmit] = useState(false);
  const [idPost] = useState(post?._id);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [imgError, setImgError] = useState(false);
  const [content, setContent] = useState(post ? post.description : "");
  const [allTags, setAllTags] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>(post ? post?.tags : []);


  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: post?.title,
      cover: post?.cover,
      tags: post?.tags || [],
    },
  });

  const onSubmit = async ({ title, cover , tags }: FormData) => {
    setIsSubmit(true);
    setShowError(false);
    let data;
    if (post || post !== undefined) {
      data = await useUpdatePost(idPost!, title.trim(), content, cover, tags);
    } else {
      const id = user!._id || ""
      data = await useCreatePost(title.trim(), content, cover, id, tags);
    }

    if (typeof data === "string") {
      setShowError(true);
      setErrorMessage(JSON.stringify(data));
      console.log("error");
      setIsSubmit(false);
      setTimeout(() => setShowError(false), 4000);
      return;
    }

    router.push(`/post/${data.slug}`).then(() => {
      router.reload();
    });
  };

  useEffect(() => {
    const getTags = async() => {
      const { data } = await iurbanApi.get<string[]>("tag")
      if(data) {
        setAllTags(data)
      }
    }
    getTags()
  }, [])


  useEffect(() => {
  setTags(watch("tags"))
  }, [watch("tags")])
  
  


  return (
    <form className="container" onSubmit={(e) => e.preventDefault()}>
      <div className={styles.post}>
        <div className={styles.post_header}>
          <div className={`${styles.post_info} flex`}>
            <h3 className={styles.editing_text}>
              {isCreating ? "Creando" : "Editando"} publicación
            </h3>
            {!isCreating && (
              <button
                onClick={() => setIsEditing!(false)}
                className={` ${styles.post_btn_edit}`}
              >
                {/* {<FaTrash  />} */}
                Cancelar
              </button>
            )}
          </div>
          <div className={styles.post_content_img}>
            <h4>Previsualizar imagen:</h4>
            <div className={styles.preview_content_img}>
              <div className={styles.content_img_icon}>
                <BiImageAdd />
              </div>
              <img
                style={{ display: imgError ? "none" : "block" }}
                src={watch("cover")}
                alt=""
                className={styles.preview_img}
                onError={() => setImgError(true)}
                onLoad={() => setImgError(false)}
              />
            </div>

            <textarea
              id="cover"
              className={styles.post_input_img}
              placeholder="Pega aquí la url de la imagen principal del post"
              required
              {...register("cover", {
                required: "Este campo es requerido",
              })}
            />
            {errors.cover && (
              <p className={styles.loginInput_error}>{errors.cover.message}</p>
            )}
            <div className="divider" />
          </div>

          <div className={styles.content_title}>
            <h4>Titulo:</h4>

            <textarea
              id="title"
              className={styles.post_input_title}
              placeholder="Escribe aquí el título del post"
              required
              {...register("title", {
                required: "Este campo es requerido",
              })}
            />
            {errors.title && (
              <p className={styles.loginInput_error}>{errors.title.message}</p>
            )}
            <div className="divider" />
          </div>
        </div>
        <h4>Contenido:</h4>
        <div className={styles.post_body}>
          <Editor content={content} setContent={setContent} />
        </div>

        <div className={styles.post_tags}>
        <h4>Categorias:</h4>

         <div className={styles.post_all_tags}>
              {
                Object(allTags)!.map((tag: any) => (
                  <span className={styles.post_tag} key={tag.name}>
                    <input 
                      value={tag.name}
                      checked={!!getValues("tags").find((e) => e === tag.name)}
                      type="checkbox"
                      {...register("tags")}
                    />
                    {tag.name}
                  </span>
                ))
              } 
         </div>

          <div className={styles.post_content_tags_selected}>
            {Object(tags).map((tag: ITag,index: number) => {
              return (
                <span className={styles.post_tag_selected} key={index} >
                  <AiFillTag />
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="post_edit_btns">
        <button
          onClick={handleSubmit(onSubmit)}
          className={`button ${
            isSubmit ? styles["login__button-loader"] : styles.login__button
          }`}
          disabled={isSubmit}
        >
          <span className={styles["login__button-text"]}>
            {isSubmit ? "Cargando..." : isCreating ? "Guardar" : "Actualizar"}
          </span>
        </button>
        {!isCreating && (
          <button
            onClick={() => setIsEditing!(false)}
            className={`button ${
              isSubmit ? styles["login__button-loader"] : styles.login__button
            }`}
            disabled={isSubmit}
          >
            <span className={styles["login__button-text"]}>Cancelar</span>
          </button>
        )}
      </div>
    </form>
  );
};
