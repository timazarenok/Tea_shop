import React, { useState, useEffect } from "react";
import axios from "axios";
import foto from "../teas/foto.jpg";
import { Card, Button } from "react-bootstrap";

import "./tea-show.css";
import Ingredients from "./ingredients/inedx";
import ReviewForm from "./review-form";
import Reviews from "./reviews";

const Tea = (props) => {
  const [tea, setTea] = useState({});
  const [review, setReview] = useState({
    name: "",
    description: "",
    score: 0,
  });
  const [ingredients, setIngredients] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/teas/${props.match.params.id}`)
      .then((response) => {
        setTea(response.data);
        setReviews(response.data.included.filter((el) => el.type === "review"));
        setIngredients(
          response.data.included.filter((el) => el.type === "ingredient")
        );
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const csrfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    const tea_id = tea.data.id;
    axios
      .post("/api/reviews", { review, tea_id })
      .then((response) => {
        console.log(response.data)
        setReviews([...reviews, response.data.data])
        setReview({ name: "", description: "", score: 0 });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {loaded && (
        <>
          <div className="card card-show mb-3">
            <div className="row g-0">
              <div className="col-md-6">
                <Card.Img className="card-show-img" src={foto} />
              </div>
              <div className="col-md-6">
                <Card.Body>
                  <Card.Title className="card-show-title">
                    {tea.data.attributes.name}
                  </Card.Title>
                  <Card.Text className="card-show-description">
                    {tea.data.attributes.description}
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-md-6">
                <Card.Title className="ingredient-title">
                  Ingredients
                </Card.Title>
                <Ingredients ingredients={ingredients} />
              </div>
              <div className="col-md-6">
                <div className="buy-block">
                  <Card.Title className="card-show-price">
                    {`Оценка: ${tea.data.attributes.avg_score}`}
                  </Card.Title>
                  <Card.Title className="card-show-price">
                    {`Количество отзывов: ${reviews.length}`}
                  </Card.Title>
                  <Button className="buy">Купить</Button>
                  <Card.Text className="price">
                    {tea.data.attributes.price} BYN
                  </Card.Text>
                </div>
              </div>
            </div>
          </div>
          <ReviewForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            review={review}
          />
          <Reviews reviews={reviews} />
        </>
      )}
    </>
  );
};

export default Tea;