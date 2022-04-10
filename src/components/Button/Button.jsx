import React from "react";
import * as S from "./styles";

export default function Button({ children, href }) {
  return (
    <S.Button target="_blank" href={href}>
      {children}
    </S.Button>
  );
}
