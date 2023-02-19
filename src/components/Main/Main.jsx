import React, { Component } from "react";
import TODOList from './TODOList';
import Home from './Home';
import Wheather from './Weather';
import NotFound from '../NotFound'
import { Routes, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return <main>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/wheather" element={<Wheather/>} />
      <Route path="/todo" element={<TODOList/>} />
      <Route path="/*" element={<NotFound/>} />
      </Routes>
    </main>;
  }
}

export default Main;
