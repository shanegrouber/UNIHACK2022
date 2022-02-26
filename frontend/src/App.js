import { Component, useEffect, useState} from "react";
import Feed from "./Components/Feed";
import NewsList from "./Components/NewsList";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Map from "./Components/Map/Map";
import axios from 'axios';
import { reverseGeocode } from '@esri/arcgis-rest-geocoding';




const App = () => {

  const [coords, setData] = useState(null);
  const [locations, getLocations] = useState('');
  const token = "AIzaSyCiHPm2a1g14WY6fvxZ0kPhIqJJfsoBYgE";

  useEffect(() => {
    getAllLocations();
  }, []);


  const childToParent = (childdata) => {
    setData(childdata);
  }
  

  const getAllLocations = () => {
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+coords+"&key="+token)
    .then((response) => {
        console.log(response)
        const allLocations = response.data;
        getLocations(allLocations);
       }).catch(error => {
        console.log(error.response)
    });
  }
    

  return (
    <div>
      <Header/>
      <div class="grid grid-cols-4 gap-0 pt-8">
        <div class="col-span-3" onClick={() => {getAllLocations()}}>
          <Map childToParent={childToParent} />
        </div>
        <Feed/>
        <div>data: {JSON.stringify(locations["plus_code"]["compound_code"])}</div> 
        
        
      </div>
      {/* <button onClick={() => this.toggleComponent("showNewsList")}>||News list toggle||</button>
      {showNewsList && <NewsList onClick={() => this.toggleComponent("showNewsList")}/>} */}

      <div class="absolute inset-x-0 bottom-0"><Footer/></div>
    </div>
    
  );
}

export default App;
