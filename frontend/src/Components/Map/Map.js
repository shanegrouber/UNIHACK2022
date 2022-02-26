import React, { useEffect, useState } from "react";
import { Circle, CircleMarker, MapContainer, Polyline, Polygon, Popup, Rectangle, TileLayer,} from 'react-leaflet';
import './Map.css';
import data from './sampledata.json';
import NewsList from "./NewsList";



const Map = ({childToParent}) => {
  const position = [50.447731, 30.542721];
  const [map, setMap] = useState(null);
  const [coords, setCoords] = useState({lng: 0, lat: 0});
  const fillRedOptions = { fillColor: 'red' , color: 'red'}
  const [circles, setCircles] = useState([]);
  const [location, setLocation] = useState("");
  
  useEffect(() => {
    setCircles(data)
    if (!map) return;
    map.addEventListener("click", (e) => {
      setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
    }); 
  }, [map]);

  const getCircleLocation = (data) => {
    setLocation(data);
  }

  return (
    <div>
      <MapContainer zoom={13} center={position} whenCreated={setMap} on>
        <TileLayer
          url="https://api.mapbox.com/styles/v1/andrew-app/cl02c6cxf005a15oirym7wn2a/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5kcmV3LWFwcCIsImEiOiJjbDAxcjlzdWwwaTMyM3Fyc3JreDBqZGI4In0.QH_An0n-PwVGGbQGVSCWfQ"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        />

        {Object.keys(circles).map((key, i ) => (
          <Circle 
            key={i} 
            center={[circles[key].lat, circles[key].long]} 
            pathOptions={fillRedOptions} 
            radius={circles[key].count * 100000} 
            eventHandlers={{click: (e) => {
              console.log(circles[key].lat)
              getCircleLocation(circles[key].city)
            },
          }}>
            <Popup>Popup in Circle</Popup>
          </Circle>
        ))}
      {childToParent(location)}
      </MapContainer>
    </div>
  );
};

export default Map;
