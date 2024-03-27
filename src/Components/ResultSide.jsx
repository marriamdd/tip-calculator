import styled from "styled-components";
import { Button } from "../Ui/Button";
import { useState } from "react";
export default function ResultSide({inputValue, setInputValue ,count, setCount,person ,setPerson}) {
  return (
    <ResultDiv>
      <ResultGraph>
        <CountType>
          <span>Tip Amount</span>
          <span>/ person</span>
        </CountType>
        <CountResult>{person?`$${count/person}`:`$${count}`}</CountResult>
      </ResultGraph>
      <ResultGraph>
        <CountType>
          <span>Total</span>
          <span>/ person</span>
        </CountType>
        <CountResult>{person ? `$${(count + Number(inputValue)) / person}` : `$${count + Number(inputValue)}`}</CountResult>
       
      </ResultGraph>
      <Button style={{width:"28.1rem", height:"4.8rem" ,background:"#26C2AE" ,fontSize: "20px",color:" #00474B" }} >RESET</Button>
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
  width: 98px;
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
const CountResult=styled.div`
  color: #26C2AE;
text-align: right;
font-size: 32px;
font-weight: 700;
letter-spacing: -0.667px;


`