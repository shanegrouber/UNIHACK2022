import React, { useEffect, useState } from "react";
import { Circle, CircleMarker, MapContainer, Polyline, Polygon, Popup, Rectangle, TileLayer,} from 'react-leaflet';
import './Map.css';
import data from './sampledata.json';
import NewsList from "./NewsList";
import axios from 'axios';



const Map = ({childToParent}) => {
  const position = [0,0];
  const [map, setMap] = useState(null);
  const [coords, setCoords] = useState({lng: 0, lat: 0});
  const fillRedOptions = { fillColor: 'red' , color: 'red'}
  const [circles, setCircles] = useState([]);
  const [location, setLocation] = useState("");
  const [newsData, setNewsData] = useState(null);
  
  const getData = () => {
    axios.get('https://hottopicscanner.herokuapp.com/heatmapdata')
    .then((response) => {
        setNewsData(response)
       }).catch(error => {
        console.log(error.response)
    });
  }

  if (newsData === null) {
    getData()
  } else {
    console.log("already retreived data")
  }


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
      <MapContainer zoom={2} center={position} whenCreated={setMap} on>
        <TileLayer
          url="https://api.mapbox.com/styles/v1/andrew-app/cl02c6cxf005a15oirym7wn2a/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5kcmV3LWFwcCIsImEiOiJjbDAxcjlzdWwwaTMyM3Fyc3JreDBqZGI4In0.QH_An0n-PwVGGbQGVSCWfQ"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        />

        
        {newsData ? Object.keys(newsData.data[0].data).map((key, i ) => (
          <Circle 
            key={i} 
            center={[newsData.data[0].data[key].lat, newsData.data[0].data[key].long]} 
            pathOptions={fillRedOptions} 
            radius={newsData.data[0].data[key].count * 10000} 
            eventHandlers={{click: (e) => {
              console.log(newsData.data[0].data[key].lat)
              getCircleLocation(newsData.data[0].data[key].city)
            },
          }}>
            <Popup><NewsList data={newsData.data[0].data[key]}></NewsList></Popup>
            
            
          </Circle>
        )) : null}
      {childToParent(location, newsData)}
      
      </MapContainer>
    </div>
  );
};

export default Map;
