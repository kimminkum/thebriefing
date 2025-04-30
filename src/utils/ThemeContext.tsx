// src/context/ThemeContext.tsx
import { createContext, useState, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, uiOn, uiOff } from "../styles/theme";

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
  isUiMode: false,
  toggleUi: () => {}
});

export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isUiMode, setIsUiMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  const toggleUi = () => {
    setIsUiMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleTheme, isUiMode, toggleUi }}
    >
      <ThemeProvider
        theme={{
          ...(isDarkMode ? darkTheme : lightTheme),
          ui: isUiMode ? uiOn : uiOff
        }}
      >
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
