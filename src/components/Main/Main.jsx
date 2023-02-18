import React, { Component } from "react";
import TODOList from './TODOList'

class Main extends Component {
  render() {
    return <main>
      <h1>To do list</h1>
      <TODOList/>
    </main>;
  }
}

export default Main;
