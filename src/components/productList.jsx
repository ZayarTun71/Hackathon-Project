import React from "react";

export const ProductList = () => {
  return (
    <div className="product-bloc">
      <div className="product-bloc__inner">
        <div className="img-box">
          <img src="/img/product/product.png" alt="Product Image" />
        </div>
        <div className="txt-box">
          <div className="txt-box__inner">
            <p className="product-title">Lorem Ipsum Lorem Ipsum</p>
            <dl>
              <dt>Price</dt>
              <dd>$ 300</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
