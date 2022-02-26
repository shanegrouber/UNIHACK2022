import { Component, useState} from "react";
import Feed from "./Components/Feed";
import NewsList from "./Components/NewsList";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Map from "./Components/Map/Map";
import axios from 'axios';

const App = () => {

  const [coords, setData] = useState(null);

  const childToParent = (childdata) => {
    setData(childdata);
  }

  var token = "QGw53N7xj59eH93o";

  const api = "https://api.psma.com.au/v2/addresses/reverseGeocoder/" + coords;
  axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
          .then(res => {
              console.log(res.data);
          this.setState({
              items: res.data,  /*set response data in items array*/
              isLoaded : true,
              redirectToReferrer: false
          })});
          



  return (
    <div>
      <Header/>
      <div class="grid grid-cols-4 gap-0 pt-8">
        <div class="col-span-3">
          <Map childToParent={childToParent}/>
          {coords}
        </div>
        <Feed/>
        {fetch}
        
      </div>
      {/* <button onClick={() => this.toggleComponent("showNewsList")}>||News list toggle||</button>
      {showNewsList && <NewsList onClick={() => this.toggleComponent("showNewsList")}/>} */}

      <div class="absolute inset-x-0 bottom-0"><Footer/></div>
    </div>
    
  );
}

export default App;
