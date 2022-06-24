import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'

function ScoreCard() {
  const [totalRankings, setTotalRankings] = useState([])

  useEffect(() => getUsers(), [])

  function getUsers() {
    fetch('http://localhost:9292/scores')
      .then((r) => r.json())
      .then((data) => setTotalRankings(data))
  }

  return (
    <div
      className="container square-box d-flex justify-content-center align-items-center"
      style={{ top: '125px', width: '600px', height: '500px' }}
    >
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>Player#</th>
            <th>Username</th>
            <th>Score</th>
            <th>Game ID</th>
          </tr>
        </thead>
        <tbody>
          {totalRankings.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.points}</td>
              <td>{user.merdle_id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
export default ScoreCard
