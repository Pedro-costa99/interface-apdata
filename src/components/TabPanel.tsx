import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";

interface TabContentProps {
  children: React.ReactNode;
  value: number;
  index: number;
}

// Criei este componente p/ ele ser responsável por exibir o conteúdo de cada aba.
function TabContent({ children, value, index }: TabContentProps) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ padding: "16px 4px" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "18px",
              letterSpacing: "0",
              color: "#2C2C2E",
            }}
          >
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

export default function TabPanel() {
  const [tabIndex, setTabIndex] = useState<number>(0);

  // Aqui estou atualizando o estado da tab quando uma nova aba é selecionada.
  const handleChange = (_event: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "593px",
        minHeight: "300px",
        borderRadius: 12,
        border: "1px solid #D2D2D2",
        padding: "24px",
        gap: "16px",
        background: "#AEB5B3",
        backdropFilter: "blur(8px)",
        boxShadow: "0px 4px 4px 0px #00000040",
        opacity: 1,
      }}
    >
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        slotProps={{
          indicator: {
            style: {
              backgroundColor: "#0A7D45",
            },
          },
        }}
        sx={{
          marginLeft: "-35px",
          fontSize: "16px",
          "& .MuiTab-root.Mui-selected": {
            color: "#0A7D45",
            borderBottom: "2px solid #0A7D45",
            borderColor: "#0A7D45",
          },
        }}
      >
        <Tab
          label="Apdata"
          sx={{ color: "#2C2C2E", fontWeight: 600, fontSize: "12px" }}
        />
        <Tab
          label="Global Antares"
          sx={{ color: "#2C2C2E", fontWeight: 600, fontSize: "12px" }}
        />
        <Tab
          label="Volaris"
          sx={{ color: "#2C2C2E", fontWeight: 600, fontSize: "12px" }}
        />
      </Tabs>
      {/* Cada TabContent exibe um conteúdo diferente */}
      <TabContent value={tabIndex} index={0}>
        Atuamos desde 1984 entregando soluções integradas, flexíveis e
        automatizadas em tecnologia e terceirização para a gestão completa do
        capital humano. <br /> <br />
        Fazemos parte do grupo Volaris, um braço operacional da Constellation
        Software, empresa canadense, de atuação global, líder no mercado de
        software e serviços para diversos setores. Atendemos organizações de
        pequeno, médio e grande porte, dos mais diversos segmentos e com uma
        carteira expressiva com mais de 750 clientes no Brasil e no mundo.
      </TabContent>
      <TabContent value={tabIndex} index={1}>
        O GA - Global Antares tem como principais características a
        flexibilidade, a alta tecnologia e a alta performance. Proporciona
        simplicidade, produtividade, mobilidade e automatização na gestão
        estratégica do Capital Humano, abrangendo as necessidades de tecnologia
        da área de RH em um único produto.
      </TabContent>
      <TabContent value={tabIndex} index={2}>
        O grupo Volaris está presente em mais de 50 países e tem como base um
        modelo de negócios decentralizado, onde as empresas adquiridas retém sua
        autonomia e tem acesso a treinamento contínuo. <br /> <br />A companhia
        cresceu para uma escala verdadeiramente global, respeitando culturas
        internacionais e tendo capacidade de trabalhar em diversos idiomas.
      </TabContent>
    </Box>
  );
}
