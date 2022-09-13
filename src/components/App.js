import React, {Component} from "react";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import About from "../components/About";

class App extends Component {
render() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}
}

export default App;
