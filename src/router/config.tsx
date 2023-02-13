import { Home } from "@pages/Home/Index"
import { Logins, LoginsLoader } from "@pages/Home/Logins/Index";
import { Payments } from "@pages/Home/Payments/Index";
import { Personal } from "@pages/Home/Personal/Index";
import { Servers } from "@pages/Home/Servers/Index";
import { Login, LoginPropsLoader } from "@pages/Login/Index";
import { OnBoarding, OnBoardingPropsLoader } from "@pages/OnBoarding/Index";

import { createBrowserRouter } from "react-router-dom";
import { AuthGuards, AuthGuardsPropsLoader } from "./guards/AuthGuards";
import { IdView, IdViewLoader } from "@pages/Home/Logins/Id/Index";
import { CreateLogins } from "@pages/Home/Logins/Create/Index";

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
            path: "logins",
            element: <Logins/>,
            loader : LoginsLoader,
            children: [
              {
                path: "create",
                element: <CreateLogins/>
              },
              {
                path: ":id",
                element: <IdView/>,
                loader : IdViewLoader
              }
            ]
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