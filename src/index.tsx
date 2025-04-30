import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import GlobalFont from "./styles/GlobalFonts";
import { lightTheme } from "./styles/theme"; // 🔥 아까 만든 테마

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <GlobalFont />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
