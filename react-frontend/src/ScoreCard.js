import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'

function ScoreCard() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/users')
      .then((r) => r.json())
      .then((data) => setUsers(data))
  }, [])

  function getUsers() {
    let userNames = users.map((user) => user.name)
    console.log(userNames)
  }
  getUsers()

  return (
    <div
      className="container square-box d-flex justify-content-center align-items-center"
      style={{ top: '125px', width: '600px', height: '500px' }}
    >
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>100</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>400</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>5</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
export default ScoreCard

{
  /* <td colSpan={2}>Larry the Bird</td> */
}
