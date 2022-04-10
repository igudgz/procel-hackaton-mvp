import React from 'react';
import * as S from './styles';

export default function BoxInfo(props) {
  return <S.Box>
    {/* <img src={props.image} alt="" /> */}
    <h1>{props.title}</h1>
    <p>{props.paragraph}</p>
  </S.Box>;
}