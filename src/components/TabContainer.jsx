import React from "react";
import { Box } from "@mui/material";
import TabPanel from "./TabPanel.tsx";

export default function TabContainer() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <TabPanel />
    </Box>
  );
}
