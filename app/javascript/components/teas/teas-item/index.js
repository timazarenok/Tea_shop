import React from "react";
import { Card, Button } from "react-bootstrap";
import foto from "../foto.jpg";
import { Link } from "react-router-dom";

import "./teas-item.css";

const TeasItem = ({ id, attributes, handleDelete }) => (
  <li key={id}>
    <Card>
      <Card.Img src={foto} />
      <Card.Body>
        <Card.Title>{attributes.name}</Card.Title>
        <Card.Text>{attributes.description}</Card.Text>
        <Card.Text className="price">{attributes.price} BYN</Card.Text>
      </Card.Body>
      <Button className="more-btn">
        <Link to={`/teas/${id}`}>Подробнее</Link>
      </Button>
      <Button className="delete-btn" onClick={() => handleDelete(id)}>Удалить</Button>
    </Card>
  </li>
);

export default TeasItem;
