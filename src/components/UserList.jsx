import styles from "../styles/UserList.module.css";

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

  const nextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
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
        <div className="">
          <button onClick={prevPage} className="">
            Prev
          </button>
          <span className="">{currentPage}</span>
          <button onClick={nextPage} className="">
            Next
          </button>
        </div>
      )}
    </>
  ) : (
    <p>No users</p>
  );
};
