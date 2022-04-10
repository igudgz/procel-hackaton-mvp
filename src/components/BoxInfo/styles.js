import styled from "styled-components";

export const Box = styled.div`
  background: #1b3243;
  opacity: 1;
  height: 300px;
  width: 290px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: white;
  text-align: center;
  padding: 0 10px;
  border-radius: 8px;

  > h1 {
    color: yellow;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
  }
  > p {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 370;
  }

  @media (max-width: 780px) {
    margin-bottom: 20px;
  }
`;
