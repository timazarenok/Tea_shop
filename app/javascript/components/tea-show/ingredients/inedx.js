import React from "react";
import { ListGroup } from "react-bootstrap";
import IngredientItem from "./ingredient-item";

const Ingredients = ({ ingredients }) => (
  <ListGroup>
    {ingredients.map((el) => (
      <IngredientItem ingredient={el.attributes.name} />
    ))}
  </ListGroup>
);

export default Ingredients;
