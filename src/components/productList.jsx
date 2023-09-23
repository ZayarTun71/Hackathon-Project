import React from "react";

export const ProductList = () => {
  return (
    <div className="product-bloc">
      <div className="product-bloc__inner">
        <div className="img-box">
          <img src="../img/product/product2.png" alt="Product Image" />
        </div>
        <div className="txt-box">
          <div className="txt-box__inner">
            <p className="product-title">Product Name</p>
            <dl>
              <dd>$ 300</dd>
            </dl>
            <div className="c-btn c-btn--cart">
              <a href="/items-detail" className="card-link">
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
