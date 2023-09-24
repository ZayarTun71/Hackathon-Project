import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, price, image }) => {
  return (
    <div className="product-bloc">
      <div className="product-bloc__inner">
        <div className="img-box">
          <img src={image} alt="Product Image" />
        </div>
        <div className="txt-box">
          <div className="txt-box__inner">
            <p className="product-title">{name}</p>
            <dl>
              <dd>{price}MMK</dd>
            </dl>
            <div className="c-btn c-btn--cart">
              <Link to={`/main/product-detail?id=${id}`} className="card-link">
                Add To Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
