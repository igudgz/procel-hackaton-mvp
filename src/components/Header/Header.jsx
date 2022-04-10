import React, { useState } from "react";
import * as S from "./styles";

export default function Header() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  return (
    <S.Header>
      <S.ContainerHeader mobile={false}>
        <p>
          <span>PROCEL</span> Educação
        </p>
        <ul>
          <li>
            <a
              target="_blank"
              href="http://www.procelinfo.com.br/main.asp?View={86E6ABAE-BD4E-4F3B-86BF-229FD184D004}"
            >
              Professor
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://drive.google.com/drive/folders/1qUHE9OyiOS_8kHLdrqo0Gi6Br9x-8GIQ"
            >
              Estudante
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://chat.whatsapp.com/FzWA15suLiTGUuMSum8zDH"
            >
              Acessar Fórum
            </a>
          </li>
        </ul>
      </S.ContainerHeader>
      <S.ContainerHeader mobile>
        <p>
          <span>PROCEL</span> Educação
        </p>
        <S.HeaderMobileMenu
          onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
        >
          <>
            <hr />
            <hr />
          </>
          {isOpenMobileMenu && (
            <ul>
              <li>
                <a
                  target="_blank"
                  href="http://www.procelinfo.com.br/main.asp?View={86E6ABAE-BD4E-4F3B-86BF-229FD184D004}"
                >
                  Professor
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://drive.google.com/drive/folders/1qUHE9OyiOS_8kHLdrqo0Gi6Br9x-8GIQ"
                >
                  Estudante
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://chat.whatsapp.com/FzWA15suLiTGUuMSum8zDH"
                >
                  Acessar Fórum
                </a>
              </li>
            </ul>
          )}
        </S.HeaderMobileMenu>
      </S.ContainerHeader>
    </S.Header>
  );
}
