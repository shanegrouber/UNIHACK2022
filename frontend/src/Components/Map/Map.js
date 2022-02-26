import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
const Map = () => {
  const position = [50.447731, 30.542721]
  return (
    <div>
      <MapContainer center={position} zoom={13}>
      <TileLayer
        url="https://api.mapbox.com/styles/v1/andrew-app/cl02c6cxf005a15oirym7wn2a/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5kcmV3LWFwcCIsImEiOiJjbDAxcjlzdWwwaTMyM3Fyc3JreDBqZGI4In0.QH_An0n-PwVGGbQGVSCWfQ"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>

    </div>
  );
};

export default Map;