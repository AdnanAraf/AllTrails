import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaSearch } from "react-icons/fa";

const Image = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  // useEffect(() => {
  //   const timer = setTimeout(changeImage, 5000); // Change image every 5 seconds

  //   return () => clearTimeout(timer);
  // }, [currentImageIndex]);

  return (
    <div className=" ">
      <Carousel
        selectedItem={currentImageIndex}
        showIndicators={false}
        showThumbs={false}
        dynamicHeight={false}
        infiniteLoop
      >
        <div>
          <div className="relative">
            <img
              className="h-[600px] w-full "
              src="https://i.ibb.co/6NtJq9L/hero-logged-out-1-eur-w2800-35e1ac42108faf1c3286d85bd1ba8ec8c571b240398c136364649517f193f8c9.jpg "
              alt="Image 1"
            />
            <div className="absolute top-[180px] left-0 bottom-0 right-0">
              <h1 className=" text-[65px] text-white font-semibold ">
                Find your outdoors
              </h1>
              <div>
                <div className="relative">
                  <input
                    className=" h-[70px] my-[20px] w-[620px] pl-[80px] outline-none border-white rounded-full text-[22px]"
                    type="search"
                    placeholder="Search by city, park, or trail name"
                  ></input>

                  <FaSearch className="absolute top-[47px] right-[260px]   w-full  h-[20px]" />
                </div>
              </div>

              <Link
                to="explore"
                className=" text-[20px] underline text-white font-semibold  "
              >
                Explore nearby trails
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src="https://i.ibb.co/ZJby8tk/hero-logged-out-3-w2800-331a53e0d8a7db7ef047733917fb264a703398dead15dcc33136db1e8876c231.jpg" />
          </div>
          <div>
            <h1 className="absolute text-[70px] text-white font-semibold  top-[240px] left-0 bottom-0 right-0">
              Find your outdoors
            </h1>
            <input
              className="absolute top-[350px] left-[540px] bottom-0 pl-[80px] right-0 h-[70px] w-[620px] outline-none border-white rounded-full text-[22px]"
              type="search"
              placeholder="Search by city, park, or trail name"
            ></input>
            <FaSearch className="absolute top-[375px] left-[560px]  bottom-0 right-0 w-[25px] h-[25px]" />
            <div className="absolute top-[360px] left-[1100px] p-[15px] bottom-0 right-0 rounded-full h-[50px] w-[50px]  bg-green-900 ">
              <FaArrowRight className="text-white text-[23px]  " />
            </div>
            <Link className="absolute text-[30px] underline text-white font-semibold  top-[440px] left-0 bottom-0 right-0">
              Explore nearby trails
            </Link>
          </div>
        </div>
        <div>
          <div className="flex">
            <img
              className="h-[600px]"
              src="https://i.ibb.co/gW0t1YJ/photo-1501555088652-021faa106b9b-ixlib-rb-4-0.jpg"
              alt="Image 3"
            />
            <img
              className=" h-[600px]"
              src="https://i.ibb.co/9NVdVYC/photo-1489657780376-e0d8630c4bd3-ixlib-rb-4-0.jpg"
            ></img>
          </div>
          <h1 className="absolute text-[70px] text-white font-semibold  top-[240px] left-0 bottom-0 right-0">
            Find your outdoors
          </h1>
          <input
            className="absolute top-[350px] left-[540px] bottom-0 right-0 h-[70px] w-[620px] pl-[80px] border-white rounded-full text-[22px] outline-none"
            placeholder="Search by city, park, or trail name"
          />

          <FaSearch className="absolute top-[375px] left-[560px]  bottom-0 right-0 w-[25px] h-[25px]" />
          <div className="absolute top-[360px] left-[1100px] p-[15px] bottom-0 right-0 rounded-full h-[50px] w-[50px]  bg-green-900 ">
            <FaArrowRight className="text-white text-[23px]  " />
          </div>

          <Link className="absolute text-[30px] underline text-white font-semibold  top-[440px] left-[730px]">
            Explore nearby trails
          </Link>
        </div>
      </Carousel>
    </div>
  );
};

export default Image;
