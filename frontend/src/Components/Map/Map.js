import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { Circle, CircleMarker, MapContainer, Polyline, Polygon, Popup, Rectangle, TileLayer,} from 'react-leaflet';
import './Map.css';

const Map = ({childToParent}) => {
  const position = [50.447731, 30.542721];
  const [map, setMap] = useState(null);

  // Test Data for placing circles
  const circleData = [
    {"latlng": [51, 31], "articles": 10},
    {"latlng": [50, 30], "articles": 100},
    {"latlng": [52, 32], "articles": 1},
    {"latlng": [49, 29], "articles": 1000},
  ];
  const Circles = [];

  const [coords, setCoords] = useState({lng: 0, lat: 0});
  
  const fillRedOptions = { fillColor: 'red' , color: 'red'}

  useEffect(() => {
    if (!map) return;
  
    map.addEventListener("click", (e) => {
      setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
      
    });
  }, [map]);
  const textCoords = coords.lat.toFixed(6).toString() +','+coords.lng.toFixed(6).toString() ;
        
  return (
    <div>
      <MapContainer zoom={13}
        center={position}
        whenCreated={setMap}
      >
        
        <TileLayer
          url="https://api.mapbox.com/styles/v1/andrew-app/cl02c6cxf005a15oirym7wn2a/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5kcmV3LWFwcCIsImEiOiJjbDAxcjlzdWwwaTMyM3Fyc3JreDBqZGI4In0.QH_An0n-PwVGGbQGVSCWfQ"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        
        <>{circleData.map(({latlng,articles}) => (
          <Circle key={latlng} center={latlng} pathOptions={fillRedOptions} radius={articles * 10}>
            <Popup>Popup in Circle</Popup>
          </Circle>
        ))} </>

      </MapContainer>
      {childToParent(textCoords)}
    </div>
  );
};

export default Map;
