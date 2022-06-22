import React, { useState, useEffect } from "react";

import GridSquare from "./GridSquare";

function GridBoard() {
  const [memes, setMemes] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [memeDisplay, setMemeDisplay] = useState("");
  const [answer, setAnswer] = useState("");

  const [postion, setPosition] = useState(0);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((r) => r.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  const memeName = memes.map((meme) => meme.name);
  const memePic = memes.map((meme) => meme.url);

  function getMeme() {
    setIsClicked(true);
    setMemeDisplay(memePic[0]);
  }

  function handleAnswer(e) {
    setAnswer(e.targert);
  }

  console.log(memeDisplay);

  const rows = [];

  for (let row = 0; row < 4; row++) {
    const columns = [];

    for (let col = 0; col < 4; col++) {
      columns.push(<GridSquare key={`${col}${row}`} />);
    }

    rows.push(columns);
  }

  const image_url = "https://i.imgflip.com/1ur9b0.jpg";

  return (
    <>
      <div>
        <div
          id="board-pos"
          className="container justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${memeDisplay})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundClip: "content-box",
          }}
        >
          <div className="grid-board">
            {rows.map((row) => (
              <div>{row}</div>
            ))}
          </div>
        </div>
      </div>
      <div id="outer">
        <div className="button-slide slide-left" onClick={getMeme}>
          New Meme
        </div>
      </div>
      <textarea
        className="answer-box"
        onSubmit={handleAnswer}
        value={answer}
      ></textarea>
    </>
  );
}

export default GridBoard;

// {isClicked ? }

// `url${memeDisplay}`

// {isClicked ? <img src={memeDisplay} alt="ERROR" /> : ''}

// style={{ backgroundImage: isClicked ? memeDisplay : '' }}

// style={{
//   backgroundImage: `url${oneMeme}`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'top',
//   backgroundClip: 'content-box',
// }}
