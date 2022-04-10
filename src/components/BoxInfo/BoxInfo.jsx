import React from "react";
import * as S from "./styles";

export default function BoxInfo({ title, paragraph, children }) {
  return (
    <S.Box>
      <h1>{title}</h1>
      <p>{paragraph}</p>
      {children}
    </S.Box>
  );
}
