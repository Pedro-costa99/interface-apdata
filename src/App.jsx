import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TrafficLightContainer from "./components/TrafficLightContainer";

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
