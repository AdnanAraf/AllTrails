import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import React, { useState } from "react";
import Mapping from "./Mapping";

const Direction = () => {
  const [Response, setResponse] = useState(null);

  const origin = "Dhaka";
  const destination = "Chittagong";
  const directionsCallback = (response) => {
    console.log(response);
    if (response !== null) {
      if (response.status === "OK") {
        setResponse(response);
      } else {
        console.log("response", response);
      }
    }
  };
  return (
    <div>
      <div>
        <LoadScript googleMapsApiKey="AIzaSyAC9h32tgACHht4Y8A5nFxu8uWvjfSQ5eQ">
          <GoogleMap
            id="directional-example"
            mapContainerStyle={{
              height: "600px",
              width: "1100px",
              marginLeft: "400px",
            }}
            zoom={14}
            center={{ lat: 23.8103, lng: 90.4125 }}
          >
            {/* <Marker position={center}></Marker> */}
            {destination !== "" && origin !== "" && (
              <DirectionsService
                options={{
                  destination: destination,
                  origin: origin,
                  travelMode: "DRIVING",
                }}
                callback={directionsCallback}
              ></DirectionsService>
            )}

            {Response !== null && (
              <DirectionsRenderer
                options={{
                  directions: Response,
                }}
              ></DirectionsRenderer>
            )}
          </GoogleMap>
        </LoadScript>
        {/* <Mapping /> */}
      </div>
    </div>
  );
};

export default Direction;
