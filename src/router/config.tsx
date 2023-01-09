import { Home } from "@components/pages/Home/Index"
import { Passwords } from "@components/pages/Home/Passwords/Index";
import { Payments } from "@components/pages/Home/Payments/Index";
import { Personal } from "@components/pages/Home/Personal/Index";
import { Servers } from "@components/pages/Home/Servers/Index";
import { Login, LoginPropsLoader } from "@components/pages/Login/Index";
import { createBrowserRouter } from "react-router-dom";
import { AuthGuards, AuthGuardsPropsLoader } from "./guards/AuthGuards";
import { OnBoarding, OnBoardingPropsLoader } from "@components/pages/OnBoarding/Index";

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
            element: <Passwords/>
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