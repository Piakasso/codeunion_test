import React from "react";
import Modal from "../UI/Modal";
import { ModalText } from "./NewUserModal";
import Input from "../UI/InputNewUser";
import Dropdown from "../UI/Dropdown";

const UpdateUserModal = ({ handleUpdateUser }) => {
  return (
    <Modal>
      <ModalText>Обновите данные</ModalText>
      <Input />
      <Input />
      <Dropdown />
    </Modal>
  );
};

export default UpdateUserModal;
