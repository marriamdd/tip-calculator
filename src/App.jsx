import { useState } from "react";
import { Button } from "./Ui/Button";
import CountSide from "./Components/CountSide";
import ResultSide from "./Components/ResultSide";
import { GlobalStyles } from "./Globals/Globals";
import styled from "styled-components";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const [person, setPerson] = useState("");
  console.log(person);
  const [count, setCount] = useState("");
  console.log(count);

  return (
    <>
      <GlobalStyles />
      <Header>
        <img src="public/images/logo.svg" alt="" />
      </Header>
      <Main>
        <CountSide
          inputValue={inputValue}
          setInputValue={setInputValue}
          setCount={setCount}
          setPerson={setPerson}
        ></CountSide>
        <ResultSide
          inputValue={inputValue}
          setInputValue={setInputValue}
          count={count}
          setCount={setCount}
          setPerson={setPerson}
          person={person}
        ></ResultSide>
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
  @media (min-width: 740px) {
    width: 100%;
  }
`;

const Main = styled.main`
  width: 375px;
  height: 789px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px 25px 0px 0px;
  background: #fff;
  box-shadow: 0px 32px 43px 0px rgba(79, 166, 175, 0.2);
  @media (min-width: 740px) {
    width: 940px;
height: 481px;
flex-shrink: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 25px;
  
  }
`;

export default App;
