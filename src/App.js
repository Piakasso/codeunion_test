import styled from "styled-components";
import Aside from "./components/Aside";
import Main from "./components/Main";

const AppEl = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  background-color: #ebebf0;
  font-size: 18px;
  color: #424f5e;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

function App() {
  return (
    <AppEl>
      <Aside />
      <Main />
    </AppEl>
  );
}

export default App;
