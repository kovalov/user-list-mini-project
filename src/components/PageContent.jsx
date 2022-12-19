import styles from "../styles/PageContent.module.css";

export const PageContent = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};
