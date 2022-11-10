import { ThemeProvider } from "@mui/material";
import React from "react";
import themeDefault from "./config/theme/Default";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
