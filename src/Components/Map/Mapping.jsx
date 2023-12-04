import {
  GoogleMap,
  LoadScript,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import React from "react";
///////AIzaSyAC9h32tgACHht4Y8A5nFxu8uWvjfSQ5eQ
const containerStyle = {
  height: "600px",
  width: "1130px",
  marginLeft: "400px",
};
const center = {
  lat: 22.359538,
  lng: 91.8308,
};
const Mapping = () => {
  return (
    <div>
      <div>
        {/* <h1>Mapping</h1> */}
        {/* <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              src="https://maps.google.com/maps?q=Chittagong,Chawkbazar&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              frameborder="0"
              scrolling="no"
              style={{ width: "600px", height: "600px" }}
            ></iframe>
            <style>
              {`.mapouter{position:relative;height:1080px;width:1080px;background:#fff;}
            .maprouter a{color:#fff !important;position:absolute !important;top:0 !important;z-index:0 !important;}`}
            </style>
            <a href="https://blooketjoin.org">blooketjoin</a>
            <style>
              {`.gmap_canvas{overflow:hidden;height:1080px;width:1080px}
            .gmap_canvas iframe{position:relative;z-index:2}`}
            </style>
          </div> */}

        <div>
          <div>
            <LoadScript googleMapsApiKey="AIzaSyAC9h32tgACHht4Y8A5nFxu8uWvjfSQ5eQ">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
              >
                <Marker position={center}></Marker>
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mapping;
