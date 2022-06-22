import React from "react";
import GridSquare from "./GridSquare";
import MemeCard from "./MemeCard";

function GridBoard() {
  const rows = [];

  for (let row = 0; row < 4; row++) {
    const columns = [];

    for (let col = 0; col < 4; col++) {
      columns.push(<GridSquare key={`${col}${row}`} />);
    }

    rows.push(columns);
  }

  return (
    <div
      id="board-pos"
      className="container justify-content-center align-items-center"
      style={{
        backgroundImage: 'url("https://i.imgflip.com/1ur9b0.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundClip: "content-box",
      }}
    >
      <div className="grid-board">
        {rows.map((row) => (
          <div>{row}</div>
        ))}
        <MemeCard />
      </div>
      {/* <div className="grid-board">{grid2}</div> */}
      {/* <div className="grid-board">{rows}</div>
      <div className="grid-board">{rows}</div> */}
    </div>
  );
}

export default GridBoard;
