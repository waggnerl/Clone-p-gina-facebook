import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from '../pages/Login/Login'
import Home from "../pages/Home";

function RouteFile() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default RouteFile;
