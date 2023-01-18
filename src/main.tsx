import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@router/config"
import { AuthProvider } from "@hooks/provider/AuthProvider";
import "@styles/main.css";
import { darkTheme } from "@styles/theme";
import { GlobalStyles, ThemeProvider } from "@mui/material";


const App = () => {

  const theme = darkTheme;

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: {
            fontFamily: theme.typography.fontFamily,
            backgroundColor: theme.palette.secondary.main 
          }
        }}
      />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  )
}



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



