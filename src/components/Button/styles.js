import styled from "styled-components";

export const Button = styled.a`
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  font-family: Arial;
  width: 140px;
  height: 50px;
  border-width: 1px;
  color: #fff;
  border-color: #566963;
  font-weight: bold;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: inset 0px 1px 3px 0px #91b8b3;
  text-shadow: inset 0px -1px 0px #2b665e;
  background: #d99f0c;
  align-self: center;
  &:hover {
    background: #f2b51b;
  }
`;
