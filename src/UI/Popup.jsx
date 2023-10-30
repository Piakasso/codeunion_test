import styled from "styled-components";

const Popup = styled.div`
  position: absolute;
  top: 30px;
  right: 60px;
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 11px;
  background-color: #f9fafb;
  color: #424f5e;
  border: #9494a0 1px solid;
  border-radius: 10px;
  background-color: #f9fafb;
  z-index: 2;

  & * {
    cursor: pointer;
  }
  @media (max-width: 767px) {
    width: 180px;
    padding: 10px;
  }
`;

export default Popup;
