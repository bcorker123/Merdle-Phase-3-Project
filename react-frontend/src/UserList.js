import React from "react";
import CreateUserForm from "./CreateUserForm";
import { Button } from "react-bootstrap";

function UserList({ users, handleSelectUser, handleAddUser }) {
  if (!users) {
    return <h1>Loading users...</h1>;
  }

  const usersList = users.map((user) => {
    return (
      <div>
        <Button onClick={() => handleSelectUser(user.name)}>{user.name}</Button>
      </div>
    );
  });

  return (
    <div id="users-div" style={{ width: "200px", margin: "auto" }}>
      {usersList}
      <CreateUserForm handleAddUser={handleAddUser} />
    </div>
  );
}

export default UserList;
