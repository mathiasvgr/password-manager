import { Home } from "@pages/Home/Index"
import { Passwords, PasswordsLoader } from "@pages/Home/Passwords/Index";
import { Payments } from "@pages/Home/Payments/Index";
import { Personal } from "@pages/Home/Personal/Index";
import { Servers } from "@pages/Home/Servers/Index";
import { Login, LoginPropsLoader } from "@pages/Login/Index";
import { OnBoarding, OnBoardingPropsLoader } from "@pages/OnBoarding/Index";

import { createBrowserRouter } from "react-router-dom";
import { AuthGuards, AuthGuardsPropsLoader } from "./guards/AuthGuards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OnBoarding/>,
    loader: OnBoardingPropsLoader
  },
  {
    path: "/login",
    element: <Login/>,
    loader: LoginPropsLoader
  },
  {
    element: <AuthGuards/>,
    loader: AuthGuardsPropsLoader,
    children: [
      {
        path: "/home",
        element: <Home/>,
        children: [
          {
            path: "passwords",
            element: <Passwords/>,
            loader : PasswordsLoader,
          },  
          {
            path: "payments",
            element: <Payments/>
          },  
          {
            path: "personal",
            element: <Personal/>
          },  
          {
            path: "servers",
            element: <Servers/>
          },
        ]
      }
    ]
  }
]);

export default router;