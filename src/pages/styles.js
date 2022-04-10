import styled, { keyframes } from "styled-components";

export const Container = styled.main`
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 780px) {
    height: auto;
    padding: 0;
  }
`;

const openMain = keyframes`
    from{
        opacity: 0;
        transform: translateX(-20px)
    }to{
        opacity: 1;
    }
`;

export const Info = styled.section`
  background: none;
  display: flex;
  align-self: flex-end;
  align-items: center;
  height: 400px;
  animation: 1s ${openMain};
  color: white;
  align-self: center;
  text-align: center;
  > div {
    > h1 {
      > span {
        font-weight: 900;
        color: yellow;
      }
      font-size: 48px;
      font-weight: bold;
      @media (max-width: 780px) {
        font-size: 38px;
      }
    }
    > p {
      margin-top: 15px;
      font-size: 18px;
    }
  }
`;

export const Banner = styled.section`
  width: 1200px;
  height: 350px;
  background: rgba(44, 50, 58, 0.6);
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin-bottom: 30px;
  padding: 50px 0;
  @media (max-width: 780px) {
    justify-content: space-around;
    align-items: center;
    width: 335px;
    flex-wrap: wrap;
    height: 100%;
  }

  & > .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    & > .box-group {
      display: flex;
      justify-content: space-evenly;
      @media (max-width: 780px) {
        flex-direction: column;
        flex-wrap: wrap;
      }
    }
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
  }
`;
