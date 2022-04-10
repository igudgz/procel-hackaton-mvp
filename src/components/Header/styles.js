import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  z-index: 1;
  background-color: none;
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
