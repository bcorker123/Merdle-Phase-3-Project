import React, { useState, useEffect } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import GridSquare from './GridSquare'

function GridBoard({ currentUser }) {
  const [memes, setMemes] = useState([])
  const [revealed, setRevealed] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [points, setPoints] = useState(1600)
  const [scoresList, setScoresList] = useState([])
  const [correctGuess, setCorrectGuess] = useState(false)
  const [answerTries, setAnswerTries] = useState(0)

  useEffect(() => {
    fetch('http://localhost:9292/merdles/random')
      .then((r) => r.json())
      .then((data) => {
        setMemes(data)
        setPoints(1600)
        setScoresList(data.scores)
      })
  }, [])

  function showAll() {
    setRevealed(true)
  }

  function getMeme() {
    fetch('http://localhost:9292/merdles/random')
      .then((r) => r.json())
      .then((data) => {
        setMemes(data)
        setScoresList(data.scores)
      })
    setPoints(1600)
    pointsBG = 'info'
    setRevealed(false)
    setCorrectGuess(false)
    setAnswerTries(0)
  }
  console.log(memes.name)

  function handleAnswer(e) {
    setUserInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newAnswerTries = answerTries + 1
    setAnswerTries(newAnswerTries)

    if (
      memes.name.toLowerCase().includes(userInput.toLowerCase()) &&
      userInput !== ''
    ) {
      const newScore = {
        points: points,
        user_id: currentUser.id,
        merdle_id: memes.id,
      }
      console.log('new score object:', newScore)

      fetch('http://localhost:9292/scores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newScore),
      })
        .then((r) => r.json())
        .then((data) => setScoresList(data))
      return setCorrectGuess(true)
    } else {
      return setCorrectGuess(false)
    }
  }

  function minusPoints() {
    setPoints(points - 100)
  }

  let pointsBG = 'info'

  function loseGame() {
    pointsBG = 'danger'
  }

  if (points === 0) {
    loseGame()
  }

  const rows = []

  for (let row = 0; row < 4; row++) {
    const columns = []

    for (let col = 0; col < 4; col++) {
      columns.push(
        <GridSquare
          key={`${col}${row}`}
          revealed={revealed}
          minusPoints={minusPoints}
        />
      )
    }

    rows.push(columns)
  }

  const displayScores = scoresList.map((score) => {
    return (
      <div style={{ backgroundColor: 'lightgreen' }}>
        {score.name} got {score.points} on this Merdle!
      </div>
    )
  })

  return (
    <>
      <div>
        <div
          id="board-pos"
          className="container justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${memes.image_url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundClip: 'content-box',
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
              <Card.Footer>User: {currentUser.name}</Card.Footer>
            </Card>
            <Card border="warning">
              <Card.Header>When you need a new meme:</Card.Header>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>1. Click REVEAL</ListGroup.Item>
                  <ListGroup.Item>2. Click New Meme</ListGroup.Item>
                  <ListGroup.Item>3. Play!!</ListGroup.Item>
                </ListGroup>
              </Card>
            </Card>
          </div>
        </div>
      </div>
      <button className="reveal" onClick={showAll}>
        REVEAL
      </button>
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
        <Card body>Tries: x{answerTries}</Card>
      </form>
      {displayScores}
    </>
  )
}

export default GridBoard

// backgroundImage: isClicked ? `url(${memeDisplay})` : '',
