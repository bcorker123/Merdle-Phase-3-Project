import React from "react";
import CreateUserForm from "./CreateUserForm";
import { Button } from "react-bootstrap";

function UserList({ users }) {
  if (!users) {
    return <h1>Loading users...</h1>;
  }

  const usersList = users.map((user) => {
    return (
      <div>
        <Button>{user.name}</Button>
      </div>
    );
  });

  return (
    <div>
      {usersList}
      <CreateUserForm />
    </div>
  );
}

export default UserList;
