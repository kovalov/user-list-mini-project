import { useState, useEffect } from "react";
import styles from "../styles/UserForm.module.css";

export const UserForm = ({
  users,
  setUsers,
  addItem,
  setIsModalShown,
  selectedUserId,
  isAdd,
  updateItem,
  setSelectedUserId,
  setFormData,
  formData,
}) => {
  useEffect(() => {
    if (selectedUserId) {
      const selectedUser = users.filter((user) => user.id === selectedUserId);
      setFormData(...selectedUser);
    }
  }, [selectedUserId]);

  const handleInputValueChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInputValueSubmit = async (e) => {
    e.preventDefault();
    if (isAdd) {
      const response = await addItem({ id: users.length + 1, ...formData });
      setUsers((prevState) => [...prevState, response]);
    } else {
      await updateItem(selectedUserId, formData);
      setUsers(
        users.map((item) =>
          item.id === selectedUserId ? { ...item, ...formData } : item
        )
      );
    }

    setFormData({
      first: "",
      last: "",
      dob: "",
      email: "",
      phone: "",
    });
    setSelectedUserId("");
    setIsModalShown(false);
  };

  return (
    <form onSubmit={(e) => handleInputValueSubmit(e)} className={styles.form}>
      <div className={styles.group}>
        <input
          onChange={(e) => handleInputValueChange(e)}
          value={formData.first}
          name="first"
          type="text"
          placeholder="First name"
          className={styles.input}
        />
      </div>
      <div className={styles.group}>
        <input
          onChange={(e) => handleInputValueChange(e)}
          value={formData.last}
          name="last"
          type="text"
          placeholder="Last name"
          className={styles.input}
        />
      </div>
      <div className={styles.group}>
        <input
          onChange={(e) => handleInputValueChange(e)}
          value={formData.dob}
          name="dob"
          type="date"
          placeholder="Date of birth"
          className={styles.input}
        />
      </div>
      <div className={styles.group}>
        <input
          onChange={(e) => handleInputValueChange(e)}
          value={formData.email}
          name="email"
          type="email"
          placeholder="Email"
          className={styles.input}
        />
      </div>
      <div className={styles.group}>
        <input
          onChange={(e) => handleInputValueChange(e)}
          value={formData.phone}
          name="phone"
          type="tel"
          placeholder="Phone"
          className={styles.input}
        />
      </div>
      {isAdd ? (
        <button type="submit" className={styles.button}>
          Submit
        </button>
      ) : (
        <button type="submit" className={styles.button}>
          Edit
        </button>
      )}
    </form>
  );
};
