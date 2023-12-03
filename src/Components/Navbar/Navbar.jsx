import React from "react";
import Leftside from "./Leftside";
import Rightside from "./Rightside";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between ">
      <Leftside />
      <Rightside />
    </div>
  );
};

export default Navbar;
