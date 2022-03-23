import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import styles from "./SpinnerLineRadio.module.css";

const SpinnerLine = () => {
  return <AiOutlineLoading3Quarters className={styles.spinner__line} />;
};

export default SpinnerLine;
