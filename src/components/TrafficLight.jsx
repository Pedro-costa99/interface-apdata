import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

export default function TrafficLight() {
  const [currentLight, setCurrentLight] = useState("red");

  useEffect(() => {
    // Aqui eu defini um intervalo que altera a luz conforme a ordem predefinida
    const interval = setInterval(
      () => {
        switch (currentLight) {
          case "red":
            setCurrentLight("yellow");
            break;
          case "yellow":
            setCurrentLight("green");
            break;
          case "green":
            setCurrentLight("red");
            break;
          default:
            setCurrentLight("red");
        }
      },
      // Aqui eu defini a duração de cada luz antes da troca
      currentLight === "red" ? 5000 : currentLight === "yellow" ? 500 : 3000
    );
    // Defini o intervalo ao alterar o estado para evitar múltiplas execuções
    return () => clearInterval(interval);
  }, [currentLight]);

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "160px",
        height: "382px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "32px",
        padding: "19px 24px",
        gap: "24px",
        backgroundColor: "#333333",
      }}
    >
      <Box
        sx={{
          width: "86px",
          height: "85px",
          borderRadius: "50%",
          backgroundColor: currentLight === "red" ? "#FF0000" : "#8A0000",
          boxShadow:
            currentLight === "red" ? "0px 0px 68px 0px #FF0000A6" : "none",
        }}
      />
      <Box
        sx={{
          width: "86px",
          height: "85px",
          borderRadius: "50%",
          backgroundColor: currentLight === "yellow" ? "#FFE500" : "#878800",
          boxShadow:
            currentLight === "yellow" ? "0px 0px 68px 0px #FFE500A6" : "none",
        }}
      />
      <Box
        sx={{
          width: "86px",
          height: "85px",
          borderRadius: "50%",
          backgroundColor: currentLight === "green" ? "#00FF00" : "#008D00",
          boxShadow:
            currentLight === "green" ? "0px 0px 68px 0px #00FF00A6" : "none",
        }}
      />
    </Box>
  );
}
