import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const FreeAccount = () => {
  return (
    <div>
      <div className="relative">
        <img src="https://i.ibb.co/kS5qWTQ/ezgif-com-avif-to-jpg-converted-1.jpg"></img>
        <div className="absolute top-0 w-full pt-[50px]">
          <div className="h-[780px] w-[524px] pt-[50px] bg-white font-medium m-auto  rounded-3xl ">
            <div className=" relative p-[15px] pt-[18px] cursor-pointer  ml-[20px] rounded-full hover:bg-gray-300 h-[50px]  w-[50px] ">
              <Link className="absolute " to="/sign">
                <FaArrowLeft />
              </Link>
            </div>
            <h1 className="text-center text-[28px] font-[Percent,Beatrice,Arial,sans-serif] pt ">
              Sign up today to start planning
              <p className="text-[28px] font-[Percent,Beatrice,Arial,sans-serif] font-normal">
                your next adventure
              </p>
            </h1>

            <div class="form">
              <div class="form-item">
                <input type="email" id="username" autocomplete="off" required />
                <label for="username" className="text-[16px] ">
                  First Name
                </label>
              </div>
              <div class="form-item">
                <input type="email" id="username" autocomplete="off" required />
                <label for="username" className="text-[16px] ">
                  Last Name
                </label>
              </div>
              <div class="form-item">
                <input type="email" id="username" autocomplete="off" required />
                <label for="username" className="text-[16px] ">
                  Email Address
                </label>
              </div>

              <div class="form-item">
                <input
                  type="password"
                  id="password"
                  autocomplete="off"
                  required
                />
                <label for="password">Password</label>
              </div>
            </div>
            <div>
              <button className="w-[470px] h-[50px] rounded-3xl hover:bg-[#142800] bg-[#2c5601] text-white font-bold mt-[20px] mx-[25px] container">
                Log in
              </button>

              <div>
                <h1 className=" text-gray-400 text-center pt-[30px] font-bodyFont">
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-black underline cursor-pointer pl-[10px]"
                  >
                    Log in
                  </Link>
                </h1>
                <p className="text-center text-[14px] text-gray-600 pt-[30px] mx-[25px]">
                  By continuing to use AllTrails, you agree to our
                  <span className="text-black underline text-[14px] hover:text-gray-400 cursor-pointer">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-black underline text-[14px] hover:text-gray-400 cursor-pointer">
                    Privacy Policy
                  </span>
                  . Personal data added to AllTrails is public by default —
                  refer to our{" "}
                  <span className="text-black underline text-[14px] hover:text-gray-400 cursor-pointer">
                    Privacy FAQs
                  </span>{" "}
                  to make changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeAccount;
