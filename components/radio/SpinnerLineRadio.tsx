import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IurbanSvg } from "../ui";

import styles from "./SpinnerLineRadio.module.css";

const SpinnerLine = () => {
  return (
    <div className={`${styles.loader__wrapper} fadeIn`}>
		<div className={styles.loader}>
			<div className={`${styles.loader} ${styles.loader__inner}`}>

      </div>
		</div>
    <IurbanSvg className={styles.spinner__line} />
	</div>
  )
};

export default SpinnerLine;
