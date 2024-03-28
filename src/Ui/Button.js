import styled from "styled-components";
export const Button = styled.button`
  width: 14.7rem;
  height: 4.8rem;
  flex-shrink: 0;
  border-radius: 5px;
  background: #00474b;
  cursor: pointer;
  color: #fff;
  text-align: center;

  font-size: 2.4rem;
  font-weight: 700;
  &:hover {
    background: #26C2AE;
  }
@media (min-width:740px) {
    width: 13rem; 
    margin-inline:0; 
}
`;
