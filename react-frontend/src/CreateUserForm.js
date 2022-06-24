import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function CreateUserForm({ handleAddUser }) {
  const [formData, setFormData] = useState({ name: "" });

  function handleInput({ target }) {
    setFormData({ ...formData, name: target.value });
  }

  return (
    <Form
      style={{ backgroundColor: "lightblue" }}
      onSubmit={(e) => {
        handleAddUser(e, formData);
        setFormData({ name: "" });
      }}
    >
      <Form.Group>
        <Form.Label>Create New User:</Form.Label>
        <Form.Control
          type="text"
          placeholder="enter username"
          onChange={handleInput}
          value={formData.name}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create User!
      </Button>
    </Form>
  );
}

export default CreateUserForm;
