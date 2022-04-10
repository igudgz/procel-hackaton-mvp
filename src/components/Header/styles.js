import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  z-index: 1;
  color: #fff;
  @media (max-width: 780px) {
    width: 360px;
  }
`;

export const ContainerHeader = styled.div`
  display: ${(props) => (props.mobile !== false ? "none" : "flex")} !important;
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  @media (max-width: 780px) {
    display: ${(props) => (props.mobile ? "flex" : "none")} !important;
    justify-content: space-around;
    align-items: center;
  }
  > p {
    font-weight: bold;
    font-size: 18px;
    > span {
      color: yellow;
    }
  }
  & > ul {
    display: flex;
    justify-content: flex-end;
    li {
      > a {
        text-decoration: none;
        color: inherit;
      }
      list-style: none;
      & + li {
        margin-left: 20px;
      }
    }
  }
`;

export const HeaderMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: 2px solid #ffffff;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  > hr {
    border: 2px solid #ffffff;
    margin: 1px;
    margin-top: 7px;
    width: 10px;
    align-self: center;
  }

  &:focus {
    outline: none;
  }
  & > ul {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    width: 30px;
    justify-content: flex-end;
    li {
      > a {
        text-decoration: none;
        color: inherit;
      }
      list-style: none;
    }
    > li:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
