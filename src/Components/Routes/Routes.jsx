import React from "react";
import Navbar from "../Navbar/Navbar";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Backgroundinfo from "../Background/Backgroundinfo";
import Bothsection from "../NatureSection/Bothsection";
import Home1 from "../Home/Home1";

import Direction from "../Map/Direction";

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
    ],
  },
]);

export default Routes;
