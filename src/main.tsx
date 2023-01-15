import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@router/config"
import { AuthProvider } from "@hooks/provider/AuthProvider";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme  } from "@styles/theme" ;
import "@styles/main.css";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);



