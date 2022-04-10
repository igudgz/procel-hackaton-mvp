import React from "react";
import BoxInfo from "../components/BoxInfo/BoxInfo";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Particles from "../components/Particles/Particles";

import * as S from "./styles";

export default function Home() {
  return (
    <>
      <Particles />
      <Header />
      <S.Container>
        <S.Info>
          <div className="container">
            <h1>
              <span>PROCEL</span> Educação
            </h1>
            <p>Auxiliando você a iluminar o futuro</p>
            <p>de milhares de estudantes</p>
          </div>
        </S.Info>
        <S.Banner>
          <div className="container">
            <div className="box-group">
              <BoxInfo
                title="Cursos"
                paragraph="Educador já fez seu curso energia que transforma? Clique abaixo para se inscrever!!"
              >
                <Button
                  href={
                    "https://www.futura.org.br/cursos/energia-que-transforma-educadores"
                  }
                >
                  Inscreva-se
                </Button>
              </BoxInfo>
              <BoxInfo
                title="Estudante"
                paragraph="Quer conferir seus conhecimentos? Jogue superficiente, baixe agora e divirta-se"
              >
                <Button
                  href={
                    "https://drive.google.com/drive/folders/1qUHE9OyiOS_8kHLdrqo0Gi6Br9x-8GIQ"
                  }
                >
                  Clique
                </Button>
              </BoxInfo>
              <BoxInfo
                title="Materiais"
                paragraph="Acesse agora o kit energia que transformar e leve o conhecimento para seus estudantes"
              >
                <Button href={"https://www.energiaquetransforma.org.br/"}>
                  Acessar
                </Button>
              </BoxInfo>
            </div>
          </div>
        </S.Banner>
      </S.Container>
      <Footer />
    </>
  );
}
