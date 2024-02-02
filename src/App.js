import React from "react";

import { Route, Routes } from "react-router-dom";

import "./App.css";
import "./website/Navbar";
import { Home } from "./components/Home";
import { Explore } from "./components/Explore";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/explore" element = {<Explore/>}></Route>
    </Routes>
  );
}

export default App;
