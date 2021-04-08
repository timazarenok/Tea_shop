import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

import "./tea-form.css";

const TeaForm = () => {
  const [tea, setNewTea] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setNewTea({ ...tea, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const csrfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    axios
      .post("/api/teas", { tea })
      .then((response) => {
        setNewTea({ name: "", description: "", price: 0 });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="back-img ">
      <Form onSubmit={handleSubmit} className="tea-form">
        <Form.Group className="name-group">
          <Form.Label>Название</Form.Label>
          <Form.Control
            type="text"
            placeholder="Название"
            name="name"
            onChange={handleChange}
            value={tea.name}
          />
        </Form.Group>
        <Form.Group className="score-group">
          <Form.Label>Цена</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="price"
            value={tea.price}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Описание</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={handleChange}
            name="description"
            value={tea.description}
          />
        </Form.Group>
        <Button type="submit" className="submit" onClick={handleSubmit}>
          Добавить
        </Button>
      </Form>
    </div>
  );
};

export default TeaForm;
