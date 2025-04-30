import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    text: string;
    textBg: string;
    textTxt: string;
    lightGray: string;
    ui: {
      border: string;
      background: string;
      text: string;
    };
  }
}
