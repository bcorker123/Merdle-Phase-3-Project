import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
// import MemeCard from "./MemeCard";
import NavHeader from "./NavHeader";

function App() {
  return (
    <div className="App">
      <NavHeader />
      <Outlet />
    </div>
  );
}

export default App;
