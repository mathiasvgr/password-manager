import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@router/config"
import { AuthProvider } from "@hooks/provider/AuthProvider";
import "@styles/main.css";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { customTheme } from "@styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={customTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);



