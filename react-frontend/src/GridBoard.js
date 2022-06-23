import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import GridSquare from './GridSquare'

function GridBoard() {
  const [memes, setMemes] = useState([])
  const [isClicked, setIsClicked] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [memeDisplay, setMemeDisplay] = useState('')
  const [answer, setAnswer] = useState('')
  const [userInput, setUserInput] = useState('')

  useEffect(() => {
    fetch('http://localhost:9292/merdles/random')
      .then((r) => r.json())
      .then((data) => setMemes(data))
  }, [])

  function showAll() {
    setRevealed(true)
  }

  function getMeme() {
    setIsClicked(true)

    setMemeDisplay(memes.image_url)
    setAnswer(memes.name)
  }

  function handleAnswer(e) {
    setUserInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(answer)
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
            backgroundImage: isClicked ? `url(${memeDisplay})` : '',
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
