import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavHeader from "./NavHeader";
import Home from "./Home";
import GridBoard from "./GridBoard";
import ScoreCard from "./ScoreCard";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  function handleSelectUser(username) {
    setCurrentUser(username);
  }
  return (
    <div className="App">
      <NavHeader currentUser={currentUser} />
      <Routes>
        <Route
          path="/"
          element={<Home handleSelectUser={handleSelectUser} />}
        />
        <Route path="/play" element={<GridBoard />} />
        <Route path="/scores" element={<ScoreCard />} />
      </Routes>
    </div>
  );
}

export default App;
