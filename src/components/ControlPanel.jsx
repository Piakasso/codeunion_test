import styled from "styled-components";
import { useState } from "react";
import Button from "../UI/Button";
import search from "../assets/Vector.svg";
import burger from "../assets/burger.svg";

const ControlPanelEl = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 15px 29px;
  border-bottom: 1px solid #ebebf0;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
    padding: 30px 15px;
  }
`;

const ControlTitle = styled.h3`
  font-weight: 600;
  font-size: 26px;
  padding-right: 80px;
`;

const Burger = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;

const Form = styled.form`
  position: relative;
  display: inline-block;
  width: 100%;

  & input {
    width: 100%;
    border: 1px solid #c1c1cb;
    border-radius: 10px;
    font-size: 18px;
    padding: 8px 40px 8px 13px;
  }
  & button {
    position: absolute;
    top: 0;
    right: 10px;
    height: 100%;
    border: none;
    cursor: pointer;
  }
`;

const PanelButton = styled(Button)`
  font-size: 18px;
  font-weight: 500;
  padding: 7px 10px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const ControlPanel = ({ handleAddNewUser, onFilterChange }) => {
  const [searchString, setSearchString] = useState("");
  return (
    <ControlPanelEl>
      <div style={{ display: "flex", alignItems: "center", gap: "13px" }}>
        <Burger>
          <img src={burger} alt="" />
        </Burger>
        <ControlTitle>Команда</ControlTitle>
      </div>

      <div style={{ flex: 1 }}>
        <Form>
          <input
            placeholder="Поиск"
            value={searchString}
            onChange={(e) => {
              setSearchString(e.target.value);
              onFilterChange(e.target.value);
            }}
          />
          <button type="submit">
            <img src={search} alt="" />
          </button>
        </Form>
      </div>
      <div style={{ position: "relative" }}>
        <PanelButton onClick={handleAddNewUser}>
          Добавить пользователя
        </PanelButton>
      </div>
    </ControlPanelEl>
  );
};

export default ControlPanel;
