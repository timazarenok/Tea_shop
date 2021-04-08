import React from "react";
import { Form, Button } from "react-bootstrap";

import "./review-form.css";

const ReviewForm = ({handleChange, handleSubmit, review}) => {
  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Form.Group className="name-group">
        <Form.Label>Имя</Form.Label>
        <Form.Control type="text" placeholder="Имя" name="name" onChange={handleChange} value={review.name}/>
      </Form.Group>
      <Form.Group className="score-group">
        <Form.Label>Оценка</Form.Label>
        <Form.Control as="select" onChange={handleChange} name="score" value={review.score}>
          {[1, 2, 3, 4, 5].map((el) => (
            <option id={el}>{el}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Отзыв</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={handleChange} name="description" value={review.description}/>
      </Form.Group>
      <Button type="submit" className="submit" onClick={handleSubmit}>
        Отправить
      </Button>
    </Form>
  );
};

export default ReviewForm;
