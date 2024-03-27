import { Label } from "../Ui/Label";
import { Input } from "../Ui/Input";
import { Button } from "../Ui/Button";
import styled from "styled-components";
import { useState } from "react";
export default function CountSide({
  inputValue,
  setInputValue,

  setCount,
  setPerson,
}) {
  const btnArray = ["5%", "10%", "15%", "25%", "50%"];
  const handleValue = (event) => {
    setInputValue(event.target.value);
  };
  const handlePerson = (event) => {
    setPerson(event.target.value);
  };
  const handelCustom = (event) => {
    setCount(event.target.value);
  };

  return (
    <CounterDiv>
      <Form>
        <Label htmlFor="bill">Bill</Label>
        <ImgDiv>
          {" "}
          <img src="public/images/icon-dollar.svg" alt="" />
        </ImgDiv>
        <Input
          id="bill"
          type="text"
          placeholder="0"
          value={inputValue}
          onChange={handleValue}
        />
      </Form>
      <Label>Select Tip %</Label>
      <ButtonsContainer>
        {btnArray.map((item, index) => (
          <Button
            key={index}
            onClick={() => {
              const total = (inputValue * parseInt(item)) / 100;

              setCount(total);
            }}
          >
            {item}{" "}
          </Button>
        ))}
        <Input
          style={{ width: "14.7rem" ,textAlign:"center" ,cursor:"pointer"}}
          type="text"
          placeholder="Custom"
          onChange={handelCustom}
        />
      </ButtonsContainer>
      <Form>
        <Label>Number of People</Label>
        <ImgDiv>
          {" "}
          <img src="public/images/icon-person.svg" alt="" />
        </ImgDiv>
        <Input type="text" placeholder="0" onChange={handlePerson} />
      </Form>
    </CounterDiv>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  @media (min-width: 740px) {
    min-width: 379px;
  }
`;
const CounterDiv = styled.div`
  padding: 2rem 3.2rem;
  @media (min-width: 740px) {
  }
`;

const ImgDiv = styled.div`
  position: relative;
  & > img {
    width: 1rem;
    height: 1.6rem;

    position: absolute;
    top: 2rem;
    left: 2rem;
  }
`;
const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2.2rem;
  gap: 2rem;
  @media (min-width: 740px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
