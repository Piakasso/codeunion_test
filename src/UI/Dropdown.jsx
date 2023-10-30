import styled from "styled-components";

const DropdownEl = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 10px;
  border: 1px #c1c1cb solid;
  border-radius: 15px;
  font-size: 20px;
  padding: 20px;
  border-radius: 15px;
  color: #9494a0;
  font-family: inherit;
  & input {
    display: inline-block;
    margin-right: 8px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    padding: 14px;
  }
`;

const Dropdown = ({ permissions, setPermissions }) => {
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
    <DropdownEl>
      Выберите права доступа:
      {permissions.map((permission) => (
        <label htmlFor={permission.value} key={permission.value}>
          <input
            type="checkbox"
            id={permission.value}
            onChange={savePermissions}
            value={permission.value}
            checked={permission.checked}
          />
          {permission.label}
        </label>
      ))}
    </DropdownEl>
  );
};

export default Dropdown;
