import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function EditUserForm({ handleEditUser, user, submitToggle }) {
  const [formData, setFormData] = useState({ name: user.name });

  function handleInput({ target }) {
    setFormData({ ...formData, name: target.value });
  }

  return (
    <Form
      style={{ backgroundColor: "lightblue" }}
      onSubmit={(e) => {
        handleEditUser(e, formData, user);
        submitToggle();
      }}
    >
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="enter new username"
          onChange={handleInput}
          value={formData.name}
        />
      </Form.Group>
      <Button variant="success" type="submit" size="sm">
        Edit name
      </Button>
    </Form>
  );
}

export default EditUserForm;
