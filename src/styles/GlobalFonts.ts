// src/style/GlobalFonts.ts
import reset from "styled-reset";
import "@fontsource/press-start-2p";
import { createGlobalStyle } from "styled-components";
import PretendardRegular from "../fonts/Pretendard-Regular.woff";

const GlobalFont = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    background-color: #fff;
    color: #111;
    line-height: 1.6;
  }

  button, input, textarea {
    font-family: inherit;
  }
`;

export default GlobalFont;
