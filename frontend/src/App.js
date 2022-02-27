import { useEffect, useState } from "react";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Map from "./Components/Map/Map";
import axios from 'axios';
import PhoneSMS from "./Components/PhoneSMS";
import NewsItem from "./Components/NewsItem";

const getData = () => {
  axios.get('https://hottopicscanner.herokuapp.com/heatmapdata')
  .then((response) => {
     }).catch(error => {
      console.log(error.response)
  });
}


const App = () => {

  const [coords, setData] = useState(null);
  const [news, setNews] = useState(getData());

  const token = "AIzaSyC_EbNkr39hDZSXjHqyT5y5Oq-5iZb2e70";

  useEffect(() => {
  }, []);

  const childToParent = (childdata, data) => {
    setData(childdata);
    setNews(data);
  }


  // if (news === null) {
  //   getData()
  // } else {
  //   console.log("already retreived data")
  // }

  return (
    <div class='h-screen'>
      <Header/>
      <div class="grid grid-cols-4 h-full gap-0 pt-8">
        <div class="col-span-3 h-full">
          <Map childToParent={childToParent} news={news} />
        </div>
        
        <div class= "grid grid-cols-1">
        {news? <Feed news={news}/> : null}
        
         
        
        </div>

        {/* <div>data: {JSON.stringify(locations ? locations["plus_code"] : locations["plus_code"])}</div>  */}
        
        
      </div>
      {/* <button onClick={() => this.toggleComponent("showNewsList")}>||News list toggle||</button>
      {showNewsList && <NewsList onClick={() => this.toggleComponent("showNewsList")}/>} */}

      

      <div class="absolute inset-x-0 bottom-0"><Footer/></div>
    </div>
    
  );
}

export default App;
