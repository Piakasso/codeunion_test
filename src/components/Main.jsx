import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ControlPanel from "./ControlPanel";
import TeamList from "./TeamList";
import NewUserModal from "./NewUserModal";
import data from "../data.json";
import { useFetch } from "../hooks/useFetch";

const MainEl = styled.main`
  flex: 1;
  padding: 20px;
  @media (max-width: 767px) {
    padding: 0;
  }
`;

const TeamWidget = styled.div`
  background-color: #f9fafb;
  max-width: 1135px;
  margin: 53px auto 0 auto;
  border-radius: 10px;

  @media (max-width: 767px) {
    margin: 0;
    width: 100%;
    height: 100%;
  }
`;

const Main = () => {
  const [isOpenNewUserModal, setIsOpenNewUserModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setUsers(data);
    // const { request } = useFetch();
    // request("url")
    //   .then((data) => {
    //     setUsers(data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }, [data]);

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.email !== id));
  };

  const updatePermissions = (id, changes) => {
    const updated = changes
      .filter((permission) => permission.label !== "Все" && permission.checked)
      .map((item) => item.label);
    setUsers(
      users.map((user) => {
        if (user.email === id) {
          return { ...user, permissions: updated };
        }
        return user;
      })
    );
  };

  const handleAddNewUser = () => {
    setIsOpenNewUserModal(!isOpenNewUserModal);
  };

  const closeNewUserModal = (e) => {
    if (isOpenNewUserModal && !e.target.closest("form")) {
      handleAddNewUser();
    }
  };

  const addNewUser = (name, email, permissions) => {
    const newUser = {
      name: name,
      email: email,
      permissions: permissions,
      image:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/1545906a-f6d2-4506-a1e7-353c1252dfee/220x330",
    };
    setUsers([...users, newUser]);
  };

  const filterUsers =
    filter === "" ? users : users.filter((user) => user.email.includes(filter));

  return (
    <MainEl>
      <TeamWidget>
        <ControlPanel
          handleAddNewUser={handleAddNewUser}
          onFilterChange={handleFilterChange}
        />
        <TeamList
          users={filterUsers}
          deleteUser={deleteUser}
          updatePermissions={updatePermissions}
        />
        {isOpenNewUserModal && (
          <NewUserModal
            closeNewUserModal={closeNewUserModal}
            handleAddNewUser={handleAddNewUser}
            addNewUser={addNewUser}
          />
        )}
      </TeamWidget>
    </MainEl>
  );
};

export default Main;
