import styled from "styled-components";

const Badge = styled.div`
  font-size: 16px;
  color: #9494a0;
  font-weight: 400;
  border: 1px solid #9494a0;
  border-radius: 10px;
  padding: 5px 8px;
  @media (max-width: 767px) {
    border-radius: 5px;
    font-size: 12px;
  }
`;

export default Badge;
