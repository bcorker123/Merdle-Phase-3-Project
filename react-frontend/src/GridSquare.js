import React, { useState, useEffect } from "react";

function GridSquare({ revealed, minusPoints }) {
  const [covered, setCovered] = useState(true);

  function handleClick() {
    if (covered) {
      setCovered(false);
      minusPoints();
    }
  }
  useEffect(() => setCovered(true), [revealed]);

  if (revealed) {
    return <div className="grid-square" id="" onClick={handleClick} />;
  } else {
    return (
      <div
        className="grid-square"
        id={covered ? "covered" : ""}
        onClick={handleClick}
      />
    );
  }
}

export default GridSquare;
