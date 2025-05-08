// index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// ✅ 변경: BrowserRouter → HashRouter
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import GlobalFont from "./styles/GlobalFonts";
import { theme } from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalFont />
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
