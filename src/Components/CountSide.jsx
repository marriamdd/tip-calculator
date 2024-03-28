import { Label } from "../Ui/Label";
import { Input } from "../Ui/Input";
import { Button } from "../Ui/Button";
import styled from "styled-components";
import { useState } from "react";
export default function CountSide({
  count,
  person,
  inputValue,
  setInputValue,
  setCount,

  setPerson,

  setButtonBack,
  buttonBack,
}) {
  const [error, setError] = useState("");
  const btnArray = ["5%", "10%", "15%", "25%", "50%"];

  const handleValue = (event) => {
    const input = event.target.value;
    const pattern = /^[0-9]*$/;
    if (pattern.test(input)) {
      setInputValue(event.target.value);
      if (input === "0" || input === "") {
        setError("Can’t be zero");
        setInputValue("");
      } else {
        setError("");
      }
    }
  };

  const handlePerson = (event) => {
    setPerson(event.target.value);
  };
  const handelCustom = (event) => {
    const customInput = parseInt(event.target.value);
    if (isNaN(customInput)) {
      setCount("");
    } else {
      const total = customInput;
      setCount(total);
    }
  };

  return (
    <CounterDiv>
      <Form>
        <Label htmlFor="bill">Bill</Label>
        {error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          <ErrorMessage></ErrorMessage>
        )}
        <ImgDiv>
          {" "}
          <img src="public/images/icon-dollar.svg" alt="dollar icon" />
        </ImgDiv>

        <Input
          id="bill"
          type="text"
          placeholder="0"
          required
          value={inputValue}
          onChange={handleValue}
        />
      </Form>
      <Label>Select Tip %</Label>
      <ButtonsContainer>
        {btnArray.map((item, index) => (
          <Button
            key={index}
            onClick={(event) => {
              const total = parseInt(item);

              setCount(total);
              setButtonBack(item);
            }}
            style={{
              background: buttonBack === item ? "#9FE8DF" : "",
            }}
          >
            {item}{" "}
          </Button>
        ))}
        <Input
          className="customInput"
          type="text"
          value={count}
          placeholder="Custom"
          onChange={handelCustom}
        />
      </ButtonsContainer>
      <Form>
        <Label>Number of People</Label>
        <ImgDiv>
          {" "}
          <img src="public/images/icon-person.svg" alt="person icon" />
        </ImgDiv>
        <Input
          type="number"
          min="1"
          placeholder="0"
          onChange={handlePerson}
          value={person}
        />
      </Form>
    </CounterDiv>
  );
}
const ErrorMessage = styled.p`
  display: flex;
  justify-content: end;
  color: #e17457;
  text-align: right;
  font-size: 16px;
  font-weight: 700;
  height: 1.5rem;
  width: 300px;
  @media (min-width: 740px) {
    min-width: 370px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  @media (min-width: 740px) {
    min-width: 379px;
  }
`;
const CounterDiv = styled.div`
  @media (min-width: 740px) {
    padding: 2rem 3.2rem;
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
