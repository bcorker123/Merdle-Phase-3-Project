import React, { useState } from "react";
import { Button } from "react-bootstrap";
import EditUserForm from "./EditUserForm";

function UserListItem({
  user,
  handleSelectUser,
  handleEditUser,
  handleDeleteUser,
}) {
  const [toggleEdit, setToggleEdit] = useState(true);

  function submitToggle() {
    setToggleEdit(!toggleEdit);
  }

  return (
    <div>
      <Button onClick={() => handleSelectUser(user.name)}>{user.name}</Button>
      {toggleEdit ? (
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => setToggleEdit(!toggleEdit)}
        >
          edit
        </Button>
      ) : (
        <EditUserForm
          user={user}
          handleEditUser={handleEditUser}
          submitToggle={submitToggle}
        />
      )}
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => handleDeleteUser(user)}
      >
        x
      </Button>
    </div>
  );
}

export default UserListItem;
