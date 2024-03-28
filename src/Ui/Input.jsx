import styled from "styled-components";
export const Input = styled.input`
  width: 31.1rem;
  height: 48px;
  color: #00474b;
  border-radius: 5px;
  background: #f3f9fa;
  text-align: right;
  border: none;
  font-size: 24px;
  font-weight: 700;
  padding: 1.2rem;
  margin-bottom: 1.8rem;
  @media (min-width: 740px) {
    min-width: 379px;
  }
  ::placeholder {
    color: #00474b;
    text-align: right;
    font-size: 24px;
    font-weight: 700;
  }
  &.customInput {
    width: 14.7rem;
    text-align: center;
    cursor: pointer;
    @media (min-width: 740px) {
      min-width: 9rem;
    }
  }
`;
