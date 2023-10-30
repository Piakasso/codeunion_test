import styled from "styled-components";
import { useEffect, useState } from "react";
import Popup from "../UI/Popup";

const Delete = styled.span`
  color: #9494a0;
  &:hover {
    color: #fa6948dc;
  }
`;

const PopupEl = styled(Popup)`
  text-align: left;
  & input {
    display: inline-block;
    margin-right: 10px;
  }
`;

const EditPopup = ({
  access,
  updatePermissions,
  deleteUser,
  onItemClick,
  email,
}) => {
  const [isAccessOpen, setIsAccessOpen] = useState(false);
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
  useEffect(() => {
    setPermissions(
      permissions.map((permission) => {
        if (access.includes(permission.label)) {
          return { ...permission, checked: true };
        }
        return permission;
      })
    );
  }, []);
  useEffect(() => {
    updatePermissions(email, permissions);
  }, [permissions, email]);

  const savePermissions = (e) => {
    if (e.target.value === "all") {
      const allChecked = permissions.every((permission) => permission.checked);
      setPermissions(
        permissions.map((permission) => ({
          ...permission,
          checked: !allChecked,
        }))
      );
    } else {
      setPermissions(
        permissions.map((permission) => {
          if (e.target.value === permission.value) {
            return {
              ...permission,
              checked: !permission.checked,
            };
          }
          return permission;
        })
      );
    }
  };

  return (
    <PopupEl onMouseLeave={onItemClick}>
      {isAccessOpen ? (
        permissions.map((permission) => (
          <label htmlFor={permission.value} key={permission.value}>
            <input
              onChange={(e) => {
                savePermissions(e);
              }}
              type="checkbox"
              id={permission.value}
              value={permission.value}
              checked={permission.checked}
            />
            {permission.label}
          </label>
        ))
      ) : (
        <>
          <span
            onClick={() => {
              setIsAccessOpen(!isAccessOpen);
            }}
          >
            Изменить права доступа
          </span>
          <Delete
            onClick={() => {
              deleteUser(email);
              onItemClick(null);
            }}
          >
            Удалить
          </Delete>
        </>
      )}
    </PopupEl>
  );
};

export default EditPopup;
