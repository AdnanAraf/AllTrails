import React, { useState } from "react";
import "./EmailForm.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };
  return (
    <div>
      <div className="relative w-full">
        <img
          src="https://i.ibb.co/hRChKXB/ezgif-com-gif-maker-2.jpg"
          alt="background"
        ></img>
        <div className="absolute top-0 w-full">
          <div className="h-[780px] w-[524px] bg-white font-medium m-auto container mt-[50px] rounded-3xl pt-[80px]">
            <h1 className="text-center text-[28px] font-[Percent,Beatrice,Arial,sans-serif] pt ">
              Welcome back.
              <p className="text-[28px] font-[Percent,Beatrice,Arial,sans-serif] font-normal">
                Log in and start exploring.
              </p>
            </h1>

            <div class="form">
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
              <button className="w-[470px] h-[50px] rounded-3xl hover:bg-[#142800] bg-[#2c5601] text-white font-bold mx-[25px] container">
                Log in
              </button>
              <button className="w-[470px] h-[50px] rounded-3xl mt-[20px] font-bold hover:bg-gray-300 mx-[25px]">
                Forgot Your Password?
              </button>
              <div>
                <button className="w-[470px] h-[50px] rounded-3xl mt-[20px] font-bold bg-blue-600 text-[white]  hover:bg-blue-500 mx-[25px]">
                  Continue with Google
                </button>
              </div>
              <div>
                <button className="w-[470px] h-[50px] rounded-3xl mt-[20px] font-bold bg-[#3c5997] text-[white]  hover:bg-blue-500 mx-[25px]">
                  Continue with Facebook
                </button>
              </div>
              <div>
                <h1 className=" text-gray-400 text-center pt-[30px] font-bodyFont">
                  Don't have an account?
                  <Link
                    to="/sign"
                    className="text-black underline cursor-pointer"
                  >
                    Sign up for free
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

export default Login;
