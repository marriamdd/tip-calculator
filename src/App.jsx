import { useState } from "react";

import CountSide from "./Components/CountSide";
import ResultSide from "./Components/ResultSide";
import {GlobalStyles} from "./Globals/Globals";
import styled from "styled-components";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Header>
        <img src="public/images/logo.svg" alt="" />
      </Header>
      <Main>
     <CountSide>
   
     </CountSide>
     <ResultSide>

     </ResultSide>
      </Main>
    </>
  );
}

const Header = styled.header`
  display: flex;
  width: 375px;
  padding-top: 4.5rem;
  padding-bottom: 4rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 4rem;
`;

const Main = styled.main`
  width: 375px;
  height: 789px;
  flex-shrink: 0;
  border-radius: 25px 25px 0px 0px;
  background: #fff;
  box-shadow: 0px 32px 43px 0px rgba(79, 166, 175, 0.2);
`;

export default App;
