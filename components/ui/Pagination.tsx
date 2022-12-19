import { Dispatch, FC, useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./Pagination.module.css";

interface Props {
  data: object;
  page: number;
  setPage: Dispatch<number>;
  pageLimit: number;
}

export const Pagination: FC<Props> = ({ data, page, setPage, pageLimit }) => {
  const [hasMore, setHasMore] = useState<boolean>();

  let total = 0;

  if ("total" in data) total = data.total as number;

  const totalPages = Math.ceil(total / pageLimit);

  const decrement = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  useEffect(() => {
    if (data && total < page * pageLimit) {
      setHasMore(true);
    } else {
      setHasMore(false);
    }
  }, [data]);

  return (
    <div className={styles.pagination}>
      <button
        className={styles.pag_btn}
        disabled={!!(page === 1)}
        onClick={() => decrement()}
        style={{ display: page === 1 ? "none" : "flex" }}
      >
       <FaArrowLeft />
      </button>

      {Array.from(Array(totalPages).keys()).map((pag) => (
        <button
          key={pag}
          disabled={pag + 1 === page}
          className={styles.pag_btn}
          onClick={() => setPage(pag + 1)}
        >
          {pag + 1}
        </button>
      ))}

      <button
        className={styles.pag_btn}
        disabled={hasMore}
        onClick={() => setPage(page + 1)}
        style={{ display: hasMore ? "none" : "flex" }}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};
