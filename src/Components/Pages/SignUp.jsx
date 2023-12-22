import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="relative ">
        <img
          className="h-[700px] w-full"
          src="https://i.ibb.co/tcQh6hq/ezgif-com-avif-to-jpg-converted.jpg"
        ></img>
        <div className=" absolute top-0 w-full pt-[50px]">
          <div className="h-[600px] w-[500px] rounded-xl bg-white m-auto ">
            <div className="pt-[50px]">
              <h1 className="text-center text-[28px] font-serif font-semibold w-[476px] m-auto ">
                Create your free account
              </h1>
            </div>
            <div className="flex flex-col  items-center p-[15px] gap-[20px] ">
              <div className="">
                <button className="w-[470px] h-[50px] m-auto rounded-3xl  font-bold bg-blue-600 text-[white]  hover:bg-blue-500 ">
                  Continue with Google
                </button>
              </div>
              <div className="">
                <button className="w-[470px] h-[50px] rounded-3xl  font-bold bg-[#3c5997] text-[white]  hover:bg-blue-500 ">
                  Continue with Facebook
                </button>
              </div>
              <div className=" flex gap-[10px] items-center  ">
                <hr className="w-[200px]"></hr>
                <p className="text-center ">or</p>
                <hr className="w-[200px]"></hr>
              </div>

              <div>
                <Link to="/freeaccount">
                  {" "}
                  <button className="w-[470px]  h-[50px] rounded-3xl hover:bg-[#142800] bg-[#2c5601] text-white font-bold">
                    Create a free account
                  </button>
                </Link>
              </div>
              <div className="flex items-center flex-col">
                <p className="font-semibold">
                  Already have an account?{" "}
                  <Link className="underline" to="">
                    Log in
                  </Link>
                </p>
                <div className="p-[20px]">
                  <p className="text-center text-[14px] text-gray-600 ">
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
    </div>
  );
};

export default SignUp;
