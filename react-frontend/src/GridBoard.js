import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'
import GridSquare from "./GridSquare";

function GridBoard({ currentUser }) {
  const [memes, setMemes] = useState([]);
  const [revealed, setRevealed] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [points, setPoints] = useState(1600);
  const [scoresList, setScoresList] = useState([]);
  const [correctGuess, setCorrectGuess] = useState(false)

  useEffect(() => {
    fetch("http://localhost:9292/merdles/random")
      .then((r) => r.json())
      .then((data) => {
        setMemes(data);
        setPoints(1600);
        setScoresList(data.scores);
      });
  }, []);

  function showAll() {
    setRevealed(true);
  }

  function getMeme() {
    fetch("http://localhost:9292/merdles/random")
      .then((r) => r.json())
      .then((data) => {
        setMemes(data);
        setScoresList(data.scores);
      });
    setPoints(1600);
    pointsBG = "info";
    setRevealed(false);
  }

  function handleAnswer(e) {
    setUserInput(e.target.value);
    console.log(memes.name);
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(correctGuess)
    console.log(memes.name)
    console.log(userInput)
    if (
      memes.name.toLowerCase().includes(userInput.toLowerCase()) &&
      userInput !== ''
    ) {
      return setCorrectGuess(true)
    } else {
      return setCorrectGuess(false)
    }
  }

  function minusPoints() {
    setPoints(points - 100);
  }

  let pointsBG = "info";

  function loseGame() {
    pointsBG = "danger";
  }

  if (points === 0) {
    loseGame();
  }

  const rows = [];

  for (let row = 0; row < 4; row++) {
    const columns = [];

    for (let col = 0; col < 4; col++) {
      columns.push(
        <GridSquare
          key={`${col}${row}`}
          revealed={revealed}
          minusPoints={minusPoints}
        />
      );
    }

    rows.push(columns);
  }

  const displayScores = scoresList.map((score) => {
    return (
      <div style={{ backgroundColor: "lightgreen" }}>
        {score.name} got {score.points} on this Merdle!
      </div>
    );
  });

  return (
    <>
      <div>
        <div
          id="board-pos"
          className="container justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${memes.image_url})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundClip: "content-box",
          }}
        >
          <div className="grid-board">
            {rows.map((row) => (
              <div key={row.id}>{row}</div>
            ))}
            <Card bg={pointsBG} border="warning">
              <Card.Header>Points</Card.Header>
              <Card.Body>
                <Card.Title>{points}</Card.Title>
              </Card.Body>
              <Card.Footer>
                User: {currentUser ? currentUser : "anon"}
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "white" }}>First click Reveal:</div>
      <button className="reveal" onClick={showAll}>
        REVEAL
      </button>
      <div style={{ backgroundColor: "white" }}>Then click New Meme:</div>
      <div id="outer">
        <div className="button-slide slide-left" onClick={getMeme}>
          New Meme
        </div>
      </div>
      {correctGuess ? (
        <Button variant="success" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          YOU WIN
        </Button>
      ) : (
        ''
      )}

      <form onSubmit={handleSubmit} className="answer-box">
        <input type="text" onChange={handleAnswer} value={userInput} />
        <Button className="button2" type="submit">
          Answer
        </Button>
      </form>
      {displayScores}
    </>
  );
}

export default GridBoard;

// backgroundImage: isClicked ? `url(${memeDisplay})` : '',
