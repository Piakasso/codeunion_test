import styled from "styled-components";
import Badge from "../UI/Badge";
import dots from "../assets/dots.svg";
import BadgeList from "./BadgeList";
import EditPopup from "./EditPopup";
const SingleUserEl = styled.div`
  position: relative;
  display: flex;
  gap: 11px;
  padding: 18px 29px;
`;

const ImgContainer = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 767px) {
    width: 55px;
    height: 55px;
  }
`;
const UserInfo = styled.div`
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
const UserName = styled.span`
  font-weight: 600;
  & span {
    display: inline-block;
    padding-left: 11px;
    font-weight: 400;
    color: #9494a0;
    @media (max-width: 767px) {
      display: block;
      padding-left: 0;
    }
  }
`;

const MoreEl = styled.div`
  position: absolute;
  right: 29px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  & img {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: auto;
  }
`;

const SingleUser = (props) => {
  const {
    email,
    name,
    image,
    permissions,
    isOpen,
    onItemClick,
    deleteUser,
    updatePermissions,
  } = props;

  return (
    <SingleUserEl>
      <ImgContainer>
        <img src={image} alt={email} />
      </ImgContainer>
      <UserInfo>
        <UserName>
          {name}
          <span>{email}</span>
        </UserName>
        <BadgeList>
          {permissions.map((item, i) => (
            <Badge key={i}>{item}</Badge>
          ))}
        </BadgeList>
      </UserInfo>

      {isOpen && (
        <EditPopup
          access={permissions}
          deleteUser={deleteUser}
          email={email}
          onItemClick={onItemClick}
          updatePermissions={updatePermissions}
        />
      )}

      <MoreEl onClick={onItemClick}>
        <img src={dots} alt="" />
      </MoreEl>
    </SingleUserEl>
  );
};

export default SingleUser;
