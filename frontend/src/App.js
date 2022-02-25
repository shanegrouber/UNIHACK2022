import { Component } from "react";
import Feed from "./Components/Feed/Feed";
import NewsList from "./Components/NewsList";
import Header from "./Components/Header";


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
        <button onClick={() => this.toggleComponent("showNewsList")}>toggle showNewsList(replace with map coutnry thing)</button>
        {showNewsList && <NewsList onClick={() => this.toggleComponent("showNewsList")}/>}
      </div>
      
    );
  }
}

export default App;
