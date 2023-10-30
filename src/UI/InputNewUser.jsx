import styled from "styled-components";

const InputNewUser = styled.input`
  font-size: 20px;
  padding: 20px;
  border-radius: 15px;
  color: #424f5e;
  &::placeholder {
    color: #9494a0;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    padding: 14px;
  }
`;
export default InputNewUser;
