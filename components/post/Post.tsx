import { Dispatch, FC, useContext, useEffect, useMemo, useState } from "react";

import { AuthContext } from "../../context";
import { IPost, IUser } from "../../interfaces";
import { iurbanApi } from "../../api";
import { humanizedDate } from "../../utils";

import styles from "./Post.module.css";
import { IurbanSvg } from "../ui";

interface Props {
  post: IPost;
  isEditing: boolean;
  setIsEditing: Dispatch<boolean>;
}

export const Post: FC<Props> = ({ post, isEditing, setIsEditing }) => {
  const { isLoggedIn, user } = useContext(AuthContext);
  const [author, setAuthor] = useState("");
  const isCreator = useMemo(() => post.author === user?._id, [user]);
  const wasEdited = useMemo(() => post.createdAt !== post.updatedAt, [post]);


  useEffect(() => {
    var elem = document.getElementById("text");
    if (typeof elem !== "undefined" && elem !== null) {
      elem.innerHTML = post.description;
    }
  }, [post, isEditing]);

  useEffect(() => {
    const getAuthor = async () => {
      const {
        data: { username },
      } = await iurbanApi.get<IUser>(`user?id_author=${post.author}`);
      username ? setAuthor(username) : setAuthor("IurbanUser :)");
    };
    getAuthor();
  }, []);
  return (
    <>
      <div className={styles.post}>
        <div className={styles.post_header}>
          <div className={styles.post_content_img}>
          <div className={styles.content_img_icon}>
                <IurbanSvg />
            </div>
            <img
              className={styles.post_img}
              src={post.cover}
              alt={post.title}
            />
          </div>
          <div className={`${styles.post_info} flex`}>
            <div className={`${styles.post_author} flex`}>
              <h4 className={styles.post_text_info}>
                Creado: {humanizedDate(post.createdAt)}{" "}
                {wasEdited && <small>editado</small>}
              </h4>
              <h4 className={styles.post_text_info}>Por: {author} </h4>
            </div>
            <div className={styles.post_edit}>
              {isLoggedIn && isCreator && (
                <div className={styles.post_edit_btns}>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className={` ${styles.post_btn_edit}`}
                  >
                    {/* {<FaEdit  />} */}
                    Editar
                  </button>

                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className={` ${styles.post_btn_del}`}
                  >
                    {/* {<FaTrash  />} */}
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className={styles.content_title}>
            <div className="divider" />
            <h2 className={styles.title}>{post.title}</h2>
          </div>
        </div>
        <div className={styles.post_body}>
          <div id="text" className={styles.content_description} />
        </div>
      </div>
    </>
  );
};
