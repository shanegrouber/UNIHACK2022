import { circle } from "leaflet";
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { Circle, CircleMarker, MapContainer, Polyline, Polygon, Popup, Rectangle, TileLayer,} from 'react-leaflet';
import './Map.css';
import data from './sampledata.json';


const Map = () => {
  const position = [50.447731, 30.542721];
  const [map, setMap] = useState(null);
  const [coords, setCoords] = useState({});
  const fillRedOptions = { fillColor: 'red' , color: 'red'}
  const [circles, setCircles] = useState([]);
  

  useEffect(() => {
    setCircles(data)
    if (!map) return;
    map.addEventListener("click", (e) => {
      setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
    });
  }, [map]);
  
  const { lat, lng } = coords;
  
  return (
    <div>
      <MapContainer zoom={13} center={position} whenCreated={setMap}>
        <TileLayer
          url="https://api.mapbox.com/styles/v1/andrew-app/cl02c6cxf005a15oirym7wn2a/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5kcmV3LWFwcCIsImEiOiJjbDAxcjlzdWwwaTMyM3Fyc3JreDBqZGI4In0.QH_An0n-PwVGGbQGVSCWfQ"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        />

        {Object.keys(circles).map((key, i ) => (
          <Circle key={i} center={[circles[key].lat, circles[key].long]} pathOptions={fillRedOptions} radius={circles[key].count * 100000}>
            <Popup>Popup in Circle</Popup>
          </Circle>
        ))}


        {/* <>
        {circles.map(({latlng,articles}) => (
          <Circle key={latlng} center={latlng} pathOptions={fillRedOptions} radius={articles * 10}>
            <Popup>Popup in Circle</Popup>
          </Circle>
        ))} </> */}

        <div id="circles"></div>

      </MapContainer>
      {lat && (
        <div>
          <b>latitude</b>: {lat?.toFixed(4)} <br />
          <b>longitude</b>: {lng?.toFixed(4)}
        </div>
      )}
    </div>
  );
};

export default Map;
