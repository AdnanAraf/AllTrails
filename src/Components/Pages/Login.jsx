import React, { useState } from "react";
import "./EmailForm.css";

const Login = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };
  return (
    // <div>
    //   <div className="relative w-full">
    //     <img
    //       src="https://i.ibb.co/hRChKXB/ezgif-com-gif-maker-2.jpg"
    //       alt="background"
    //     ></img>
    //     <div className="absolute top-0 w-full">
    //       <div className="h-[780px] w-[524px] bg-white font-medium m-auto container mt-[50px] rounded-3xl pt-[80px]">
    //         <h1 className="text-center text-[28px] font-[Percent,Beatrice,Arial,sans-serif] pt ">
    //           Welcome back.
    //           <p className="text-[28px] font-[Percent,Beatrice,Arial,sans-serif] font-normal">
    //             Log in and start exploring.
    //           </p>
    //         </h1>

    //         <div>
    //           <form>
    //             <div className="mx-[50px] m-[20px]">
    //               <label className="block" htmlFor="email"></label>
    //               <input
    //                 className="border-[1px] border-gray-500 w-[450px] h-[50px] rounded-lg pl-[20px]"
    //                 type="email"
    //                 name="email"
    //                 id="email"
    //                 placeholder="Email Address"
    //                 required
    //               />
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="">
    //   <div className={`email-form ${isInputFocused ? "focused" : ""}`}>
    //     <fieldset>
    //       <legend>
    //         <label className="email-label">Email:</label>
    //       </legend>
    //       <input
    //         type="email"
    //         className="outline-none"
    //         placeholder={isInputFocused ? "" : ""}
    //         onFocus={handleInputFocus}
    //         onBlur={handleInputBlur}
    //       />
    //     </fieldset>
    //   </div>
    // </div>
    <div>
      <form>
        <fieldset>
          <legend className="border-2 border-black">
            <label
              className={`label ${isInputFocused ? "focused" : ""}`}
              htmlFor="email"
            >
              Email:
            </label>
          </legend>
          <input
            className={`border-0 outline-none ${
              isInputFocused ? "focused" : ""
            }`}
            name="email"
            placeholder=""
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
