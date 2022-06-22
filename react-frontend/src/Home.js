import React, { useState, useEffect } from "react";
import { Badge, Accordion, Container } from "react-bootstrap";
import UserList from "./UserList";

function Home({ handleSelectUser }) {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((data) => setUsers(data));
  }, []);

  function handleAddUser(e, newUser) {
    e.preventDefault();
    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((newUserResponse) => setUsers([...users, newUserResponse]));
  }

  function handleEditUser(e, newUser, selectedUser) {
    e.preventDefault();
    fetch(`http://localhost:9292/users/${selectedUser.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((newUserResponse) => {
        const newUsersArray = users.map((user) => {
          if (user.id === selectedUser.id) {
            return (user.name = selectedUser.name);
          } else {
            return user;
          }
        });
        setUsers(newUsersArray);
      });
  }

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
      <UserList
        handleAddUser={handleAddUser}
        handleEditUser={handleEditUser}
        users={users}
        handleSelectUser={handleSelectUser}
      />
    </div>
  );
}

export default Home;
