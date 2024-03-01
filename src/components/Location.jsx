"use client";
import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "50vh",
};
const specificLocation = {
  lat: 30.57919,
  lng: 31.0106,
};
// 30.579394476886293, 31.010565842579496
const Location = () => {
  const { isLoaded, loadError } = useLoadScript({
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className="">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={specificLocation}
      >
        <Marker position={specificLocation} />
      </GoogleMap>
    </div>
  );
};

export default Location;
