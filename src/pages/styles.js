import styled from "styled-components";

export const Container = styled.main`
  padding: 0 20px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Info = styled.section`
  background: none;
  border: 2px solid black;
  display: flex;
  align-self: flex-end;
  width: 400px;
  height: 400px;
  & > .container {
    font-weight: 24px;
    color: #ffffff;
  }
`;

export const Banner = styled.section`
  width: 1200px;
  height: 250px;
  background: #2c323a;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin-bottom: 30px;
  padding: 50px 0;
  @media (max-width: 780px) {
    justify-content: center;
  }

  & > .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    & > h1 {
      font-size: 2.25rem;
      color: white;
      margin-bottom: 30px;
    }

    & > p {
      font-size: 1.125rem;
      color: white;
      margin: 0 auto;
      max-width: 500px;
      padding: 0 20px;
    }
    & > .box-group {
      & > div + div {
        margin-left: 20px;
      }
    }
  }
`;
