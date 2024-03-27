import { Label } from "../Ui/Label";
import { Input } from "../Ui/Input";
import { Button } from "../Ui/Button";
import styled from "styled-components";
export default function CountSide() {
  const btnArray=["5%","10%","15%","25%","50%"]
  return (
    <CounterDiv>
      <Form>
        <Label>Bill</Label>
        <ImgDiv>
          {" "}
          <img src="public/images/icon-dollar.svg" alt="" />
        </ImgDiv>
        <Input type="text" />
      </Form>
      <Label>Select Tip %</Label>
      <ButtonsContainer>
      {btnArray.map((item,index)=>(
       <Button key={index}>{item}</Button>
      
      ))}
      </ButtonsContainer>
    </CounterDiv>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 0.6rem;
`;
const CounterDiv = styled.div`
  padding: 6.2rem 3.2rem;
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
  margin-top:2.2rem;
  gap: 2rem;
`;
