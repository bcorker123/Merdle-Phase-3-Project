import React from "react";
import CreateUserForm from "./CreateUserForm";
import { Spinner } from "react-bootstrap";
import UserListItem from "./UserListItem";

function UserList({ users, handleSelectUser, handleAddUser, handleEditUser }) {
  if (!users) {
    return (
      <>
        <Spinner animation="grow" role="status" variant="info"></Spinner>
        <br />
        <Spinner animation="grow" role="status" variant="info"></Spinner>
        <br />
        <Spinner animation="grow" role="status" variant="info"></Spinner>
      </>
    );
  }

  const usersList = users.map((user) => {
    return (
      <UserListItem
        handleEditUser={handleEditUser}
        handleSelectUser={handleSelectUser}
        user={user}
      />
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
