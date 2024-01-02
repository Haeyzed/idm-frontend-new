import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../styles/theme";
import { getStoredTheme, setStoredTheme } from "../../utils/localStorage";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const ThemeProvider = ({ children }) => {
  const storedTheme = getStoredTheme();
  const [theme, setTheme] = useState(
    storedTheme === "dark" ? darkTheme : lightTheme
  );

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    setStoredTheme(newTheme === darkTheme ? "dark" : "light");
  };

  useEffect(() => {
    setTheme(storedTheme === "dark" ? darkTheme : lightTheme);
  }, [storedTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
