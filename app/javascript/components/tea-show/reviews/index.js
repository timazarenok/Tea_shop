import React from "react";
import Review from "./review";
import "./reviews.css";

const Reviews = ({ reviews }) => (
  <>
    <h2 className="review-title">Отзывы</h2>
    <ul className="reviews">
      {reviews.map((el) => (
        <Review id={el.id} {...el.attributes} />
      ))}
    </ul>
  </>
);

export default Reviews;
