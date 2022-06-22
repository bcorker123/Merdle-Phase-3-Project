import React, { useState } from 'react'

function GridSquare() {
  const [covered, setCovered] = useState(true)
  //   console.log(covered)

  function handleClick() {
    setCovered(!covered)
  }

  return (
    <div
      className="grid-square"
      id={covered ? 'covered' : ''}
      onClick={handleClick}
    />
  )
}

export default GridSquare

// id={covered ? 'covered' : ''}

// className={"grid-square" `${covered ? 'covered' : ''}`}

// className="grid-square" id={covered ? 'covered' : ''}
