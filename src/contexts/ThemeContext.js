import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: {
      background: "#fff",
      color: "black",
      border: "1px solid #666",
    },
    dark: {
      background: "#000",
      color: "white",

      border: "1px solid #666",
    },
  });
  const changeTheme = () => {
    setTheme({
      ...theme,
      isLightTheme: !theme.isLightTheme,
    });
  };
  const themeContextData = {
    theme,
    changeTheme,
  };
  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
