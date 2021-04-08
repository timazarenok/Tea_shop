import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "react-bootstrap";

import "./user-form.css";

const UserForm = ({ handleSubmit, buttonText }) => {
  return (
    <div className="back-img">
      <Form onSubmit={handleSubmit} className="log-form">
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Field
            name="email"
            component="input"
            type="email"
            className="form-control"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Пароль</Form.Label>
          <Field
            name="password"
            component="input"
            type="password"
            className="form-control"
          />
        </Form.Group>
        <Button className="log-btn" type="submit">
          {buttonText}
        </Button>
      </Form>
    </div>
  );
};

export default reduxForm({
  form: "contact", // a unique name for this form
})(UserForm);
