import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div>
      <img
        className="m-auto mt-[5px]"
        src="https://i.ibb.co/k2FQY9q/797a025725b4c982518e6bd5de0a1ade461a006e.png"
      ></img>
      <div className="relative mt-[20px]">
        <img src="https://i.ibb.co/rFmtk7x/4b85bf8ccd0f277bd258080c09d74b10c8d9b3c6.jpg"></img>
        <div className="absolute top-0">
          <h1 className="text-[55px] font-semibold mt-[80px] w-[1500px] text-white text-center">
            How can we help?
          </h1>
          <input
            className="absolute top-[200px] left-[380px] bottom-0 pl-[50px] right-0 h-[60px] w-[750px] outline-none border-white rounded-full text-[22px]"
            type="search"
            placeholder="search"
          ></input>
          <FaSearch className="absolute top-[220px] left-[400px]  bottom-0 right-0 w-[25px] h-[25px]" />
        </div>
      </div>

      <div>
        <div className="grid grid-cols-3 text-center mx-[200px] mt-[100px]   gap-[50px]">
          <Link
            to="/"
            className="bg-[#efefec] h-[50px] p-[13px] w-[350px] rounded-full text-[16px] font-bodyFont font-semibold hover:bg-[#dbdad2] hover:border-[#2B381F] border-2"
          >
            New to AllTrails
          </Link>
          <Link
            to="/"
            className="bg-[#efefec] h-[50px] p-[13px] w-[350px] rounded-full text-[16px] font-bodyFont font-semibold hover:bg-[#dbdad2] hover:border-[#2B381F] border-2"
          >
            Account & Privacy
          </Link>
          <Link
            to="/"
            className="bg-[#efefec] h-[50px] p-[13px] w-[350px] rounded-full text-[16px] font-bodyFont font-semibold hover:bg-[#dbdad2] hover:border-[#2B381F] border-2"
          >
            Subscription & Billing
          </Link>
          <Link
            to="/"
            className="bg-[#efefec] h-[50px] p-[13px] w-[350px] rounded-full text-[16px] font-bodyFont font-semibold hover:bg-[#dbdad2] hover:border-[#2B381F] border-2"
          >
            AllTrails+
          </Link>
          <Link
            to="/"
            className="bg-[#efefec] h-[50px] p-[13px] w-[350px] rounded-full text-[16px] font-bodyFont font-semibold hover:bg-[#dbdad2] hover:border-[#2B381F] border-2"
          >
            Using AllTrails
          </Link>
          <Link
            to="/"
            className="bg-[#efefec] h-[50px] p-[13px] w-[350px] rounded-full text-[16px] font-bodyFont font-semibold hover:bg-[#dbdad2] hover:border-[#2B381F] border-2"
          >
            AllTrails Community
          </Link>
          <Link
            to="/"
            className="bg-[#efefec] h-[50px] p-[13px] w-[350px] rounded-full text-[16px] font-bodyFont font-semibold hover:bg-[#dbdad2] hover:border-[#2B381F] border-2"
          >
            Troubleshooting
          </Link>
          <Link
            to="/"
            className="bg-[#efefec] h-[50px] p-[13px] w-[350px] rounded-full text-[16px] font-bodyFont font-semibold hover:bg-[#dbdad2] hover:border-[#2B381F] border-2"
          >
            Contact
          </Link>
          <Link
            to="/"
            className="bg-[#efefec] h-[50px] p-[13px] w-[350px] rounded-full text-[16px] font-bodyFont font-semibold hover:bg-[#dbdad2] hover:border-[#2B381F] border-2"
          >
            AllTrails Member Forum
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Help;
