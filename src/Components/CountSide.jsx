import { Label } from "../Ui/Title";
import { Input } from "../Ui/Input";
import styled from "styled-components";
export default function CountSide() {
  return (
    <div>
      <Form>
        <Label >Bill</Label>
        <Input type="text" />

      </Form>
    </div>
  );
}

const Form=styled.form`
  display: flex;
  flex-direction: column;
  padding: 6.2rem 3.2rem ;

`
