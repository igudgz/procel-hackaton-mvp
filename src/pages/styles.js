import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 20px ;
`;

export const Banner = styled.section`
  max-width: 1200px;
  height: 250px;
  background: #2c323a;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
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
      position: absolute;
      bottom: -35px;
      margin: 0 auto;
      left: 9%;
      right: 9%;
      @media (min-width: 768px) and (max-width: 1180px) {
        bottom: -150px;
        left: 0;
        right: 0;

        & > div:last-child {
          margin-top: 20px ;
        }
      }

      @media (min-width: 970px) and (max-width: 1180px) {
        bottom: -50px;
        left: 0;
        right: 0;
      }

      @media (max-width: 780px) {
        display: none;
      }

      & > div + div {
        margin-left: 20px;
      }
    }
  }
`;
