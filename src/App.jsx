import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TrafficLightContainer from "./components/TrafficLightContainer";
import TabContainer from "./components/TabContainer";

const theme = createTheme({
  typography: {
    // Aqui eu defini a fonte padrão para o app, conforme design do Figma.
    fontFamily: '"Open Sans", sans-serif',
  },
});

const router = createBrowserRouter([
  {
    path: "/interface-apdata/",
    element: <TrafficLightContainer />,
  },
  {
    // esta é a rota para a interface do semáforo
    path: "/interface-apdata/traffic-light",
    element: <TrafficLightContainer />,
  },
  {
    // esta é a rota para a interface de abas 
    path: "/interface-apdata/tabs",
    element: <TabContainer />,
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
