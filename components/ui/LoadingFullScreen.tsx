import { AiOutlineLoading3Quarters } from "react-icons/ai";

import styles from "./LoadingFullScreen.module.css"

export const LoadingFullScreen = () => {
  return (
    <div
    className={styles.loading__fullscreen__container}
    >
      <p
        style={{
          marginBottom: 2,
        }}
      >
        cargando
      </p>
      <AiOutlineLoading3Quarters className={styles.spinner__fullscreen} />
    </div>
  );
};