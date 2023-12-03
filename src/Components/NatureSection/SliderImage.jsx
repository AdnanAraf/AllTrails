import React from "react";
// import Carousel from "react-grid-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Carousel, { Grid, Slider } from "react-grid-carousel";
const SliderImage = () => {
  const picture = [
    {
      image:
        "https://i.ibb.co/Br6SR5h/premium-photo-1683230902982-469f6ef000bc-ixlib-rb-4-0.jpg",
      title: "cycling",
    },
    {
      image:
        "https://i.ibb.co/tzVcvC6/photo-1514524865930-188150490d83-ixlib-rb-4-0.jpg",
      title: "cycling",
    },
    {
      image:
        "https://i.ibb.co/7rC7L8d/photo-1586022045497-31fcf76fa6cc-ixlib-rb-4-0.jpg",
    },
    {
      image:
        "https://i.ibb.co/djc354g/photo-1504025468847-0e438279542c-ixlib-rb-4-0.jpg",
    },
    {
      image:
        "https://i.ibb.co/44j2Gvp/photo-1489440543286-a69330151c0b-ixlib-rb-4-0.jpg",
    },
    {
      image:
        "https://i.ibb.co/vZQGLHy/photo-1628701993871-67e900321fbe-ixlib-rb-4-0.jpg",
    },
    {
      image:
        "https://i.ibb.co/w40LrRC/photo-1592903204858-e288251ad9cc-ixlib-rb-4-0.jpg",
    },
    {
      image:
        "https://i.ibb.co/VWxq8b0/photo-1537905569824-f89f14cceb68-ixlib-rb-4-0.jpg",
    },
    {
      image:
        "https://i.ibb.co/58QfMjv/photo-1517164850305-99a3e65bb47e-ixlib-rb-4-0.jpg",
    },
    {
      image:
        " https://i.ibb.co/jbZPzgr/photo-1517984922331-8dbaa8ffa9c1-ixlib-rb-4-0.jpg",
    },
    {
      image:
        "https://i.ibb.co/Tg9pWmQ/photo-1551698618-1dfe5d97d256-ixlib-rb-4-0.png",
    },
    {
      image:
        "https://i.ibb.co/hCQzkt0/photo-1563161084-d8d8ff841bae-ixlib-rb-4-0.jpg",
    },
    {
      image:
        "https://i.ibb.co/hCQzkt0/photo-1563161084-d8d8ff841bae-ixlib-rb-4-0.jpg",
    },
    {
      image:
        "https://i.ibb.co/rFLjpGn/photo-1682685796186-1bb4a5655653-ixlib-rb-4-0.jpg",
    },
    {
      image:
        "https://i.ibb.co/CJLkPpL/photo-1663579168345-8e955020f8ef-ixlib-rb-4-0.jpg",
    },
    {
      image:
        "https://i.ibb.co/xMKD18N/photo-1477847616630-cf9cf8815fda-ixlib-rb-4-0.jpg",
    },
    {
      image:
        "https://i.ibb.co/hDjrvr0/premium-photo-1661940626029-ed15dac5e1b1-ixlib-rb-4-0.jpg",
    },
    {
      image:
        "https://i.ibb.co/WybyqMX/p2oto-1576866946478-8d0d015bf3e5-ixlib-rb-4-0.jpg",
    },
  ];
  return (
    <div className=" flex gap-[790px]  bg-[#eee9db] h-[800px] justify-between">
      <div className=" mt-[160px] ml-[120px] fadeIn">
        <Carousel
          cols={3}
          rows={2}
          arrowRight={
            <div className=" h-[50px] w-[50px] bg-white  rounded-full absolute left-[600px] bottom-[140px]">
              {/* {" "}
              <div className="absolute top-[17px] left-[15px]"> */}
              <FaArrowRight className=" ml-[15px] mt-[17px]"></FaArrowRight>{" "}
              {/* </div> */}
            </div>
          }
          arrowLeft={
            <div className=" h-[50px] w-[50px] bg-white rounded-full absolute left-[-60px] top-[125px]">
              {/* <div className=" left-[15px] top-[17px] "> */}
              <FaArrowLeft className=" ml-[15px] mt-[17px]"></FaArrowLeft>
              {/* </div> */}
            </div>
          }
        >
          {picture.map((city, i) => (
            <Carousel.Item key={i}>
              <img
                className="h-[150px] w-[200px] rounded-lg transition  "
                src={city.image}
              ></img>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="mt-[150px]">
        <h1 className="text-[46px] w-[500px]  font-LogoFont mt-[20px] text-[#1d330f] ml-[-700px] ">
          Trails that fit your nature
        </h1>
        <p className="text-[20px]  w-[500px]  mt-[20px] font-semibold text-[#1d330f] ml-[-700px]  ">
          Whether you’re pushing your limits or pushing a stroller, we've got
          you covered.
        </p>
      </div>
    </div>
  );
};

export default SliderImage;
