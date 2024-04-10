import styled from "styled-components";
export const Input = styled.input`
  width: 31.1rem;
  height: 4.8rem;
  color: #00474b;
  border-radius: 0.5rem;
  background: #f3f9fa;
  text-align: right;
  border: none;
  font-size: 2.4rem;
  font-weight: 700;
  padding: 1.2rem;
  margin-bottom: 1.8rem;
  @media (min-width: 740px) {
    width: 37.9rem;
  }
  ::placeholder {
    color: #00474b;
    text-align: right;
    font-size: 2.4rem;
    font-weight: 700;
  }
  &.customInput {
    box-sizing: border-box;
    width: 14.7rem;
    text-align: center;
    cursor: pointer;
    @media screen and (min-width: 740px) {
      width: 13rem;
    }
  }
`;
