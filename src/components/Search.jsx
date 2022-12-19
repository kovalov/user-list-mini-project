import styles from "../styles/Search.module.css";

export const Search = ({ setSearchQuery }) => {
  const handleSearchSubmit = (e) => e.preventDefault();

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <form onSubmit={(e) => handleSearchSubmit(e)} className={styles.form}>
      <input
        onChange={(e) => handleSearchInputChange(e)}
        type="text"
        placeholder="Type user name"
        className={styles.input}
      />
    </form>
  );
};
