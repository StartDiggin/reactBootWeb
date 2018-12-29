import React from "react";
import Header from "./Header";
import Main from "./Main";

class App extends React.Component {
  state = {
    links: {}
  };
  componentDidMount() {
    const alinks = { ...document.getElementsByClassName("nav-link") };
    this.setState({ links: alinks });
  }
  render() {
    return (
      <div className="app">
        <Header links={this.state.links} />
        <Main />
      </div>
    );
  }
}

export default App;
