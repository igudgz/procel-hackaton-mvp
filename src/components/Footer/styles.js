import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: red;
  height: 100px;
  & > div {
    display: block;
    width: 100px;
    height: 20px;
    background: black;
  }

  & > ul {
    display: flex;
    li {
      list-style: none;
      & + li {
        margin-left: 20px;
      }
    }
  }
`;
