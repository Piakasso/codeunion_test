import styled from "styled-components";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import Input from "../UI/InputNewUser";
import { useState } from "react";
import Dropdown from "../UI/Dropdown";

export const ModalText = styled.span`
  font-size: 34px;
  font-weight: 600;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const ModalButton = styled(Button)`
  font-size: 20px;
  font-weight: 500;
  padding: 20px 0;
  border-radius: 15px;
  @media (max-width: 767px) {
    font-size: 16px;
    padding: 14px 0;
  }
`;

const NewUserModal = ({ handleAddNewUser, addNewUser, closeNewUserModal }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [permissions, setPermissions] = useState([
    { value: "all", label: "Все", checked: false },
    { value: "admin", label: "Администратор", checked: false },
    { value: "moderation", label: "Модерация объявлений", checked: false },
    { value: "blog", label: "Блог", checked: false },
    { value: "support", label: "Тех. поддержка", checked: false },
    { value: "clients", label: "Обращение клиентов", checked: false },
    { value: "analitics", label: "Аналитика", checked: false },
    { value: "promo", label: "Акции", checked: false },
  ]);

  const submitForm = (e) => {
    e.preventDefault();
    const access = permissions
      .filter((permission) => permission.label !== "Все" && permission.checked)
      .map((permission) => permission.label);
    addNewUser(name, email, access);
    handleAddNewUser();
  };

  return (
    <Modal onSubmit={submitForm} closeNewUserModal={closeNewUserModal}>
      <ModalText>Отправьте приглашение</ModalText>
      <Input
        required
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        required
        type="text"
        placeholder="Surname, Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Dropdown permissions={permissions} setPermissions={setPermissions} />

      <ModalButton type="submit">Добавить пользователя</ModalButton>
    </Modal>
  );
};

export default NewUserModal;
