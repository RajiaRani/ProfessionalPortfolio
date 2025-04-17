import React from "react";
import "./Card.css"; // Import the CSS file

const Card = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={link} className="card-link">
          Read more →
        </a>
      </div>
    </div>
  );
};

export default Card;
