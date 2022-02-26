import { Component, useState} from "react";
import Feed from "./Components/Feed";
import NewsList from "./Components/NewsList";
import Header from "./Components/Header";
import Map from "./Components/Map/Map";

const App = () => {

  const [coords, setData] = useState(null);

  const childToParent = (childdata) => {
    setData(childdata);
  }

  return (
    <div>
      <Header/>
      <div class="grid grid-cols-4 gap-0 pt-8">
        <div class="col-span-3">
          <Map childToParent={childToParent}/>
          {coords}
        </div>
        <Feed/>
        
      </div>
      {/* <button onClick={() => this.toggleComponent("showNewsList")}>||News list toggle||</button>
      {showNewsList && <NewsList onClick={() => this.toggleComponent("showNewsList")}/>} */}
    </div>
    
  );
}

export default App;
