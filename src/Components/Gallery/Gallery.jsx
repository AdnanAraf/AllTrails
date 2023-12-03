import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import GalleryDetails from "./GalleryDetails";
// import GiveAdventure from "../GiveAdventure";

const Gallery = () => {
  const [collection, setcollection] = useState([]);
  const TrandingTrails = collection.filter(
    (item) => item.title === "Tranding Trails"
  );
  const ParksWhataLook = collection.filter(
    (item) => item.title === "Parks What a Look"
  );
  const CitiestoExplore = collection.filter(
    (item) => item.title === "Cities to Explore"
  );
  useEffect(() => {
    fetch("http://localhost:5000/Alltrailscollection")
      .then((res) => res.json())

      .then((data) => setcollection(data));
  }, []);
  return (
    <div>
      {/* <h1 className="text-[35px] font-titleFont font-semibold mt-[50px]">
        Adventure anywhere
      </h1>
      <div>
        <Tabs>
          <TabList className="flex  gap-[30px]  my-[40px]">
            <Tab className="cursor-pointer divide-y font-semibold text-[18px] text-gray-500">
              TrandingTrails
            </Tab>
            <Tab className="cursor-pointer font-semibold text-[18px] text-gray-500">
              ParksWhataLook
            </Tab>
            <Tab className="cursor-pointer font-semibold text-[18px] text-gray-500">
              CitiestoExplore
            </Tab>
          </TabList>

          <TabPanel className="grid grid-cols-4 gap-[20px] ">
            {TrandingTrails.map((item) => (
              <GalleryDetails key={item._id} item={item}></GalleryDetails>
            ))}
          </TabPanel>
          <TabPanel className="grid grid-cols-4 gap-[20px]">
            {ParksWhataLook.map((item) => (
              <GalleryDetails key={item._id} item={item}></GalleryDetails>
            ))}
          </TabPanel>
          <TabPanel className="grid grid-cols-4 gap-[20px]">
            {CitiestoExplore.map((item) => (
              <GalleryDetails key={item._id} item={item}></GalleryDetails>
            ))}
          </TabPanel>
        </Tabs>
      </div> */}
    </div>
  );
};

export default Gallery;
