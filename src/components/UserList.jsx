import styles from "../styles/UserList.module.css";

export const UserList = ({
  users,
  setUsers,
  deleteUser,
  setIsModalShown,
  setSelectedUserId,
  setIsAdd,
}) => {
  const handleUserDelete = async (id) => {
    await deleteUser(id);
    setUsers((prevState) => [...prevState.filter((user) => user.id !== id)]);
  };

  const handleUserEdit = (id) => {
    setIsModalShown(true);
    setSelectedUserId(id);
    setIsAdd(false);
  };

  return users.length ? (
    <ul className={styles.list}>
      {users.map((item) => (
        <li key={item.id} className={styles.listItem}>
          {/* <span className={styles.value}>{item.first}</span> */}
          <ul className={styles.innerList}>
            <li className={styles.value}>{`${item.first} ${item.last}`}</li>
            <li className={styles.value}>{item.email}</li>
            <li className={styles.value}>{item.dob}</li>
            <li className={styles.value}>{item.tel}</li>
          </ul>
          <div className={styles.controls}>
            <button
              onClick={() => handleUserDelete(item.id)}
              className={styles.button}
            >
              Delete
            </button>
            <button
              onClick={() => handleUserEdit(item.id)}
              className={styles.button}
            >
              Edit
            </button>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p>No users</p>
  );
};
