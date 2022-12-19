import { FC } from "react";

import styles from "./CarouselDotButton.module.css";

interface Props {
  selected: boolean;
  onClick: any;
}

export const CarouselDot: FC<Props> = ({ selected, onClick }) => (
  <div className={styles.embla__dots}>
    <button
      className={`${styles.embla__dot} ${selected ? styles.is__selected : ""}`}
      type="button"
      onClick={onClick}
    />
  </div>
);
