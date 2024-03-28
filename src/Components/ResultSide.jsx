import styled from "styled-components";
import { Button } from "../Ui/Button";
import { useState } from "react";
export default function ResultSide({
  inputValue,
  setInputValue,
  count,
  setCount,
  person,
  setPerson,
  custom,
  setCustom,
  customPercent,
  setCustomPercent,
  setButtonBack,
  buttonBack,
}) {
  return (
    <ResultDiv>
      <ResultGraph>
        <CountType>
          <span>Tip Amount</span>
          <span>/ person</span>
        </CountType>
        <CountResult>
       

{
    `$${(Number(inputValue*count/100) / person).toFixed(2)}`}

        </CountResult>
      </ResultGraph>
      <ResultGraph>
        <CountType>
          <span>Total</span>
          <span>/ person</span>
        </CountType>
        <CountResult>
{

     `$${(Number(inputValue*count/100)+ Number(inputValue) / person).toFixed(2)}`}
        </CountResult>
      </ResultGraph>
      <Button
        className="resetButton"
        onClick={() => {
          setInputValue("");
          setCount("");
          setPerson(1);
    
          setButtonBack(false)
        }}
      >
        RESET
      </Button>
    </ResultDiv>
  );
}

const ResultDiv = styled.div`
  width: 327px;
  height: 257px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #00474b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  .resetButton {
    width: 28.1rem;
    height: 4.8rem;
    background-color: #26c2ae;
    font-size: 20px;
    color: #00474b;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    @media (min-width: 740px) {
      margin-top: 8rem;
      background: #0d686d;
      &:hover {
        background: #9fe8df;
      }
    }
  }

  @media (min-width: 740px) {
    width: 400px;
    height: 417px;
    flex-shrink: 0;
  }
`;

const ResultGraph = styled.div`
  display: flex;
  width: 281px;
  height: 48px;
  padding-bottom: 1px;
  justify-content: center;
  align-items: flex-end;

  gap: 87px;
`;
const CountType = styled.div`
  display: flex;
  width: 9.8rem;
  padding-bottom: 1px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-weight: 700;
  gap: 0.5rem;
  :nth-of-type(1) {
    color: #fff;
    font-size: 16px;
  }

  :nth-of-type(2) {
    color: #7f9d9f;

    font-size: 13px;
  }
`;
const CountResult = styled.div`
  color: #26c2ae;
  text-align: right;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.667px;
`;
