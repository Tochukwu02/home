import React from "react";
import "./Card.css";

const Card = ({ image, text }) => {
  return (
    <div className="cards__container">
      <div className="card">
        <img src={image} alt="Card Image" />
        <div className="card__text">
          <h5>{text}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;