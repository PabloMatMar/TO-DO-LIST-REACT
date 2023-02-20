import React, { Component } from "react";
import TODOList from './TODOList';
import Home from './Home';
import Weather from './Weather';
import NotFound from '../NotFound'
import { Routes, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return <main>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/weather" element={<Weather/>} />
      <Route path="/todo" element={<TODOList/>} />
      <Route path="/*" element={<NotFound/>} />
      </Routes>
    </main>;
  }
}

export default Main;
