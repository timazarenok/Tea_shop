import React from "react";
import { ListGroup } from "react-bootstrap";

const IngredientItem = ({ ingredient }) => (
  <ListGroup.Item>{ingredient}</ListGroup.Item>
);

export default IngredientItem;
