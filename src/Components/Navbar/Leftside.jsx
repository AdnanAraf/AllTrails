import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const Leftside = () => {
  const [isSavedDropdownOpen, setIsSavedDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    setIsSavedDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsSavedDropdownOpen(false);
  };

  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  const ShopDropdownOpen = () => {
    setIsShopDropdownOpen(true);
  };

  const ShopDropdownClose = () => {
    setIsShopDropdownOpen(false);
  };

  return (
    <div className="flex justify-between  mx-[100px] gap-[20px]">
      <div>
        <h1 className="text-[35px] font-semibold my-[10px] font-LogoFont1">
          AllTrails
        </h1>
      </div>
      <div className="mt-[5px]">
        <ul>
          <Link
            className="text-[15px] font-titleFont font-bold p-[20px]"
            to="/"
          >
            Explore
          </Link>
          <Link
            className="text-[15px] font-titleFont font-bold p-[20px]"
            to="/"
          >
            Community
          </Link>
          <Link
            onMouseEnter={handleDropdownOpen}
            onMouseLeave={handleDropdownClose}
          >
            <button className="text-[15px] font-titleFont font-bold p-[20px] ">
              Saved
              <div className="mt-[-20px] ml-[80px] font-normal">
                {isSavedDropdownOpen ? (
                  <FaChevronUp></FaChevronUp>
                ) : (
                  <FaChevronDown></FaChevronDown>
                )}
              </div>
            </button>

            {isSavedDropdownOpen && (
              <ul
                className="absolute mt-0 bg-white shadow-lg ml-[240px] w-[250px] rounded-lg z-50 "
                onMouseEnter={handleDropdownOpen}
                onMouseLeave={handleDropdownClose}
              >
                <Link
                  className="block px-4 py-4 text-sm text-gray-700 font-titleFont font-bold text-[15px] hover:bg-gray-200"
                  to="/"
                >
                  My Favorities
                </Link>

                <Link
                  className="block px-4 py-4 text-sm text-gray-700 font-titleFont font-bold text-[15px] hover:bg-gray-200"
                  to="/"
                >
                  My Maps
                </Link>

                <Link
                  className="block px-4 py-4 text-sm text-gray-700 font-titleFont font-bold text-[15px] hover:bg-gray-200"
                  to="/"
                >
                  Lists
                </Link>
                <Link
                  className="block px-4 py-4 text-sm text-gray-700 font-titleFont font-bold text-[15px] hover:bg-gray-200"
                  to="/"
                >
                  Activities
                </Link>
                <Link
                  className="block px-4 py-4 text-sm text-gray-700 font-titleFont font-bold text-[20px] hover:bg-gray-200"
                  to="/"
                >
                  Completed
                </Link>
                <Link
                  className="block px-4 py-4 text-sm text-gray-700 font-titleFont font-bold text-[20px] hover:bg-gray-200"
                  to="/"
                >
                  Created Map
                </Link>

                {/* Add more dropdown items as needed */}
              </ul>
            )}
          </Link>
          <Link
            className="relative "
            onMouseEnter={ShopDropdownOpen}
            onMouseLeave={ShopDropdownClose}
          >
            <button className="text-[15px] font-titleFont font-bold p-[20px]">
              Shop
              <div className="mt-[-20px] ml-[80px] font-normal">
                {isShopDropdownOpen ? (
                  <FaChevronUp></FaChevronUp>
                ) : (
                  <FaChevronDown></FaChevronDown>
                )}
              </div>
            </button>
            {isShopDropdownOpen && (
              <ul
                className="absolute mt-0 bg-white shadow-lg ml-[400px] w-[250px] rounded-lg z-50 "
                onMouseEnter={ShopDropdownOpen}
                onMouseLeave={ShopDropdownClose}
              >
                <Link
                  className="block px-4 py-4 text-sm text-gray-700 font-LogoFont1  text-[23px] hover:bg-gray-200 font-semibold"
                  to="/"
                >
                  AllTrails Gear
                </Link>

                <Link
                  className="block px-4 py-4 text-sm text-gray-700 font-LogoFont1  text-[23px] hover:bg-gray-200 font-semibold"
                  to="/"
                >
                  Give AllTrails++
                </Link>

                {/* Add more dropdown items as needed */}
              </ul>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Leftside;
