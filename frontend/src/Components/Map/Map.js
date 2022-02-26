import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { Circle, CircleMarker, MapContainer, Polyline, Polygon, Popup, Rectangle, TileLayer, Tooltip,} from 'react-leaflet';
import NewsList from "./NewsList";
import './Map.css';
import data from "./sampledata.json";

const Map = () => {
  const position = [50.447731, 30.542721];
  const [map, setMap] = useState(null);
  const dataArray =[];

  function drawAllCircles(dt) {
    for (const element in dt) {
      dataArray.push([dt[element].city,dt[element].country,dt[element].lat,dt[element].long,dt[element].count]);
    }
  }

  const [coords, setCoords] = useState({lng: 0, lat: 0});
  
  const fillRedOptions = { fillColor: 'red' , color: 'red'}

  useEffect(() => {
    if (!map) return;
  
    map.addEventListener("click", (e) => {
      setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
    });
  }, [map]);
  
  const { lat, lng } = coords;
  
  drawAllCircles(data)
  console.log(dataArray[0])
  console.log(dataArray[0][0])

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
        
        {/* <>{circleData.map(({latlng,articles}) => (
          <Circle key={latlng} center={latlng} pathOptions={fillRedOptions} radius={articles * 10}>
            <Popup><NewsList></NewsList></Popup>
            <Tooltip>#articles</Tooltip>
          </Circle>
        ))} </> */}

        <> 
        {dataArray[0].map(({item,index}) => {
          console.log(item);
          return <p key={index}>item</p>
          //location.map(({lat,long,count}) => {
          //  <Circle key={[lat,long]} center={[lat,long]} pathOptions={fillRedOptions} radius={count * 1000}>
          //    <Popup><NewsList></NewsList></Popup>
          //    <Tooltip>#articles</Tooltip>
          //  </Circle>
          //})
        })} 
        </>

        <div id="circles"></div>

      </MapContainer>
      {lat && (
        <div>
          <b>latitude</b>: {lat?.toFixed(4)} <br />
          <b>longitude</b>: {lng?.toFixed(4)}
        </div>
      )}
      {console.log(lng, lat)}
    </div>
  );
};

export default Map;
