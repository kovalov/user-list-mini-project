import styles from "../styles/Modal.module.css";

export const Modal = ({
  isShown,
  setIsShown,
  setSelectedUserId,
  setFormData,
  children,
}) => {
  const handleClick = () => {
    setSelectedUserId("");
    setIsShown(false);
    setFormData({
      id: "",
      first: "",
      last: "",
      dob: "",
      email: "",
      phone: "",
    });
  };

  const hideShowClassList = isShown
    ? `${styles.modal}`
    : `${styles.modal} ${styles.hidden}`;

  return (
    <div onClick={handleClick} className={hideShowClassList}>
      <div onClick={(e) => e.stopPropagation()} className={styles.content}>
        {children}
      </div>
    </div>
  );
};
