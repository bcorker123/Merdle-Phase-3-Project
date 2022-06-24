import React from 'react'
import CreateUserForm from './CreateUserForm'
import { Spinner } from 'react-bootstrap'
import UserListItem from './UserListItem'

function UserList({
  users,
  handleSelectUser,
  handleAddUser,
  handleEditUser,
  handleDeleteUser,
}) {
  if (!users) {
    return (
      <>
        <Spinner animation="grow" role="status" variant="info"></Spinner>
        <br />
        <Spinner animation="grow" role="status" variant="info"></Spinner>
        <br />
        <Spinner animation="grow" role="status" variant="info"></Spinner>
      </>
    )
  }

  // console.log(users);

  const usersList = users.map((user) => {
    if (user.name !== 'anon') {
      return (
        <UserListItem
          handleEditUser={handleEditUser}
          handleSelectUser={handleSelectUser}
          user={user}
          handleDeleteUser={handleDeleteUser}
        />
      )
    } else {
      return null
    }
  })

  return (
    <div id="users-div" style={{ width: '200px', margin: 'auto' }}>
      {usersList}
      <CreateUserForm handleAddUser={handleAddUser} />
    </div>
  )
}

export default UserList
