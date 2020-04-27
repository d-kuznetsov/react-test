import React from "react";

export const themes = {
  light: "#61dafb",
  dark: "#282c34",
};

export const ThemeContext = React.createContext(themes.light);
