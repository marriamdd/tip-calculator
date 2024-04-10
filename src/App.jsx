import { useState } from "react";

import CountSide from "./Components/CountSide";
import ResultSide from "./Components/ResultSide";
import { GlobalStyles } from "./Globals/Globals";
import styled from "styled-components";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [person, setPerson] = useState(1);

  const [count, setCount] = useState("");

  const [custom, setCustom] = useState("");

  const [buttonBack, setButtonBack] = useState(true);
  const [customPercent, setCustomPercent] = useState("");

  return (
    <>
      <GlobalStyles />
      <Header>
        <img src="/images/logo.svg" alt="splitter" />
      </Header>
      <Main>
        <CountSide
          person={person}
          count={count}
          inputValue={inputValue}
          setInputValue={setInputValue}
          setCount={setCount}
          setPerson={setPerson}
          custom={custom}
          setCustom={setCustom}
          customPercent={customPercent}
          setCustomPercent={setCustomPercent}
          buttonBack={buttonBack}
          setButtonBack={setButtonBack}
        ></CountSide>
        <ResultSide
          inputValue={inputValue}
          setInputValue={setInputValue}
          count={count}
          setCount={setCount}
          setPerson={setPerson}
          person={person}
          custom={custom}
          setCustom={setCustom}
          customPercent={customPercent}
          setCustomPercent={setCustomPercent}
          buttonBack={buttonBack}
          setButtonBack={setButtonBack}
        ></ResultSide>
      </Main>
    </>
  );
}

const Header = styled.header`
  display: flex;
  width: 37.5rem;
  padding-top: 4.5rem;
  padding-bottom: 4rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 4rem;
  @media (min-width: 740px) {
    width: 100%;
  }
`;

const Main = styled.main`
  width: 37.5rem;
  height: 78.9rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2.5rem 2.5rem 0rem 0rem;
  background: #fff;
  box-shadow: 0px 3.3rem 4.3rem 0rem rgba(79, 166, 175, 0.2);
  @media (min-width: 740px) {
    width: 94rem;
    height: 48.1rem;
    flex-shrink: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 2.5rem;
  }
`;

export default App;
