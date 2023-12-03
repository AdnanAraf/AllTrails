import {
  faCoffee,
  faWheatAlt,
  faWheatAwn,
} from "@fortawesome/free-solid-svg-icons";
import { FaStar } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Conpic = () => {
  return (
    <div className="relative">
      <div className="relative">
        <img
          className="bg-cover bg-center "
          src="https://i.ibb.co/42fvrqq/Untitled-design-2.png"
        ></img>
        <div>
          <h1 className="absolute bottom-[300px] left-[200px] w-[500px] text-white text-[70px] font-semibold">
            Explore with confidence
          </h1>
          <p className="absolute bottom-[250px] left-[200px] text-white text-[25px]">
            Inspiration and guidance for wherever your trail may lead.
          </p>
          <div className="h-[150px] w-[150px] absolute bottom-[70px] left-[200px]">
            <img
              className="text-white font-bold"
              src="https://cdn-assets.alltrails.com/assets/images/homepage/editors_choice/rebrand-apple-editor-badge-en-US.svg"
            />
          </div>
          <div className="absolute bottom-[170px] left-[380px] flex gap-[10px]">
            <h1 className="text-[32px] text-white font-semibold font-mono">
              4.9
            </h1>
            <FaStar className="text-green-500 h-[32px] w-[32PX] mt-[8px]" />
            <FaStar className="text-green-500 h-[32px] w-[32PX] mt-[8px]" />
            <FaStar className="text-green-500 h-[32px] w-[32PX] mt-[8px]" />
            <FaStar className="text-green-500 h-[32px] w-[32PX] mt-[8px]" />
            <FaStar className="text-green-500 h-[32px] w-[32PX] mt-[8px]" />
          </div>
          {/* 
          <div className="absolute bottom-[200px] left-[200px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-apple"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z" />
              <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
            </svg>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Conpic;
