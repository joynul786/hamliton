import { ThemeProvider } from "@mui/material";
import { Theme } from "assets/theme";
import Navigation from "navigation";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
