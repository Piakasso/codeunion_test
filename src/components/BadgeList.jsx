import styled from "styled-components";

const BadgeListEl = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const BadgeList = ({ children }) => {
  return <BadgeListEl>{children}</BadgeListEl>;
};

export default BadgeList;
