import { useEffect, useState } from "react";
import { MapContainer, TileLayer} from 'react-leaflet';
import './Map.css';

const Map = () => {
  const position = [51.505, -0.09];
  const [map, setMap] = useState(null);
  
  const [coords, setCoords] = useState({});
  
  useEffect(() => {
    if (!map) return;
  
    map.addEventListener("click", (e) => {
      setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
    });
  }, [map]);
  
  const { lat, lng } = coords;
  
  return (
    <div>
      <MapContainer center={[50.447731, 30.542721]} zoom={13}
        center={position}
        whenCreated={setMap}
      >
        <TileLayer
          url="https://api.mapbox.com/styles/v1/andrew-app/cl02c6cxf005a15oirym7wn2a/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5kcmV3LWFwcCIsImEiOiJjbDAxcjlzdWwwaTMyM3Fyc3JreDBqZGI4In0.QH_An0n-PwVGGbQGVSCWfQ"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        />
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
