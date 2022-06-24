import React, { useState, useEffect } from "react";
import { Card, Badge, Table } from "react-bootstrap";

function ScoreCard() {
  const [totalRankings, setTotalRankings] = useState([]);

  useEffect(() => getUsers(), []);

  function getUsers() {
    fetch("http://localhost:9292/scores")
      .then((r) => r.json())
      .then((data) => setTotalRankings(data));
  }

  return (
    <>
      <Card className="meme-card">
        <Card.Img
          className="meme-img"
          src="https://i.imgflip.com/wxica.jpg"
          alt="meme with when you think you got a high score but then you see granny g93 overlay"
        />
        <Card.ImgOverlay>
          <Card.Title>
            <Badge bg="secondary">
              <em>
                when you think you got a high score but then you see granny g93
              </em>
            </Badge>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
      <div
        id="scores-container"
        className="container square-box d-flex justify-content-center align-items-center"
        style={{ top: "125px", width: "600px", height: "500px" }}
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
    </>
  );
}
export default ScoreCard;
