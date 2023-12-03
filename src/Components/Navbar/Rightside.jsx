import React from "react";
import { Link } from "react-router-dom";

const Rightside = () => {
  return (
    <div>
      <div className=" my-[30px] mx-[50px]">
        <ul>
          <Link className="font-titleFont font-semibold p-[30px]" to="/">
            Help
          </Link>
          <Link
            className="font-titleFont font-bold p-[10px] bg-green-400 rounded-full hover:bg-green-500 text-[15px]"
            to="/"
          >
            Try AllTrails+ for free
          </Link>
          <Link
            className="font-titleFont font-semibold pl-[20px] pr-[20px] pt-[10px] pb-[10px] mx-[10px] bg-gray-200 rounded-full text-[15px] hover:bg-gray-300"
            to="/"
          >
            Login
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Rightside;
