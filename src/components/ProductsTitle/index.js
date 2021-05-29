import React from "react";
import "./style.css";

const ProductsTitle = ({ productsCount, onToggleSoldItems, showSoldItems }) => {
  return (
    <div className="products-title">
      <span>{productsCount} Results</span>
      <button onClick={onToggleSoldItems}>
        {showSoldItems ? "Hide Sold Items" : "Show Sold Items"}
      </button>
    </div>
  );
};
export default ProductsTitle;
