import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TrafficLightContainer from "./components/TrafficLightContainer";
import TabContainer from "./components/TabContainer";

const theme = createTheme({
  typography: {
    // Aqui eu defini a fonte padrão para o app, conforme design do Figma.
    fontFamily: '"Open Sans", sans-serif',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* esta é a rota para a interface do semáforo */}
          <Route
            path="interface-apdata/traffic-light"
            element={<TrafficLightContainer />}
          />
          {/* esta é a rota para a interface de abas */}
          <Route path="interface-apdata/tabs" element={<TabContainer />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
