import styles from "../styles/UserList.module.css";
import { Pagination } from "./Pagination";

export const UserList = ({
  users,
  setUsers,
  deleteUser,
  setIsModalShown,
  setSelectedUserId,
  setIsAdd,
  searchQuery,
  numberOfPages,
  currentPage,
  setCurrentPage,
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
    <>
      <ul className={styles.list}>
        {users.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <ul className={styles.innerList}>
              <li className={styles.value}>{`${item.first} ${item.last}`}</li>
              <li className={styles.value}>{item.email}</li>
              <li className={styles.value}>{item.dob}</li>
              <li className={styles.value}>{item.phone}</li>
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
      {!searchQuery && (
        <Pagination
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  ) : (
    <p>No users</p>
  );
};
