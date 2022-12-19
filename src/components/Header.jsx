import styles from "../styles/Header.module.css";

export const Header = ({ title }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
    </div>
  </header>
);
