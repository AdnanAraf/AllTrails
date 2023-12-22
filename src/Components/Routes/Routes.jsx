import React from "react";
import Navbar from "../Navbar/Navbar";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Backgroundinfo from "../Background/Backgroundinfo";
import Bothsection from "../NatureSection/Bothsection";
import Home1 from "../Home/Home1";

import Direction from "../Map/Direction";
import TrailsFree from "../TrailsFreee/TrailsFree";
import Help from "../Help/Help";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import FreeAccount from "../Pages/FreeAccount";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
      {
        path: "explore",
        element: <Direction />,
      },
      {
        path: "trailsfree",
        element: <TrailsFree />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign",
        element: <SignUp />,
      },
      {
        path: "freeaccount",
        element: <FreeAccount />,
      },
    ],
  },

  {
    path: "help",
    element: <Help />,
  },
]);

export default Routes;
