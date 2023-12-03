import React from "react";

const GalleryDetails = ({ item }) => {
  const { image } = item;
  return (
    <div>
      <div>
        <img
          className="h-[100px] w-[100px] rounded-lg  fadeIn"
          src={image}
        ></img>
      </div>
    </div>
  );
};

export default GalleryDetails;
