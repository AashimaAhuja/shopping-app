import React from "react";
import "./style.css";

const Card = ({ product, onProductLike }) => {
  const { img, name, brand, price, size, sold, id, isLiked } = product;

  const toggleLikeBtn = () => {
    if (!sold) {
      onProductLike(id);
    }
  };

  return (
    <div className={`product-card ${sold ? "sold" : ""}`}>
      <div className="img-container">
        <img src={img} />
        <label>SOLD</label>
        <button onClick={toggleLikeBtn}>{isLiked ? "Unlike" : "Like"}</button>
      </div>

      <dl className="product-info">
        <dt>{name}</dt>
        <dt>{brand}</dt>
        <dt>{size}</dt>
        <dt>{price}</dt>
      </dl>
    </div>
  );
};

export default Card;
