import React, { useState } from "react";
import "./MobileSection.css";
import Adventure from "../Adventure/Adventure";

const MobileSection = () => {
  // Initialize an array of states to manage the active status of each component
  const [showButton1Info, setShowButton1Info] = useState(true);
  const [showButton2Info, setShowButton2Info] = useState(false);
  const [showButton3Info, setShowButton3Info] = useState(false);

  // Function to handle button 1 click and show its information
  const handleButton1Click = () => {
    setShowButton1Info(true);
    setShowButton2Info(false);
    setShowButton3Info(false);
  };

  // Function to handle button 2 click and show its information
  const handleButton2Click = () => {
    setShowButton1Info(false);
    setShowButton2Info(true);
    setShowButton3Info(false);
  };
  const handleButton3Click = () => {
    setShowButton3Info(true);
    setShowButton2Info(false);
    setShowButton1Info(false);
  };

  return (
    <div>
      <div className="bg-[#f6f5e8] h-[680px] w-[1250px] container mx-[130px] mt-[-100px] absolute rounded-[50px]">
        <div className="grid grid-rows-3 gap-[30px] absolute top-[300px] left-[20px] font-semibold">
          <button
            className="text-[18px] underline pl-[10px]"
            onClick={handleButton1Click}
          >
            Search & discover
          </button>
          <button
            className="text-[18px]  underline"
            onClick={handleButton2Click}
          >
            Navigate & track
          </button>
          <button
            className="text-[18px] ml-[30px]  underline"
            onClick={handleButton3Click}
          >
            Remember & inspire
          </button>
        </div>

        {/* Show information for Button 1 when it is active */}
        {showButton1Info && (
          <div className="flex gap-[20px]">
            <div>
              <img
                className=" m-auto w-[400px] mt-[22px] ml-[350px] fadeIn"
                src="https://i.ibb.co/5hrS2ZC/983d3ed2c1b66aefbf72.png"
              ></img>
            </div>
            <div>
              <h1 className="mt-[200px] text-[36px] font-semibold w-[400px]">
                Pick the right trail for your day
              </h1>
              <h4 className="text-[20px] font-semibold w-[400px] mt-[20px]">
                All our trails are verified by experts and reviewed by our
                global community of adventurers like you.
              </h4>
            </div>
          </div>
        )}

        {/* Show information for Button 2 when it is active */}
        {showButton2Info && (
          <div className="flex gap-[20px]">
            <div>
              <img
                className="  m-auto w-[400px] mt-[22px] ml-[350px] fadeIn"
                src="https://i.ibb.co/zVynZzg/04bc44770a19ed980f6c.png"
              ></img>
            </div>
            <div className="">
              <h1 className="mt-[200px] text-[36px] font-semibold">
                Navigate & track
              </h1>
              <h4 className="text-[20px] font-semibold w-[400px] mt-[20px]">
                Out on the trail, you can keep an eye on your planned route,
                along with elevation changes and waypoints.
              </h4>
            </div>
          </div>
        )}
        {showButton3Info && (
          <div className="flex gap-[20px]">
            <div>
              <img
                className=" m-auto w-[400px] mt-[22px] ml-[350px] fadeIn"
                src="https://i.ibb.co/Jv706r0/c62c7e5d669998d4434c.png"
              ></img>
            </div>
            <div className="">
              <h1 className="mt-[200px] text-[36px] font-semibold">
                Keep track of your travels
              </h1>
              <h4 className="text-[20px] font-semibold w-[400px] mt-[20px]">
                Log all your trails in one place, and share insights to inspire
                and inform fellow adventurers.
              </h4>
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="grid grid-cols-3 pt-[650px] ">
          <div>
            <h1 className="text-[60px] text-[#2b381f] font-semibold text-center">
              400k+
            </h1>
            <h4 className="text-[20px] font-semibold text-[#2b381f] text-center mt-[10px]">
              curated trails
            </h4>
            <p className="text-center text-[14px]  text-[#2b381f] mt-[20px] font-semibold font-titleFont">
              Discover unexpected gems, even in your <br></br>own backyard.
            </p>
          </div>
          <div>
            <h1 className="text-[60px] text-[#2b381f] font-semibold text-center">
              50 mil
            </h1>
            <h4 className="text-[20px] font-semibold text-[#2b381f] text-center mt-[10px]">
              fellow explorers
            </h4>
            <p className="text-center text-[14px]  text-[#2b381f] mt-[20px] font-semibold font-titleFont">
              Share your adventures and learn from our <br></br>global
              community.
            </p>
          </div>
          <div>
            <h1 className="text-[60px] text-[#2b381f] font-semibold text-center">
              1207+ mil
            </h1>
            <h4 className="text-[20px] font-semibold text-[#2b381f] text-center mt-[10px]">
              logged kilometers
            </h4>
            <p className="text-center text-[14px]  text-[#2b381f] mt-[20px] font-semibold font-titleFont">
              Navigate your way and keep a record of all <br></br>your travels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSection;
