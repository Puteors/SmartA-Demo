import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "leaflet/dist/leaflet.css";
import "./App.css";
// import About from "./components/About.jsx";
import Map from "./components/Map.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Map} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
