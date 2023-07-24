import React from "react";
import { ThemeProvider } from "styled-components";
const GlobalTheme = {
  COLORS: {
    orange: "#fbaf32",
    green: "#719a0a",
    white: "#ffffff",
    lightest: "#f8f9fa",
    light: "#cccccc",
    grey: "#999999",
    darke: "#666666",
    darkest: "#00000099",
    black: "#000000",
  },
  FONTS: ["open sans", "roboto", "sans-serif"],
  FontSize: {
    extraLarge: "3rem",
    Large: "2rem",
    medium: "1rem",
    small: "0.5rem",
    extraSmall: "0.3rem",
  },
  lineheight: {
    heigextralarge: "3rem",
    heiglarge: "2rem",
    heigmedium: "1.5rem",
    heigsmall: "0.5rem",
    heigextrasmall: "0.3rem",
  },
};
const Theme = ({ children }) => {
  return <ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>;
};
export default Theme;
