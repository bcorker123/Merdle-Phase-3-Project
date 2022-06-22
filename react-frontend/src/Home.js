import React, { useState, useEffect } from "react";
import { Badge, Accordion, Container, Card } from "react-bootstrap";
import UserList from "./UserList";

function Home() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div id="home-div" className="font">
      <h1 id="home-header">
        <Badge pill bg="primary">
          Welcome to <em>MERDLE!</em>
        </Badge>
      </h1>
      <Container>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Click Here to learn how to play!
            </Accordion.Header>
            <Accordion.Body>
              You'll be giving a random meme that is covered by rows of boxes.
              You can click on certain boxes to reveal some of the image.
              However, each box you remove will make you lose points. If you can
              guess the name of the meme, you win and your score will be added
              to the bottom of the page. Try to guess the meme's name by
              removing as little boxes as possible! Good luck!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <h2>
        <Badge pill bg="warning">
          Before you play, select/create a user below:
        </Badge>
      </h2>
      <UserList users={users} />
    </div>
  );
}

export default Home;
