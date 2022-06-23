import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import GridSquare from './GridSquare'

function GridBoard() {
  const [memes, setMemes] = useState([])
  // const [isClicked, setIsClicked] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [memeDisplay, setMemeDisplay] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [userInput, setUserInput] = useState('')
  const [correctGuess, setCorrectGuess] = useState(false)

  // useEffect(() => {
  //   fetch('http://localhost:9292/merdles/random')
  //     .then((r) => r.json())
  //     .then((data) => setMemes(data))
  // }, [])

  function showAll() {
    setRevealed(true)
  }

  useEffect(() => getMeme, [])

  function getMeme() {
    fetch('http://localhost:9292/merdles/random')
      .then((r) => r.json())
      .then((data) => setMemes(data))
    setMemeDisplay(memes.image_url)
    setCorrectAnswer(memes.name)
    // setIsClicked(true)
    console.log(correctAnswer)
  }

  function handleAnswer(e) {
    setUserInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(correctGuess)
    console.log(correctAnswer)
    console.log(userInput)
    if (
      correctAnswer.toLowerCase().includes(userInput.toLowerCase()) &&
      userInput !== ''
    ) {
      return setCorrectGuess(true)
    } else {
      return setCorrectGuess(false)
    }
  }

  const rows = []

  for (let row = 0; row < 4; row++) {
    const columns = []

    for (let col = 0; col < 4; col++) {
      columns.push(<GridSquare key={`${col}${row}`} revealed={revealed} />)
    }

    rows.push(columns)
  }

  return (
    <>
      <div>
        <div
          id="board-pos"
          className="container justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${memeDisplay})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundClip: 'content-box',
          }}
        >
          <div className="grid-board">
            {rows.map((row) => (
              <div>{row}</div>
            ))}
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
      </form>
    </>
  )
}

export default GridBoard

// backgroundImage: isClicked ? `url(${memeDisplay})` : '',
