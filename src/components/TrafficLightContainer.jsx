import React from "react";
import { Box } from "@mui/material";
import TrafficLight from "./TrafficLight";

export default function TrafficLightContainer() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <TrafficLight />
    </Box>
  );
}
