import styled from "styled-components";
import logo from "../assets/sidebar/logo.png";
import profile from "../assets/sidebar/ProfileMenu.png";
import icon1 from "../assets/sidebar/Group1.svg";
import icon2 from "../assets/sidebar/Group2.svg";
import icon3 from "../assets/sidebar/Group3.svg";
import icon4 from "../assets/sidebar/Group4.svg";

const AsideEl = styled.aside`
  width: 100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 34px;
  padding-top: 25px;
  background-color: #f9fafb;
  @media (max-width: 767px) {
    display: none;
  }
`;

const ItemAside = styled.div`
  justify-content: center;
  height: 25px;
  width: 25px;
  cursor: pointer;
  & img {
    width: auto;
    height: 100%;
  }
`;

const Aside = () => {
  return (
    <AsideEl>
      <div>
        <img src={logo} alt="logos" />
      </div>
      <div>
        <img src={profile} alt="" />
      </div>
      <ItemAside>
        <img src={icon2} alt="" />
      </ItemAside>
      <ItemAside>
        <img src={icon3} alt="" />
      </ItemAside>
      <ItemAside>
        <img src={icon4} alt="" />
      </ItemAside>

      <ItemAside>
        <img src={icon1} alt="" />
      </ItemAside>
    </AsideEl>
  );
};

export default Aside;
