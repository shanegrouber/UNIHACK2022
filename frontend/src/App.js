import { Component } from "react";
import Feed from "./Components/Feed";
import NewsList from "./Components/NewsList";
import Header from "./Components/Header";
import Map from "./Components/Map/Map";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showNewsList: true,
    };
    this.toggleComponent = this.toggleComponent.bind(this);
  }

  toggleComponent(name) {
    console.log(name);
    switch (name) {
      case "showNewsList":
        console.log("Toggling")
        this.setState({ showNewsList: !this.state.showNewsList });
        break;
      default:
        console.log("defualt");
    }
  }

  render() {
    const {showNewsList} = this.state;

    return (
      <div>
        <Header/>
        <button onClick={() => this.toggleComponent("showNewsList")}>||News list toggle||</button>
        {showNewsList && <NewsList onClick={() => this.toggleComponent("showNewsList")}/>}
        <Map/>
        <Feed/>
      </div>
      
    );
  }
}

export default App;
