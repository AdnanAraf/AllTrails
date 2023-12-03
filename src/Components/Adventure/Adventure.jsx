import React from "react";
import { Link } from "react-router-dom";
import Gallery from "../Gallery/Gallery";

const Adventure = () => {
  return (
    <div className="mt-[800px] ">
      <div className="flex justify-center">
        <div>
          <img
            className="h-[600px] w-[680px] mt-[150px] rounded-tl-[30px]"
            src="https://i.ibb.co/DRktNGN/7321fffb6f2d8420fefe.webp"
          ></img>
        </div>
        <div className=" bg-[#142800] mt-[150px] rounded-tr-[30px]">
          <img
            className=" w-[150px] mt-[150px] ml-[100px]"
            src="https://i.ibb.co/8By0XsS/49b9ea9f91d73d3a29c3.png"
          ></img>
          <h1 className="text-[36px]  font-LogoFont text-white font-semibold  ml-[100px] mt-[20px]">
            More tools for more <br></br>adventures
          </h1>
          <p className="text-[20px] text-white ml-[100px] font-titleFont2  w-[480px] font-semibold my-[20px]">
            With offline maps, wrong-turn alerts, and extra planning features,
            AllTrails+ helps you make the most of every minute outdoors.
          </p>
          <h1 className="mt-[50px]">
            <Link
              className="font-titleFont font-semibold ml-[100px]   p-[20px] bg-green-400 rounded-full hover:bg-green-500 text-[18px]"
              to="/"
            >
              Try AllTrails+ for free
            </Link>
          </h1>
        </div>
      </div>
      <div>
        <img
          className="w-[1260px] mx-[130px] h-[30px] rounded-b-[30px]"
          src="https://i.ibb.co/Ryt1L4N/cropped.jpg"
        ></img>
      </div>
      <Gallery />
    </div>
  );
};

export default Adventure;
