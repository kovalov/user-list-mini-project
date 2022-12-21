import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

import { Loader } from "./Loader";
import { Header } from "./Header";
import { PageContent } from "./PageContent";
import { Search } from "./Search";
import { UserForm } from "./UserForm";
import { UserList } from "./UserList";
import { Modal } from "./Modal";
import { ModalButton } from "./ModalButton";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");
  const [isAdd, setIsAdd] = useState(true);
  const [formData, setFormData] = useState({
    id: "",
    first: "",
    last: "",
    dob: "",
    email: "",
    phone: "",
  });
  const [isModalShown, setIsModalShown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
  const numberOfPages = Math.ceil(users.length / itemsPerPage);

  const url = "https://flax-miniature-cook.glitch.me/users";

  const { isLoaded, getAllItems, addItem, deleteItem, updateItem } =
    useFetch(url);

  useEffect(() => {
    async function getUsers() {
      const data = await getAllItems(url);
      setUsers(data);
    }

    getUsers();
  }, []);

  const foundUsers = currentItems.filter(
    ({ first, last }) =>
      first.toLowerCase().includes(searchQuery.toLowerCase()) ||
      last.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      {!isLoaded ? (
        <Loader />
      ) : (
        <>
          <Header title="Mini Project" />
          <PageContent>
            <Search setSearchQuery={setSearchQuery} />
            <UserList
              users={foundUsers}
              setUsers={setUsers}
              deleteUser={deleteItem}
              setIsModalShown={setIsModalShown}
              setSelectedUserId={setSelectedUserId}
              setIsAdd={setIsAdd}
              searchQuery={searchQuery}
              numberOfPages={numberOfPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </PageContent>
          <Modal
            isShown={isModalShown}
            setIsShown={setIsModalShown}
            setSelectedUserId={setSelectedUserId}
            setFormData={setFormData}
          >
            <UserForm
              formData={formData}
              setFormData={setFormData}
              users={users}
              setUsers={setUsers}
              addItem={addItem}
              setIsModalShown={setIsModalShown}
              setSelectedUserId={setSelectedUserId}
              selectedUserId={selectedUserId}
              updateItem={updateItem}
              setIsAdd={setIsAdd}
              isAdd={isAdd}
            />
          </Modal>
          <ModalButton setIsModalShown={setIsModalShown} setIsAdd={setIsAdd} />
        </>
      )}
    </div>
  );
};
