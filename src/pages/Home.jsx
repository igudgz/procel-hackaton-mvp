import React from 'react';
import BoxInfo from '../components/BoxInfo/BoxInfo';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Particles from '../components/Particles/Particles';

import * as S from './styles';

export default function Home() {
  return (
    <>
     <Particles/>
      <Header />
      <S.Container>
      <S.Info>
          <div className="container">
            <p>PROCEL Educação</p>
          </div>
        </S.Info>
        <S.Banner>
          <div className="container">
            <h1>What is Lorem Ipsum?</h1>

            <div className="box-group">
              <BoxInfo
                title="What is Lorem Ipsum?"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              ></BoxInfo>
              <BoxInfo
                title="What is Lorem Ipsum?"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              ></BoxInfo>
              <BoxInfo
                title="What is Lorem Ipsum?"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              ></BoxInfo>
            </div>
          </div>
        </S.Banner>
      </S.Container>
      <Footer />
    </>
  );
}
