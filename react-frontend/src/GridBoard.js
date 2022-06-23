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

  const [position, setPosition] = useState(0)

  useEffect(() => {
    fetch('http://localhost:9292/merdles')
      .then((r) => r.json())
      .then((data) => setMemes(data))
  }, [])

  const memeName = memes.map((meme) => meme.name)
  const memePic = memes.map((meme) => meme.image_url)

  const oneMemeName = memeName.slice(position, position + 1)
  const oneMemePic = memePic.slice(position, position + 1)

  function showAll() {
    setRevealed(true)
  }

  function getMeme() {
    setIsClicked(true)
    setPosition(position + 1)
    setMemeDisplay(oneMemePic)
    setAnswer(oneMemeName)
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
