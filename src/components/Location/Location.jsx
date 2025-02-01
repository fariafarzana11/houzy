
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
});

function Location() {
  const [position, setPosition] = useState([40.7128, -74.006]);
  const address = "86 Road Brooklyn Street, New York, USA";

  useEffect(() => {
    const geocodeAddress = async () => {
      const apiKey = "YOUR_OPENCAGE_API_KEY";
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        address
      )}&key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.results && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry;
          setPosition([lat, lng]);
        } else {
          console.error("Geocoding failed: No results found");
        }
      } catch (error) {
        console.error("Geocoding error:", error);
      }
    };

    geocodeAddress();
  }, [address]);

  return (
    <div className=" max-w-7xl mx-auto mt-30 grid lg:grid-cols-2 grid-cols-1">
      <div className="flex flex-col mt-10">
        <div>
          <h1 className="text-5xl font-bold mb-4">We Are Available<br /> For You 24/7</h1>
          <p className="text-lg text-gray-600">
            Feel free to contact us at any time. Our team is here to help<br /> you with your queries and provide the best support possible.
          </p>
        </div>
        <div className='mt-5'>
          <button type="button" className='text-center p-3 w-30 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white font-bold rounded-lg'>Details </button>
        </div>
      </div>
      <div className=''>
        <MapContainer center={position} zoom={13} style={{ height: '400px', width: '500px' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              {address}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Location;
