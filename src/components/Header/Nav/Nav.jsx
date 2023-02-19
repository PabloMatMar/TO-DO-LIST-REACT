import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return <nav>
      <Link to="/">Home</Link>
      <Link to="/wheather">Wheather</Link>
      <Link to="/todo">Todo</Link>
    </nav>;
  }
}

export default Nav;
