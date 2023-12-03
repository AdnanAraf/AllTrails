import React from "react";
import Carousel, { Grid, Slider } from "react-grid-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import Carousel, { Grid, Slider } from "react-grid-carousel";
import "./carouselStyles.css";

const GiveAdventure = () => {
  const picture = [
    {
      image: "https://i.ibb.co/k91ZJZh/4288b278d125afce427b.jpg",
    },
    {
      image: "https://i.ibb.co/VSX9qrd/dadf01e4c131e9c4b087.jpg",
    },
    {
      image: "https://i.ibb.co/dJrcTS8/5eda52177ab34f450ed8.jpg",
    },
    {
      image: "https://i.ibb.co/JChKJTB/f06350e3a4607a6f5a7b.jpg",
    },
    {
      image: "https://i.ibb.co/5Rrgn0z/f7303771ad55c03cde0c.jpg",
    },
    {
      image:
        "https://i.ibb.co/7jZQYBt/photo-1687904628036-077149b494bc-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg",
    },
    {
      image: "https://i.ibb.co/dJrcTS8/5eda52177ab34f450ed8.jpg",
    },
    {
      image: "https://i.ibb.co/JChKJTB/f06350e3a4607a6f5a7b.jpg",
    },
  ];
  return (
    <div>
      <div className="h-[500px] w-[1260px] mx-[130px] bg-[#eeeae3] mt-[40px] rounded-3xl">
        <div className="flex justify-between gap-[50px]">
          <div className="mt-[50px] ml-[20px]">
            <img
              className="h-[450px]"
              src="https://cdn-assets.alltrails.com/assets/packs/c18add0545bf143184b5.png"
            ></img>
          </div>
          <div className="mt-[150px]">
            <h1 className="text-[36px] font-semibold w-[300px] ">
              Give the gift of adventure
            </h1>
            <p className="text-[16px] font-semibold  w-[540px] mt-[20px] font-serif">
              Celebrate the nature lovers in your life with a whole year of
              offline maps, wrong-turn alerts, and lots more.
            </p>
            <div>
              <button className="w-[170px]  mt-[30px] h-[50px] bg-[#2c5601] hover:bg-gray-700 text-[16px] font-bold text-white rounded-full">
                Give AllTrails+
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-[150px] mx-[120px]">
          <h1 className="font-serif text-[35px] font-semibold">
            Share You Next Adventure
          </h1>
          <p className="font-sans text-[16px] font-semibold">
            Show us how you #GetOutThere by tagging us @AllTrails for a chance
            to be featured!
          </p>
        </div>
        <div>
          {/* <img src="https://i.ibb.co/k91ZJZh/4288b278d125afce427b.jpg"></img>
          <img src="https://i.ibb.co/VSX9qrd/dadf01e4c131e9c4b087.jpg"></img>
          <img src="https://i.ibb.co/dJrcTS8/5eda52177ab34f450ed8.jpg"></img>
          <img src="https://i.ibb.co/JChKJTB/f06350e3a4607a6f5a7b.jpg"></img>
          <img src="https://i.ibb.co/5Rrgn0z/f7303771ad55c03cde0c.jpg"></img>
          <img src="https://i.ibb.co/7jZQYBt/photo-1687904628036-077149b494bc-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg"></img>
          <img src="https://i.ibb.co/dJrcTS8/5eda52177ab34f450ed8.jpg"></img>
          <img src="https://i.ibb.co/JChKJTB/f06350e3a4607a6f5a7b.jpg"></img> */}

          <div className=" mt-[60px] m-[120px]  fadeIn">
            <Carousel
              cols={4}
              rows={1}
              arrowRight={
                <div className=" h-[50px] w-[50px] bg-white  rounded-full absolute mx-[1280px] shadow-slate-900  shadow-2xl   bottom-[140px]">
                  {/* {" "}
              <div className="absolute top-[17px] left-[15px]"> */}
                  <FaArrowRight className=" ml-[15px] mt-[17px]"></FaArrowRight>{" "}
                  {/* </div> */}
                </div>
              }
              arrowLeft={
                <div className=" h-[50px] w-[50px] bg-white rounded-full absolute left-[-60px] top-[105px] shadow-slate-900  shadow-2xl">
                  {/* <div className=" left-[15px] top-[17px] "> */}
                  <FaArrowLeft className=" ml-[15px] mt-[17px]"></FaArrowLeft>
                  {/* </div> */}
                </div>
              }
            >
              {picture.map((city, i) => (
                <Carousel.Item key={i}>
                  <div className=" rounded-2xl overflow-hidden  h-[320px] w-[290px]  ">
                    <img
                      className=" h-[320px] w-[290px]    duration-300 hover:scale-[1.019] "
                      src={city.image}
                    ></img>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveAdventure;
