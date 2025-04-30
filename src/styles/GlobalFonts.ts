// global.ts
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import PretendardRegular from "../fonts/Pretendard-Regular.woff";

const GlobalFont = createGlobalStyle`
  @font-face {
        font-family: "pretendard";
        src: local("pretendard"), url(${PretendardRegular}) format('woff'); 
        font-weight: normal;
    }
`;

export default GlobalFont;
