// src/style/GlobalFonts.ts
import reset from "styled-reset";
import "@fontsource/press-start-2p";
import { createGlobalStyle } from "styled-components";
import PretendardRegular from "../fonts/Pretendard-Regular.woff";

const GlobalFont = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Pretendard';
    src: url('../fonts/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('../fonts/Pretendard-Regular.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('../fonts/Pretendard-Bold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard', sans-serif;
  }

  button, input, textarea {
    font-family: inherit;
  }
`;

export default GlobalFont;
