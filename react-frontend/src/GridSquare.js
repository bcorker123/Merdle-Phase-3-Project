import React, { useState } from 'react'

function GridSquare({ revealed }) {
  const [covered, setCovered] = useState(true)

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
