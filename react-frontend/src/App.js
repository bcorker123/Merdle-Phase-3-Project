import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
// import MemeCard from "./MemeCard";
import NavHeader from "./NavHeader";

import GridBoard from "./GridBoard";

function App() {
  return (
    <div className="App">
      <NavHeader />
      {/* <GridSquare style={{ color: 'blue' }} /> */}
      {/* <GridBoard /> */}
      <Outlet />
    </div>
  );
}

export default App;
