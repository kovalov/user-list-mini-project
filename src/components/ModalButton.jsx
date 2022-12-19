import styles from "../styles/ModalButton.module.css";

export const ModalButton = ({ setIsModalShown, setIsAdd }) => {
  const handleClick = () => {
    setIsAdd(true);
    setIsModalShown(true);
  };

  return <button onClick={handleClick} className={styles.button}></button>;
};
