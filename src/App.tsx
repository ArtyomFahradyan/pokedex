import React from "react";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "theme";
import Router from "./components/Router";
import "antd/dist/antd.css";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
