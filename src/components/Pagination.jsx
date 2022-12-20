import styles from "../styles/Pagination.module.css";

export const Pagination = ({ numberOfPages, currentPage, setCurrentPage }) => {
  const nextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className={styles.container}>
      <button onClick={prevPage} className={styles.button}>
        Prev
      </button>
      <span className={styles.current}>{currentPage}</span>
      <button onClick={nextPage} className={styles.button}>
        Next
      </button>
    </div>
  );
};
