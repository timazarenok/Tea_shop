import React from "react";
import "./review.css";

const Review = ({ id, name, description, score }) => (
  <li key={id} className="review-li">
    <h3 className="review-name">{name}</h3>
    <h5 className="review-score">Оценка: {score}</h5>
    <p className="review-description">{description}</p>
  </li>
);

export default Review;
