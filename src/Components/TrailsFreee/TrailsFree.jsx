import React from "react";

const TrailsFree = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full"
          src="https://i.ibb.co/kHVPmz7/ezgif-com-gif-maker-1.jpg"
        ></img>
        <div className="absolute top-[170px] left-[100px]  ">
          <img src="http://www.w3.org/2000/svg"></img>
          <h1 className="text-[70px] font-serif font-medium ">
            Your first week’s on us
          </h1>
          <p className="text-[20px] font-bold">
            Then only $29.99 a year (that’s $2.50 a month)
          </p>
          <button className="h-[50px] mt-[40px]   w-[230px] text-[20px] font-airal rounded-full font-bold bg-[#64f67b]">
            Start your free trial
          </button>
        </div>
        <div className="overflow-x-auto rounded-2xl absolute top-[100px] left-[900px] bg-white p-[20px]">
          <table className="table rounded-lg">
            {/* head */}
            <thead>
              <tr>
                <th className="text-black text-[14px]">Features</th>
                <th className="text-black text-[14px]">Free</th>
                <th className="text-black text-[14px]"> AllTrails+</th>
              </tr>
            </thead>

            {/* row 1 */}

            {/* row 2 */}
            <tr>
              <td className="text-[16px] font-semibold">
                Navigate on the trail
              </td>
              <td></td>
              <td>
                <img
                  className="pl-[20px]"
                  src="https://cdn-assets-2.alltrails.com/assets/packs/4c0203f33a7a6b929b44.svg"
                ></img>
              </td>
            </tr>
            {/* row 3 */}

            <tr className="bg-base-200   ">
              <td className="text-[16px] font-semibold">
                Favorite trails and create lists
              </td>
              <td></td>
              <td>
                <img
                  className="pl-[20px]"
                  src="https://cdn-assets-2.alltrails.com/assets/packs/4c0203f33a7a6b929b44.svg"
                ></img>
              </td>
            </tr>
            <tr>
              <td className="text-[16px] font-semibold">
                Send routes to Garmin
              </td>
              <td></td>
              <td>
                <img
                  className="pl-[20px]"
                  src="https://cdn-assets-2.alltrails.com/assets/packs/4c0203f33a7a6b929b44.svg"
                ></img>
              </td>
            </tr>
            <tr className="bg-base-200">
              <td className="text-[16px] font-semibold">
                Download offline maps
              </td>
              <td></td>
              <td>
                <img
                  className="pl-[20px]"
                  src="https://cdn-assets-2.alltrails.com/assets/packs/4c0203f33a7a6b929b44.svg"
                ></img>
              </td>
            </tr>
            <tr>
              <td className="text-[16px] font-semibold">
                Get alerts for wrong turns
              </td>
              <td></td>
              <td>
                <img
                  className="pl-[20px]"
                  src="https://cdn-assets-2.alltrails.com/assets/packs/4c0203f33a7a6b929b44.svg"
                ></img>
              </td>
            </tr>
            <tr className="bg-base-200">
              <td className="text-[16px] font-semibold">
                Know conditions before you go
              </td>
              <td></td>
              <td>
                <img
                  className="pl-[20px]"
                  src="https://cdn-assets-2.alltrails.com/assets/packs/4c0203f33a7a6b929b44.svg"
                ></img>
              </td>
            </tr>
            <tr>
              <td className="text-[16px] font-semibold">Preview 3D Flyovers</td>
              <td></td>
              <td>
                <img
                  className="pl-[20px]"
                  src="https://cdn-assets-2.alltrails.com/assets/packs/4c0203f33a7a6b929b44.svg"
                ></img>
              </td>
            </tr>
            <tr className="bg-base-200">
              <td className="text-[16px] font-semibold">
                Find trails by distance from you
              </td>
              <td></td>
              <td>
                <img
                  className="pl-[20px]"
                  src="https://cdn-assets-2.alltrails.com/assets/packs/4c0203f33a7a6b929b44.svg"
                ></img>
              </td>
            </tr>
            <tr>
              <td className="text-[16px] font-semibold">
                Unlock more map details
              </td>
              <td></td>
              <td>
                <img
                  className="pl-[20px]"
                  src="https://cdn-assets-2.alltrails.com/assets/packs/4c0203f33a7a6b929b44.svg"
                ></img>
              </td>
            </tr>
            <tr className="bg-base-200 rounded-lg absolute w-full">
              <td className="text-[16px] font-semibold">
                Print maps for backup
              </td>
              <td></td>
              <td>
                <img
                  className="pl-[20px]"
                  src="https://cdn-assets-2.alltrails.com/assets/packs/4c0203f33a7a6b929b44.svg"
                ></img>
              </td>
            </tr>
            <tr>
              <td className="text-[16px] font-semibold">
                Bring trails to life with 3D maps
              </td>
              <td></td>
              <td>
                <img
                  className="pl-[20px]"
                  src="https://cdn-assets-2.alltrails.com/assets/packs/4c0203f33a7a6b929b44.svg"
                ></img>
              </td>
            </tr>
            <tr>
              <td className="text-[16px] font-semibold">Explore ad free</td>
              <td></td>
              <td>
                <img
                  className="pl-[20px]"
                  src="https://cdn-assets-2.alltrails.com/assets/packs/4c0203f33a7a6b929b44.svg"
                ></img>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TrailsFree;
